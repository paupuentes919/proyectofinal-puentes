import { useEffect, useState, React } from 'react'
import { useParams } from 'react-router-dom'
import { products } from "../data/Products"
import ItemDetail from './ItemDetail'

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

    return (
        <div><ItemDetail itemProduct={item}/></div>
    )
}
export default ItemDetailContainer

