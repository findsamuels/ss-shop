import React from 'react'
import classes from './Modal.module.scss'
import Icon from '../Icon/Icon'
import Button from '../Button/Button'
import Fade from 'react-reveal'
const Modal = (props) => {
    let modalClass = []
    modalClass.push(classes.Modal, classes[props.width])


    if (props.showCart) {
        modalClass.push(classes.showCart)
    }
    if (props.showLogin) {
        modalClass.push(classes.showLogin)
    }
       if (props.showPayment) {
         modalClass.push(classes.showPayment);
       }
    if (props.openBuyOptions) {
        modalClass.push(classes.openBuyOptions);
    }



    return (
     
            <div key={props.id} className={modalClass.join(' ')}>
            <Fade>
                <div className={classes.TitleBox}>
                    <h5 className={classes.Title}>{props.title}</h5>
                    <div className={classes.ModalIcon}>
                        <Icon icon='times' color='darkGrey' onClick={props.close} />
                    </div>

                </div>
                <div className={classes.Content}>{props.children}</div>
            </Fade>
            </div>
       
        
    )
}


export default Modal