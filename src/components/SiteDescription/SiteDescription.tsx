import { useState } from "react";
import "./siteDescription.css";

export default function SiteDescription() {
    const [hidden, setHidden] = useState(true);

    return (
        <div className="container">            
            <div className="about-container">
                <h3 className="about-header">About Mars Survival Index</h3>                                    
                    <div className="about-body-container">
                        <input type="checkbox" id="check2"/>
                        <label htmlFor="check2">                            
                            <div className="about-body">This project was created for pure fun to "show off" my creative thinking🤪. But, 
                                if you are interested how I calculated your survival chances, let me tell you.🗣️                     
                                <span className="material-symbols-outlined">touch_app</span>                                
                            </div>
                        </label>
                        <div className="about-body-details">
                            <p style={{marginBottom: "1rem"}}><b>That is how I count index. A drop of science🧬 and the ocean of "how I feel it"👩🏻‍🎓.</b></p>
                            <p>It is quite well-known that many many (too many) years ago Mars had similar to Earth's climate. Unfortunately, as we know, it is not like that anymore.
                                Crazy low pressure, almost no oxygen, continious dust storms, toxic soil, and so on...😭 Although there is no way humans can move to Mars, it didn't stop me from having fun and 
                                calculate an extremely hypothetical daily survival index on Mars💅</p>
                            <p>The values I included in counting were: oxygen and water reserves, "artificial magnetic field", temperature and our suit temperature limit, pressure, and wind speed.
                                Index can vary between -1 and 100 and represents your survial chances. Each value, except for pressure, adds point to index and using some magic🪄 (aka math) calculates the result.</p>
                            <p><b><i>Abracadabra</i></b> and we have our survival chances✌️</p>                    
                        </div>
                    </div>                                                             
            </div>
            <div className="project-spec-container">
                <h3 className="project-header">Some project details</h3>
                <div className="project-body">
                    <p>For environmental conditions on Mars I used NASA Insight API accessible <a href="https://api.nasa.gov/">here</a>.</p>
                    <p>The background image was taken from NASA Mars Rover Photos API accessible <a href="https://api.nasa.gov/">here</a> as well.</p>
                </div>
            </div>
        </div>
    )
}