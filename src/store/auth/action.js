import * as actionTypes from '../actionTypes'
import axios from '../../axios/axios'


export const isAuth = (token, userId, username) => {

return{
    type: actionTypes.IS_AUTH,
    token: token,
    userId: userId,
    username: username,
}
}

export const authFailed = () => {

    return {
        type: actionTypes.AUTH_FAILED,
        
    }
}

export const startAuth = () => {

    return {
        type: actionTypes.START_AUTH,
        
    }
}

export const register = (  username, email, password) => {
   
    return dispatch => {
dispatch(startAuth())
    const authData = {
        email: email,
        password: password,
        displayName: username,
        returnSecureToken: true
    }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZzh8XT-QDBqwMZIPy2Qil1ow4idiCDUs";
    axios.post(url,authData)
    .then(res => {
        console.log(res.data)
        dispatch(login(username,email, password))   
    })
    .catch(err => {
        dispatch(authFailed())
        console.log(err.data)
    })
}
}


export const login = (email, password) => {
    return dispatch => {
        dispatch(startAuth())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZzh8XT-QDBqwMZIPy2Qil1ow4idiCDUs";
        axios.post(url, authData)
            .then(res => {
                console.log(res.data)
               
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('expirationDate', res.data.expiresIn)
                localStorage.setItem('userId', res.data.localId)
                localStorage.setItem('username', res.data.displayName)
                dispatch(isAuth(res.data.idToken, res.data.localId, res.data.displayName))
                dispatch(autoLogout())

            })
            .catch(err => {
                dispatch(authFailed())
                console.log(err.data)
            })
    }
}


export const startCheckAuth = (token, username) => {
  return dispatch => {
      dispatch(checkAuth(token, username));
      dispatch(autoLogout());
  }
};

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
    console.log(localStorage.getItem('token'))
    return dispatch => {
        dispatch(removeAuth())
    }
}

export const autoLogout = () => {

    return dispatch => {
        const expirationTime = localStorage.getItem('expirationDate')
        
            setTimeout(() => {
                dispatch(logout());
            }, expirationTime * 100)
        
    }
}


export const removeAuth = () => {
   
return{
    type: actionTypes.REMOVE_AUTH,
   
}
}