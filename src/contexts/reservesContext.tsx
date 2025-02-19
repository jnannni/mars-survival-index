import React, {createContext, ReactNode, useReducer} from "react";
import { reservesReducer, INITIAL_STATE, ReservesState, ActionInterface } from "../reducers/reservesReducer";

interface ReservesProviderProps {
    children: ReactNode;
}

interface ReservesContextProps {
    state: ReservesState,
    dispatch: React.Dispatch<ActionInterface>,
}

export const ReservesContext = createContext<ReservesContextProps>({state: INITIAL_STATE, dispatch: () => null});

export const ReservesProvider = ({children}: ReservesProviderProps) => {
    const [state, dispatch] = useReducer(reservesReducer, INITIAL_STATE);

    return (
        <ReservesContext.Provider value={{state, dispatch}}>
            {children}
        </ReservesContext.Provider>
    )
}