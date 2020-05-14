
import * as actionTypes from '../actionTypes'
import utilityObject from '../../Utility/Utility'


const initialState = {
    auth: null,
    username: '',
    userId: '',
    loading: false
}

const startAuth = (state, action) => {
    console.log(action.auth)
    return utilityObject(state, {
     
        loading: true
    })
}

const isAuth = (state, action) => {
console.log(action.auth)
    return utilityObject(state, {
        auth: action.token,
        username: action.username,
        userId: action.userId,
        loading: false
    })
}

const authFailed = (state, action) => {
    console.log(action.auth)
    return utilityObject(state, {
    
        loading: false
    })
}

const removeAuth = (state, action) => {
    
    return utilityObject(state, {
       auth: null,
       username: null
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
        case actionTypes.START_AUTH:
            return startAuth(state, action)
        case actionTypes.IS_AUTH:
            return isAuth(state, action)
        case actionTypes.AUTH_FAILED:
            return authFailed(state, action)
        case actionTypes.REMOVE_AUTH:
            return removeAuth(state, action)
        case actionTypes.CHECK_AUTH:
            return checkAuth(state, action)
        default:
            return state
    }
}