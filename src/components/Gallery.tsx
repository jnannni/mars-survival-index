import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { getMarsWeatherData } from "../services/marsService";

interface Mars_Parameters {
    day: number,
    temperature: number,
    pressure: number,
    wind_speed: number,        
}

interface Earth_Parametres {
    day: number,
    temperature: number,
    pressure: number,
    wind_speed: number,
}

export default function Gallery() {
    const [marsData, setMarsData] = useState<Mars_Parameters | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMarsWeatherData();
                setMarsData(data);                                
            } catch (error) {
                console.log(error);
            }            
        }
        fetchData();        
    }, []);  

    
    return (
        <div>
            {marsData && <WeatherCard />}
            {marsData && marsData.day}
        </div>
    )
}