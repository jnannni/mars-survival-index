import { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import { getMarsWeather, New_Mars_Data, getMarsPhoto } from "../services/marsService";
import InteractiveModel from "../components/InteractiveModel";
import SurvivalIndex from "../components/SurvivalIndex";

export default function Gallery() {
    const [allEntries, setAllEntries] = useState<New_Mars_Data>({});     
    const [selectedCard, setSelectedCard] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    
    useEffect(() => {
        //recieve data on render
        const fetchData = async () => {
            try {                
                const response = await getMarsWeather(); 
                const photoResponse = await getMarsPhoto();
                if (response) {
                    setAllEntries(response);
                    setSelectedCard(Object.keys(response)[0]);
                    setPhotoURL(photoResponse);                                 
                }                                                                                         
            } catch (error) {
                throw error;
            }            
        }
        fetchData();           
    }, []);          

    return (
        <div style={{backgroundImage: `url(${photoURL})`, backgroundSize: "cover"}}>  
            <h2>Your survival index on mars today!</h2>
            <p>Today’s temperature on Mars is -80°C, which is 100°C colder than Antarctica! Wear a spacesuit rated for -100°C!</p>
            <InteractiveModel /> 
            {Object.entries(allEntries).filter(item => selectedCard === item[0]).map(item => <SurvivalIndex temp={Math.trunc(item[1].temp)} pres={Math.trunc(item[1].pre)} wind={Math.trunc(item[1].wind)}/>)} 
            <div className="card-group">  
                {allEntries && Object.entries(allEntries)
                                .map(item => <WeatherCard className={selectedCard === item[0] ? "text-bg-primary" : ""} key={item[0]} m_day={parseInt(item[0])} m_temp={Math.trunc(item[1].temp)}
                                                            m_pres={Math.trunc(item[1].pre)} m_wind={Math.trunc(item[1].wind)} selectCard={() => setSelectedCard(item[0])}/>)}          
            </div>
        </div>
    )
}