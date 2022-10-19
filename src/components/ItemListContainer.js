import { useEffect, useState } from "react"
import React from "react"
import ItemList from "./ItemList"
import { getProducts } from "../data/Products"
import { getProductsByCategory } from "../data/Products"
import { useParams } from "react-router-dom"
import pacman from '../images/pacman2.png'

const ItemListContainer = ({greeting}) => {
    const { category } = useParams()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        // chequeamos si hay categorías
        if (category){
         //lamamos a la función con category como parámetro. Para que haga el filtro
            getProductsByCategory(category).then((products) => {
         // seteamos el estado
             setItems(products)  
             setLoading(false)    
          })
          // si no hay categorías
        }else {
          //llamamos a la función
          getProducts().then((products) => {
            //seteamos el estado
            setItems(products)
            setLoading(false) 
          })
        }
        // ponemos el parámetro como array de dependencias para que se renderice cuando cambia de categoría
      }, [category])

    return (
        <div>
          {
            loading ? <div className='loading'>
                        <div className='row-loading'>
                          <img className='pacman-loading' src={pacman}/>
                          <div className='text-loading'>Loading...</div>
                        </div>
                      </div>
                    : <div>
                        <h2 className="background-border-cards">{greeting}</h2>
                        <ItemList items={items}></ItemList>
                      </div>
          }

        </div>
    )
}
export default ItemListContainer