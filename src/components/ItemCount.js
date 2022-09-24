import {useState} from "react";

const ItemCount = () => {

    const [counter, setCounter] = useState(0)

    const clickHandlerPlus = () => {
        setCounter(counter+1)
    }

    const clickHandlerMinus = () => {
        counter > 0 ? setCounter(counter-1) : setCounter(0)
    }

    return (
        <div className="btn-purcharse">
            <button onClick={clickHandlerMinus} className="btn-operation-purchase">
                -
            </button>
            <div className="counter">{counter}</div>
            <button onClick={clickHandlerPlus} className="btn-operation-purchase">
                +
            </button>
        </div>
    )
}
export default ItemCount