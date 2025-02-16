import { useContext, useEffect, useState } from "react";
import { InstallationContext } from "../../contexts/installationContext";
import "./astronaut.css";

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
            <img className={deviceWidth >= 768 ? "astronaut-img" : "hidden"} src={state.spaceSuitOn ? "/assets/Astronaut.png" : "/assets/astronaut_undressed.png"} 
                onClick={() => dispatch({type: "WEAR_SUIT"})}></img>
            <button className={deviceWidth < 768 ? "button" : "hidden"} onClick={() => dispatch({type: "WEAR_SUIT"})}>
                {state.spaceSuitOn ? <span>Take off your space suit</span> : <span>Wear your space suit</span>}</button>
            <img className={deviceWidth >= 768 ? "rover-img" : "hidden"} src="/assets/rover.png"/>
        </div>
    )
}