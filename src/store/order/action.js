import * as actionTypes from '../actionTypes'
import {axiosInstance, axiosDatabase} from '../../axios/axios'
export const startOrder = (deliveryDetails, cartItems ) => {
    console.log(cartItems)
    console.log(deliveryDetails)
    const allOrder = {
        deliveryDetails,
        cartItems,
        totalPrice: deliveryDetails.totalPrice
    }
    return dispatch => {
        let userId = localStorage.getItem('userId')
        let token = localStorage.getItem('token')
        dispatch(orderStart())
        let queryParams = `?auth=${token}&userId=${userId}`
        axiosInstance.post('/orders.json' + queryParams, allOrder)
     .then(res => {
        console.log(res.data)
         console.log(res.data.localId)
         dispatch(orderSuccess(allOrder, res.data.localId))
     })
     .catch(err => {
         console.log(err.message)
         dispatch(orderfailed())
     })
    }
}

export const orderStart = () => {
    return {
        type: actionTypes.ORDER_START,
       
    }
}


export const orderSuccess = (orderDetails, id) => {
    return {
        type: actionTypes.ORDER_SUCCESS,
        orderDetails: orderDetails,
        orderId: id
    }
}

export const orderfailed = () => {
    return {
        type: actionTypes.ORDER_FAILED,
        
    }
}




