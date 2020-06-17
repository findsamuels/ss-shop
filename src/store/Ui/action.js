
import * as actionTypes from '../actionTypes'

export const openBackdrop = () => {
return{
    type: actionTypes.OPEN_BACKDROP
}
}

export const closeBackdrop = () => {
    return {
        type: actionTypes.CLOSE_BACKDROP
    }
}


export const showSideBarBackdrop = () => {
    return {
        type: actionTypes.SHOW_SIDE_BACKDROP
    }
}

export const closeSideBarBackdrop = () => {
    return {
        type: actionTypes.CLOSE_SIDE_BACKDROP
    }
}




export const openSideBar = () => {
    return {
        type: actionTypes.OPEN_SIDEBAR
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