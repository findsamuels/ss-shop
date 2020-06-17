import React, { useEffect } from 'react';
import ControlBar from './Components/ControlBar/ControlBar'
import './App.css';
// import SaleComponent from './Components/SaleComponent/SaleComponent';
import SideBar from './Components/SideBar/SideBar';
import BackDrop from './Components/BackDrop/BackDrop';
import {Switch, Route, useHistory} from 'react-router-dom'
import Shop from './hooks/Shop/Shop';
import Register from './hooks/Register/Register'
import Cart from './hooks/Cart/Cart';
import Checkout from './hooks/Checkout/Checkout';
import Login from './hooks/Login/Login';
import Stripe from './Api/Stripe/Stripe';
import { useDispatch, useSelector } from 'react-redux';

import * as actionCreators from './store/index'

const App = () => {
  let shopItem = useSelector(state => state.shopItemReducer.shopItem)
const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
   let token =  localStorage.getItem("token")
   let username = localStorage.getItem("username");
   localStorage.setItem('shopItem', JSON.stringify(shopItem))
    dispatch(actionCreators.startCheckAuth(token, username));
    // localStorage.clear('cartItems', 'itemId', 'amountInCart')
    // let cartItems = JSON.parse(localStorage.getItem('cartItems'))
    // let itemId = JSON.parse(localStorage.getItem('itemId'))
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
      <Login />
     
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
