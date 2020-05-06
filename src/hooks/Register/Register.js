import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import classes from './Register.module.scss'
import Form from '../../Components/Form/Form'
import FormElement from '../../Components/Form/FormElement/FormElement'
import Button from '../../Components/Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import * as actionCreators from '../../store/index'
const Register = (props) => {
  
    const dispatch = useDispatch()
    const history = useHistory()
    const register = (event) => {
        event.preventDefault()
        dispatch(actionCreators.startAuth())

            history.push('/checkout')
        
    }
const openLogin = () => {

    dispatch(actionCreators.openLogin())
    dispatch(actionCreators.toggleBackdrop())
}
   

    return (
        <div className={classes.Register}>
            <Form size='medium'>
                <div className={classes.TitleBox}>
                    <h2 >Register here</h2>
                    <p>already registered? <span onClick={openLogin} className={classes.linkText}>Log in</span></p>
                </div>

                <FormElement elementType='input' type='text' placeholder='First name' />
                <FormElement elementType='input' type='email' placeholder='Email address' />
                <FormElement elementType='input' type='password' placeholder='Password' />
                <FormElement elementType='input' type='text' placeholder='Street ' />
                <FormElement elementType='input' type='text' placeholder='City' />
                <FormElement elementType='input' type='text' placeholder='Eircode' />
                <FormElement elementType='input' type='text' placeholder='Country' />
                <Button onClick={register} btnStyle='boxShadow' btnColor='primary'>Register</Button>


            </Form>
        </div>
    )
}

export default Register