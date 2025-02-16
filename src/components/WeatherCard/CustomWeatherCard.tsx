import { useContext, useState } from "react";
import { CustomWeatherContext } from "../../contexts/customWeatherContext";
import { CustomState } from "../../reducers/customCardReducer";
import "./weatherCard.css";

interface Parameters {
    className?: string;
    selectCard?: () => void;
}

// a card for custom input - introduced because of mostly similar data we get from mars weather api
export default function CustomWeatherCard(props: Parameters) { 
    const {state, dispatch} = useContext(CustomWeatherContext);     
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "CHANGE_INPUT", payload: {name: e.target.name as keyof CustomState, value: Number(e.target.value)}});                
    }
    
    return (
        <div className={`card ${props.className}`} onClick={props.selectCard}>
            <h5>Enter Custom Weather</h5>
            <input className="form-control" type="number" placeholder="Temperature" onChange={handleChange} 
                    name="temp" id="customTemp" max={20} min={-150} inputMode="numeric" step={1}/>
            <input className="form-control" type="number" placeholder="Pressure" onChange={handleChange} 
                    name="pres" id="customPres" max={870} min={0} inputMode="numeric" step={10}/>
            <input className="form-control" type="number" placeholder="Wind speed" onChange={handleChange} 
                    name="wind" id="customWind" max={268} min={0} inputMode="numeric" step={10}/>
        </div>
    )
}