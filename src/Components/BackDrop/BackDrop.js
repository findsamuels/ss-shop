import React from 'react'
import classes from './BackDrop.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreators from '../../store/index'




const BackDrop = (props) => {
    const dispatch = useDispatch()
    const showBackDrop = useSelector(state => state.uiReducer.showBackDrop)
    const showSideBarBackdrop = useSelector(state => state.uiReducer.showSideBarBackdrop)
    let backdropClass = []
    backdropClass.push(classes.BackDrop) 

    if (showBackDrop) {
        backdropClass.push(classes.show)
        
    }
    if (showSideBarBackdrop) {
        backdropClass.push(classes.showForSideBar)
        
    }
    const control = () => {
        dispatch(actionCreators.closeSideBarBackdrop())
        dispatch(actionCreators.closeBackdrop())
        dispatch(actionCreators.closeSideBar())
        dispatch(actionCreators.closeCart())
        dispatch(actionCreators.closeLogin())
        dispatch(actionCreators.closePayment());
        dispatch(actionCreators.closeBuyOptions())
    }

    return(
        <div onClick={control} className={backdropClass.join(' ')}></div>
    )
}

export default BackDrop