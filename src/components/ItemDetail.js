import ItemCount from './ItemCount'

const ItemDetail = ({itemProduct}) => {

const handlerClick = (valueCount) => {
    console.log(valueCount)
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
                <ItemCount handlerClick={handlerClick}/>
                </div>
            </div> 
        </div>
    )

}
export default ItemDetail