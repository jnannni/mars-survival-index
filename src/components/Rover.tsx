import { useState, useContext } from "react";
import ReserveComponent from "./ReserveComponent";
import { ReservesContext } from "../contexts/reservesContext";
import { InstallationContext } from "../contexts/installationContext";

export default function Rover() {        
    const {state: reservesState, dispatch: reservesDispatch} = useContext(ReservesContext);
    const {state: installationState, dispatch: installationDispatch} = useContext(InstallationContext);      

    return (
        <div>
            {Object.entries(reservesState).map(([key, data], index) => 
            <ReserveComponent key={index} header={key} counter={data.counter} 
                                increase={() => reservesDispatch({type: `INCREASE_${key.toUpperCase()}`})}
                                decrease={() => reservesDispatch({type: `DECREASE_${key.toUpperCase()}`})}/>)}                       
            <button className="btn btn-primary" onClick={() => installationDispatch({type: "INSTALL_FIELD"})}>
                {installationState.magneticFieldInstalled ? <span>Remove magnetic field</span> : <span>Install magnetic field</span>}
                </button>
        </div>
    )
}