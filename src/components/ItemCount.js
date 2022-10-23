import { useState} from "react";
import circle from "../images/circle.png"

const ItemCount = ({initial, onAdd, stock}) => {

    const [counter, setCounter] = useState(initial)
    
    const clickHandlerPlus = () => {
        counter == stock ? setCounter(stock)  : setCounter(counter+1)
    }

    const clickHandlerMinus = () => {
        counter > initial ? setCounter(counter-1) : setCounter(initial)
    }

    return (
        <div>
            <div className="btn-purcharse">
                <button onClick={clickHandlerMinus} className="btn-operation-purchase">
                    -
                </button>
                <div className="counter">{counter}</div>
                <button onClick={clickHandlerPlus} className="btn-operation-purchase">
                    +
                </button>
            </div>
            <div className="counter-ghosts">
                <button onClick={() => onAdd(counter)} className="btn-add">
                    Agregar a Mi Compra
                    <img className="circle" src={circle}/>
                </button>
            </div>
        </div>
    )
}
export default ItemCount