import { useState } from "react";

export default function WeatherCard() {
    const [isClicked, setIsClicked] = useState(false);    

    function handleClick() {
        setIsClicked(!isClicked);
    }        

    return (
        <div>
            <div>
                <h5>SOL</h5>
                <h5></h5>
                <span></span>            
            </div>
            <div>
                <div>
                    <p>Temp. </p>
                    <p>Pres. </p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}
