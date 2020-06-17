import * as actionTypes from '../actionTypes'
import utilityObject from '../../Utility/Utility'


const initialState = {
   
    cartItemArray: [],
    ItemId: null,
   amountInCart: 0,
    itemQuantity: 1,
    itemPrice: 0,
    itemModified: false,

}

const addToCart = (state, action) => {
 
    let itemArray = state.cartItemArray    

    let id = Math.random().toString(36).replace(/[^a-z]+/g, '')
       
        itemArray.push({
            id: action.itemId,
            config: action.cartItems
        })

    
    return utilityObject(state, {
        cartItemArray: itemArray,  
        amountInCart: action.amountInCart,
        
    })

}


const removeFromCart = (state, action) => {
    let filteredItem = []
 
    filteredItem = state.cartItemArray.filter(itemToFilter => {
        return itemToFilter.id !== action.itemId
    })


    return utilityObject(state, {
        cartItemArray: filteredItem,
        amountInCart: action.amountInCart
        
    })

}

const clearCart = (state, action) => {
      return utilityObject(state, {
        cartItemArray: action.emptyCart,
        amountInCart: 0
      });

}

export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return addToCart(state, action)
        case actionTypes.REMOVE_FROM_CART:
            return removeFromCart(state, action)
            case actionTypes.CLEAR_CART:
            return clearCart(state, action)
           
            
    
        default:
            return state;
    }
}

