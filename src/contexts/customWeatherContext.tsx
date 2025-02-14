import React, {createContext, ReactNode, useReducer} from "react";
import { CUSTOM_INITIAL_STATE, customCardReducer, CustomState, CustomActionInterface } from "../reducers/customCardReducer";

interface CustomeProviderProps {
    children: ReactNode,
}

interface CustomContextProps {
    state: CustomState,
    dispatch: React.Dispatch<CustomActionInterface>,
}

export const CustomWeatherContext = createContext<CustomContextProps>({state: CUSTOM_INITIAL_STATE, dispatch: () => null});

export const CustomWeatherProvider = ({children}: CustomeProviderProps) => {
    const [state, dispatch] = useReducer(customCardReducer, CUSTOM_INITIAL_STATE);

    return (
        <CustomWeatherContext.Provider value={{state, dispatch}}>
            {children}
        </CustomWeatherContext.Provider>
    )
}