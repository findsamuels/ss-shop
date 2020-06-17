import React from 'react'
import classes from './Button.module.scss'
const button = (props) => {

    let buttonClass = []
    buttonClass.push(classes.Button, classes[props.btnColor], classes[props.btnSize], classes[props.spacing], classes[props.btnStyle], classes[props.btnType])
  
    if(props.disabled){
        buttonClass.push(classes.disabled)
    }
    if(props.hide){
        buttonClass.push(classes.hide)
    }
    return <button onClick={props.onClick} className={buttonClass.join(' ')} >{props.children}</button>;
    
}

export default button