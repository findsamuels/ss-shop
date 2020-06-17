import React from 'react'
import classes from './BuyOptions.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreators from '../../store/index'
import Modal from '../../Components/Modal/Modal'
import {Row, Col} from 'react-bootstrap'
import Button from '../../Components/Button/Button'
import FormElement from '../../Components/Form/FormElement/FormElement'

const BuyOptions = (props) => {
const dispatch = useDispatch()
    const buyOptions = useSelector(state => state.buyOptionsReducer.buyOptions)
    const id = useSelector(state => state.buyOptionsReducer.id)
    const openBuyOptions = useSelector(state => state.buyOptionsReducer.openBuyOptions)
    const shopItem = useSelector(state => state.shopItemReducer.shopItem)
const close = () => {

    dispatch(actionCreators.closeBuyOptions())
    dispatch(actionCreators.closeBackdrop())
}

const addToCart = (sizeValue, quantityValue) => {

    console.log(sizeValue)
    console.log(quantityValue)
   
    
}

    const selectQuantity = (event, itemId) => {
        let value = event.target.value
        console.log(value)
console.log(itemId)
        dispatch(actionCreators.getItemValue(value, itemId))

    }

    const selectSize = (event, itemId) => {
        let value = event.target.value

        dispatch(actionCreators.getSizeValue(value, itemId))

    }

    let selectQ = buyOptions.selectQuantity.map(itemQ => {

        return (

            <option value={itemQ}>{itemQ}</option>

        )
    })

    let selectS = buyOptions.selectSize.map(itemS => {

        return (

            <option value={itemS}>{itemS}</option>

        )
    })

    return <Modal openBuyOptions={openBuyOptions} id={buyOptions.title} close={close} title={buyOptions.title}>
        <Row className={classes.BuyOptions}>
            <Col md='6'>
                <img className={classes.BuyOptionsImg} src={buyOptions.img} alt={buyOptions.title} />
            </Col>
            <Col md='6' className={classes.BuyOptionsOptions}>
                <h3 className={classes.headerLeft}>{buyOptions.title}</h3>
                <p >{buyOptions.description}</p>
                <p className={classes.description}> ${buyOptions.price}</p>
                <FormElement value={buyOptions.sizeValue} elementType='select' onChange={(event) => selectSize(event, buyOptions.id)}>
                    {selectS}
                </FormElement>
                <FormElement value={buyOptions.quantityValue} onChange={(event) => selectQuantity(event, buyOptions.id)} elementType='select' >
                    {selectQ}
                </FormElement>
                <Button disabled={buyOptions.addedToCart} onClick={() => addToCart(buyOptions.sizeValue, buyOptions.quantityValue)} btnColor="primary" btnType="block" >Add to cart</Button>
            </Col>
        </Row>

    </Modal>
    

}

export default BuyOptions