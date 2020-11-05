import { NOP } from '../utils';

const defaultState = {
    platformId: '',

    position_x: 0,
    position_y: 0,
    position_z: 0,

    rotation_x: 0,
    rotation_y: 0,
    rotation_z: 0,

    width: 1,
    height: 1,
    length: 1,

    radiusTop: 1,
    radiusBottom: 1,
    sides: 6,
};

const gState = {
    ...defaultState,
};

export type EditorState = typeof gState;

let changeListener = NOP as (state: EditorState) => void;

export default {
    getState() {
        return gState;
    },
    setState(state: Partial<EditorState>) {
        if (!sameValues(state, gState)) {
            Object.assign(gState, Object.entries(state).reduce(filterUndefinedProps, {}));
            roundNumericValues();
            changeListener(gState);
        }
    },
    set onChange(listener: typeof changeListener) {
        changeListener = listener;
    },
};

function filterUndefinedProps(props: Record<string, string|number|boolean>, [property, value]) {
    if (value !== undefined) {
        props[property] = value;
    }
    return props;
}

function sameValues(a: Record<string, string|number|boolean>, b: Record<string, string|number|boolean>) {
    return Object.entries(a).every(([property, value]) => b[property] === value);
}

function roundNumericValues() {
    Object.entries(gState).forEach(roundNumericValue);
}

function roundNumericValue([property, value]) {
    if (typeof value === 'number') {
        gState[property] = round(value);
    }
}

function round(n: number) {
    return Math.round((n + Number.EPSILON) * 100) / 100;
}
