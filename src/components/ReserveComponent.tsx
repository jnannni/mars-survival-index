interface Default_Values {
    header: string,
    counter: number,
    increase?: () => void,
    decrease?: () => void,   
}

export default function ReserveComponent(props: Default_Values) {    

    return (
        <div>
            <h5>{props.header}</h5>
            <span>{props.counter.toFixed(1)}</span>
            <button className="btn btn-primary" onClick={props.increase}><span className="material-symbols-outlined">add</span></button>
            <button className="btn btn-primary" onClick={props.decrease}><span className="material-symbols-outlined">remove</span></button>
        </div>
    )
}