import axios from "axios";

export type NewMarsData = {
    [sol: number]: NewMarsDataParameters,    
}

type NewMarsDataParameters = {
    temp: number,
    pre: number,
    wind: number,
}

type MarsDataRaw = {
    AT: MarsDataParameters, // temperature
    HWS: MarsDataParameters, // wind speed
    PRE: MarsDataParameters, // pressure
    [key: string]: MarsDataParameters | string | number | object  | null;
}

type MarsDataParameters = {
    av: number, // average
    ct: number,
    mn: number,
    mx: number,
}

const nasa_api_key = process.env.REACT_APP_MARS_INSIGHT_API_KEY;
const maxSOL = 4449;

export const getMarsWeather = async () => {
    try {
        const response = await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${nasa_api_key}&feedtype=json&ver=1.0`);
        const allEntries: NewMarsData = response.data.sol_keys.reduce((acc: NewMarsData, sol: number) => {
            acc[sol] = writeSolData(response.data[sol]);
            return acc;
        }, {});       
        return allEntries;        
    } catch (error) {
        
    }
}

// as of 11.02.25 max sol is 4449 (that is 10.02)
export const getMarsPhoto = async () => {
    let isPhotoFound = false;
    let photoURL = "";
    try {
        while(!isPhotoFound) {
            const sol = Math.floor(Math.random() * maxSOL);            
            const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${nasa_api_key}&sol=${sol}&camera=fhaz`);            
            if (response.data.photos && response.data.photos.length !== 0) {                
                isPhotoFound = true;
                photoURL = response.data.photos[0].img_src;
            }
        }                        
        return photoURL;        
    } catch (error) {
        throw error;
    }
}

function writeSolData (sol_data: MarsDataRaw): NewMarsDataParameters {
    const av_temp = sol_data.AT.av
    const av_pre = sol_data.PRE.av;
    const av_wind = sol_data.HWS.av; 

    return {
            temp: (av_temp - 32) / 1.8, //conversion to celsius
            pre: av_pre,
            wind: av_wind,
    }
}