
import * as actionTypes from '../actionTypes'
import utilityObject from '../../Utility/Utility'

const initialState = {
    auth: null,
    username: ''
}

const isAuth = (state, action) => {
console.log(action.auth)
    return utilityObject(state, {
        auth: action.token,
        username: action.username
    })
}

const removeAuth = (state, action) => {
    
    return utilityObject(state, {
       auth: null
    })
}

const checkAuth = (state, action) => {
    
    return utilityObject(state, {
        auth: action.token,
        username: action.username
    })
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.IS_AUTH:
            return isAuth(state, action)
        case actionTypes.REMOVE_AUTH:
            return removeAuth(state, action)
        case actionTypes.CHECK_AUTH:
            return checkAuth(state, action)
        default:
            return state
    }
}