
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

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.IS_AUTH:
            return isAuth(state, action)
        default:
            return state
    }
}