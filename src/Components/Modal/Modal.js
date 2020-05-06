import React from 'react'
import classes from './Modal.module.scss'
import Icon from '../Icon/Icon'
import Button from '../Button/Button'

const Modal = (props) => {
    let modalClass = []
   modalClass.push(classes.Modal)


    if (props.showCart) {
        modalClass.push(classes.showCart)
    }
    if (props.showLogin) {
        modalClass.push(classes.showLogin)
    }
       if (props.showPayment) {
         modalClass.push(classes.showPayment);
       }


    return (
        <div className={modalClass.join(' ')}>
            <div className={classes.TitleBox}>
                <h5 className={classes.Title}>{props.title}</h5>
                <div className={classes.ModalIcon}>
                    <Icon icon='times' color='darkGrey' onClick={props.close} />
                </div>

            </div>
            <div className={classes.Content}>{props.children}</div>
           
        </div>
    )
}


export default Modal