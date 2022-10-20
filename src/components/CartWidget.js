const CartWidget = () => {
    return (
        <div>
            <button className="btn-login">
                <div className='cart-number'>
                <img className="cart-shop" src={require('../images/carrito.png')} />
                <div className='number-quantity'>0</div>
                </div>
            </button>
        </div>
    )
}
export default CartWidget