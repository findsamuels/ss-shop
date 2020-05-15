import * as actionTypes from '../actionTypes'

export const getOrderDetails = (orderDetails) => {
    return dispatch => {
        dispatch(gettingOrder())
        dispatch(orderRetrieved(orderDetails))
    }
}

export const gettingOrder = (orderDetails) => {
    return {
        type: actionTypes.GETTING_ORDER,
       
    }
}


export const orderRetrieved = (orderDetails) => {
    return {
        type: actionTypes.ORDER_RETREIVED,
        orderDetails: orderDetails
    }
}




