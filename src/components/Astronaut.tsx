import { useContext } from "react";
import { InstallationContext } from "../contexts/installationContext";

export default function Astronaut() {
    const {state, dispatch} = useContext(InstallationContext); 

    return (
        <div>
            <img src={state.spaceSuitOn ? "/assets/Astronaut.png" : "/assets/astronaut_undressed.png"} 
                onClick={() => dispatch({type: "WEAR_SUIT"})}></img>
            <button className="btn btn-primary" onClick={() => dispatch({type: "WEAR_SUIT"})}>
                {state.spaceSuitOn ? <span>Take off your space suit</span> : <span>Wear your space suit</span>}</button>
        </div>
    )
}