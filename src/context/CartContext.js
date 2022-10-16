import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

const useCart = () => {
    return useContext(CartContext)
}

const CartProvider = ({children}) => {

    const [addedItems, setAddedItems] = useState([])

    const addItem = ({chosenItem, quantity}) => {
        console.log("quantity:", quantity);
        console.log("chosen Item:", chosenItem);
     
            const duplicateItemConditional = isInCart(chosenItem.id)

            if(duplicateItemConditional === true){
                const duplicateItem = addedItems.find(item => item.id === chosenItem.id)
        
            }
            else {
                setAddedItems (chosenItems => chosenItems.concat(chosenItem))
            }
       
        console.log("addedItems:", addedItems);   
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
        return addedItems.exist(item => item.id === itemId)
    }

    const context = {
        addedItems,
        addItem,
        removeItem,
        trashAll
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}
export {CartProvider, useCart}