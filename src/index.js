import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { library } from "@fortawesome/fontawesome-svg-core";
import {faPortrait, faShoppingCart, faSearch, faPersonBooth, faBars, faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Provider} from 'react-redux'
import * as reducerTypes from './store/reducerIndex'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

import * as firebase from "firebase/app";

import "firebase/analytics";

import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

const firebaseConfig = {
  apiKey: "AIzaSyBZzh8XT-QDBqwMZIPy2Qil1ow4idiCDUs",
  authDomain: "ss-shops.firebaseapp.com",
  databaseURL: "https://ss-shops.firebaseio.com",
  projectId: "ss-shops",
  storageBucket: "ss-shops.appspot.com",
  messagingSenderId: "295131639773",
  appId: "1:295131639773:web:ae10c29a7c7049b6e15034",
  measurementId: "G-TB8V78ZVEM",
};
firebase.initializeApp(firebaseConfig);

library.add(faPortrait, faShoppingCart, faSearch, faPersonBooth, faBars, faTimes, faTrash);

const rootReducer = combineReducers({
uiReducer: reducerTypes.UiReducer,
  shopItemReducer: reducerTypes.shopItemReducer,
  cartReducer: reducerTypes.cartReducer,
  checkoutReducer: reducerTypes.checkoutReducer,
  authReducer: reducerTypes.authReducer,
  orderReducer: reducerTypes.orderReducer,
  orderItemReducer: reducerTypes.orderItemReducer,
  buyOptionsReducer: reducerTypes.buyOptionsReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
const app = (
  <Provider store={store} >
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
 
)


ReactDOM.render(
  <React.StrictMode>
   {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
