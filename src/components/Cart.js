import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"
import cross from "../images/cross.png"
import trash from '../images/trash-bin.png'

const Cart = () => {
    const { addedItems, count, removeAll, getTotal, trashAll} = useCart()

    const { removeItem } = useCart()
    const pricexquantity = (price, quantity) => {
        return price * quantity
    } 
    
    return (
        <div>
            {(count > 0 )   ?  <div>
                                    <div className="table-total center">
                                        <table className="table-center">
                                            <thead>
                                                <tr>
                                                    <th>Producto</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th>Subtotal</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            {addedItems.map(item => 
                                                    <tbody>
                                                        <tr>
                                                            <td><img className="pictureURL-table" src= {item.pictureURL}/></td>
                                                            <td className="text-table">{item.price}</td>
                                                            <td className="text-table">{item.quantity}</td>
                                                            <td className="text-table">{pricexquantity(item.price, item.quantity)}</td>
                                                            <td><button onClick={removeItem(item.id)}><img className="trash-bin" src={trash}/></button></td>
                                                        </tr>
                                                    </tbody>   )}
                                        </table>
                                    </div>
                                    <p>precio total: {getTotal()}</p>
                                    <div className="space-around">
                                        <button className="btn" onClick={trashAll}>Vaciar carrito</button>
                                        <button className="btn">Terminar mi compra</button>
                                        <Link to='/' className="btn">Seguir comprando</Link>
                                    </div>
                                </div>

                            :
                                <div className="empty-cart">
                                    <div className="spaces">Ups! Tu carrito está vacio.</div>
                                    <div className="spaces">Por favor, agregue algun producto para continuar</div>
                                    <Link to='/' className="btn-cancel">Volver al Home<img className="cross" src={cross}/></Link>
                                </div>
            }
        </div>
    )  
}
export default Cart