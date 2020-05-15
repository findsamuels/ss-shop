import * as actionTypes from '../actionTypes'
import utilityObject from '../../Utility/Utility'

const initialState = {
    totalPrice: 0,
    checkoutClicked: false
}

const goToCheckout = (state, action) => {

    return utilityObject(state, {
        totalPrice: action.totalPrice,
        
    })
}

const checkoutClicked = (state, action) => {

    return utilityObject(state, {
        checkoutClicked: true
    })
}

const checkoutNotClicked = (state, action) => {

    return utilityObject(state, {
        checkoutClicked: false
    })
}

export const checkoutReducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.GO_TO_CHECKOUT:
            return goToCheckout(state, action)

        case actionTypes.CHECKOUT_CLICKED:
            return checkoutClicked(state, action)

        case actionTypes.CHECKOUT_NOT_CLICKED:
            return checkoutNotClicked(state, action)
            default:
                return state
    }
}