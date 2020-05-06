import * as actionTypes from '../actionTypes'
import utilityObject from '../../Utility/Utility'

const initialState = {
    totalPrice: 0
}

const goToCheckout = (state, action) => {

    return utilityObject(state, {
        totalPrice: action.totalPrice
    })
}

export const checkoutReducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.GO_TO_CHECKOUT:
            return goToCheckout(state, action)
            default:
                return state
    }
}