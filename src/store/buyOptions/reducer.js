import * as actionTypes from '../actionTypes'
import utilityObject from '../../Utility/Utility'

const initialState = {
    buyOptions: '',
    openBuyOptions: false,
    id: ''
}
const buyOptions = (state, action) => {
    return utilityObject(state, {
        buyOptions: action.buyOptions,
            id: action.id
    })
}

const openBuyOptions = (state, action) => {
    return utilityObject(state, {
        openBuyOptions: true
    })
}

const closeBuyOptions = (state, action) => {
    return utilityObject(state, {
        openBuyOptions: false
    })
}


export const buyOptionsReducer = (state = initialState, action) => {
switch (action.type) {
    case actionTypes.BUY_OPTIONS:
        return buyOptions(state, action)
        case actionTypes.OPEN_BUY_OPTIONS:
            return openBuyOptions(state, action)
    case actionTypes.CLOSE_BUY_OPTIONS:
        return closeBuyOptions(state, action)
        
 
    default:
        return state;
}

}