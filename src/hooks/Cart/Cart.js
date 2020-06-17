import React, { useState, useEffect } from 'react'
import Modal from '../../Components/Modal/Modal'
import { useSelector, useDispatch} from 'react-redux'
import {Row, Col, ListGroup} from 'react-bootstrap'
import Icon from '../../Components/Icon/Icon'
  import Button from '../../Components/Button/Button'
import * as actionCreators from '../../store/index'
import classes from './Cart.module.scss'
import { NavLink, useHistory } from 'react-router-dom'

const Cart = (props) => {
// const [disabledCheckout, setDisabledCheckeout] = useState(false)
//     const [itemTotalPrice, setItemTotalPrice] = useState(0)
const dispatch = useDispatch()
let history = useHistory()
    const [cartClicked, setCartClicked] = useState(false)
    const showCart = useSelector(state => state.uiReducer.showCart)
    const cartItemArray = useSelector(state => state.cartReducer.cartItemArray )
    const itemInCart = useSelector(state => state.cartReducer.itemInCart)
    const shopItem = useSelector(state => state.shopItemReducer.shopItem)
    const itemQuantity = useSelector(state => state.cartReducer.itemQuantity)
    let amountInCart = useSelector(state => state.cartReducer.amountInCart)


//     useEffect(() => {
//         checkForDisable()
//     },[])

// //     const checkForDisable = () =>{
// //         if (itemTotalPrice < 1) {
// //         setDisabledCheckeout(true)
// //     }
// //         else if (itemTotalPrice < 1) {
// //         setDisabledCheckeout(false)
// //     }
// //         console.log(itemTotalPrice)
// // }

    const removeItem = (id, totalPrice) => {
       
        if(amountInCart > 0){
            amountInCart -= 1
        }


        const updatedShop = {
            ...shopItem,
            [id]: {
                ...shopItem[id],
                addedToCart: false,
                selectedValue: 1,
                buttonText: 'Add to cart'

            }
        }


            dispatch(actionCreators.resetShopItem(updatedShop))
        dispatch(actionCreators.removeFromCart(id, shopItem, amountInCart))
        dispatch(actionCreators.goToCheckout(totalPrice))
        console.log(itemQuantity)
    }
  

    const closeCart = (totalPrice) => {
        dispatch(actionCreators.closeBackdrop())
        dispatch(actionCreators.closeCart())
        dispatch(actionCreators.closeSideBarBackdrop())
        dispatch(actionCreators.goToCheckout(totalPrice))
        console.log(itemInCart)
    }
    const goToCheckout = (totalPrice) => {

        setCartClicked(true)

        dispatch(actionCreators.closeCart())
        dispatch(actionCreators.closeBackdrop())
        dispatch(actionCreators.closeSideBarBackdrop())
        dispatch(actionCreators.goToCheckout(totalPrice, cartClicked))
        dispatch(actionCreators.checkoutClicked())

        history.push('/checkout')
    }
    let totalPrices = 0

    const showCartItems = cartItemArray.map( cartItem => {
     
        totalPrices = totalPrices + cartItem.config.itemPrice 
        
        

            return (
                <div key={cartItem.id} className={classes.Cart}>
                    <div className={classes.itemTitle}>

                        <h4 className={classes.headerCentre}>{cartItem.config.itemTitle} </h4>
                        <Icon onClick={() => removeItem(cartItem.id, totalPrices.toFixed(2))} icon='trash' size='xs' color='darkGrey'></Icon>
                    </div>
                    

                    
                    <Row>
                        <Col xs='4' className={classes.cartImgContainer}>
                            <img className={classes.ItemImg} alt={cartItem.itemTitle} src={cartItem.config.itemImg} />
                        </Col>
                        <Col xs='8' className={classes.descContainer} >
                            <Row className={classes.ItemRow}>
                                <Col xs='6'><p className={classes.itemValue}>Quantity</p></Col>
                                <Col xs='6'><p>{cartItem.config.itemQuantity}</p></Col>
                                <Col xs='6'>< p className={classes.itemValue}>Size</p></Col>
                                <Col xs='6'><p>{cartItem.config.sizeValue}</p></Col>
                                <Col xs='6'><p className={classes.itemValue}>Price</p></Col>
                                <Col xs='6'><p>${cartItem.config.itemPrice.toFixed(2)}</p></Col>
                            </Row>
                 
                           
                           
                        </Col>
                    </Row>


                </div>

            )
        
        
    })
    let disabled = false;
    let buttonFunctions = ''
    if(amountInCart < 1 ){
        disabled = true
        buttonFunctions = <Button disabled={disabled}  btnType='block' btnColor='primary'>
            Cart Empty
                </Button>
    } else if(amountInCart > 0){
        disabled = false;
        buttonFunctions = <Button onClick={() => goToCheckout(totalPrices.toFixed(2))} btnType='block' btnColor='primary'>
            Checkout
                </Button>
    }
  
    return(
        <Modal 
        width='sm'
        title='Cart'
            close={() => closeCart(totalPrices.toFixed(2)) }
            showCart={showCart}
        >
            {showCartItems}
            <Row className={classes.TotalPriceContainer}>
        <Col><h3>SUBTOTAL:</h3></Col>
                <Col ><p>${totalPrices.toFixed(2)}</p></Col>
            </Row>
           
           
                {buttonFunctions}
            
         
     

        </Modal>
    )
}

export default Cart