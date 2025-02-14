import Astronaut from "./Astronaut";
import Rover from "./Rover";

//contains 2 models that users can interact with and as a result manipulate their survival index
export default function InteractiveModel() {     
    return (
        <div>
            <Rover />
            <Astronaut />
        </div>
    )
}