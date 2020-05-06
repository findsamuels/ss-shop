import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import classes from './Checkout.module.scss'
import CheckoutData from '../Checkout/CheckoutDetails/CheckoutDetails'
import Register from '../Register/Register'
const Checkout = () => {
    const auth = useSelector(state => state.authReducer.auth)
  
    console.log(auth)
   
    return !auth ? < Redirect to = "/register" component = { Register } /> : <div className={classes.Checkout}>
        <CheckoutData/>
        </div>
       
    
}

export default Checkout