import { useEffect, useState, React } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsByID} from '../data/Products'
import ItemDetail from './ItemDetail'
import pacman from '../images/pacman2.png'

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
            {loading ? <div className='loading'>
                            <div className='row-loading'>
                                <img className='pacman-loading' src={pacman}/>
                                <div className='text-loading'>Loading...</div>
                            </div>
                        </div>
                     : <div><ItemDetail itemProduct={item}/></div>}

        </div>
    )
}
export default ItemDetailContainer

