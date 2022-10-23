import { useEffect, useState, React } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import pacman from '../images/pacman2.png'
import { doc, getDoc, getFirestore, query, where } from "firebase/firestore";

const ItemDetailContainer = () => {
    const { id: itemId } = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    
    // useEffect(() => {
    //     getProductsByID(itemId).then( response => {
    //         console.log("quiero ver que traeeeeeeeeeeeeeee", response)
    //         setItem(response);
    //         setLoading(false)
    //         }
    //     )
    // }, [])

    useEffect(() => {
        // crea una función que se va a encargar de traernos el producto
            const getProductByID = async () => {
                const db = getFirestore()    
        // creas una variable que traiga de la base de datos los productos que coincidan con el id del parámetro (useParams)
              const queryRef = doc(db, "products", itemId);
        // guardarlos en una variable
              const response = await getDoc(queryRef);
        // una vez que los tenés, crea un nuevo objeto con ese dato.
              const newItem = {
                id: response.id,
                ...response.data(),
              };
              setTimeout(()=>{
        // y seteas el estado
                setItem(newItem);
                setLoading(false)
              }, 1000)
            };
        // llama a la función
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

