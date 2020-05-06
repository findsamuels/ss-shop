import React from 'react'
import Modal from '../../Components/Modal/Modal'
import { useSelector, useDispatch} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Icon from '../../Components/Icon/Icon'
  import Button from '../../Components/Button/Button'
import * as actionCreators from '../../store/index'
import classes from './Cart.module.scss'
import { NavLink } from 'react-router-dom'

const Cart = (props) => {

const dispatch = useDispatch()
   
    const showCart = useSelector(state => state.uiReducer.showCart)
    const cartItemArray = useSelector(state => state.cartReducer.cartItemArray )
    const itemInCart = useSelector(state => state.cartReducer.itemInCart)
    const shopItem = useSelector(state => state.shopItemReducer.shopItem)
    const itemQuantity = useSelector(state => state.cartReducer.itemQuantity)
    const amountInCart = useSelector(state => state.cartReducer.amountInCart)



    const removeItem = (id, totalPrice) => {
        let amountInCarts = 1
        if(amountInCart > 0){
            amountInCarts = amountInCart - amountInCarts
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
        dispatch(actionCreators.removeFromCart(id, shopItem, amountInCarts))
        dispatch(actionCreators.goToCheckout(totalPrice))
        console.log(itemQuantity)
    }
  

    const closeCart = (totalPrice) => {
        dispatch(actionCreators.toggleBackdrop())
        dispatch(actionCreators.closeCart())
        dispatch(actionCreators.goToCheckout(totalPrice))
        console.log(itemInCart)
    }
    const goToCheckout = (totalPrice) => {
        dispatch(actionCreators.closeCart())
        dispatch(actionCreators.toggleBackdrop())
        dispatch(actionCreators.goToCheckout(totalPrice))
        dispatch(actionCreators.checkoutClicked())
    }
    let totalPrices = 0

    const showCartItems = cartItemArray.map( cartItem => {
     
        totalPrices = totalPrices + cartItem.config.itemPrice 
           
        


            return (
                <div key={cartItem.id} className={classes.Cart}>
                    <div className={classes.cartImgContainer}>
                        <img alt={cartItem.itemTitle} src={cartItem.config.itemImg} />
                    </div>

                    <div className={classes.descContainer}  >
                        <h4 >{cartItem.config.itemTitle} - ${cartItem.config.itemPrice.toFixed(2)}</h4>
                    
                        <p>Quantity: {cartItem.config.itemQuantity}</p>
                        <div className={classes.removeItem}>
                            <Icon onClick={() => removeItem(cartItem.id, totalPrices.toFixed(2))} icon='trash' size='sm' color='red'></Icon>

                        </div>
                    </div>

                </div>

            )
        
        
    })
    return(
        <Modal 
        title='Cart'
            close={() => closeCart(totalPrices.toFixed(2)) }
            showCart={showCart}
        >
            {showCartItems}
            <Row className={classes.TotalPriceContainer}>
        <Col><h3>SUBTOTAL:</h3></Col>
                <Col ><p>${totalPrices.toFixed(2)}</p></Col>
            </Row>
           
            <NavLink className={classes.cartLink} to='/checkout' >
                <Button onClick={() => goToCheckout(totalPrices.toFixed(2))} btnType='block' btnColor='primary'>
                        Checkout
                </Button>
            
            </NavLink>
     

        </Modal>
    )
}

export default Cart