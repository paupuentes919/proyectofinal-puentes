import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const products = [
    {id: 1, title: 'Pacman', category: 'burger', description: 'Hamburguesa con 240 gr. de carne, doble queso cheddar, panceta, bbq jack daniels y cebolla', price: 1590 , stock: 10, pictureURL: "http://burgertify.com/wp-content/uploads/fly-images/160/1UP_1920_0005_nes-900x900-c.png"},
    {id: 2, title: 'Ms Pacman', category: 'burger', description: 'Hamburguesa 240 gr de carne, doble queso cheddar, lechuga,tomate,cebolla morada y salsa Beaten up', price: 1550, stock: 6, pictureURL: "http://burgertify.com/wp-content/uploads/fly-images/159/1UP_1920_0004_Piranha-Plant-900x900-c.png"},
    {id: 3, title: 'Blinky', category: 'burger', description: 'Hamburguesa con 240gr de carne, doble queso cheddar, deep fried mozzarella square, panceta y salsa marinara', price: 1780, stock: 5, pictureURL:"http://burgertify.com/wp-content/uploads/fly-images/172/1UP_1920_0017_BFG-900x900-c.png"},
    {id: 4, title: 'Pinky', category: 'burger', description: 'Hamburguesa con 240 gr de carne, doble queso cheddar, doble panceta, pickles agridulces, lechuga, cebolla y salsa Little Mac', price: 1690, stock: 8, pictureURL: "http://burgertify.com/wp-content/uploads/fly-images/165/1UP_1920_0010_Game-Over-900x900-c.png"},
    {id: 5, title: 'Inky', category: 'burger', description: 'Hamburguesa con 240gr de carne, queso cheddar, pickles agridulces, cebolla en cubos, mostaza y ketchup heinz', price: 1350 , stock: 12, pictureURL: "http://burgertify.com/wp-content/uploads/fly-images/157/1UP_1920_0002_Tanooki-900x900-c.png"},
    {id: 6, title: 'Clyde', category: 'burger', description: 'Hamburguesa con 240gr de carne, guacamole y pico de gallo y provoleta grilled', price: 1780, stock: 12, pictureURL: "http://burgertify.com/wp-content/uploads/fly-images/175/1UP_1920_0020_1-UP-900x900-c.png"},
    {id: 7, title: 'Cylindria', category: 'burger', description: 'Hamburguesa con 240 gr. de carne, queso halloumi frito, lechuga, tomate, cebolla morada y salsa tártara', price: 1750, stock: 15, pictureURL: "https://images.rappi.com.ar/products/1802234-1606920027984.jpg?e=webp&d=800x800&q=80"},
    {id: 8, title: 'Bashful', category: 'burger', description: 'Hamburguesa con 240 gr. De carne, queso halloumi frito, doble queso cheddar, panceta y salsa mil islas', price: 1750, stock: 10, pictureURL: "https://images.rappi.com.ar/products/1802230-1606918049355.jpg?e=webp&d=800x800&q=80"},
    {id: 9, title: 'PacMaster', category: 'burger', description: 'Hamburguesa con 240gr de carne, doble queso cheddar, panceta, aros de cebolla, salsa gold mustard bbq', price: 1700, stock: 12, pictureURL: "https://images.rappi.com.ar/products/1101357-1599758103137.png?e=webp&d=800x800&q=80"},
    {id: 10, title: 'Tequeños Pac-Cheese', category: 'sidedish', description: '6 Tequeños en masa de hojaldre suave rellenos de queso, acompañados con salsa aioli', price: 1190, stock: 15, pictureURL: "https://images.rappi.com.ar/products/989985-1599758071773.png?e=webp&d=800x800&q=80"},
    {id: 11, title: 'Tequeños Pac-Chocolate', category: 'sidedish', description: '6 tequeños en masa de hojaldre suave rellenos de chocolate', price: 1190, stock: 10, pictureURL: "https://images.rappi.com.ar/products/989991-1599758082980.png?e=webp&d=800x800&q=80"},
    {id: 12, title: 'Papas Fritas', category: 'sidedish', description: 'Ración de papas fritas', price: 550, stock: 10, pictureURL: "https://images.rappi.com.ar/products/387280-1599758066654.png?e=webp&d=800x800&q=80"},
    {id: 13, title: 'Coca Cola', category: 'drink', description: 'Gaseosa regular linea Coca Cola', price: 320, stock: 20, pictureURL: "https://images.rappi.com.ar/products/387283-1588184673762.jpg?e=webp&d=800x800&q=80"},
    {id: 14, title: 'Coca Cola Zero', category: 'drink', description: 'Gaseosa dietetica linea Coca Cola', price: 320, stock: 15, pictureURL: "https://images.rappi.com.ar/products/1137143-1588022913763.jpg?e=webp&d=800x800&q=80"},
    {id: 15, title: 'Sprit', category: 'drink', description: 'Gaseosa regular Sprite', price: 320, stock: 10, pictureURL: "https://images.rappi.com.ar/products/1137211-1587752625507.jpg?e=webp&d=800x800&q=80"},
    {id: 16, title: 'Schweppes', category: 'drink', description: 'Agua tonica Schweppes', price: 320, stock: 8, pictureURL: "https://images.rappi.com.ar/products/1111058-1586463929464.jpg?e=webp&d=800x800&q=80"},
    {id: 17, title: 'Schweppes Pomelo', category: 'drink', description: 'Schweppes pomelo sin azucar', price: 320, stock: 10, pictureURL: "https://images.rappi.com.ar/products/1111057-1586463918179.jpg?e=webp&d=800x800&q=80"},
    {id: 18, title: 'Agua', category: 'drink', description: 'Agua sin gas', price: 500, stock: 20, pictureURL: "https://images.rappi.com.ar/products/1141516-1588023111775.png?e=webp&d=800x800&q=80"},
]

export const getProductsByCategory = (category) => {
    return new Promise( (resolve) => {
    const itemsFiltered = products.filter( item => item.category === category)
      setTimeout( () => {
        resolve(itemsFiltered)
      }, 2000)
    })
}

// export const getProducts = () => {
//     return new Promise( (resolve) => {
//       setTimeout( () => {
//         resolve(products)
//       }, 2000)
//     })
// }

export const getProducts= async () =>{
  try {
    const db = getFirestore()
    const itemRef = collection(db,"products")
    const snapshot = await getDocs(itemRef)
    console.table(snapshot)
    const data = snapshot.docs.map((doc) => doc = { id:doc.id,...doc.data()})
      return data
  } catch (error) {
    console.log(error)
  }
} 

//  export const getProductsByID = (itemId) => {
//      return new Promise((resolve, reject) => {
//      setTimeout( () => {
//          resolve(products.find( product => product.id === Number(itemId)))
//      },2000);
//      })
//  }

// export const getProductsByIDd = (id) => {
//   const db = getFirestore()
//   const itemRef = collection(db,'products')
//   const q = query(itemRef, where ('id', '==', id))
//   getDocs(q).then(snapshot => {
//     const data = snapshot.docs.map (e => ({id: e.id, ...e.data()}))
//     console.table(data);
//     return data;
//   })
// }

// export const getProductsByID= async (id) =>{
//    try{
//     console.log(id) // me trae bien el ID
//     const db = getFirestore()
//     const itemRef = collection(db,"products")
//     const q = query(itemRef, where('id', '==', id) )
//     console.log("veeeer", q)
//     const snapshot = await getDocs( q )
//     console.log("veeeer22222", snapshot)
//     const data = snapshot.docs.map( e => ({id: e.id, ...e.data()}) )
//          console.table(data);
//          return data

//    } catch(error){
//      console.log(error)
//    }  
// } 

export {products}
