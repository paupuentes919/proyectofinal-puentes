import { useEffect, useState, React } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsByID} from '../data/Products'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const { id: itemId } = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getProductsByID(itemId).then( response => {
            setItem(response);
            setLoading(false)
            }
        )
    }, [])

    return (
        <div>
            {loading ? <div>Loading...</div>
                     : <div><ItemDetail itemProduct={item}/></div>}

        </div>
    )
}
export default ItemDetailContainer

