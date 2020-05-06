import * as actionTypes from '../actionTypes'

export const goToCheckout = (totalPrice) => {
    return{
        type: actionTypes.GO_TO_CHECKOUT,
        totalPrice: totalPrice
    }
}