import { useCart } from "../context/CartContext"
import CartItem from "./CartItem"

const Cart = () => {
    const { addedItems } = useCart()
    
    return (
        <div>
            {addedItems.map(item => <CartItem key={item.id} {...item} />)}
        </div>
    )
    
}
export default Cart