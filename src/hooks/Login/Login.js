import React, { useState } from 'react'
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
    const checkoutClicked = useSelector(state => state.checkoutReducer.checkoutClicked)
    const [user, changeUser] = useState({
        email:{
            type: 'email',
            value: '',
            placeholder:'Email',
            elementType: 'input'
        },
        password: {
            type: 'password',
            value: '',
            placeholder: 'Password',
            elementType: 'input'
        }
    })

    const login = (event) => {
event.preventDefault()
        dispatch(actionCreators.closeLogin())
        dispatch(actionCreators.closeBackdrop())

        

        dispatch(actionCreators.login(user.email.value, user.password.value))

        if (checkoutClicked) {
            props.history.push('/checkout')
        }
      
    }

    const getUser = (id, event ) => {
        let value = event.target.value
        const updatedUser = {
            ...user,
            [id]:{
                ...user[id],
                    value: value
                
                
            }
        }

    
        changeUser(updatedUser)
        console.log(user)
    }

    const closeLogin = () => {


        dispatch(actionCreators.closeLogin())
        dispatch(actionCreators.closeBackdrop())
    }
    const goToRegister = () => {
        dispatch(actionCreators.closeLogin())
        dispatch(actionCreators.closeBackdrop())
    }

    let usersArray = []
    for (let myUser in user){
        usersArray.push({
            id: myUser,
            config: user[myUser]
        })
    }

    let mappedUser = usersArray.map(users => {
        return(
            <FormElement 
            id={users.id} 
            elementType={users.config.elementType} 
            onChange={(event) => getUser(users.id,event)} 
            value={users.config.value}
             type={users.config.type} 
             placeholder={users.config.placeholder} />
        )
    })

    return(
        <Modal close={closeLogin} title='Log in here' showLogin={showLogin}>
           <Form>
               {mappedUser}
                <Button onClick={login} btnStyle='boxShadow' btnColor='primary'>Log in</Button>
                <p className={classes.registerLink}>not registered? <NavLink onClick={goToRegister} to='/register'>register</NavLink></p>
           </Form>
       </Modal>
    )
}

export default Login