import * as actionTypes from '../actionTypes'
import utilityObject from '../../Utility/Utility'

const initialState = {
orderDetails: null,
loading: false
}

const orderStart = (state, action) => {
    return utilityObject(state, {
        loading: true
    })
}

const orderSuccess = (state, action) => {
    return utilityObject(state, {
        orderDetails: action.orderDetails,
        loading: false
    })
}

const orderFailed = (state, action) => {
    return utilityObject(state, {
        orderDetails: action.orderDetails,
        loading: false
    })
}

export const orderReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ORDER_START:
            return orderStart(state, action)    
        case actionTypes.ORDER_SUCCESS:
            return orderSuccess(state, action)
        case actionTypes.ORDER_FAILED:
            return orderFailed(state, action)
        default:
           return state
    }
}

