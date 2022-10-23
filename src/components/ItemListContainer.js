import { useEffect, useState } from "react"
import React from "react"
import ItemList from "./ItemList"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom"
import pacman from '../images/pacman2.png'

const ItemListContainer = ({greeting}) => {
    const { category } = useParams()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    console.log("hola", category)

    useEffect(()=>{
        if (category){
          getProductsByCategory(category)
          setLoading(false)    
        }else {
          getProducts()
          setLoading(false)
        }
    }, [category])

      const getProductsByCategory = (category) => {
        const db = getFirestore()
        const itemsRef = collection(db, 'products')
        const q = query(itemsRef, where('category', '==', category) )
        getDocs( q ).then( snapshot => {
            const data = snapshot.docs.map( e => ({id: e.id, ...e.data()}) )
            setItems(data)
        })
      }

      const getProducts = () => {
        const db = getFirestore()
        const itemsRef = collection(db, 'products')
        getDocs( itemsRef ).then( snapshot => {
            const data = snapshot.docs.map( e => ({id: e.id, ...e.data()}) )
            console.table(data);
            setItems(data)
        })
      }

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