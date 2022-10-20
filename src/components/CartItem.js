import trash from '../images/trash-bin.png'
import { useCart } from '../context/CartContext'
import Item from './Item'

const CartItem = ({price, quantity, pictureURL}) => {

  
    const { removeItem, addedItems } = useCart()
    console.log("addeeeeed",addedItems)
    const pricexquantity = (price, quantity) => {
        return price * quantity
    } 

    return (
        <div className="table-total">
            <div className="center">
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
                    <tbody>
                        <tr>
                            <td><img className="pictureURL-table" src= {pictureURL}/></td>
                            <td className="text-table">{price}</td>
                            <td className="text-table">{quantity}</td>
                            <td className="text-table">{pricexquantity(price, quantity)}</td>
                            <td ><button onClick={removeItem}><img className="trash-bin" src={trash}/></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>


        </div>
      </div>
    )
    
}
export default CartItem