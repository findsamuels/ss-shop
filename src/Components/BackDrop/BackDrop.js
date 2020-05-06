import React from 'react'
import classes from './BackDrop.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreators from '../../store/index'




const BackDrop = (props) => {
    const dispatch = useDispatch()
    const showBackDrop = useSelector(state => state.uiReducer.showBackDrop)
    let backdropClass = classes.BackDrop
    if (showBackDrop) {
        backdropClass = [
            classes.BackDrop,
            classes.show
        ].join(" ")
    }
    const control = () => {

        dispatch(actionCreators.toggleBackdrop())
        dispatch(actionCreators.closeSideBar())
        dispatch(actionCreators.closeCart())
        dispatch(actionCreators.closeLogin())
        dispatch(actionCreators.closePayment());
    }

    return(
        <div onClick={control} className={backdropClass}></div>
    )
}

export default BackDrop