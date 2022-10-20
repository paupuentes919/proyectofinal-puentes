import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

const useCart = () => {
    return useContext(CartContext)
}

const CartProvider = ({children}) => {

    const [addedItems, setAddedItems] = useState([])

    const addItem = (chosenItem, quantity) => {
        // creas un nuevo objeto con los parámetros que recibís
          const cart = {
            ...chosenItem,
            quantity
          }     
        // si está en el carrito, analizas si este producto está en isInCart
          if(isInCart(cart.id)){
        // si está, vas a hacer un map
              addedItems.map(element => {
          // si coinciden los id's
                if(element.id === cart.id)  {
        // suma la cantidad
                  element.quantity += cart.quantity
                }
                return(element)
                })
        
            }
        // si no va a agregar el producto
        else {
              setAddedItems([...addedItems, cart])   
            }
        console.log("newObject", addedItems);
    }
        
    const removeItem = (unchosenItemId) => {

         const deleteItemConditional= isInCart(unchosenItemId)

         if(deleteItemConditional === true){
            const deleteItem = addedItems.find(item => item.id === unchosenItemId)
            deleteItem.removeItem(deleteItem)
         }
    }

    const trashAll = () => {
        addedItems.clear()
    }

    const isInCart = (itemId) => {
        return addedItems.some(item => item.id === itemId)
    }

    const context = {
        addedItems,
        addItem,
        removeItem,
        trashAll,
        count: addedItems.length
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}
export {CartProvider, useCart}