import ItemCount from './ItemCount'
import { useState } from 'react'

const ItemDetail = ({itemProduct}) => {

const [quantity, setQuantity] = useState(0);

const handlerClick = (valueCount) => {
    setQuantity = valueCount;
    console.log("valueCount: ", valueCount);
}
    

    return (
        <div className="image-text-container">
            <img className="image-hamburger" src={itemProduct.pictureURL} /> 
            <div>             
                <div className="item-title-text">{itemProduct.title}</div>
                <div className="item-description-text">{itemProduct.description}</div>
                <div className="item-description-text">Price: $ {itemProduct.price}</div>
                <div className="item-description-text">Stock: {itemProduct.stock}</div>
                <div className="counter-ghosts">
                <ItemCount initial={1} onAdd={handlerClick} />
                </div>
            </div> 
        </div>
    )

}
export default ItemDetail