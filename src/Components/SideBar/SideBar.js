import React from 'react'
import classes from './SideBar.module.scss'
import ControlComponent from '../../hooks/ControlComponent/ControlComponent'

import { useSelector, useDispatch } from 'react-redux'
import * as actionCreators from '../../store/index'
const SideBar = (props) => {
        const dispatch = useDispatch()
        const showSideBar = useSelector(state => state.uiReducer.showSideBar)
        let sideBarClass = classes.SideBar
        if (showSideBar) {
                sideBarClass = [
                        classes.SideBar,
                        classes.show
                ].join(" ")
        }
        const control = () => {

                dispatch(actionCreators.toggleBackdrop())
                dispatch(actionCreators.togglesSideBar())
        }



        return(
                <div onClick={control} className={sideBarClass}>

                        <div className={classes.controlContainer}>
                                <ControlComponent />
                        </div>
                       
                </div>
        )
} 

export default SideBar