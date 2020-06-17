import * as actionTypes from '../actionTypes'

export const buyOptions = (buyOptions, id) => {
    return{
        type: actionTypes.BUY_OPTIONS,
        buyOptions: buyOptions,
        id: id
    }
}

export const openBuyOptions = () => {
    return {
        type: actionTypes.OPEN_BUY_OPTIONS,
     
    }
}

export const closeBuyOptions = () => {
    return {
        type: actionTypes.CLOSE_BUY_OPTIONS,
     
    }
}


   