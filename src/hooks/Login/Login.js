import React from 'react'
import Modal from '../../Components/Modal/Modal'
import Form from '../../Components/Form/Form'
import FormElement from '../../Components/Form/FormElement/FormElement'
import Button from '../../Components/Button/Button'
import classes from './Login.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreators from '../../store/index'
import { NavLink } from 'react-router-dom'
const Login = (props) => {
    const dispatch = useDispatch()
    const showLogin = useSelector(state => state.uiReducer.showLogin)

    const login = (event) => {
event.preventDefault()
        dispatch(actionCreators.closeLogin())
        dispatch(actionCreators.toggleBackdrop())
    }

    const closeLogin = () => {


        dispatch(actionCreators.closeLogin())
        dispatch(actionCreators.toggleBackdrop())
    }
    const goToRegister = () => {
        dispatch(actionCreators.closeLogin())
        dispatch(actionCreators.toggleBackdrop())
    }

    return(
        <Modal close={closeLogin} title='Log in here' showLogin={showLogin}>
           <Form>
                <FormElement elementType='input' type='email' placeholder='Email address' />
                <FormElement elementType='input' type='password' placeholder='Password' />
                <Button onClick={login} btnStyle='boxShadow' btnColor='primary'>Log in</Button>
                <p className={classes.registerLink}>not registered? <NavLink onClick={goToRegister} to='/register'>register</NavLink></p>
           </Form>
       </Modal>
    )
}

export default Login