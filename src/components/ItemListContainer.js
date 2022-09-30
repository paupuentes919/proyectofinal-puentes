import { useEffect, useState } from "react"
import React from "react"
import ItemList from "./ItemList"
import { products } from "./data/Products"
import heart from "../images/heartvideogame.png"

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([])

    useEffect( ()=>{
        getProducts()
        .then( result => {
            console.log(result);
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
            <div>
                <h2 className="background-border-cards">{greeting}</h2>
                <ItemList items={items}></ItemList>
            </div>
        </div>
    )
}
export default ItemListContainer