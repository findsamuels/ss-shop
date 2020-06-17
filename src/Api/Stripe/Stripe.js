
import React, { useState } from "react";
import classes from "./Stripe.module.scss";
import Button from '../../Components/Button/Button'
import Modal from "../../Components/Modal/Modal";
import {useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actionCreators from '../../store/index';
import { loadStripe } from "@stripe/stripe-js";
import {Elements,CardElement, PaymentRequestButtonElement} from "@stripe/react-stripe-js";
import { startOrder } from "../../store/order/action";



const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");
const Stripe = () => {

  const [orderPlaced, setOrderPlaced] = useState(false)

  const history = useHistory()
  const orderDetails = useSelector(state => state.orderItemReducer.orderDetails)
     const showPayment = useSelector((state) => state.uiReducer.showPayment);
  const orderedItems = useSelector((state) => state.orderReducer.orderDetails != null);
  const loading = useSelector((state) => state.orderReducer.loading);
  const cartItemArray = useSelector((state) => state.cartReducer.cartItemArray)
const dispatch = useDispatch()
    const closePayment = () => {
dispatch(actionCreators.closePayment())
 dispatch(actionCreators.closeBackdrop());
    }

    const confirmPayment = (event) => {

let emptycart = []


      dispatch(startOrder(orderDetails, cartItemArray))
      dispatch(actionCreators.clearCart(emptycart));
      if (!loading){
        setOrderPlaced(true)
        dispatch(actionCreators.resetShop())
        setTimeout(() => {
          dispatch(actionCreators.closePayment());
          dispatch(actionCreators.closeBackdrop());
          setOrderPlaced(false)
          history.push('/')
        }, 2000)
        
      }




     
    };

  let showPaymentBox =  <p>Waiting for order</p>; 

  if (orderPlaced && orderDetails != null){
    showPaymentBox = <div>
      <p><span style={{fontWeight: 'bold'}}>Thank you for your order!! </span><br></br>Please check your email for confirmation</p>
      
    </div> 
  }

  else if (!orderPlaced && orderDetails != null){
    (
      showPaymentBox =  <React.Fragment>
        <div className={classes.checkoutItemContainer}>
          <h4 className={classes.HeaderLeft}>Delivering to </h4>
          <p>{orderDetails.street}</p>
          <p>{orderDetails.city}</p>
          <p>{orderDetails.country}</p>
          <p>{orderDetails.eircode}</p>
        </div>

        <h4 className={classes.HeaderLeft}>Subtotal: <span className={classes.TotalPrice}> ${orderDetails.totalPrice}</span></h4>

        <div className={classes.Stripe}>
          <h4>Card details</h4>
          <Elements stripe={stripePromise}>
            <CardElement
              className={classes.CardElement}
              options={{ style: { invalid: { color: "#9e2146" } } }}
            />
          </Elements>
        </div>

        <Button
          onClick={(event) => confirmPayment(event)}
          btnStyle="boxShadow"
          btnColor="primary"
        >
          Confirm
        </Button>
      </React.Fragment>
    );
    }



    return (
      <Modal
        showPayment={showPayment}
        close={closePayment}
        title="Secure Payment"
      >
        {showPaymentBox}
      </Modal>
    );
}

export default Stripe
