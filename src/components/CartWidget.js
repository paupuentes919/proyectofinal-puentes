import { useCart } from '../context/CartContext'

const CartWidget = () => {
    const {count} = useCart()
    return (
        <div>
            <button className="btn-login">
                <div className='cart-number'>
                <img className="cart-shop" src={require('../images/carrito.png')} />
                <div className='number-quantity'>{count}</div>
                </div>
            </button>
        </div>
    )
}
export default CartWidget