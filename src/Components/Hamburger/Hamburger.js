import React from 'react'
import Icon from '../Icon/Icon'
import classes from './Hamburger.module.scss'
import {useDispatch} from 'react-redux'
import * as actionCreators from '../../store/index'


const Hamburger = (props) => {
const dispatch = useDispatch()
    const control = () => {
        dispatch(actionCreators.closeCart())
        dispatch(actionCreators.showSideBarBackdrop())
        dispatch(actionCreators.openSideBar())
    }

    return(
        <div className={classes.Hamburger}><Icon onClick={control} icon="bars" size="md" color="white" /></div>
    )
} 

export default Hamburger