import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import classes from './Register.module.scss'
import Form from '../../Components/Form/Form'
import FormElement from '../../Components/Form/FormElement/FormElement'
import Button from '../../Components/Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import * as actionCreators from '../../store/index'
import {CountryDropdown} from 'react-country-region-selector'
const Register = (props) => {
    const checkoutClicked = useSelector(state => state.checkoutReducer.checkoutClicked)
    const dispatch = useDispatch()
    const history = useHistory()

    const [country, setCountry] = useState('')
    const register = (event) => {
        event.preventDefault()
        dispatch(actionCreators.startAuth())
history.push('/')
        if (checkoutClicked){
            history.push('/checkout')
        }
            
        
    }
const openLogin = () => {

    dispatch(actionCreators.openLogin())
    dispatch(actionCreators.openBackdrop())
}

const selectCountry = (val) =>{

    setCountry(val)
}
   

    return (
      <div className={classes.Register}>
        <Form size="medium">
          <div className={classes.TitleBox}>
            <h2>Register here</h2>
            <p>
              already registered?{" "}
              <span onClick={openLogin} className={classes.linkText}>
                Log in
              </span>
            </p>
          </div>

          <div className={classes.twoColDiv}>
            <FormElement
              width="half"
              elementType="input"
              type="text"
              placeholder="First name"
            />
            <FormElement
              width="half"
              elementType="input"
              type="email"
              placeholder="Email address"
            />
            <FormElement
              width="half"
              elementType="input"
              type="text"
              placeholder="Username"
            />
            <FormElement
              width="half"
              elementType="input"
              type="password"
              placeholder="Password"
            />
            <FormElement
              width="half"
              elementType="input"
              type="text"
              placeholder="Street "
            />
            <FormElement
              width="half"
              elementType="input"
              type="text"
              placeholder="City"
            />
            <FormElement
              width="half"
              elementType="input"
              type="text"
              placeholder="Eircode"
            />

            {/* <FormElement elementType='input' type='text' placeholder='Country' /> */}
            <CountryDropdown
              classes={classes.CountryClass}
              value={country}
              onChange={(val) => selectCountry(val)}
            />
          </div>

          <div className={classes.buttonDiv}>
            <Button onClick={register} btnStyle="boxShadow" btnColor="primary">
              Register
            </Button>
          </div>
        </Form>
      </div>
    );
}

export default Register