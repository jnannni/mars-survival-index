import Astronaut from "@components/Astronaut";
import Rover from "@components/Rover";
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