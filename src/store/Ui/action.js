
import * as actionTypes from '../actionTypes'

export const toggleBackdrop = () => {
return{
    type: actionTypes.TOGGLE_BACKDROP
}
}

export const togglesSideBar = () => {
    return {
        type: actionTypes.TOGGLE_SIDEBAR
    }
}


export const closeSideBar = () => {
    return {
        type: actionTypes.CLOSE_SIDEBAR
    }
}
export const toggleCart = () => {
    return {
        type: actionTypes.TOGGLE_CART
    }
}

export const closeCart = () => {
    return {
        type: actionTypes.CLOSE_CART
    }
}

export const openLogin = () => {
    return {
        type: actionTypes.OPEN_LOGIN
    }
}

export const closeLogin = () => {
    return {
        type: actionTypes.CLOSE_LOGIN
    }
}

export const openPayment = () => {
  return {
    type: actionTypes.OPEN_PAYMENT
  }
};

export const closePayment = () => {
         return {
           type: actionTypes.CLOSE_PAYMENT
         }
       };