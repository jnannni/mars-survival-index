import React, {createContext, ReactNode, useReducer} from "react";
import { SUIT_INITIAL_STATE, InstallationState, InstallationActionInterface, installationTypesReducer } from "../reducers/installationTypesReducer";

interface InstallationProviderProps {
    children: ReactNode
}

interface InstalltionContextProps {
    state: InstallationState,
    dispatch: React.Dispatch<InstallationActionInterface>,
}

export const InstallationContext = createContext<InstalltionContextProps>({state: SUIT_INITIAL_STATE, dispatch: () => null});

export const InstallationProvider = ({children}: InstallationProviderProps) => {
    const [state, dispatch] = useReducer(installationTypesReducer, SUIT_INITIAL_STATE);

    return (
        <InstallationContext.Provider value={{state, dispatch}}>
            {children}
        </InstallationContext.Provider>
    )
}