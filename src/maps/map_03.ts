export default [
    {
        type: 'vehicle',
        position_y: 1,
        rotation_y: -1,
    },
    {
        shape: 'box',
        width: 3 * 2,
        height: 0.1 * 2,
        length: 20.01 * 2,
        position_z: -0.02,
        position_y: 0.07,
    },
    {
        type: 'trigger',
        shape: 'sphere',
        event: 'setCameraPosition',
        dataSet: '-6,10,26',
        radius: 3,
        position_y: 1,
    },
    {
        type: 'trigger',
        shape: 'sphere',
        event: 'finish',
        dataSet: '',
        radius: 1,
        position_x: -31.5,
        position_y: 17.5,
        position_z: -13.5,
    },
    {
        shape: 'slopeTransition',
        type: 'compound',
        segmentWidth: 6,
        position_y: 0,
        position_z: -20.6,
        position_x: -3,
        segmentCount: 43,
        segmentHeight: 0.22,
        segmentLength: 0.6,
        rotation_x: -6,
    },
    {
        shape: 'loop',
        type: 'compound',
        segmentCount: 23,
        segmentWidth: 12,
        segmentHeight: 0.2,
        radius: 10,
        segmentPositionOffset: -1.19,
        position_x: 11.85,
        position_z: -41.48,
        position_y: 0.5,
        rotation_y: -30,
        rotation_z: -90,
    },
    {
        shape: 'box',
        height: 6 * 2,
        length: 15 * 2,
        width: 0.1 * 2,
        position_y: 26.7,
        position_x: 22.01,
        position_z: -27,
    },
    {
        shape: 'loop',
        type: 'compound',
        segmentCount: 7,
        segmentWidth: 12,
        segmentHeight: 0.2,
        segmentLength: 2,
        segmentPositionOffset: 0,
        position_x: 13.95,
        position_z: -18,
        position_y: 20.4,
        rotation_y: -90,
    },
    {
        shape: 'box',
        height: 0.1 * 2,
        length: 6 * 2,
        width: 15 * 2,
        position_y: 12.4,
        position_x: -2,
        position_z: -18,
    },
    {
        shape: 'loop',
        type: 'compound',
        segmentCount: 8,
        segmentWidth: 8,
        segmentHeight: 0.2,
        radius: 10,
        segmentPositionOffset: -1,
        position_x: -19,
        position_y: 22.4,
        position_z: -16,
        rotation_y: 90,
    },
    {
        shape: 'loop',
        type: 'compound',
        segmentCount: 7,
        segmentWidth: 8,
        segmentHeight: 0.2,
        segmentPositionOffset: -1,
        radius: 8,
        position_x: -20.59,
        position_y: 24.16,
        position_z: -2,
        rotation_y: -90,
    },
    {
        shape: 'box',
        height: 0.1 * 2,
        length: 3 * 2,
        width: 6 * 2,
        position_y: 16.16,
        position_x: -28.6,
        position_z: -2,
    },
    {
        shape: 'box',
        height: 0.1 * 2,
        length: 6 * 2,
        width: 3 * 2,
        position_y: 16.16,
        position_x: -31.6,
        position_z: -11,
    },
    {
        type: 'trigger',
        shape: 'sphere',
        event: 'setCameraMode',
        dataSet: 'chase',
        radius: 3,
        position_y: 1,
        position_z: -11.4,
    },
    {
        shape: 'box',
        type: 'trigger',
        position_y: 15.5,
        position_z: -18,
        width: 1 * 2,
        length: 6 * 2,
        height: 3 * 2,
        event: 'setCameraMode',
        dataSet: 'hood',
    },
    {
        shape: 'box',
        type: 'trigger',
        position_y: 18.26,
        position_z: -2,
        width: 1 * 2,
        length: 3 * 2,
        height: 2 * 2,
        position_x: -26.8,
        event: 'setCameraMode',
        dataSet: 'cinematic,-16,21,-2',
    },
    {
        shape: 'box',
        height: 2 * 2,
        length: 1 * 2,
        width: 3 * 2,
        position_y: 18.26,
        position_x: -31.6,
        position_z: -6,
        type: 'trigger',
        dataSet: '-26,26,13',
    },
];
