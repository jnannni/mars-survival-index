import { useContext, useEffect, useState } from "react";
import { InstallationContext } from "../../contexts/installationContext";
import "./astronaut.css";
import astronaut from "assets/Astronaut.png";
import astronautUn from "assets/astronaut_undressed.png";
import rover from "assets/rover.png";

//contains a clickable image that changes whether a user "wears" a space suit or not
export default function Astronaut() {
    const {state, dispatch} = useContext(InstallationContext); 
    const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth);
    const {state: installationState, dispatch: installationDispatch} = useContext(InstallationContext); 
    
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
            <button className="button m-field" onClick={() => installationDispatch({type: "INSTALL_FIELD"})}>
                {installationState.magneticFieldInstalled ? <span>Remove magnetic field</span> : <span>Install magnetic field</span>}
            </button>
            <div className="astro-img-container">
                <img className={deviceWidth >= 768 ? "astronaut-img" : "hidden"} src={state.spaceSuitOn ? astronaut : astronautUn} 
                onClick={() => dispatch({type: "WEAR_SUIT"})} />
                <span className="material-symbols-outlined">touch_app</span>
            </div>
            <button className={deviceWidth < 768 ? "button" : "hidden"} onClick={() => dispatch({type: "WEAR_SUIT"})}>
                {state.spaceSuitOn ? <span>Take off your space suit</span> : <span>Wear your space suit</span>}</button>
            <img className={deviceWidth >= 768 ? "rover-img" : "hidden"} src={rover}/>
        </div>
    )
}