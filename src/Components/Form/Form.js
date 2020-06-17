import React from 'react'
import {Row, Col} from 'react-bootstrap'
import classes from './Form.module.scss'

const form = (props) => <form className={[classes.Form, classes[props.size], classes[props.colSize]].join(' ')} method={props.method} action={props.action} ref={props.ref} onSubmit={props.onSubmit}>
   
    {props.children}
    
    </form>

export default form