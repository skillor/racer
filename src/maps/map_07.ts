export default [
    {
        type: 'vehicle',
        position_y: 1.4,
    },
    {
        shape: 'box',
        width: 8,
        length: 16,
        height: 0.2,
        position_y: -0.6,
    },
    {
        shape: 'cylinder',
        sides: 4,
        radiusTop: 3,
        radiusBottom: 5.7,
        height: 1,
        rotation_y: 45,
    },
    {
        shape: 'box',
        width: 8,
        length: 16,
        height: 0.2,
        position_z: 20,
        position_x: 0,
        position_y: 0,
        rotation_x: 0,
        rotation_y: 0,
        rotation_z: 0,
    },
    {
        shape: 'box',
        width: 8,
        length: 16,
        height: 0.2,
        position_z: -20,
    },
    {
        shape: 'box',
        width: 16,
        length: 10,
        height: 0.2,
        position_y: -0.6,
        position_x: -12,
        position_z: -3,
        rotation_x: 0,
        rotation_y: 0,
        rotation_z: 0,
    },
    {
        type: 'compound',
        shape: 'loop',
        position_x: -20.89,
        position_y: 9.9,
        position_z: -3,
        rotation_y: 90,
        segmentPositionOffset: 0,
        segmentCount: 7,
        segmentLength: 2.64,
        segmentWidth: 10,
        segmentHeight: 0.2,
        radius: 10.5,
    },
    {
        type: 'compound',
        shape: 'loop',
        position_x: -20.89,
        position_y: 10.5,
        position_z: 20,
        rotation_y: 90,
        segmentPositionOffset: 0,
        segmentCount: 7,
        segmentLength: 2.64,
        segmentWidth: 16,
        segmentHeight: 0.2,
        radius: 10.5,
    },
    {
        shape: 'box',
        width: 16,
        length: 16,
        height: 0.2,
        position_z: 20,
        position_x: -12,
    },
    {
        type: 'trigger',
        shape: 'sphere',
        event: 'finish',
        dataSet: '',
        radius: 1,
        position_y: 1,
        position_z: -25,
    },
    {
        type: 'trigger',
        shape: 'box',
        position_x: -5,
        position_y: 1,
        position_z: -3,
        width: 1,
        length: 8,
        dataSet: '-8,27,-33',
    },
    {
        type: 'trigger',
        shape: 'box',
        position_x: -10,
        position_y: 1,
        position_z: 20,
        width: 1,
        length: 14,
        dataSet: '0,10,40',
    },
    {
        type: 'trigger',
        shape: 'box',
        width: 1,
        height: 1,
        length: 1,
        position_y: 0.5,
        event: 'setCameraMode',
        dataSet: 'dynamic,24,8,0',
    },
    {
        shape: 'box',
        position_x: -29,
        position_y: 9,
        position_z: 6,
        type: 'trigger',
        width: 5,
        height: 10,
        length: 1,
        dataSet: '-34,23,3',
    },
    {
        shape: 'box',
        position_y: 1,
        position_z: 10,
        type: 'trigger',
        event: 'setCameraMode',
        dataSet: 'chase',
        width: 5,
        height: 2,
        length: 1,
    },
];
