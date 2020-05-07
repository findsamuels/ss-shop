import React from 'react'

import classes from './FormElement.module.scss'

const FormElement = (props) => {
   switch (props.elementType) {
        case 'input':
            return <input key={props.key} onChange={props.onChange}  className={[classes.Input, classes[props.width]].join(' ')} type={props.type} placeholder={props.placeholder} id={props.id} name={props.name} value={props.value}/>
        case 'select':
    return (
        <select key={props.key} onChange={props.onChange} id={props.id} value={props.value} className={[classes.Select, classes[props.option]].join(' ')}>{props.children}</select>
     
       
    )

        default:
           break
    }

}

export default FormElement