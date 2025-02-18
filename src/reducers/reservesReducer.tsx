export const INITIAL_STATE = {
    water: {counter: 1.25, min_count: 0, max_count: 2.5, step: 0.1},
    oxygen: {counter: 225, min_count: 0, max_count: 550, step: 10},
    tempLimit: {counter: -70, min_count: -150, max_count: 20, step: 1},
}

interface ReserveState {
    counter: number,
    min_count: number,
    max_count: number,
    step: number,    
}

export interface ReservesState {
    water: ReserveState,
    oxygen: ReserveState,
    tempLimit: ReserveState,
}

export interface ActionInterface {
    type: string,
    payload?: ReservesState
}

export const reservesReducer = (state: ReservesState, action: ActionInterface): ReservesState => {
    switch(action.type) {
        case "INCREASE_WATER":
            return {...state, water: {...state.water, 
                                                counter: Math.min(state.water.counter + state.water.step, 
                                                                state.water.max_count)}}
        case "DECREASE_WATER":
            return {...state, water: {...state.water, 
                                                counter: Math.max(state.water.counter - state.water.step, 
                                                                state.water.min_count)}}
        case "INCREASE_OXYGEN":
            return {...state, oxygen: {...state.oxygen, 
                                                counter: Math.min(state.oxygen.counter + state.oxygen.step, 
                                                                state.oxygen.max_count)}}
        case "DECREASE_OXYGEN":
            return {...state, oxygen: {...state.oxygen, 
                                                counter: Math.max(state.oxygen.counter - state.oxygen.step, 
                                                                state.oxygen.min_count)}}
        case "INCREASE_TEMPLIMIT":
            return {...state, tempLimit: {...state.tempLimit, 
                                                counter: Math.min(state.tempLimit.counter + state.tempLimit.step, 
                                                                state.tempLimit.max_count)}}
        case "DECREASE_TEMPLIMIT":
            return {...state, tempLimit: {...state.tempLimit, 
                                            counter: Math.max(state.tempLimit.counter - state.tempLimit.step, 
                                                            state.tempLimit.min_count)}}
        default:
            return state;
    }
}