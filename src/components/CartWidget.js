import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {getTotalQuantity} = useCart()
    console.log("Ver", getTotalQuantity())
    return (
        <div>
            <Link to='/cart' className="btn-login">
                <div className='cart-number'>
                <img className="cart-shop" src={require('../images/carrito.png')} />
                <div className='number-quantity'>{getTotalQuantity()}</div>
                </div>
            </Link>
        </div>
    )
}
export default CartWidget