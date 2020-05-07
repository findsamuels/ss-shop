import * as actionTypes from '../actionTypes'



export const isAuth = (token, username) => {

return{
    type: actionTypes.IS_AUTH,
    token: token,
    username: username
}
}
export const startAuth = (username, password) => {
    let token = Math.random(9) * 438
    localStorage.setItem('token', token)
    localStorage.setItem('username', username)
    return dispatch => {
        dispatch(isAuth(token, username))
    }
}
export const checkAuth = (token, username) => {

    return{
        type: actionTypes.CHECK_AUTH,
        token: token,
        username: username
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    return dispatch => {
        dispatch(removeAuth())
    }
}


export const removeAuth = () => {
   
return{
    type: actionTypes.REMOVE_AUTH,
   
}
}