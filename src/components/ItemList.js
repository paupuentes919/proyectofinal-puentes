import { useEffect, useState } from "react"
import Item from "./Item"
import { products } from "./data/Products"

const ItemList = () => {
    const [items, setItems] = useState([])

    useEffect( ()=>{
        getProducts()
        .then( result => {
            setItems( result )
        })
        .catch( err => {
            console.log('err: ' + err);
        })
      }, [])

    const getProducts = () => {
        return new Promise( (resolve) => {
          setTimeout( () => {
            resolve( products )
          }, 2000)
        })
    }

    return (
        <div>
            <h1>Lista de Productos</h1>
            { items.map( item => <Item key={item.id} {...item} /> ) }
        </div>
    )
}
export default ItemList