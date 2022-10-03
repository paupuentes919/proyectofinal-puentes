import ItemCount from './ItemCount'
import pacmanfantasmas from '../images/pacmanfantasmitas.jpg'
import {Link} from "react-router-dom"
import cross from "../images/cross.png"
import circle from "../images/circle.png"

const ItemDetail = ({itemProduct}) => {
    return (
        <div className="image-text-container">
            <img className="image-hamburger" src={itemProduct.pictureURL} /> 
            <div>             
                <div className="item-title-text">{itemProduct.title}</div>
                <div className="item-description-text">{itemProduct.description}</div>
                <div className="item-description-text">Price: $ {itemProduct.price}</div>
                <div className="item-description-text">Stock: {itemProduct.stock}</div>
                <div class="counter-ghosts">
                    <ItemCount/>
                </div>
                <div className="counter-ghosts">
                <button className="btn-add">
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
        </div>
    )

}
export default ItemDetail