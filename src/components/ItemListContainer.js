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

    useEffect(() => {
      const db = getFirestore()
      const getData = async () => {
        const queryRef = !category
          ? collection(db, "products")
          : query(
              collection(db, "products"),
              where("category", "==", category)
            );
        const response = await getDocs(queryRef);
        const productos = response.docs.map((doc) => {
          const newProduct = {
            ...doc.data(),
            id: doc.id,
          };
          return newProduct;
        });
        setTimeout(()=>{
          setItems(productos);
          setLoading(false)
        }, 2000)
  
      };
      getData();
    }, [category]);

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