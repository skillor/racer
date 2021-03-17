export default [
    {
        type: 'vehicle',
        position_y: 11.4,
        position_x: 1.5,
    },
    {
        shape: 'box',
        width: 10,
        length: 6,
        height: 1,
        position_y: 9.95,
        position_z: 0.3,
    },
    {
        shape: 'box',
        position_y: 2.51,
        position_z: -15.44,
        rotation_x: -30,
        height: 1,
        width: 10,
        length: 30,
    },
    {
        shape: 'box',
        position_x: -8,
        position_y: -25,
        position_z: -65,
        rotation_x: -30,
        height: 1,
        width: 10,
        length: 60,
    },
    {
        shape: 'box',
        position_y: -56,
        position_z: -130,
        rotation_x: -20,
        height: 1,
        width: 10,
        length: 60,
    },
    {
        shape: 'box',
        width: 10,
        height: 1,
        position_y: -5.18,
        position_z: -29.26,
        rotation_x: -15,
    },
    {
        shape: 'box',
        width: 10,
        height: 1,
        position_x: -8,
        position_y: -40.17,
        position_z: -91.78,
        rotation_x: -15,
    },
    {
        shape: 'box',
        position_y: -66.31,
        position_z: -159,
        rotation_x: -5,
        width: 10,
        height: 1,
    },
    {
        shape: 'box',
        position_x: 8,
        position_y: -76,
        position_z: -200,
        rotation_x: -10,
        height: 1,
        width: 10,
        length: 60,
    },
    {
        shape: 'box',
        position_y: -83,
        position_z: -271,
        height: 1,
        width: 10,
        length: 60,
    },
    {
        shape: 'box',
        position_x: 8,
        position_y: -81.08,
        position_z: -230.38,
        rotation_x: 5,
        width: 10,
        height: 1,
    },
    {
        type: 'trigger',
        shape: 'sphere',
        event: 'finish',
        dataSet: '',
        radius: 2,
        position_y: -81,
        position_z: -297,
    },
    {
        type: 'trigger',
        shape: 'box',
        event: 'setCameraMode',
        dataSet: 'dynamic,-5,24,19',
        position_y: 12,
    },
    {
        type: 'trigger',
        shape: 'box',
        event: 'setCameraMode',
        dataSet: 'chase',
        height: 2,
        width: 8,
        length: 1,
        position_y: 11,
        position_x: 0,
        position_z: -4,
    },
];
