import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { getMarsWeather, New_Mars_Data } from "../services/marsService";

type Mars_Weather = {
    sol: number,
    data: object,
}

export default function Gallery() {
    const [allEntries, setAllEntries] = useState<New_Mars_Data>({});     

    
    useEffect(() => {
        const fetchData = async () => {
            try {                
                const response = await getMarsWeather();                                           
                if (response) {
                    setAllEntries(response); 
                }                                                                                         
            } catch (error) {
                throw error;
            }            
        }
        fetchData();           
    }, []);      
        

    return (
        <div>  
            {allEntries && Object.entries(allEntries).map(item => <WeatherCard m_day={parseInt(item[0])} m_temp={Math.trunc(item[1].temp)}
                                                                                m_pres={Math.trunc(item[1].pre)} m_wind={Math.trunc(item[1].wind)}/>)}           
        </div>
    )
}