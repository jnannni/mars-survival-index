import { useEffect, useState, useContext, useRef } from "react";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import { getMarsWeather, NewMarsData, getMarsPhoto } from "../services/marsService";
import InteractiveModel from "../components/InteractiveModel/InteractiveModel";
import SurvivalIndex from "../components/SurvivalIndex/SurvivalIndex";
import CustomWeatherCard from "../components/WeatherCard/CustomWeatherCard";
import { CustomWeatherContext } from "../contexts/customWeatherContext";
import SiteDescription from "../components/SiteDescription/SiteDescription";
import Header from "../components/Header/Header";
import './home.css';

export default function Home() {
    const [allEntries, setAllEntries] = useState<NewMarsData>({});     
    const [selectedCard, setSelectedCard] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const {state, dispatch} = useContext(CustomWeatherContext);
    const compRef = useRef<HTMLDivElement>();
    const [compWidth, setCompWidth] = useState(0);
    const [curComp, setCurComp] = useState<HTMLDivElement>();
    
    
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
        <div>            
            <div className="home-container" style={{backgroundImage: `url(${photoURL})`}}> 
                <div className="image-overlay">
                    <Header />
                    <div className="main-content container">
                        <div className="counter-content">
                            <div className="display-content">
                                <h2 className="main-title">Your survival index on mars today!</h2>
                                <p className="display-text">Today’s temperature on Mars is -80°C, which is 100°C colder than Antarctica! Wear a spacesuit rated for -100°C!</p>                    
                                {selectedCard === "custom" ? <SurvivalIndex temp={state.temp} pres={state.pres} wind={state.wind}/>: 
                                Object.entries(allEntries).filter(item => selectedCard === item[0]).map(item => 
                                                    <SurvivalIndex key={item[0]} temp={Math.trunc(item[1].temp)} pres={Math.trunc(item[1].pre)} wind={Math.trunc(item[1].wind)}/>)} 
                            </div>                        
                            <InteractiveModel />
                        </div> 
                        <div className="cards-container">
                            <div className="card-group">                                 
                                {allEntries && Object.entries(allEntries)
                                                .map(item => <WeatherCard className={selectedCard === item[0] ? "selected-card" : ""} key={item[0]} m_day={parseInt(item[0])} m_temp={Math.trunc(item[1].temp)}
                                                                            m_pres={Math.trunc(item[1].pre)} m_wind={Math.trunc(item[1].wind)} selectCard={() => setSelectedCard(item[0])}/>)}
                                <CustomWeatherCard className={selectedCard === "custom" ? "selected-card" : ""} selectCard={() => setSelectedCard("custom")}/>                                
                            </div>
                        </div>                    
                    </div> 
                </div>               
            </div>
            <div className="description-container">
                <SiteDescription />
            </div>            
        </div>
    )
}