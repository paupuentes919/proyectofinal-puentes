import { useEffect, useState, React } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsByID} from '../data/Products'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const { id: itemId } = useParams()
    const [item, setItem] = useState({})
    
    useEffect(() => {
        getProductsByID(itemId).then( response => {
            setItem(response);
            }
        )
    }, [])

    return (
        <div><ItemDetail itemProduct={item}/></div>
    )
}
export default ItemDetailContainer

