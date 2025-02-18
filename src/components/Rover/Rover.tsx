import { useState, useContext } from "react";
import ReserveComponent from "../ReserveComponent/ReserveComponent";
import { ReservesContext } from "../../contexts/reservesContext";
import "./rover.css";

// contains "reserves" of water and oxygen users can take on board for a one day survival expedition
// as well as the toggle for a magnetic field that can be either installed or got rid of
export default function Rover() {        
    const {state: reservesState, dispatch: reservesDispatch} = useContext(ReservesContext);          

    return (
        <div className="reserves-container">
            {Object.entries(reservesState).map(([key, data], index) => 
            <ReserveComponent key={index} header={key} counter={data.counter} 
                                increase={() => reservesDispatch({type: `INCREASE_${key.toUpperCase()}`})}
                                decrease={() => reservesDispatch({type: `DECREASE_${key.toUpperCase()}`})}/>)}            
        </div>
    )
}