import * as actionTypes from '../actionTypes'
import utilityObject from '../../Utility/Utility'

const initialState = {
orderDetails: null,
loading: true
}

const gettingOrder = (state, action) => {
    return utilityObject(state, {
        loading: true
    })
}

const orderRetrieved = (state, action) => {
    return utilityObject(state, {
        orderDetails: action.orderDetails,
        loading: false
    })
}

export const orderItemReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ORDER_RETREIVED:
            return orderRetrieved(state, action)    
        case actionTypes.GETTING_ORDER:
            return gettingOrder(state, action)
        default:
           return state
    }
}

