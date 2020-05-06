
import React from "react";
import classes from "./Stripe.module.scss";
import Button from '../../Components/Button/Button'
import Modal from "../../Components/Modal/Modal";
import {useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actionCreators from '../../store/index';
import { loadStripe } from "@stripe/stripe-js";
import {Elements,CardElement, PaymentRequestButtonElement} from "@stripe/react-stripe-js";



const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");
const Stripe = () => {

  const history = useHistory()
    const totalPrice = useSelector((state) => state.checkoutReducer.totalPrice);
     const showPayment = useSelector((state) => state.uiReducer.showPayment);
const dispatch = useDispatch()
    const closePayment = () => {
dispatch(actionCreators.closePayment())
 dispatch(actionCreators.toggleBackdrop());
    }

    const confirmPayment = (event) => {
event.preventDefault();
      dispatch(actionCreators.closePayment());
       dispatch(actionCreators.toggleBackdrop());

      history.push('/')
    };

    return (
      <Modal
        showPayment={showPayment}
        close={closePayment}
        title="Secure Payment"
      >
        <p>Subtotal: ${totalPrice}</p>

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
      </Modal>
    );
}

export default Stripe
