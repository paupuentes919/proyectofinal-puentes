import { useEffect } from "react";
import { useCart } from "../context/CartContext"

const Cart = () => {


    const { addedItems } = useCart()
    console.log(addedItems);

    const subtotal = pricexquantity()

    pricexquantity = (addedItems) => {
        return addedItems.price * addedItems.quantity
    }
      

    return (
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{addedItems.pictureURL}</td>
                    <td>{addedItems.price}</td>
                    <td>{addedItems.quantity}</td>
                    <td>{subtotal}</td>
                    <td><button>tachito</button></td>
                </tr>
            </tbody>
        </table>
    )
    
}
export default Cart