import trash from '../images/trash-bin.png'
import { useCart } from '../context/CartContext'
import Item from './Item'

const CartItem = ({price, quantity, pictureURL}) => {

  
    const { removeItem } = useCart()
    const pricexquantity = (price, quantity) => {
        return price * quantity
    } 

    return (
        <tbody>
            <tr>
                <td><img className="pictureURL-table" src= {pictureURL}/></td>
                <td className="text-table">{price}</td>
                <td className="text-table">{quantity}</td>
                <td className="text-table">{pricexquantity(price, quantity)}</td>
                <td ><button onClick={removeItem}><img className="trash-bin" src={trash}/></button></td>
            </tr>
        </tbody>         
    )  
}
export default CartItem