import React from 'react'

import classes from './FormElement.module.scss'


const FormElement = (props) => {
    let FormElementClass = []
    FormElementClass.push(
        classes.Input, classes[props.shape], classes[props.width]
    )
        if(props.invalid){
            FormElementClass.push(classes.invalid)
        }

   switch (props.elementType) {
        case 'input':
           return <input key={props.id} onChange={props.onChange} className={FormElementClass.join(' ')} type={props.type} placeholder={props.placeholder} id={props.id} name={props.name} value={props.value}/>
        case 'select':
    return (
        <select key={props.id} onChange={props.onChange} id={props.id} defaultValue={props.selectedValue} value={props.value} className={FormElementClass.join(' ')}>{props.children}</select>
     
       
    )

        default:
           break
    }

}

export default FormElement