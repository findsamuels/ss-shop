import React, { useEffect } from 'react'
import classes from './ControlComponent.module.scss'
import Icon from '../../Components/Icon/Icon'
import {useDispatch, useSelector} from 'react-redux'
import * as actionCreators from '../../store/index'
import Button from '../../Components/Button/Button'
const ControlComponent = (props) => {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.authReducer.auth)
  const amountInCart = useSelector(state => state.cartReducer.amountInCart)
  const toggleCart = () => {
    dispatch(actionCreators.toggleCart())
    dispatch(actionCreators.openBackdrop())
  }

  const showLogin = () => {
    dispatch(actionCreators.openLogin())
    dispatch(actionCreators.openBackdrop())
    dispatch(actionCreators.checkoutNotClicked())
  }

  const logout = () => {
    
    dispatch(actionCreators.logout())
  }
  let cartAmount = []

  let showLogIn = (auth ? <p className={classes.loggedInText}>Welcome Customer <span><Button onClick={logout} btnColor='secondary'>Log out</Button></span></p>  : <Button onClick={showLogin} btnColor='danger'>Log in</Button>)

 cartAmount.push(classes.cartAmount)
  if(amountInCart < 1){
    cartAmount.push(classes.NoItem)
  } else if (amountInCart > 0){
    cartAmount.push(classes.ItemInCart)
      
    
  }

    return (
      <div className={classes.ControlComponent}>
  
        {showLogIn}

        <div className={classes.cartContainer}>
        
          <Icon onClick={toggleCart} icon="shopping-cart" color="white" />  
          <p className={cartAmount.join(' ')} >{amountInCart}</p>
   
        </div>
       
      </div>
    );
}

export default ControlComponent