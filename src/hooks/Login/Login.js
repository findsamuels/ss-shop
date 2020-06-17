import React, { useState, useEffect } from 'react'
import Modal from '../../Components/Modal/Modal'
import Form from '../../Components/Form/Form'
import {axiosDatabase} from '../../axios/axios'
import { verification} from '../verification/verification'
import FormElement from '../../Components/Form/FormElement/FormElement'
import Button from '../../Components/Button/Button'
import classes from './Login.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreators from '../../store/index'
import { NavLink } from 'react-router-dom'
const Login = (props) => {
    const dispatch = useDispatch()
    const loginErr = useSelector(state => state.authReducer.loginErr != null)
    const auth = useSelector(state => state.authReducer.auth != null)
    const loading = useSelector(state => state.authReducer.loading)
    const showLogin = useSelector(state => state.uiReducer.showLogin)
    const [disabled, setDisabled] = useState(false)
    const [errorMessage, setErrorMessage] = useState([])
    const [user, changeUser] = useState({
        email:{
            type: 'email',
            value: '',
            placeholder:'Email',
            name: '',
            elementType: 'input',
            touched: false,
            invalid: false
        },
        password: {
            type: 'password',
            value: '',
            placeholder: 'Password',
            elementType: 'input',
            name: '',
            touched: false,
            invalid: false
        }
    })




    useEffect(() => {

        let errorMessages = []
     
        if (auth ){
         
              setDisabled(false)
              dispatch(actionCreators.closeLogin())
              dispatch(actionCreators.closeBackdrop())
             
             
        }
        if (!auth && !loading && loginErr ) {
            setDisabled(true)
            errorMessages.push('Invalid Email or Password')
        }
        setErrorMessage(errorMessages)

    }, [auth, loading, loginErr, dispatch])



    const login = (event) => { 
        event.preventDefault()
        let rejex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

       let errorMessage = []
        
        if (!rejex.test(user.email.value)) {
            errorMessage.push('Email invalid')
        }
        else if (user.password.value.length < 6) {
            errorMessage.push('Password too short')
        }
        else if (user.password.value.length > 5 && rejex.test(user.email.value)){

          const userValue = {
              email: user.email.name,
              password: user.password.name
          }
            console.log(user.email.name)
            console.log(user.password.name)
            axiosDatabase.post('/login', userValue)
            .then(res => {
                console.log(res)
            })

            dispatch(actionCreators.login(user.email.value, user.password.value))
        }

        setErrorMessage(errorMessage)
    
    }


    const getUser = (id, event ) => {
        let value = event.target.value
        let name = value
      
       let myVerified =  verification(id, value)

        const updatedUser = {
            ...user,
            [id]: {
                ...user[id],
                touched: true,
                invalid: myVerified.invalid,
                value: value,
                name: name
            }
        }
        changeUser(updatedUser)
        setErrorMessage(myVerified.errorMessages)
        setDisabled(myVerified.disabled)
      
        
       
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
                    key={users.id}
                    invalid={users.config.invalid}
                    id={users.id}
                    name={users.config.name}
                    elementType={users.config.elementType}
                    onChange={(event) => getUser(users.id, event)}
                    value={users.config.value}
                    type={users.config.type}
                    placeholder={users.config.placeholder} />
           
            
        )
    })

    

    return(
        <Modal close={closeLogin} title='Log in here' showLogin={showLogin}>
            <Form onSubmit={login} method="POST" name='userLogin'>
               {mappedUser}
          <p className={classes.errorText}>{errorMessage}</p> 
            <Button  btnStyle='boxShadow' btnColor='primary'>Log in</Button>
                <p className={classes.registerLink}>not registered? <NavLink onClick={goToRegister} to='/register'>register</NavLink></p>
            </Form>
       </Modal>
    )
}

export default Login