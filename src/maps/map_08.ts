export default {
    meta: {
        author: '',
        goals: {
            time: 30e3,
            // time: 15e3,
            respawnCount: 0,
        },
    },
    elements: [
        {
            type: 'vehicle',
            position_y: 1,
            position_z: 16,
        },
        {
            shape: 'box',
            width: 6,
            length: 38,
            height: 0.2,
            position_y: -0.1,
            position_x: 0,
            position_z: 1,
            rotation_x: 0,
            rotation_y: 0,
            rotation_z: 0,
        },
        {
            type: 'animated',
            shape: 'box',
            width: 6,
            height: 4,
            length: 6,
            position_y: 2,
            position_z: 7,
            dataSet: '{ "movement": { "x": 10 }, "speed": 10, "triggerStart": false }',
        },
        {
            type: 'animated',
            shape: 'box',
            width: 6,
            height: 4,
            length: 6,
            position_y: 2,
            position_z: -9,
            dataSet: '{ "movement": { "x": 10 }, "speed": 10, "triggerStart": false }',
        },
        {
            shape: 'box',
            height: 0.2,
            width: 6,
            length: 10,
            position_x: 10,
            position_y: 3.9,
            position_z: -1,
        },
        {
            shape: 'box',
            height: 0.2,
            width: 6,
            length: 6,
            position_x: 10,
            position_y: 3.9,
            position_z: -15,
        },
        {
            shape: 'box',
            height: 0.2,
            width: 6,
            length: 10,
            position_x: 10,
            position_y: 3.033,
            position_z: -22.9,
            rotation_x: -10,
        },
        {
            shape: 'box',
            height: 0.2,
            width: 6,
            length: 10,
            position_y: 0.764,
            position_z: -22.92,
            rotation_x: 10,
        },
        {
            shape: 'box',
            height: 0.2,
            width: 6,
            length: 6,
            position_y: 1.63,
            position_z: -30.82,
        },
        {
            shape: 'box',
            height: 0.2,
            width: 6,
            length: 6,
            position_x: 10,
            position_y: 2.16,
            position_z: -30.82,
        },
        {
            shape: 'box',
            height: 0.2,
            width: 4.05,
            length: 6,
            position_x: 5.01,
            position_y: 1.895,
            position_z: -30.82,
            rotation_z: 7.47,
        },
        {
            shape: 'box',
            height: 0.2,
            width: 6,
            length: 9,
            position_x: 10,
            position_y: 3.9,
            position_z: 14.5,
            rotation_x: 0,
            rotation_y: 0,
            rotation_z: 0,
        },
        {
            shape: 'sphere',
            position_x: 10,
            position_y: 3.45,
            position_z: -30.82,
            rotation_y: 180,
            type: 'trigger',
            event: 'checkpoint',
        },
        {
            type: 'trigger',
            shape: 'sphere',
            event: 'finish',
            radius: 2,
            dataSet: 'checkpointCount:1',
            position_x: 10,
            position_y: 5,
            position_z: 16,
            rotation_x: 0,
            rotation_y: 0,
            rotation_z: 0,
        },
        {
            type: 'trigger',
            shape: 'sphere',
            event: 'setCameraMode',
            dataSet: 'cinematic,-23.677403301734017 , 18.14983153689501 , 19.110973303515554',
            radius: 3,
            position_y: 1,
            position_z: 16,
        },
        {
            type: 'trigger',
            shape: 'sphere',
            radius: 3,
            dataSet: '-30.215800024784016, 22.38223498976879, 8.370897885782714',
            position_y: 1,
            position_z: 2,
        },
        {
            type: 'trigger',
            shape: 'sphere',
            radius: 3,
            dataSet: '-13.569674761319714, 16.522559296321283, -50.07904465318648',
            position_y: 1,
            position_z: -15,
        },
        {
            shape: 'sphere',
            position_x: 10,
            position_y: 3.45,
            position_z: -30.82,
            rotation_y: 180,
            type: 'trigger',
            event: 'setCameraPosition',
            radius: 3,
            dataSet: '18.770735429093357, 20.96953167533059, -46.35856186137107',
        },
    ],
};
