import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import {products} from '../data/Products'
import {Link} from "react-router-dom"
import cross from "../images/cross.png"
import circle from "../images/circle.png"
import pacmanfantasmas from '../images/pacmanfantasmitas.jpg'

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
            <button onClick={handlerClick(counter)} className="btn-add">
                Agregar a Mi Compra
                <img className="circle" src={circle}/>
            </button>
            <img className="ghosts-pacman-image" src={pacmanfantasmas} /> 
            <Link to='/' className="btn-cancel">                    
                Volver al Home
                <img className="cross" src={cross}/>
            </Link>
            </div>
        </div>
    )
}
export default ItemCount