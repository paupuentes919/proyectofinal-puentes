import { useEffect, useState, React } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import pacman from '../images/pacman2.png'
import { doc, getDoc, getFirestore} from "firebase/firestore";

const ItemDetailContainer = () => {
    const { id: itemId } = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProductByID = async () => {
            const db = getFirestore()    
            const queryRef = doc(db, "products", itemId);
            const response = await getDoc(queryRef);
            const newItem = {
                id: response.id,
                ...response.data(),
              };
              setTimeout(()=>{
                setItem(newItem);
                setLoading(false)
              }, 1000)
            };
            getProductByID();
          }, [itemId]);

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

