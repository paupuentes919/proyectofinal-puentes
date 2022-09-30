import {useEffect, useState} from "react";
import { products } from "./data/Products"
import { useParams } from 'react-router-dom'

const ItemCount = () => {

    const [counter, setCounter] = useState(0)
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