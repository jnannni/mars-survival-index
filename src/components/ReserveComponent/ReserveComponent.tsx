import "./reserve.css"

interface Default_Values {
    header: string,
    counter: number,
    increase?: () => void,
    decrease?: () => void,   
}

export default function ReserveComponent(props: Default_Values) {    

    return (
        <div className="reserve-container">
            <div className="reserve-info">
                <h5 className="reserve-header">{props.header}</h5>
                <span className="reserve-value">{props.counter.toFixed(1)}{props.header === "oxygen" || props.header === "water" ? "L" : "°C"}</span>
            </div>            
            <div className="buttons-container">
                <button className="btn" onClick={props.increase}><span className="material-symbols-outlined inc-icon">add</span></button>
                <button className="btn" onClick={props.decrease}><span className="material-symbols-outlined dcr-icon">remove</span></button>
            </div>            
        </div>
    )
}