import React from 'react';
import ControlBar from './Components/ControlBar/ControlBar'
import './App.css';
import SaleComponent from './Components/SaleComponent/SaleComponent';
import SideBar from './Components/SideBar/SideBar';
import BackDrop from './Components/BackDrop/BackDrop';
import {Switch, Route} from 'react-router-dom'
import Shop from './hooks/Shop/Shop';
import Register from './hooks/Register/Register'
import Cart from './hooks/Cart/Cart';
import Checkout from './hooks/Checkout/Checkout';
import Login from './hooks/Login/Login';
import Stripe from './Api/Stripe/Stripe';

const App = () => {
  
  return (
    <div className="App">
      <BackDrop />
   
      <SaleComponent />
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
