import React, { useEffect } from 'react'

import classes from './Shop.module.scss'
import {Row, Col} from 'react-bootstrap'
import ItemControl from '../ItemControl/ItemControl'
import ShopItems from './ShopItems/ShopItems'
import * as actionCreators from '../../store/index'
import { useDispatch } from 'react-redux'

const Shop = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actionCreators.closeCart())
    }, [])
    return(
        <Row className={classes.Shop}>
            <Col lg="3"> <ItemControl /></Col>
            <Col lg="9"> <ShopItems /></Col>
           
           
        </Row>
    )
}

export default Shop