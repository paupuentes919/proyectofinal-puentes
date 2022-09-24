import { useEffect, useState } from "react"
import Item from "./Item"

const products = [
    {id: 1, title: 'Pacman', description: 'Hamburguesa doble carne, doble queso cheddar, barbacoa, cebolla crispy y panceta', price: 1000 , pictureURL: "http://burgertify.com/wp-content/uploads/fly-images/160/1UP_1920_0005_nes-900x900-c.png"},
    {id: 2, title: 'Ms Pacman', description: 'Hamburguesa doble carne, doble queso cheddar, ketchup, pepinillo y cebolla picada', price: 950 , pictureURL: "http://burgertify.com/wp-content/uploads/fly-images/157/1UP_1920_0002_Tanooki-900x900-c.png"},
    {id: 3, title: 'Blinky', description: 'Hamburguesa doble carne, doble queso cheddar, panceta y un aro de cebolla crocante', price: 1150, pictureURL:"http://burgertify.com/wp-content/uploads/fly-images/172/1UP_1920_0017_BFG-900x900-c.png"},
    {id: 4, title: 'Pinky', description: 'Hamburguesa doble carne, doble queso cheddar, tomate, lechuga, panceta y pepinillo', price: 900, pictureURL: "http://burgertify.com/wp-content/uploads/fly-images/165/1UP_1920_0010_Game-Over-900x900-c.png"},
    {id: 5, title: 'Inky', description: 'Hamburguesa doble carne, doble queso cheddar, tomate, lechuga y cebolla', price: 850, pictureURL: "http://burgertify.com/wp-content/uploads/fly-images/159/1UP_1920_0004_Piranha-Plant-900x900-c.png"},
    {id: 6, title: 'Clyde', description: 'Hamburguesa doble carne, queso provoleta grillado y salsa de guacamole', price: 1100, pictureURL: "http://burgertify.com/wp-content/uploads/fly-images/175/1UP_1920_0020_1-UP-900x900-c.png"},
]


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