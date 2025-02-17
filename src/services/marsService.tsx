import axios from "axios";

export type New_Mars_Data = {
    [sol: number]: New_Mars_Data_Parameters,    
}

type New_Mars_Data_Parameters = {
    temp: number,
    pre: number,
    wind: number,
}

type Mars_Data_Raw = {
    AT: Mars_Data_Parameters, // temperature
    HWS: Mars_Data_Parameters, // wind speed
    PRE: Mars_Data_Parameters, // pressure
    [key: string]: Mars_Data_Parameters | string | number | object  | null;
}

type Mars_Data_Parameters = {
    av: number, // average
    ct: number,
    mn: number,
    mx: number,
}

const nasa_api_key = process.env.REACT_APP_MARS_INSIGHT_API_KEY;

export const getMarsWeather = async () => {
    try {
        const response = await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${nasa_api_key}&feedtype=json&ver=1.0`);
        const allEntries: New_Mars_Data = response.data.sol_keys.reduce((acc: New_Mars_Data, sol: number) => {
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
            const sol = Math.floor(Math.random() * 4449);            
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

function writeSolData (sol_data: Mars_Data_Raw): New_Mars_Data_Parameters {
    const av_temp = sol_data.AT.av
    const av_pre = sol_data.PRE.av;
    const av_wind = sol_data.HWS.av; 

    return {
            temp: (av_temp - 32) / 1.8, //conversion to celsius
            pre: av_pre,
            wind: av_wind,
    }
}