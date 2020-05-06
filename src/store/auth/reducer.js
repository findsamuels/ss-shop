
import * as actionTypes from '../actionTypes'
import utilityObject from '../../Utility/Utility'

const initialState = {
    auth: false
}

const isAuth = (state, action) => {

    return utilityObject(state, {
        auth: state.auth = true
    })
}

const removeAuth = (state, action) => {

    return utilityObject(state, {
        auth: state.auth = false
    })
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.IS_AUTH:
            return isAuth(state, action)
        case actionTypes.REMOVE_AUTH:
            return removeAuth(state, action)
        default:
            return state
    }
}