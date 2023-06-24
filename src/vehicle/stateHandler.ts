import cfg from '../config';
import { valueBetween } from '../utils';
import Vehicle from './Vehicle';

const stateValueLimits = {
    engineForceMin: -cfg.vehicle.maxEngineForce,
    engineForceMax: cfg.vehicle.maxEngineForce,
    parkingBrakeForceMin: 0,
    parkingBrakeForceMax: cfg.vehicle.maxParkingBrakeForce,
    steeringAngleMin: -cfg.vehicle.maxSteeringAngle,
    steeringAngleMax: cfg.vehicle.maxSteeringAngle,
};

const defaultState = {
    engineForce: 0,
    parkingBrakeForce: 0,
    steeringAngle: 0,
};

export type VehicleState = typeof defaultState;

export function initStateHandler(vehicle: Vehicle) {
    return new Proxy(defaultState, {
        set(state, prop: keyof VehicleState, value: number) {
            const currentValue = state[prop];
            const nextValue = valueBetween(value, stateValueLimits[`${prop}Min`], stateValueLimits[`${prop}Max`]);

            if (currentValue !== nextValue) {
                state[prop] = nextValue;
            }

            return true;
        },
    });
}
