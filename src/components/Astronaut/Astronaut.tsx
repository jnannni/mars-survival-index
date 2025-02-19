import { useContext, useEffect, useState } from "react";
import { InstallationContext } from "@contexts/installationContext";
import { ACTION_TYPES } from "@reducers/actionTypes";
import astronaut from "@assets/Astronaut.png";
import astronautUn from "@assets/astronaut_undressed.png";
import rover from "@assets/rover.png";
import "./astronaut.css";

//contains a clickable image that changes whether a user "wears" a space suit or not
export default function Astronaut() {
    const {state, dispatch} = useContext(InstallationContext); 
    const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth);
    const {state: installationState, dispatch: installationDispatch} = useContext(InstallationContext); 
    const magneticFieldInstallText = installationState.magneticFieldInstalled ? "Remove magnetic field" : "Install magnetic field";
    const spaceSuitOnText = state.spaceSuitOn ? "Take off your space suit" : "Wear your space suit";
    
    const handleWindowSizeChanges = () => {
        setDeviceWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChanges);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChanges)
        }
    }, []);

    return (
        <div className="bools-container">
            <button className="button m-field" onClick={() => installationDispatch({type: ACTION_TYPES.INSTALL_FIELD})}>
                <span>{magneticFieldInstallText}</span>
            </button>
            <div className="astro-img-container">
                <img className="astronaut-img" src={state.spaceSuitOn ? astronaut : astronautUn} 
                onClick={() => dispatch({type: ACTION_TYPES.WEAR_SUIT})} />
                <span className="material-symbols-outlined">touch_app</span>
            </div>
            <button className="button suit-btn" onClick={() => dispatch({type: ACTION_TYPES.WEAR_SUIT})}>{spaceSuitOnText}</button>
            <img className="rover-img" src={rover}/>
        </div>
    )
}
