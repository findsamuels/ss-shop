import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './CheckoutDetails.module.scss'
import Button from '../../../Components/Button/Button'
import * as actionCreators from '../../../store/index'

const CheckoutDetails = () => {
    const totalPrice = useSelector(state => state.checkoutReducer.totalPrice)
    const dispatch = useDispatch()

    const openPayment = () => {
 dispatch(actionCreators.toggleBackdrop());
        dispatch(actionCreators.openPayment());
    }
    return (
      <div className={classes.CheckoutDetails}>
        <div className={classes.checkoutItemContainer}>
          <h4>Posting To</h4>
          <p>Entered street address</p>
          <p>Entered city</p>
          <p>Country</p>
          <p>Eir Code</p>
        </div>

        <div className={classes.checkoutItemContainer}>
          <h4>Payment Info:</h4>
          <p>Subtotal: {totalPrice}</p>
          {/* <p>Enter Payment Information Here</p> */}
        </div>
       
        <Button onClick={openPayment} btnStyle="boxShadow" btnColor="primary">
          Pay Now
        </Button>
      </div>
    );
}

export default CheckoutDetails