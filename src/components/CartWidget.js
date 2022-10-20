import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {count} = useCart()
    return (
        <div>
            <Link to='/cart' className="btn-login">
                <div className='cart-number'>
                <img className="cart-shop" src={require('../images/carrito.png')} />
                <div className='number-quantity'>{count}</div>
                </div>
            </Link>
        </div>
    )
}
export default CartWidget