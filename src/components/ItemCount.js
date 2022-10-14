import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import {products} from '../data/Products'
import circle from "../images/circle.png"


const ItemCount = ({initial, onAdd}) => {

    const [counter, setCounter] = useState(initial)
    const { id: itemId } = useParams()
    const [item, setItem] = useState({})
    
    useEffect(() => {
        getProducts().then( response => {
            setItem(response);
            }
        )
    }, [])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(products.find( product => product.id === Number(itemId)))
        },2000);
        })
    }

    const clickHandlerPlus = () => {
        counter == item.stock ? setCounter(item.stock)  : setCounter(counter+1)
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