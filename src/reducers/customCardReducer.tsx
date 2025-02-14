export const CUSTOM_INITIAL_STATE = {
    temp: -60,
    pres: 600,
    wind: 2,
}

export interface CustomState {
    temp: number,
    pres: number,
    wind: number,
}

export interface ChangeInputState {
    name: keyof CustomState,
    value: number
}

export interface CustomActionInterface {
    type: string,
    payload: ChangeInputState,
}

export const customCardReducer = (state: CustomState, action: CustomActionInterface): CustomState => {
    switch(action.type) {
        case "CHANGE_INPUT":
            return {...state, [action.payload.name]: action.payload?.value}
        default:
            return state
    }
}