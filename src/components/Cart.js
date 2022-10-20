import { useCart } from "../context/CartContext"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"
import cross from "../images/cross.png"

const Cart = () => {
    const { addedItems, count, removeAll, getTotal, trashAll} = useCart()
    
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
                                            {addedItems.map(item => <CartItem key={item.id} {...item} />)}
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