import { useContext, useEffect, useState } from "react"
import { ReservesContext } from "@contexts/reservesContext";
import { InstallationContext } from "@contexts/installationContext";
import "./survivalIndex.css";

interface CurrentWeather {
    temp: number,
    pres: number,
    wind: number,
}


export default function SurvivalIndex(props: CurrentWeather) {
    const {state: reservesState, dispatch: reservesDispatch} = useContext(ReservesContext);
    const {state: installationState, dispatch: installationDispatch} = useContext(InstallationContext);
    const [index, setIndex] = useState(0);
    const [survivalTime, setSurvivalTime] = useState({hours: 0, minutes: 0});
    const minInDay = 1440;

    const indexValues = {
        water: reservesState.water.counter,
        oxygen: reservesState.oxygen.counter,
        tempLimit: reservesState.tempLimit.counter,
        isSuitOn: installationState.spaceSuitOn,
        isMagFieldInstalled: installationState.magneticFieldInstalled,
        temp: props.temp, //
        pres: props.pres, // always substract
        wind: props.wind, //
        maxWindSpeed: 268,
    }

    useEffect(() => {
        countIndex();
    }, [indexValues]);

    const countIndex = () => {
        const points = countPointsReserves(indexValues.water, reservesState.water.max_count, 25) + 
                    countPointsReserves(indexValues.oxygen, reservesState.oxygen.max_count, 20) +
                    countPointsBooleans(indexValues.isMagFieldInstalled, 10, -10) + 
                    countPointsTemp(indexValues.temp, indexValues.tempLimit, reservesState.tempLimit.min_count, 20) +
                    countPointsWind(indexValues.wind, indexValues.maxWindSpeed, -10) - 10;        
        setIndex(indexValues.isSuitOn ? (points < 0 ? 0 : points) : -1);
        calculateSurvivalTime(index);
    }

    const calculateSurvivalTime = (survivalIndex: number) => {
        let minutes = Math.round((survivalIndex / 100) * minInDay);
        let hours = Math.round(minutes / 60);
        let remainingMin = minutes % 60;
        setSurvivalTime({hours: hours, minutes: remainingMin});
    }

    const countPointsReserves = (currentValue: number, maxValue: number, maxPoints: number) => Math.round((currentValue / maxValue) * maxPoints);
    const countPointsBooleans = (boolValue: boolean, maxPoints: number, minPoints: number) => boolValue ? maxPoints : minPoints;
    const countPointsTemp = (temperature: number, suitLimit: number, minTemp: number, maxPoints: number) => {
        return Math.round(((temperature - minTemp) / (suitLimit - minTemp)) * maxPoints);
    }
    const countPointsWind = (wind: number, maxSpeed: number, minPoints: number) => Math.round((wind / maxSpeed) * minPoints);

    return (
        <div className="index-container">
            <div className="index-number-container">
                    <span>{index}</span>
            </div>
            <div>{index === -1 ? "Well... You are dead💀" : `You will survive for the next ${survivalTime.hours !== 0 ? `${survivalTime.hours} hour(s)` : ""}
                ${survivalTime.minutes !== 0 ? ` and ${survivalTime.minutes} minute(s)` : ""}
                ${survivalTime.hours >= 20 ? "😍" : survivalTime.hours >= 15 ? "😁" : survivalTime.hours >= 6 ? "🥶" : "💀"} `}</div>
        </div>
    )
}