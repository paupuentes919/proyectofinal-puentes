import { useEffect, useState, React } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './data/Products'
import ItemCount from './ItemCount'

const ItemDetailContainer = () => {
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

    const Item = ({itemProduct}) => {
        return (
            <div className="image-text-container">
                <img className="image-hamburger" src={itemProduct.pictureURL} /> 
                <div>             
                    <div className="item-title-text">{itemProduct.title}</div>
                    <div className="item-description-text">{itemProduct.description}</div>
                    <div className="item-description-text">Price: $ {itemProduct.price}</div>
                    <div className="item-description-text">Stock: {itemProduct.stock}</div>
                    <ItemCount/>
                </div> 
            </div>
        )

    }

    return (
        <div><Item itemProduct={item}/></div>
    )
}
export default ItemDetailContainer

