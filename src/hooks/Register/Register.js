import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import classes from './Register.module.scss'
import Form from '../../Components/Form/Form'
import FormElement from '../../Components/Form/FormElement/FormElement'
import Button from '../../Components/Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import * as actionCreators from '../../store/index'
import {Redirect} from 'react-router-dom'
import { verification } from '../verification/verification'

const Register = (props) => {
  const checkoutClicked = useSelector(state => state.checkoutReducer.checkoutClicked)
  const loading = useSelector(state => state.authReducer.loading)
  const registerErr = useSelector(state => state.authReducer.registerErr !== null)
  const auth = useSelector(state => state.authReducer.auth != null)
 
    const dispatch = useDispatch()
    const history = useHistory()

 
  const [disabled, setDisabled] = useState(false)
  const [errorMessage, setErrorMessage] = useState([])
    const [userDetails, setUserDetails] = useState({

      username: {
        value: '',
        elementType: 'input',
        type:"text",
        placeholder:"Username",
        invalid: false,
        touched: false
      },
      email: {
        value: '',
        elementType: 'input',
        type: "email",
        placeholder: "Email Address",
        invalid: false,
        touched: false
      },
      password: {
        value: '',
        elementType: 'input',
        type: "password",
        placeholder: "Password",
        invalid: false,
        touched: false
      }
  

    })
  useEffect(() => {



    if (auth) {

 
      if (!checkoutClicked) {
        history.push('/')
      }

      else if (checkoutClicked) {
        history.push('/checkout')
      }

    }
  

  }, [auth, checkoutClicked, history, dispatch])

  useEffect(() => {
    let errorMessages = []
    if (!loading && registerErr ) {
     
        errorMessages.push('User already exist please login')
        setErrorMessage(errorMessages)

    }
  },[registerErr, loading])

  const getFormValue = (event, formName) => {
    let value = event.target.value

    let myVerified = verification(formName, value)

    let updatedForm = {
      ...userDetails,
      [formName]:{
        ...userDetails[formName],
        value: value,
        touched: true,
        invalid: myVerified.invalid
      }
    }
    setUserDetails(updatedForm)
    setDisabled(myVerified.disabled)
    setErrorMessage(myVerified.errorMessages)
  

  }

  const verifyRegister = (email, password, username) => {
    let rejex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let errorMessage = []

    if (!rejex.test(email)) {
      errorMessage.push('Email invalid')
    }
    else if (password.length < 6) {
      errorMessage.push('Password too short')
    }
    else if (username.length < 3) {
      errorMessage.push('Username too short')
    }
    else if (password.length > 5 && rejex.test(email) && username.length > 2) {
      dispatch(
        actionCreators.register(
          username,
          email,
          password,

        )
      );
      
    }
    setErrorMessage(errorMessage)
   
  }
    const register = (event) => {
        event.preventDefault()

      verifyRegister(userDetails.email.value, userDetails.password.value, userDetails.username.value)


      
  
    }
const openLogin = () => {

    dispatch(actionCreators.openLogin())
    dispatch(actionCreators.openBackdrop())
}





let formArray = []



  for (let formEl in userDetails){
    formArray.push({
      id: formEl,
      config: userDetails[formEl]
    })
  }

  let userForm = formArray.map( userDetail => {
 
    return(
     
      

        <FormElement
        id={userDetail.id}
          elementType={userDetail.config.elementType}
          type={userDetail.config.type}
          placeholder={userDetail.config.placeholder}
          value={userDetail.config.value}
        invalid={userDetail.config.invalid}
          touched={userDetail.config.touched}
        onChange={(event) => getFormValue(event, userDetail.id)}
        />
       
      
    )
  })
 

  let registerPage = (
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

        {userForm}

        <p className={classes.errorText}>{errorMessage}</p> 
        <div className={classes.buttonDiv}>
          <Button onClick={register} btnStyle="boxShadow" btnColor="primary">
            Register
            </Button> 
          
        </div>
      </Form>
    </div>)


  if ((auth) && (!checkoutClicked)) {
    registerPage = <Redirect to='/' />
  }
  
else if(auth && checkoutClicked){
  registerPage = <Redirect to='/checkout' />
}


   


    return registerPage;
      
    
}

export default Register