import { useContext, useEffect, useState } from "react"
import { ReservesContext } from "../contexts/reservesContext";
import { InstallationContext } from "../contexts/installationContext";

interface CurrentWeather {
    temp: number,
    pres: number,
    wind: number,
}


export default function SurvivalIndex(props: CurrentWeather) {
    const {state: reservesState, dispatch: reservesDispatch} = useContext(ReservesContext);
    const {state: installationState, dispatch: installationDispatch} = useContext(InstallationContext);
    const [index, setIndex] = useState(0);

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

    // max index - 100, min index - 0, if exceeds just bring to max/min. we count index using 7 variable we have in contexts and in its parent.
    // temperature & templimit - points range [-20, 20]; magnetic field = -10 or 10; pressure - always negative (-15),
    // wind - range [-10, 5]; water reserve [0, 25] (25 when water is enough for a day); oxygen reserve - [0, 20] (20 when its enough for a day)

    const countIndex = () => {
        let points = countPointsReserves(indexValues.water, reservesState.water.max_count, 25) + 
                    countPointsReserves(indexValues.oxygen, reservesState.oxygen.max_count, 20) +
                    countPointsBooleans(indexValues.isMagFieldInstalled, 10, -10) + 
                    countPointsTemp(indexValues.temp, indexValues.tempLimit, reservesState.tempLimit.min_count, 20) +
                    countPointsWind(indexValues.wind, indexValues.maxWindSpeed, -10) - 10;        
        setIndex(indexValues.isSuitOn ? (points < 0 ? 0 : points) : -1);
    }

    const countPointsReserves = (currentValue: number, maxValue: number, maxPoints: number) => Math.round((currentValue / maxValue) * maxPoints);
    const countPointsBooleans = (boolValue: boolean, maxPoints: number, minPoints: number) => boolValue ? maxPoints : minPoints;
    const countPointsTemp = (temperature: number, suitLimit: number, minTemp: number, maxPoints: number) => {
        return temperature === suitLimit ? 0 : Math.round(((temperature - minTemp) / (suitLimit - minTemp)) * maxPoints);
    }
    const countPointsWind = (wind: number, maxSpeed: number, minPoints: number) => Math.round((wind / maxSpeed) * minPoints);

    return (
        <div>
            <span>{index}</span>
        </div>
    )
}