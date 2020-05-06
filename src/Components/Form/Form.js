import React from 'react'

import classes from './Form.module.scss'

const form = (props) => <form className={[classes.Form, classes[props.size]].join(' ')} onSubmit={props.onSubmit}>
    
    {props.children}</form>

export default form