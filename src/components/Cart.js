import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"
import cross from "../images/cross.png"
import trash from '../images/trash-bin.png'
import circle from '../images/circle.png'
import triangle from '../images/triangle.png'

const Cart = () => {
    const { addedItems, count, removeAll, getTotal, trashAll, getTotalQuantity} = useCart()

    const { removeItem } = useCart()
    const pricexquantity = (price, quantity) => {
        return price * quantity
    }

    console.log("GET TOTALITO", getTotal())
    
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
                                                    <tbody key={item.id}>
                                                        <tr>
                                                            <td><img className="pictureURL-table" src= {item.pictureURL}/></td>
                                                            <td className="text-table">$ {item.price}</td>
                                                            <td className="text-table">{item.quantity}</td>
                                                            <td className="text-table">$ {pricexquantity(item.price, item.quantity)}</td>
                                                            {<td><button onClick={() => removeItem(item.id)}><img className="trash-bin" src={trash}/></button></td>}
                                                        </tr>
                                                    </tbody>   )}
                                        </table>
                                    </div>
                                    <div className="outside-table">
                                        <div>
                                            <div className="total-price">
                                                <p>Precio total: ${getTotal()}</p>
                                            </div>
                                            <div className="total-price">
                                                <p>Cantidad total: {getTotalQuantity()}</p>
                                            </div>
                                                <Link to="/checkout" total = {getTotal()} className="btn btn-finish-purchase">Terminar mi compra<img className="cross" src={triangle}/></Link>
                                        </div>
                                        <div>
                                            <div className="">
                                                <button className="btn remove-trash" onClick={trashAll}>Vaciar carrito<img className="cross" src={cross}/></button>
                                                <Link to='/' className="btn continue-buying">Seguir comprando<img className="cross" src={circle}/></Link>
                                            </div>
                                        </div>
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