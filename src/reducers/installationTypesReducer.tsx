export const SUIT_INITIAL_STATE = {
    spaceSuitOn: true,
    magneticFieldInstalled: false,
}

export interface InstallationState {
    spaceSuitOn: boolean,
    magneticFieldInstalled: boolean,
}

export interface InstallationActionInterface {
    type: string,
    payload?: InstallationState,
}

export const installationTypesReducer = (state: InstallationState, action: InstallationActionInterface): InstallationState => {
    switch(action.type) {
        case "INSTALL_FIELD":
            return {...state, magneticFieldInstalled: !state.magneticFieldInstalled}
        case "WEAR_SUIT":
            return {...state, spaceSuitOn: !state.spaceSuitOn}
        default:
            return state;
    }
}