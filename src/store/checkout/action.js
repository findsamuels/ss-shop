import * as actionTypes from '../actionTypes'

export const goToCheckout = (totalPrice) => {
    return{
        type: actionTypes.GO_TO_CHECKOUT,
        totalPrice: totalPrice
    }
}

export const checkoutClicked = (totalPrice) => {
    return {
        type: actionTypes.CHECKOUT_CLICKED,
        totalPrice: totalPrice
    }
}

export const checkoutNotClicked = () => {
    return {
        type: actionTypes.CHECKOUT_NOT_CLICKED,
        
    }
}