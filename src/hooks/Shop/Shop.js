import React, { useEffect } from 'react'

import classes from './Shop.module.scss'
import {Row, Col} from 'react-bootstrap'
import ShopItems from './ShopItems/ShopItems'
import * as actionCreators from '../../store/index'
import { useDispatch } from 'react-redux'
import FilterCategories from '../FilterCategories/FilterCategories'
import Search from '../Search/Search'

const Shop = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actionCreators.closeCart())
    }, [])
    return(
        <Row className={classes.Shop}>
            <Col lg="3" >
               <h5 className={classes.leftHeader}>Filter Items</h5>
                <div className={classes.searchContainer}><Search /> </div>
                <div className={classes.filterContainer}>
                    <FilterCategories />
                </div>
                
              
                 </Col>
            <Col lg="9"> <ShopItems /></Col>
           
           
        </Row>
    )
}

export default Shop