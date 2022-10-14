import ItemCount from './ItemCount'
import { useState } from 'react'
import {Link} from "react-router-dom"
import cross from "../images/cross.png"
import pacmanfantasmas from '../images/pacmanfantasmitas.jpg'
import Cart from './Cart'

const ItemDetail = ({itemProduct}) => {

const [quantity, setQuantity] = useState(0);

const handlerClick = (valueCount) => {
    setQuantity(valueCount);
    console.log("valueCount: ", valueCount);
    console.log("valueCount: ", itemProduct);
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
                    quantity == 0 ?  <ItemCount initial={1} onAdd={handlerClick} /> :  <Link to="/cart" >Finalizar mi compra </Link> 
                } 
                <div className="counter-ghosts">
                    <Link to='/' className="btn-cancel">                    
                    Volver al Home
                    <img className="cross" src={cross}/>
                    </Link>
                    <img className="ghosts-pacman-image" src={pacmanfantasmas} /> 
                </div>
                
                <Cart/>
            </div> 
        </div>
    )

}
export default ItemDetail