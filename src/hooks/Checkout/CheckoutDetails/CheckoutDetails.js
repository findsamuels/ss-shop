import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './CheckoutDetails.module.scss'
import Button from '../../../Components/Button/Button'
import Form from '../../../Components/Form/Form'
import FormElement from '../../../Components/Form/FormElement/FormElement'
import * as actionCreators from '../../../store/index'
import { CountryDropdown } from 'react-country-region-selector'
import { verification } from '../../verification/verification'
const CheckoutDetails = () => {
    const totalPrice = useSelector(state => state.checkoutReducer.totalPrice)
  const orderDetails = useSelector(state => state.orderReducer.orderDetails)
  
    const dispatch = useDispatch()

   const [country, setCountry] = useState('')
  const [errorMessage, setErroMessage] = useState('')
  const [orderForm, setUserDetails] = useState({

    street: {
      value: '',
      elementType: 'input',
      type: "text",
      placeholder: "Street address",
      invalid: false,
      touched: false
    },
    city: {
      value: '',
      elementType: 'input',
      type: "text",
      placeholder: "City",
      invalid: false,
      touched: false
    },
    eircode: {
      value: '',
      elementType: 'input',
      type: "text",
      placeholder: "eircode",
      invalid: false,
      touched: false
    }

  })



    const openPayment = () => {


        const orderDetails = {
          street: orderForm.street.value,
          city: orderForm.city.value,
          eircode: orderForm.eircode.value,
          country: country,
          totalPrice: totalPrice
        }
        console.log(orderDetails)

      let errorMessage = []

      if (orderForm.street.value.length < 5) {
        errorMessage.push(' Invalid street')
      }
      else if (orderForm.city.value.length < 2) {
        errorMessage.push('Invalid city')
      }
      else if (orderForm.city.value.length > 2 && orderForm.street.value.length > 5) {
        dispatch(actionCreators.getOrderDetails(orderDetails))
        
          dispatch(actionCreators.openBackdrop());
          dispatch(actionCreators.openPayment());
        
      }
      
        
      
    }
  const updateValue = (event, id) => {
let value = event.target.value

    let verifyInput = verification(id, value)
    let errorMessage = verifyInput.errorMessages
    let invalid = verifyInput.invalid
    setErroMessage(errorMessage)
    const updatedValue = {
      ...orderForm,
      [id]:{
        ...orderForm[id],
        value: value,
        touched: true,
        invalid: invalid
      }
    }
    setUserDetails(updatedValue)
  }
const selectCountry = (val) =>{

    setCountry(val)
}

    let orderArray = []

    for (let orderinfo in orderForm){
      orderArray.push({
        id: orderinfo,
        config: orderForm[orderinfo]
      })
    }

    let formBox = orderArray.map(order => {

      return(
        <FormElement
        value={order.config.value}
          id={order.id}
          placeholder={order.config.placeholder}
          elementType={order.config.elementType}
          type={order.config.type}
          invalid={order.config.invalid}
          touched={order.config.touched}
          onChange={(event) => updateValue(event,order.id)}
        />
      )
    })


    return (
      <div className={classes.CheckoutDetails}>
        <Form>
          <h4 className={classes.HeaderLeft}>Enter Delivery Info:</h4>
          {formBox}
          <CountryDropdown
              classes={classes.CountryClass}
              value={country}
              onChange={(val) => selectCountry(val)}
            />
        </Form>

        <div className={classes.checkoutItemContainer}>
          
          <h4 className={classes.HeaderLeft}>Payment Info:</h4>
          <p>Subtotal: ${totalPrice}</p>
       
        </div>
        <p className={classes.errorText}>{errorMessage}</p>
        <Button onClick={openPayment} btnStyle="boxShadow" btnColor="primary">
          Review Order
        </Button>
      </div>
    );
}

export default CheckoutDetails