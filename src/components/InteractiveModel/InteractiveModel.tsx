import Astronaut from "../Astronaut/Astronaut";
import Rover from "../Rover/Rover";
import "./model.css";

//contains 2 models that users can interact with and as a result manipulate their survival index
export default function InteractiveModel() {     
    return (
        <div className="interactive-model-container">
            <Rover />
            <Astronaut />
        </div>
    )
}