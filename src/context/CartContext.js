import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

const useCart = () => {
    return useContext(CartContext)
}

const CartProvider = ({children}) => {

    const [addedItems, setAddedItems] = useState([])

    const addItem = (chosenItem, quantity) => {
          const cart = {
            ...chosenItem,
            quantity
          }     
          if(isInCart(cart.id)){
              addedItems.map(element => {
                if(element.id === cart.id)  {
                  element.quantity += cart.quantity
                }
                return(element)
            })
        
        }
        else {
              setAddedItems([...addedItems, cart])   
            }
        console.log("newObject", addedItems);
    }
        
    const removeItem = (unchosenItemId) => {
         const deletedItem = addedItems.filter(item => item.id !== unchosenItemId)
         setAddedItems([...deletedItem])
    }

    const trashAll = () => {
        setAddedItems([])
    }

    const isInCart = (itemId) => {
        return addedItems.some(item => item.id === itemId)
    }

    const getTotal = () => {
        let total = 0
        addedItems.forEach(prod => {
            total = total + prod.price * prod.quantity
        })
        return total
      }

      const getTotalQuantity = () => {
        let totalQuantity = 0
        addedItems.forEach(prod => {
            totalQuantity = totalQuantity + prod.quantity 
        })
        return totalQuantity
      }

    const context = {
        addedItems,
        addItem,
        removeItem,
        trashAll,
        count: addedItems.length,
        getTotal,
        getTotalQuantity
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}
export {CartProvider, useCart}