
import * as actionTypes from '../actionTypes'
import utilityObject from '../../Utility/Utility'


const initialState = {
    auth: null,
    username: '',
    userId: '',
    loading: false,
    registerErr: null,
    loginErr: null
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
        loading: false,
        registerErr: null,
        loginErr: null
    })
}

const registerAuthFailed = (state, action) => {
    console.log(action.auth)
    return utilityObject(state, {
        registerErr: action.err,
        loading: false
    })
}

const loginAuthFailed = (state, action) => {
    console.log(action.auth)
    return utilityObject(state, {
        loginErr: action.err,
        loading: false
    })
}

const removeAuth = (state, action) => {
    
    return utilityObject(state, {
       auth: null,
       username: null,
       
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
        case actionTypes.LOGIN_AUTH_FAILED:
            return loginAuthFailed(state, action)
        case actionTypes.REGISTER_AUTH_FAILED:
            return registerAuthFailed(state, action)
        case actionTypes.REMOVE_AUTH:
            return removeAuth(state, action)
        case actionTypes.CHECK_AUTH:
            return checkAuth(state, action)
        default:
            return state
    }
}