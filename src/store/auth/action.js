import * as actionTypes from '../actionTypes'



export const isAuth = () => {
return{
    type: actionTypes.IS_AUTH
}
}
export const startAuth = () => {

    return dispatch => {
        dispatch(isAuth())
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(removeAuth())
    }
}


export const removeAuth = () => {
return{
    type: actionTypes.REMOVE_AUTH
}
}