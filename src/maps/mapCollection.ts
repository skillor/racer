import empty from './map_00';
import i01 from './map_i01';
import o01 from './map_o01';
import o02 from './map_o02';
import o03 from './map_o03';
import o04 from './map_o04';
import o05 from './map_o05';
import o06 from './map_o06';
import o07 from './map_o07';
import o08 from './map_o08';
import o09 from './map_o09';
import o10 from './map_o10';

export const mapCollection = {
    i01,
    o01,
    o02,
    o03,
    o04,
    o05,
    o06,
    o07,
    o08,
    o09,
    o10,
    empty,
    test: {
        meta: {},
        elements: [
            {
                type: 'vehicle',
                position_y: 2,
                position_z: 15,
            },
            {
                shape: 'box',
                width: 24,
                height: 0.2,
                length: 40,
                position_x: 14,
                position_z: 22,
            },
            {
                shape: 'triangularPrism',
                width: 2,
                length: 2,
                offset: -2,
                position_y: 1,
            },
            // {
            //     shape: 'tetrahedron',
            //     width: 2,
            //     length: 2,
            //     position_x: -2.02,
            //     position_y: 1.13,
            //     position_z: 7.46,
            //     rotation_x: -123.42,
            //     rotation_y: 44.06,
            //     rotation_z: -174.89,
            // },
            {
                shape: 'box',
                width: 24,
                height: 0.2,
                length: 120,
                position_x: -10,
                position_z: -18,
            },
            {
                shape: 'box',
                size: 2,
                position_x: 15,
                position_y: 2,
                position_z: 10,
                mass: 40,
                fixedRotation: true,
                rotation_x: 45,
                rotation_y: 45,
            },
            {
                shape: 'box',
                size: 2,
                position_x: 20,
                position_y: 5,
                position_z: 10,
                rotation_x: 45,
                rotation_y: 45,
            },
            {
                type: 'compound',
                shape: 'loop',
                segmentPositionOffset: 0.6,
                position_x: 5,
                position_y: 8.2,
                position_z: 4,
                rotation_x: 12,
            },
            {
                type: 'compound',
                shape: 'slopeTransition',
                segmentWidth: 6,
                segmentHeight: 0.6,
                segmentLength: 12,
                segmentCount: 10,
                position_x: -25.8,
                position_z: 30,
            },
            {
                type: 'trigger',
                shape: 'sphere',
                event: 'setCameraPosition',
                dataSet: '-6,10,26',
                radius: 3,
                position_x: 10,
                position_y: 1,
                position_z: 15,
            },
            {
                type: 'trigger',
                shape: 'sphere',
                event: 'finish',
                radius: 1,
                position_x: 12,
                position_y: 3,
                position_z: 5,
            },
            {
                type: 'trigger',
                shape: 'sphere',
                event: 'setCameraMode',
                dataSet: 'hood',
                radius: 3,
                position_x: 6,
                position_y: 1.9,
                position_z: -0.4,
            },
            {
                shape: 'box',
                position_y: 12,
                width: 4 * 2,
                height: 0.1 * 2,
                length: 2 * 2,
                position_x: -20,
                position_z: 8,
            },
            {
                shape: 'box',
                position_y: 11.8,
                width: 9 * 2,
                height: 0.1 * 2,
                length: 0.2 * 2,
                position_x: -7,
                position_z: 6.2,
                lowFriction: true,
            },
            {
                shape: 'box',
                position_y: 11.8,
                width: 9 * 2,
                height: 0.1 * 2,
                length: 0.2 * 2,
                position_x: -7,
                position_z: 9.8,
                lowFriction: true,
            },
            {
                shape: 'box',
                position_y: 12,
                width: 9 * 2,
                height: 0.1 * 2,
                length: 0.1 * 2,
                position_x: -7,
                position_z: 9.9,
                lowFriction: true,
            },
            {
                shape: 'box',
                position_y: 12,
                width: 9 * 2,
                height: 0.1 * 2,
                length: 0.1 * 2,
                position_x: -7,
                position_z: 6.1,
                lowFriction: true,
            },
            {
                shape: 'box',
                position_y: 12,
                width: 2 * 2,
                height: 0.1 * 2,
                length: 1.8 * 2,
                position_x: -14,
                position_z: 8,
                mass: 10,
            },
            {
                shape: 'box',
                position_x: 9.11,
                position_y: 7.09,
                position_z: -15,
                rotation_z: 45,
                height: 0.1 * 2,
                length: 10 * 2,
                width: 10 * 2,
            },
            {
                shape: 'box',
                position_x: 10.21,
                position_y: 5.74,
                position_z: -35,
                rotation_z: 35,
                height: 0.1 * 2,
                length: 10 * 2,
                width: 10 * 2,
            },
            {
                type: 'compound',
                shape: 'cantedCurve',
                position_x: 8.94,
                position_y: -3.61,
                position_z: 53.91,
                radius: 11.65,
                rotation_x: 0,
                rotation_y: -83.16,
                rotation_z: 0,
                angle: 60,
                segmentWidth: 6,
                segmentCount: 32,
                segmentLength: 2,
            },
            {
                type: 'compound',
                shape: 'cantedCurve',
                position_x: 8.94,
                position_y: -7.71,
                position_z: 53.91,
                radius: 7.675,
                rotation_x: 0,
                rotation_y: 4.18,
                rotation_z: 0,
                angle: 30,
                segmentWidth: 6,
                segmentCount: 32,
                segmentLength: 1,
            },
            {
                shape: 'box',
                position_x: 9,
                position_y: -9.2,
                position_z: 53.81,
                rotation_x: 0,
                rotation_y: 0,
                rotation_z: 0,
                width: 10,
                length: 10,
                height: 0.1,
            },
        ],
    },
};
