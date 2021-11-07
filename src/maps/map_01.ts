export default {
    meta: {
        author: '',
        goals: {
            time: 40e3,
            respawnCount: 0,
        },
    },
    elements: [
        {
            type: 'vehicle',
            position_x: 10,
            position_y: 1,
            position_z: 10,
            rotation_y: 90,
        },
        {
            shape: 'box',
            width: 30,
            height: 0.2,
            length: 34,
            position_x: 6,
            position_z: 2,
        },
        {
            shape: 'triangularPrism',
            position_x: -3,
            position_y: 1.1,
            position_z: -3,
            rotation_x: 0,
            rotation_y: 0,
            rotation_z: 0,
            length: 4,
            width: 4,
            offset: -2,
        },
        {
            shape: 'triangularPrism',
            position_x: -3,
            position_y: 4.1,
            position_z: -7,
            rotation_x: 0,
            rotation_y: 0,
            rotation_z: 0,
            length: 4,
            width: 4,
            offset: -2,
            height: 4,
        },
        {
            shape: 'box',
            width: 4,
            height: 0.2,
            length: 6,
            position_x: -3,
            position_y: 10,
            position_z: -18,
        },
        {
            shape: 'box',
            width: 4,
            height: 0.2,
            length: 30,
            position_x: -3,
            position_y: 5,
            position_z: -25,
            rotation_x: 15,
        },
        {
            shape: 'box',
            width: 4,
            height: 5.4,
            length: 2,
            position_x: -7,
            position_y: 2.6,
            position_z: -9,
        },
        {
            shape: 'box',
            width: 4,
            height: 11.8,
            length: 2,
            position_x: 1,
            position_y: 5.9,
            position_z: -9,
        },
        {
            shape: 'box',
            mass: 40,
            position_x: 11,
            position_y: 3.1,
            position_z: -6,
            width: 4,
            height: 4,
            length: 4,
        },
        {
            shape: 'cylinder',
            sides: 4,
            radiusBottom: 13,
            height: 1,
            position_x: 9,
            position_y: 0.6,
            position_z: -4,
            rotation_y: 45,
            radiusTop: 10,
        },
        {
            shape: 'cylinder',
            radiusTop: 2,
            radiusBottom: 2,
            height: 4,
            mass: 20,
            sides: 20,
            position_x: -3,
            position_y: 15,
            position_z: -27,
            rotation_z: 90,
        },
        {
            shape: 'box',
            width: 0.2,
            height: 1,
            length: 10,
            position_x: -5.1,
            position_y: 11.3,
            position_z: -33,
            lowFriction: true,
        },
        {
            shape: 'box',
            width: 0.2,
            height: 1,
            length: 14,
            position_x: -0.9,
            position_y: 11.3,
            position_z: -31,
            lowFriction: true,
        },
        {
            shape: 'box',
            width: 0.2,
            height: 1,
            length: 30,
            position_x: -0.9,
            position_y: 5.5,
            position_z: -25,
            rotation_x: 15,
            lowFriction: true,
        },
        {
            shape: 'box',
            width: 0.2,
            height: 1,
            length: 30,
            position_x: -5.1,
            position_y: 5.5,
            position_z: -25,
            rotation_x: 15,
            lowFriction: true,
        },
        {
            shape: 'box',
            width: 8.2,
            height: 0.2,
            length: 4,
            position_x: -8.92,
            position_y: 9.65,
            position_z: -26,
            rotation_z: 14.8,
        },
        {
            shape: 'box',
            width: 4,
            height: 0.2,
            length: 2.4,
            position_x: -7,
            position_y: 5.2,
            position_z: -11.2,
        },
        {
            shape: 'triangularPrism',
            position_x: -7,
            position_y: 8.6,
            position_z: -9,
            rotation_x: -90,
            rotation_y: -90,
            rotation_z: 0,
            length: 4,
            width: 6.6,
            offset: -2,
            height: 2,
        },
        {
            shape: 'box',
            width: 4,
            height: 0.2,
            length: 4.4,
            position_x: -10.95,
            position_y: 5.55,
            position_z: -10.2,
            rotation_z: -10,
        },
        {
            shape: 'box',
            width: 4,
            height: 0.2,
            length: 4,
            position_x: -14.9,
            position_y: 5.9,
            position_z: -10,
        },
        {
            shape: 'box',
            width: 4,
            height: 0.2,
            length: 12.4,
            position_x: -14.9,
            position_y: 7.25,
            position_z: -17.98,
            rotation_x: 12.55,
        },
        {
            shape: 'box',
            width: 4.1,
            height: 0.2,
            length: 4,
            position_x: -14.85,
            position_y: 8.6,
            position_z: -26,
        },
        {
            shape: 'box',
            width: 4,
            height: 0.2,
            length: 2.4,
            position_x: 1,
            position_y: 5.2,
            position_z: -11.2,
        },
        {
            shape: 'box',
            width: 4,
            height: 0.2,
            length: 3.3,
            position_x: -3,
            position_y: 10.35,
            position_z: -22.33,
            rotation_x: 12.5,
        },
        {
            shape: 'box',
            width: 4,
            height: 0.2,
            length: 5,
            position_x: -3,
            position_y: 10.7,
            position_z: -26.4,
        },
        {
            shape: 'box',
            width: 0.2,
            height: 2,
            length: 14,
            position_x: -0.9,
            position_y: 10.8,
            position_z: -17,
        },
        {
            shape: 'box',
            width: 4,
            height: 0.2,
            length: 4.4,
            position_x: 5,
            position_y: 5.2,
            position_z: -10.2,
        },
        {
            shape: 'box',
            width: 4,
            height: 4,
            length: 3.8,
            position_x: 5,
            position_y: 3.1,
            position_z: -1.9,
        },
        {
            shape: 'box',
            width: 4,
            height: 0.2,
            length: 0.2,
            position_x: 9,
            position_z: -3.9,
            position_y: 1.2,
            lowFriction: true,
        },
        {
            shape: 'box',
            width: 4,
            height: 4,
            length: 0.2,
            position_x: 5,
            position_z: -3.9,
            position_y: 3.1,
            lowFriction: true,
        },
        {
            shape: 'box',
            width: 8,
            height: 0.2,
            length: 0.2,
            position_x: 7,
            position_z: -8.1,
            position_y: 1.2,
            lowFriction: true,
        },
        {
            shape: 'box',
            width: 0.2,
            height: 0.2,
            length: 4,
            position_x: 2.9,
            position_z: -6,
            position_y: 1.2,
        },
        {
            type: 'trigger',
            shape: 'sphere',
            event: 'setCameraPosition',
            dataSet: '34,11,4.5',
            radius: 7,
            position_x: 14,
            position_y: 1,
        },
        {
            type: 'trigger',
            shape: 'sphere',
            event: 'setCameraPosition',
            dataSet: '-3,9,29',
            radius: 7,
            position_x: -2,
            position_y: 1,
            position_z: 8,
        },
        {
            type: 'trigger',
            shape: 'sphere',
            event: 'setCameraPosition',
            dataSet: '-30,16,-3',
            radius: 3,
            position_x: -3,
            position_y: 12,
            position_z: -21,
        },
        {
            type: 'trigger',
            shape: 'sphere',
            event: 'setCameraPosition',
            dataSet: '-30,22,-29',
            radius: 3,
            position_x: -15,
            position_y: 9,
            position_z: -22,
            rotation_x: 0,
            rotation_y: 0,
            rotation_z: 0,
        },
        {
            type: 'trigger',
            shape: 'sphere',
            event: 'setCameraPosition',
            dataSet: '-27,14,-13',
            radius: 2,
            position_x: -9,
            position_y: 6,
            position_z: -10,
        },
        {
            type: 'trigger',
            shape: 'sphere',
            event: 'setCameraPosition',
            dataSet: '9.5,10,-25',
            radius: 2,
            position_x: 1,
            position_y: 6,
            position_z: -11,
        },
        {
            type: 'trigger',
            shape: 'sphere',
            event: 'setCameraPosition',
            dataSet: '25,11,25',
            radius: 3,
            position_x: 10,
            position_y: 1,
            position_z: 10,
        },
        {
            type: 'trigger',
            shape: 'sphere',
            event: 'checkpoint',
            dataSet: '-30,22,-29',
            radius: 1,
            position_x: -15,
            position_y: 9.7,
            position_z: -26.19,
            rotation_x: 0,
            rotation_y: 180,
            rotation_z: 0,
        },
        {
            type: 'trigger',
            shape: 'sphere',
            event: 'finish',
            dataSet: 'checkpointCount:1',
            radius: 1,
            position_x: 5,
            position_y: 6,
            position_z: -2,
        },
    ],
};
