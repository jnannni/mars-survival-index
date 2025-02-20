import marsLoader from "@assets/loading-mars.png";
import "./loading.css";

export default function Loading() {
    return (
        <div className="loading-container">
            <div className="loadingio-spinner-eclipse">
                <div className="ldio-yzaezf3dcmj">
                    <div></div>
                </div>
            </div>
            <img className="mars-loader" src={marsLoader}/>
        </div>
    )
}