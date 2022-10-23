import { useState } from "react"
import { useCart } from "../context/CartContext"
import {addDoc, collection, doc, getFirestore, updateDoc} from 'firebase/firestore'

const Checkout = () => {


    const { addedItems, getTotalQuantity, getTotal } = useCart()
    const [user, setUser] = useState({})


    const updateUser = (event) => {
        setUser( user => ({...user, [event.target.name]: event.target.value }))
    }

    const putOrder = () => {
        const order = {
            buyer: user,
            items: addedItems,
            total: getTotal
        }
        console.log(order)
        const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    addDoc( ordersCollection, order ).then( ({id}) => {
        console.log( id );
        alert( id )
    })



    }

    return (
        <div className="flex justify-center items-center mx-auto xl:max-w-7xl mx-6 xl:mx-auto text-pacman background-checkout">
            <div className="flex w-full flex-col justify-center items-center">
                <h1 className="font-medium text-lg text-gray-800 tracking-wider leading-tight uppercase self-start mb-6 margin-px text-pacman">Checkout</h1>
                <div className="flex w-full flex-col lg:flex-row justify-start items-start">
                    <div className="flex flex-col self-start w-full md:w-1/2 mr-6 border-class">
                        <h2>Resumen</h2>
                        <div className="padding-top">
                            <p>Cantidad total: {getTotalQuantity()}</p>
                        </div>
                        <div className="padding-top"> 
                            <p>Precio total: ${getTotal()}</p>
                        </div>
                    </div>
                    <div className="flex flex-col self-start w-full md:w-1/2 mr-6 border-class">
                        <h2>Datos de Facturacion</h2>
                        <div>
                            <div className='m-3'><input onChange={updateUser} placeholder="Nombre" name='name' type='text' className="text-black p-2"/></div>
                            <div className='m-3'><input onChange={updateUser} placeholder="Apellido" name='surname' type='text' className="text-black p-2"/></div>
                            <div className='m-3'><input onChange={updateUser} placeholder="Telefono" name='phone' type='number' className="text-black p-2"/></div>
                            <div className='m-3'><input onChange={updateUser} placeholder="Email" name='email' type='email' className="text-black p-2"/></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-content">
                        <button className="btn" onClick={putOrder}>Comprar</button>
                </div>
            </div>
        </div>
    )
}
export default Checkout