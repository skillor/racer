import {
    Body,
    Box,
    ContactEquation,
    ConvexPolyhedron,
    Cylinder,
    SHAPE_TYPES,
    Shape,
    Sphere,
    Vec3,
    World,
} from 'cannon-es';
import {
    BoxBufferGeometry,
    BufferGeometry,
    CylinderBufferGeometry,
    Geometry,
    Mesh,
    MeshLambertMaterial,
    Scene,
    SphereBufferGeometry,
    Vector3,
} from 'three';
import { ConvexBufferGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';

import { EventListener } from './common/EventListener';
import cfg from './config';
import { renderEditor } from './editor/editor';

export enum MapEvent {
    setCameraPosition = 'setCameraPosition',
    finish = 'finish',
}

enum MapElementType {
    box = 'box',
    cylinder = 'cylinder',
    ramp = 'ramp',
    trigger = 'trigger',
}

interface CommonMapElementProps {
    type?: MapElementType;
    position_x?: number;
    position_y?: number;
    position_z?: number;
    rotation_x?: number;
    rotation_y?: number;
    rotation_z?: number;
    mass?: number;
}

interface BoxShapeProps {
    width?: number;
    height?: number;
    length?: number;
}

interface BoxShapePropsSimple {
    size?: number;
}

interface CylinderShapeProps {
    radiusTop?: number;
    radiusBottom?: number;
    height?: number;
    sides?: number;
}

interface EventTriggerProps {
    event: MapEvent|string;
    size?: number;
    position_x?: number;
    position_y?: number;
    position_z?: number;
    dataSet?: string;
}

interface CollisionEvent {
    type: typeof Body.COLLIDE_EVENT_NAME;
    body: Body | null;
    contact: ContactEquation | null;
    target: Body;
}

type EventTriggerListener = (event: {
    target: Body;
    relatedTarget: Body | null;
    dataSet?: string;
}) => void;

type MapElementId = string;
type BoxProps = CommonMapElementProps & BoxShapeProps;
type BoxPropsSimple = CommonMapElementProps & BoxShapePropsSimple;
type CylinderProps = CommonMapElementProps & CylinderShapeProps;
export type MapElementProps = BoxProps & CylinderProps & Partial<EventTriggerProps>;
export type PlatformComponentStore = Map<string, Mesh|Body|Function|MapElementProps>;

const shapeTypeMap = {
    Box: MapElementType.box,
    Cylinder: MapElementType.cylinder,
    ConvexPolyhedron: MapElementType.ramp,
};
const defaultPlatformColor = 0xDDDDDD;
const dynamicPlatformColor = 0x95C0E5;

let gId = 0;

export class MapBuilder {
    scene: Scene;
    world: World;
    selectedMapElementId: MapElementId;
    perviousSelectedMapElementId: MapElementId;
    private mapElementComponentStore: PlatformComponentStore = new Map();
    private mapElementIdStore = new Set<string>();
    eventTriggerListeners = new EventListener<MapEvent>();
    editMode = false;

    constructor(scene: Scene, world: World) {
        this.scene = scene;
        this.world = world;

        window.importMap = this.importMap;
        window.exportMap = this.exportMap;
    }

    get mapElementIdList() {
        return Array.from(this.mapElementIdStore);
    }

    getBodyFromStore(id: MapElementId) {
        return this.mapElementComponentStore.get(`${id}_body`) as Body;
    }

    getMeshFromStore(id: MapElementId) {
        return this.mapElementComponentStore.get(`${id}_mesh`) as Mesh;
    }

    getPropsFromStore(id: MapElementId) {
        return this.mapElementComponentStore.get(`${id}_props`) as MapElementProps;
    }

    private addToWorld(visualShape: Geometry | BufferGeometry, physicalShape: Shape, props: MapElementProps) {
        const mapElementType: MapElementType = props.type || shapeTypeMap[physicalShape.constructor.name];
        const mapElementId = `${mapElementType}_${gId++}`;
        const mapElementProps = {
            ...props,
            type: mapElementType,
        };
        const {
            position_x = 0,
            position_y = 0,
            position_z = 0,
            rotation_x = 0,
            rotation_y = 0,
            rotation_z = 0,
        } = mapElementProps;

        const color = mapElementProps.mass ? dynamicPlatformColor : defaultPlatformColor;
        const mesh = new Mesh(visualShape, new MeshLambertMaterial({ color }));
        const body = new Body({ shape: physicalShape, mass: mapElementProps.mass || 0 });
        const updateVisuals = () => {
            mesh.position.copy(body.position as unknown as Vector3);
            mesh.quaternion.copy(body.quaternion as unknown as THREE.Quaternion);
        };

        body.position.set(position_x, position_y, position_z);
        mesh.position.copy(body.position as unknown as Vector3);

        if (rotation_x || rotation_y || rotation_z) {
            body.quaternion.setFromEuler(
                rotation_x / 180 * Math.PI,
                rotation_y / 180 * Math.PI,
                rotation_z / 180 * Math.PI,
            );
            mesh.quaternion.copy(body.quaternion as unknown as THREE.Quaternion);
        }

        if (cfg.renderShadows) {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        }

        this.world.addBody(body);
        this.scene.add(mesh);

        if (mapElementProps.mass) {
            this.world.addEventListener('postStep', updateVisuals);
        }

        body.aabbNeedsUpdate = true;

        this.mapElementIdStore.add(mapElementId);
        this.mapElementComponentStore.set(`${mapElementId}_mesh`, mesh);
        this.mapElementComponentStore.set(`${mapElementId}_body`, body);
        this.mapElementComponentStore.set(`${mapElementId}_updateMethod`, updateVisuals);
        this.mapElementComponentStore.set(`${mapElementId}_props`, mapElementProps);

        if (this.editMode) {
            this.selectPlatform(mapElementId);
        }

        return mapElementId;
    }

    clone(id: MapElementId) {
        const props = { ...this.getPropsFromStore(id) };

        switch (props.type) {
            case MapElementType.box:
                return this.buildBox(props);
            case MapElementType.cylinder:
                return this.buildCylinder(props);
            case MapElementType.ramp:
                return this.buildRamp(props);
            case MapElementType.trigger:
                return this.placeEventTrigger(props as EventTriggerProps);
            default:
                return '';
        }
    }

    destroy = (id: MapElementId) => {
        const [type] = id.split('_');
        const body = this.getBodyFromStore(id);
        const mesh = this.getMeshFromStore(id);
        mesh.geometry.dispose();
        (mesh.material as MeshLambertMaterial).dispose();

        this.scene.remove(mesh);
        this.world.removeBody(body);
        this.world.removeEventListener('postStep', this.mapElementComponentStore.get(`${id}_updateMethod`) as Function);

        if (type === 'trigger') {
            const listener = this.mapElementComponentStore.get(`${id}_listener`) as Function;
            body.removeEventListener(Body.COLLIDE_EVENT_NAME, listener);
            this.mapElementComponentStore.delete(`${id}_listener`);
        }

        this.mapElementIdStore.delete(id);
        this.mapElementComponentStore.delete(`${id}_mesh`);
        this.mapElementComponentStore.delete(`${id}_body`);
        this.mapElementComponentStore.delete(`${id}_updateMethod`);
        this.mapElementComponentStore.delete(`${id}_props`);

        if (this.selectedMapElementId === id) {
            this.selectedMapElementId = undefined;
        }
        if (this.perviousSelectedMapElementId === id) {
            this.perviousSelectedMapElementId = undefined;
        }
    }

    selectPlatform = (id: MapElementId) => {
        if (this.selectedMapElementId) {
            this.perviousSelectedMapElementId = this.selectedMapElementId;
        }

        this.selectedMapElementId = id;

        this.highlightSelectedPlatform();
    }

    private highlightSelectedPlatform() {
        if (this.perviousSelectedMapElementId) {
            const previousSelected = this.getMeshFromStore(this.perviousSelectedMapElementId);
            const material = previousSelected.material as MeshLambertMaterial;
            material.color.setHex(0xFFFFFF);
            // material.transparent = true;
            // material.opacity = 0.7;
        }
        const selected = this.getMeshFromStore(this.selectedMapElementId);
        (selected.material as MeshLambertMaterial).color.setHex(0xFFC266);
    }

    toggleEditMode() {
        this.editMode = !this.editMode;

        if (this.editMode) {
            renderEditor(this);
            this.mapElementIdList.forEach((id) => {
                this.setEventTriggerVisibility(id, true);
            });
            document.getElementById('editorPanel').style.display = 'block';
        } else {
            this.mapElementIdList.forEach((id) => {
                this.setEventTriggerVisibility(id, false);
            });
            document.getElementById('editorPanel').style.display = 'none';
        }
    }

    buildBox(props: BoxPropsSimple): string;
    buildBox(props: BoxProps): string;
    buildBox(props: BoxPropsSimple & BoxProps) {
        const { size = 1, width = size, height = size, length = size } = props;

        return this.addToWorld(
            new BoxBufferGeometry(width * 2, height * 2, length * 2),
            new Box(new Vec3(width, height, length)),
            props,
        );
    }

    buildCylinder(props: CylinderProps) {
        const { radiusTop = 1, radiusBottom = 1, height = 1, sides = 6 } = props;
        const cylinderSides = Math.max(3, sides);

        return this.addToWorld(
            new CylinderBufferGeometry(radiusTop, radiusBottom, height * 2, cylinderSides),
            new Cylinder(radiusTop, radiusBottom, height * 2, cylinderSides),
            props,
        );
    }

    buildRamp(props: BoxProps) {
        const shape = getRampShape(props.width, props.height, props.length);

        return this.addToWorld(
            new ConvexBufferGeometry(shape.vertices.map(({ x, y, z }) => new Vector3(x, y, z))),
            shape,
            props,
        );
    }

    placeEventTrigger(props: EventTriggerProps) {
        const { event, dataSet, size = 1 } = props;

        const triggerId = this.addToWorld(
            new SphereBufferGeometry(size),
            new Sphere(size),
            { type: MapElementType.trigger, ...props },
        );
        const triggerElement = this.getBodyFromStore(triggerId);
        const mesh = this.getMeshFromStore(triggerId);
        const material = mesh.material as MeshLambertMaterial;
        const listener = ({ target, body }: CollisionEvent) => {
            this.eventTriggerListeners.dispatch(event as MapEvent, { target, dataSet, relatedTarget: body });
        };

        this.mapElementComponentStore.set(`${triggerId}_listener`, listener);

        triggerElement.collisionResponse = false;
        triggerElement.addEventListener(Body.COLLIDE_EVENT_NAME, listener);

        material.color.setHex(0xCD72D3);
        material.transparent = true;
        material.opacity = 0.3;

        if (!this.editMode) {
            mesh.visible = false;
        }

        return triggerId;
    }

    setEventTriggerVisibility(id: MapElementId, visible = false) {
        if (id.startsWith('trigger')) {
            const mesh = this.getMeshFromStore(id);
            mesh.visible = visible;
        }
    }

    resetDynamicPlatforms() {
        this.mapElementIdList.forEach(this.resetPlatformIfDynamic);
    }

    resetPlatformIfDynamic = (id: MapElementId) => {
        const {
            mass,
            position_x = 0,
            position_y = 0,
            position_z = 0,
            rotation_x = 0,
            rotation_y = 0,
            rotation_z = 0,
        } = this.getPropsFromStore(id);

        if (!mass) {
            return;
        }
        const body = this.getBodyFromStore(id);
        body.velocity.copy(Vec3.ZERO);
        body.angularVelocity.copy(Vec3.ZERO);

        body.position.set(position_x, position_y, position_z);
        body.quaternion.setFromEuler(
            rotation_x / 180 * Math.PI,
            rotation_y / 180 * Math.PI,
            rotation_z / 180 * Math.PI,
        );
    }

    translate(id: MapElementId, props: CommonMapElementProps) {
        const body = this.getBodyFromStore(id);
        const mapElementProps = this.getPropsFromStore(id);
        const updateVisuals = this.mapElementComponentStore.get(`${id}_updateMethod`) as Function;

        Object.assign(mapElementProps, { ...props });

        const {
            position_x = 0,
            position_y = 0,
            position_z = 0,
            rotation_x = 0,
            rotation_y = 0,
            rotation_z = 0,
        } = mapElementProps;

        body.position.set(
            position_x,
            position_y,
            position_z,
        );
        body.quaternion.setFromEuler(
            rotation_x / 180 * Math.PI,
            rotation_y / 180 * Math.PI,
            rotation_z / 180 * Math.PI,
        );

        updateVisuals();
        body.aabbNeedsUpdate = true;
    }

    transform(id: MapElementId, props: BoxProps): void;
    transform(id: MapElementId, props: CylinderProps): void;
    transform(id: MapElementId, {
        size = 1, width = size, height = size, length = size, radiusBottom = 1, radiusTop = 1, sides = 6,
    }: BoxProps & BoxPropsSimple & CylinderProps) {
        const mesh = this.getMeshFromStore(id);
        const body = this.getBodyFromStore(id);
        const shape = body.shapes[0];
        const cylinderSides = Math.max(3, sides);
        // https://github.com/schteppe/cannon.js/issues/329
        const shapeType = shape.type === SHAPE_TYPES.CONVEXPOLYHEDRON && shape.constructor.name === 'Cylinder'
            ? SHAPE_TYPES.CYLINDER
            : shape.type;
        let transformedShape: Shape;
        let transformedGeometry: BufferGeometry;

        switch (shapeType) {
            case SHAPE_TYPES.BOX:
                (shape as Box).halfExtents.set(width, height, length);
                (shape as Box).updateConvexPolyhedronRepresentation();
                transformedShape = shape;
                transformedGeometry = new BoxBufferGeometry(width * 2, height * 2, length * 2);
                Object.assign(this.getPropsFromStore(id), { width, height, length });
                break;
            case SHAPE_TYPES.CYLINDER:
                transformedShape = new Cylinder(radiusTop, radiusBottom, height * 2, cylinderSides);
                transformedGeometry = new CylinderBufferGeometry(radiusTop, radiusBottom, height * 2, cylinderSides);
                Object.assign(this.getPropsFromStore(id), { radiusTop, radiusBottom, height, sides: cylinderSides });
                break;
            case SHAPE_TYPES.CONVEXPOLYHEDRON:
                transformedShape = getRampShape(width, height, length);
                transformedGeometry = new ConvexBufferGeometry(
                    (transformedShape as ConvexPolyhedron).vertices.map(({ x, y, z }) => new Vector3(x, y, z)),
                );
                Object.assign(this.getPropsFromStore(id), { width, height, length });
                break;
            case SHAPE_TYPES.SPHERE:
                transformedShape = new Sphere(size);
                transformedGeometry = new SphereBufferGeometry(size);
                Object.assign(this.getPropsFromStore(id), { size });
                break;
            default:
        }

        body.shapes.length = 0;
        body.addShape(transformedShape);

        mesh.geometry.dispose();
        mesh.geometry = transformedGeometry;
    }

    importMap = (mapData: Record<string, MapElementProps>) => {
        this.mapElementIdStore.forEach(this.destroy);

        Object.entries(mapData).forEach(([id, props]) => {
            const [type] = id.split('_');
            switch (type) {
                case MapElementType.box:
                    this.buildBox(props);
                    break;
                case MapElementType.cylinder:
                    this.buildCylinder(props);
                    break;
                case MapElementType.ramp:
                    this.buildRamp(props);
                    break;
                case MapElementType.trigger:
                    this.placeEventTrigger(props as EventTriggerProps);
                    break;
                default:
            }
        });
    }

    exportMap = () => {
        const exportData = Array.from(this.mapElementComponentStore.entries())
            .filter(([key]) => key.endsWith('props'))
            .reduce((data, [key, props]) => {
                const id = key.replace('_props', '');
                const { type, ...mapElementProps } = props as MapElementProps;
                data[id] = mapElementProps;

                return data;
            }, {} as Record<string, Omit<MapElementProps, 'type'>>);

        console.log(JSON.stringify(exportData));
    }
}

function getRampShape(width = 1, height = 1, length = 1) {
    // List of vertices that can be assigned to a face
    const vertices = [
        new Vec3(0, 0, 0),
        new Vec3(width * 2, 0, 0),
        new Vec3(width * 2, height * 2, 0),
        new Vec3(0, height * 2, 0),
        new Vec3(0, 0, length * 2),
        new Vec3(width * 2, 0, length * 2),
    ];
    // List of vertex index groups that are assigned to individual faces
    // ! CCW order is important for correct normals !
    const faces = [
        [0, 3, 2, 1],
        [2, 3, 4, 5],
        [0, 1, 5, 4],
        [5, 1, 2],
        [4, 3, 0],
    ];

    return new ConvexPolyhedron({ vertices, faces });
}
