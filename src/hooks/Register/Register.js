import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import classes from './Register.module.scss'
import Form from '../../Components/Form/Form'
import FormElement from '../../Components/Form/FormElement/FormElement'
import Button from '../../Components/Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import * as actionCreators from '../../store/index'
import {Redirect} from 'react-router-dom'

const Register = (props) => {
    const checkoutClicked = useSelector(state => state.checkoutReducer.checkoutClicked)
     const auth = useSelector((state) => state.authReducer.auth != null);
    const dispatch = useDispatch()
    const history = useHistory()

 

    const [userDetails, setUserDetails] = useState({

      username: {
        value: '',
        elementType: 'input',
        type:"text",
        placeholder:"Username",
        isValid: true,
        touched: false
      },
      email: {
        value: '',
        elementType: 'input',
        type: "email",
        placeholder: "Email Address",
        isValid: true,
        touched: false
      },
      password: {
        value: '',
        elementType: 'input',
        type: "password",
        placeholder: "Password",
        isValid: true,
        touched: false
      }
  

    })

  const getFormValue = (event, formName) => {
    let value = event.target.value

    

    let updatedForm = {
      ...userDetails,
      [formName]:{
        ...userDetails[formName],
        value: value,
        touched: true
      }
    }
    setUserDetails(updatedForm)

  }
    const register = (event) => {
        event.preventDefault()


      dispatch(
        actionCreators.register(
          userDetails.username.value,
          userDetails.email.value,
          userDetails.password.value,
       
        )
      );
        
      console.log(userDetails.username.value)

     
history.push('/')
        if (checkoutClicked){
            history.push('/checkout')
        }
  
    }
const openLogin = () => {

    dispatch(actionCreators.openLogin())
    dispatch(actionCreators.openBackdrop())
}





let formArray = []

let registerId = ''

  for (let formEl in userDetails){
    formArray.push({
      id: formEl,
      config: userDetails[formEl]
    })
  }

  let userForm = formArray.map( userDetail => {
    registerId = userDetail.id
    return(
     
      

        <FormElement
        id={userDetail.id}
          elementType={userDetail.config.elementType}
          type={userDetail.config.type}
          placeholder={userDetail.config.placeholder}
          value={userDetail.config.value}
        isValid={userDetail.config.isValid}
          touched={userDetail.config.touched}
        onChange={(event) => getFormValue(event, userDetail.id)}
        />
       
      
    )
  })


  let registerPage = <Redirect to='/'/>
if(!auth){
registerPage = <div className={classes.Register}>
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
            
       
          <div className={classes.buttonDiv}>
      <Button onClick={register} btnStyle="boxShadow" btnColor="primary">
              Register
            </Button>
          </div>
        </Form>
      </div>
}


   


    return registerPage;
      
    
}

export default Register