import { useContext } from "react";
import { CustomWeatherContext } from "@contexts/customWeatherContext";
import { CustomState } from "@reducers/customCardReducer";
import { ACTION_TYPES } from "@reducers/actionTypes";
import "./weatherCard.css";

interface Parameters {
    className?: string;
    selectCard?: () => void;
}

// a card for custom input - introduced because of mostly similar data we get from mars weather api
export default function CustomWeatherCard(props: Parameters) { 
    const {state, dispatch} = useContext(CustomWeatherContext);     
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: ACTION_TYPES.CHANGE_INPUT, payload: {name: e.target.name as keyof CustomState, value: Number(e.target.value)}});                
    }
    
    return (
        <div className={`card ${props.className} input-container`} onClick={props.selectCard}>
            <h5 className="card-title">Enter Custom Weather</h5>
            <div className="form-first-line">
                <input className="form-input" type="number" placeholder="Temperature" onChange={handleChange} 
                        name="temp" id="customTemp" max={20} min={-150} inputMode="numeric" step={1}/>
                <input className="form-input" type="number" placeholder="Wind speed" onChange={handleChange} 
                        name="wind" id="customWind" max={268} min={0} inputMode="numeric" step={10}/>
            </div>            
            <input className="form-input" type="number" placeholder="Pressure" onChange={handleChange} 
                    name="pres" id="customPres" max={870} min={0} inputMode="numeric" step={10}/>            
        </div>
    )
}