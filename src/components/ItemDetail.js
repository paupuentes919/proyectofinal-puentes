import ItemCount from './ItemCount'
import { useState } from 'react'
import {Link} from "react-router-dom"
import cross from "../images/cross.png"
import triangle from "../images/triangle.png"
import pacmanfantasmas from '../images/pacmanfantasmitas.jpg'
import { useCart } from '../context/CartContext'

const ItemDetail = ({itemProduct}) => {
console.log("ITEM PRODUCT", itemProduct)
const [quantity, setQuantity] = useState(0);
const { addItem } = useCart()

const handlerClick = (valueCount) => {
    setQuantity(valueCount);
    addItem(itemProduct, valueCount)
}
    
    return (
        <div className="image-text-container">
            <img className="image-hamburger" src={itemProduct.pictureURL} /> 
            <div>             
                <div className="item-title-text">{itemProduct.title}</div>
                <div className="item-description-text">{itemProduct.description}</div>
                <div className="item-description-text">Price: $ {itemProduct.price}</div>
                <div className="item-description-text">Stock: {itemProduct.stock}</div>
                {
                    quantity == 0 ?  <ItemCount initial={1} onAdd={handlerClick} stock={itemProduct.stock}/> :  <Link to="/cart" className="btn-endPurchase">Finalizar mi compra <img className="cross" src={triangle}/></Link> 
                } 
                <div className="counter-ghosts">
                    <Link to='/' className="btn-cancel">                    
                    Volver al Home
                    <img className="cross" src={cross}/>
                    </Link>
                    <img className="ghosts-pacman-image" src={pacmanfantasmas} /> 
                </div>
            </div> 
        </div>
    )

}
export default ItemDetail