export default {
    meta: {
        author: '',
        goals: {
            time: 45e3,
            // time: 30e3,
            respawnCount: 0,
        },
    },
    elements: [
        {
            type: 'vehicle',
            position_y: 1,
        },
        {
            shape: 'box',
            width: 7,
            height: 0.1,
            length: 30,
            position_x: 0,
            position_y: 0,
            position_z: -11.5,
            rotation_x: 0,
            rotation_y: 0,
            rotation_z: 0,
        },
        {
            shape: 'sphere',
            type: 'trigger',
            event: 'setCameraMode',
            dataSet: 'chase',
            position_y: 1,
        },
        {
            shape: 'box',
            position_x: -1.5,
            position_y: 0.6,
            position_z: -8,
            rotation_x: 0,
            rotation_y: 0,
            rotation_z: 0,
            width: 3,
            height: 1,
        },
        {
            shape: 'box',
            position_x: 1.5,
            position_y: 0.6,
            position_z: -18,
            rotation_x: 0,
            rotation_y: 0,
            rotation_z: 0,
            width: 3,
            height: 1,
        },
        {
            shape: 'box',
            position_x: 0,
            position_y: -2.62,
            position_z: -38.18,
            rotation_x: -10,
            rotation_y: 0,
            rotation_z: 0,
            width: 7,
            length: 6,
            height: 0.1,
        },
        {
            shape: 'box',
            position_x: 0,
            position_y: -6,
            position_z: -57,
            rotation_x: 0,
            rotation_y: 0,
            rotation_z: 0,
            width: 6,
            length: 10,
            height: 0.1,
        },
        {
            shape: 'slopeTransition',
            type: 'compound',
            position_x: -3,
            position_y: -6.05,
            position_z: -65.66,
            rotation_x: 0,
            rotation_y: 0,
            rotation_z: 0,
            angle: 30,
            segmentHeight: 0.84,
            segmentLength: 3.69,
            segmentCount: 5,
            segmentWidth: 6,
        },
        {
            shape: 'cantedCurve',
            type: 'compound',
            position_x: 20.33,
            position_y: -3.94,
            position_z: -78.94,
            rotation_x: 0,
            rotation_y: -90,
            rotation_z: 0,
            segmentCount: 36,
            radius: 20,
            segmentWidth: 6,
            segmentLength: 1.53,
            angle: 40,
        },
        {
            shape: 'box',
            position_x: 41.83,
            position_y: -2.69,
            position_z: -75.18,
            rotation_x: 0,
            rotation_y: 0,
            rotation_z: 40,
            width: 10,
            length: 6,
            height: 0.1,
        },
        {
            shape: 'box',
            position_x: 48.63,
            position_y: 0.51,
            position_z: -63.18,
            rotation_x: 0,
            rotation_y: 0,
            rotation_z: 0,
            width: 6,
            length: 30,
            height: 0.1,
        },
        {
            shape: 'sphere',
            type: 'trigger',
            event: 'checkpoint',
            position_x: 48.5,
            position_y: 1.74,
            position_z: -74.9,
            rotation_y: 180,
        },
        {
            shape: 'loop',
            type: 'compound',
            position_x: 52.63,
            position_y: 8.5,
            position_z: -42,
            rotation_x: 0,
            rotation_y: -90,
            rotation_z: 0,
            segmentPositionOffset: 0,
            segmentCount: 7,
            segmentLength: 2,
            segmentWidth: 30,
        },
        {
            shape: 'loop',
            type: 'compound',
            position_x: 30.68,
            position_y: 11.8,
            position_z: -25.54,
            rotation_x: 180,
            rotation_y: 0,
            rotation_z: 90,
            segmentCount: 16,
            segmentPositionOffset: 0,
            radius: 30,
            segmentWidth: 8,
            segmentLength: 3,
        },
        {
            shape: 'box',
            position_x: 60.68,
            position_y: 12.3,
            position_z: -34,
            rotation_x: 0,
            rotation_y: 0,
            rotation_z: 90,
            width: 7,
            length: 14,
            height: 0.1,
        },
        {
            shape: 'box',
            position_x: 23.17,
            position_y: 11.77,
            position_z: 4.49,
            rotation_x: 0,
            rotation_y: 0,
            rotation_z: 0,
            width: 17,
            length: 0.1,
            height: 8,
        },
        {
            shape: 'loop',
            type: 'compound',
            position_x: -14.87,
            position_y: 8.5,
            position_z: -3.5,
            rotation_x: -180,
            rotation_y: 0,
            rotation_z: -180,
            segmentPositionOffset: -1.2,
            segmentCount: 32,
            segmentLength: 2,
            segmentWidth: 18,
        },
        {
            shape: 'box',
            position_x: -71.33,
            position_y: 4.47,
            position_z: -76.56,
            rotation_x: 0,
            rotation_y: -60,
            rotation_z: 0,
            width: 40,
            height: 0.1,
            length: 20,
        },
        {
            shape: 'loop',
            type: 'compound',
            position_x: -15.85,
            position_y: 12.49,
            position_z: -5.46,
            rotation_x: 0,
            rotation_y: 0,
            rotation_z: 0,
            segmentCount: 4,
            radius: 12,
            segmentLength: 2,
            segmentWidth: 16,
            segmentPositionOffset: 0,
        },
        {
            shape: 'box',
            position_x: -83.67,
            position_y: 5.33,
            position_z: -97.96,
            rotation_x: 0,
            rotation_y: -60,
            rotation_z: -10,
            width: 10,
            height: 0.1,
            length: 20,
        },
        {
            shape: 'box',
            type: 'trigger',
            event: 'finish',
            dataSet: 'checkpointCount:1',
            length: 5,
            position_x: -83.28,
            position_y: 6.75,
            position_z: -98.15,
            rotation_y: -60,
        },
    ],
};
