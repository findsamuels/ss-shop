import * as actionType from '../actionTypes'



export const addToCart = (cartItems, itemId, amountInCart) => {
    return {
        type: actionType.ADD_TO_CART,
        cartItems: cartItems,
        itemId: itemId,
        amountInCart: amountInCart
    }

}

export const removeFromCart = (itemId, shopItem, amountInCart) => {

    return {
        type: actionType.REMOVE_FROM_CART,
        itemId: itemId,
        shopItem: shopItem,
        amountInCart: amountInCart

    }

}

export const updateCartCount = (amountInCart) => {
    return{
        type: actionType.UPDATE_CART_COUNT,
        amountInCart: amountInCart
    }
}








