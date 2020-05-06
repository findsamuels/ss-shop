import * as actionTypes from '../actionTypes'
import UtilityObject from '../../Utility/Utility'
const initialState = {
  showBackDrop: false,
  showSideBar: false,
  showCart: false,
  showLogin: false,
  showPayment: false
};

const toggleBackdrop = (state, action) => {
    return UtilityObject(state, {
        showBackDrop: state.showBackDrop = !state.showBackDrop
    })
}

const toggleSideBar = (state, action) => {
    return UtilityObject(state, {
        showSideBar: state.showSideBar = !state.showSideBar
    })
}
const closeSideBar = (state, action) => {
    return UtilityObject(state, {
        showSideBar: state.showSideBar = false
    })
}
const toggleCart = (state, action) => {
    return UtilityObject(state, {
        showCart: state.showCart = !state.showCart
    })
}
const closeCart = (state, action) => {
    return UtilityObject(state, {
        showCart: state.showCart = false
    })
}

const openLogin = (state, action) => {
    return UtilityObject(state, {
        showLogin: state.showLogin = true
    })
}
const closeLogin = (state, action) => {
    return UtilityObject(state, {
        showLogin: state.showLogin = false
    })
}

const openPayment = (state, action) => {
  return UtilityObject(state, {
    showPayment: (state.showPayment = true),
  });
};
const closePayment = (state, action) => {
  return UtilityObject(state, {
    showPayment: (state.showPayment = false),
  });
};

export const UiReducer = (state = initialState, action) => {

    switch (action.type) {
      case actionTypes.TOGGLE_BACKDROP:
        return toggleBackdrop(state, action);
      case actionTypes.TOGGLE_SIDEBAR:
        return toggleSideBar(state, action);
      case actionTypes.CLOSE_SIDEBAR:
        return closeSideBar(state, action);
      case actionTypes.TOGGLE_CART:
        return toggleCart(state, action);
      case actionTypes.CLOSE_CART:
        return closeCart(state, action);
      case actionTypes.OPEN_LOGIN:
        return openLogin(state, action);
      case actionTypes.CLOSE_LOGIN:
        return closeLogin(state, action);
      case actionTypes.OPEN_PAYMENT:
        return openPayment(state, action);
      case actionTypes.CLOSE_PAYMENT:
        return closePayment(state, action);
      default:
        return state;
    }

   
}