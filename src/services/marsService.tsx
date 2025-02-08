import axios from "axios";

const nasa_api_key = process.env.REACT_APP_MARS_INSIGHT_API_KEY;

export const getMarsWeatherData = async () => {
    try {
        const response = await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${nasa_api_key}&feedtype=json&ver=1.0`);        
        return response.data;
    } catch (error) {
        throw error;
    }
}