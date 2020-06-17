import React from 'react'
import classes from './SideBar.module.scss'
import ControlComponent from '../../hooks/ControlComponent/ControlComponent'

import { useSelector, useDispatch } from 'react-redux'
import * as actionCreators from '../../store/index'
import FilterCategories from '../../hooks/FilterCategories/FilterCategories'
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

                
                
        }



        return(
                <div onClick={control} className={sideBarClass}>

                        <div className={classes.controlContainer}>
                                <div className={classes.headingContainer}><ControlComponent /></div>
                                
                                <div className={classes.filterContainer}>
                                        <h5 className={classes.leftHeader}>Filter Categories</h5>
                                        <FilterCategories />
                                </div>
                             
                        </div>
                       
                </div>
        )
} 

export default SideBar