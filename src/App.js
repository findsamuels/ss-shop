import React, { useEffect } from 'react';
import ControlBar from './Components/ControlBar/ControlBar'
import './App.css';
// import SaleComponent from './Components/SaleComponent/SaleComponent';
import SideBar from './Components/SideBar/SideBar';
import BackDrop from './Components/BackDrop/BackDrop';
import {Switch, Route} from 'react-router-dom'
import Shop from './hooks/Shop/Shop';
import Register from './hooks/Register/Register'
import Cart from './hooks/Cart/Cart';
import Checkout from './hooks/Checkout/Checkout';
import Login from './hooks/Login/Login';
import Stripe from './Api/Stripe/Stripe';
import { useDispatch } from 'react-redux';

import * as actionCreators from './store/index'
const App = () => {
const dispatch = useDispatch()
  useEffect(() => {
   let token =  localStorage.getItem("token")
   let username = localStorage.getItem("username");
    dispatch(actionCreators.startCheckAuth(token, username));
    // let cartItems = JSON.parse(localStorage.getItem('cartItems'))
    // let itemId = localStorage.getItem('itemId')
    // let amountInCart = localStorage.getItem('amountInCart')
    // if (cartItems != null && itemId != null && amountInCart !== 0){
    //   dispatch(actionCreators.addToCart(cartItems, itemId, amountInCart))
    // }

   
  },[])
  
  return (
    <div className="App">
      <BackDrop />
   
      {/* <SaleComponent /> */}
      <ControlBar />
      <SideBar/>
      <Cart />
      <Login/>
      <Stripe/>
    <Switch>
        <Route path="/" exact component={Shop}/>
        <Route path="/checkout" component={Checkout} />
        <Route path="/register" component={Register} />
    </Switch>

     
 

    </div>
  );
}

export default App;
