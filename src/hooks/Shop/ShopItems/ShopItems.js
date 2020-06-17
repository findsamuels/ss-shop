import React, { useState, useRef, useEffect } from 'react'

import { Card, Col, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import {useDispatch, useSelector} from 'react-redux'
import * as actionCreators from '../../../store/index'
import classes from './ShopItems.module.scss'
import FormElement from '../../../Components/Form/FormElement/FormElement'
import Button from '../../../Components/Button/Button'
import Modal from '../../../Components/Modal/Modal'

const ShopItems = (props) => {
const dispatch = useDispatch()

const [maxDisplay, setMaxDisplay] = useState(6)
const[itemBuyOptions, setItemBuyOptions] = useState({

    img: '',
    title: '',
    description:'',
    id:'',
    price: '',
    selectQuantity: '',
    selectSize: '',
    sizeValue: '',
    quantityValue: '',
    addedToCart: false,
    btnText: ''
})
    
    const shopItem = useSelector(state => state.shopItemReducer.shopItem)

    if(shopItem === null){
        console.log('loading')
    }
    const inputText = useSelector(state => state.shopItemReducer.inputText)
    const categoryToFilter = useSelector(state => state.shopItemReducer.categoryToFilter)
    const categorySelected = useSelector(state => state.shopItemReducer.categorySelected)
    const openBuyOptions = useSelector(state => state.buyOptionsReducer.openBuyOptions)
    const inputEntered = useSelector(state => state.shopItemReducer.inputEntered)
    let amountInCart = useSelector(state => state.cartReducer.amountInCart)


    const close = () => {

        dispatch(actionCreators.closeBuyOptions())
        dispatch(actionCreators.closeBackdrop())
    }

    const addToCart = (itemImg, itemTitle, itemId, itemPrice, itemValue, sizeValue, addedToCart) => {

        let amountInCarts = 0

     

        if(itemValue !== '' && itemValue !== 'Select quantity' && 
            sizeValue !== '' && sizeValue !== 'UK Size'
        ){
            const newItemBuyOptions = {
                ...itemBuyOptions,
                addedToCart: true
            }
            setItemBuyOptions(newItemBuyOptions)
            let newItemPrice = itemPrice * itemValue
           let newid = Math.random().toString(36).replace(/[^a-z]+/g, '')

            let cartItem = {
                itemImg: itemImg,
                itemTitle: itemTitle,
                itemPrice: newItemPrice,
                itemQuantity: itemValue,
                sizeValue: sizeValue

            }

           
                amountInCarts = amountInCart += 1
              
            dispatch(actionCreators.addToCart(cartItem, newid, amountInCarts))
            

           
        }
        else if (itemValue !== '' && itemValue === 'Select quantity'&&
            sizeValue !== '' && sizeValue === 'UK Size'
        ){
         
        }
        else if (itemValue === '' && sizeValue === '' ) {
          
        }

        
    }

   

    const buyOptions = (img, title, description, id, price, selectQuantity, selectSize, sizeValue, quantityValue, addedToCart, btnText) => {

    const newItemBuyOptions = {
        ...itemBuyOptions,
        img: img,
        title: title,
        description: description,
        id: id,
        price: price,
        selectQuantity: selectQuantity,
        selectSize: selectSize,
        sizeValue: sizeValue,
        quantityValue: quantityValue,
        addedToCart: addedToCart,
        btnText: btnText
    }

        setItemBuyOptions(newItemBuyOptions)



        dispatch(actionCreators.openBuyOptions())
        dispatch(actionCreators.openBackdrop())

        
    }
    const selectQuantity = (event, itemId) => {
        let value = event.target.value
    
        const newItemBuyOptions = {
            ...itemBuyOptions,
            quantityValue: value
        }
        setItemBuyOptions(newItemBuyOptions)
        dispatch(actionCreators.getItemValue(value, itemId))

    }

    const selectSize = (event, itemId) => {
        let value = event.target.value
        const newItemBuyOptions = {
            ...itemBuyOptions,
            sizeValue: value
        }
        setItemBuyOptions(newItemBuyOptions)
        
        dispatch(actionCreators.getSizeValue(value, itemId))

    }

    const notPurchased = () => {
        const newItemBuyOptions = {
            ...itemBuyOptions,
            addedToCart: false
        }
        setItemBuyOptions(newItemBuyOptions)
    }


    const viewMore = () => {
        setMaxDisplay(maxDisplay +3)
    }

    const viewCart = () => {
        dispatch(actionCreators.closeBuyOptions())
        dispatch(actionCreators.toggleCart())
        notPurchased()
       
    }
    const closePurchasing = () => {
        notPurchased()
        dispatch(actionCreators.closeBuyOptions())
        dispatch(actionCreators.closeBackdrop())
    }
    
    let itemArray = []

        for (let item in shopItem) {
            itemArray.push({
                id: item,
                config: shopItem[item]
            })
        }
    

    if (inputEntered) {
        let filteredBedArray = []
        filteredBedArray = itemArray.filter(filteredItem => {
            return filteredItem.config.title.toLowerCase().includes(inputText.toLowerCase())
        })
        itemArray = filteredBedArray
    }
    if (categorySelected){
        let filteredCategory = []
        filteredCategory = itemArray.filter(filteredC => {
            return filteredC.config.category === categoryToFilter
        })
        itemArray = filteredCategory
        
    }
    let showViewMore = null

    if(itemArray.length > maxDisplay){
        showViewMore = (<p className={classes.ViewMore} onClick={viewMore}>View more...</p>)
    }

   
    let purchase = (
        <Modal width='lg' openBuyOptions={openBuyOptions} id={itemBuyOptions.title} close={close} title={itemBuyOptions.title}>
            <Row className={classes.BuyOptions}>
                <Col lg='5' className={classes.ImgDiv}>
                    <img className={classes.BuyOptionsImg}  src={itemBuyOptions.img} alt={itemBuyOptions.title} />
                </Col>
                <Col lg='7' className={classes.BuyOptionsOptions}>
                    <h3 className={classes.headerLeft}>{itemBuyOptions.title}</h3>
                    <p >{itemBuyOptions.description}</p>
                    <p className={classes.description}> ${itemBuyOptions.price}</p>
                    <FormElement
                        value={itemBuyOptions.sizeValue}
                        elementType='select'
                        onChange={(event) => selectSize(event, itemBuyOptions.id)}>
                        {itemBuyOptions.selectSize}
                    </FormElement>

                    <FormElement value={itemBuyOptions.quantityValue} onChange={(event) => selectQuantity(event, itemBuyOptions.id)} elementType='select' >
                        {itemBuyOptions.selectQuantity}
                    </FormElement>

                    <Button onClick={() => addToCart(itemBuyOptions.img, itemBuyOptions.title, itemBuyOptions.id, itemBuyOptions.price, itemBuyOptions.quantityValue, itemBuyOptions.sizeValue, itemBuyOptions.addedToCart)} btnColor="primary" btnType="block" >{itemBuyOptions.btnText}</Button>





                </Col>
            </Row>

        </Modal>
        
    )
    if(itemBuyOptions.addedToCart){
       purchase = (
           <Modal width='md' openBuyOptions={openBuyOptions} id={itemBuyOptions.title} close={close} title={itemBuyOptions.title}>
               <div>
                   <p className={classes.headerCentre}>Item Added To Cart</p>
                   <Button spacing='margin' hide={!itemBuyOptions.addedToCart} onClick={() => viewCart()} btnColor="primaryOutline" btnType="block" >VIEW CART</Button>
                   <Button spacing='margin' hide={!itemBuyOptions.addedToCart} onClick={() => closePurchasing()} btnColor="primary" btnType="block" >CONTINUE SHPPING</Button>

               </div>
               </Modal>
          
          
       )
    }


    const showItems = itemArray.slice(0, maxDisplay).map(myItems => {
        let selectQuantity = myItems.config.quantity.map(itemQ => {  
            return( 
                <option key={itemQ}  value={itemQ}>{itemQ}</option>  
            )
        } )

        let selectSize = myItems.config.size.map(itemS => {
            return (
                <option key={itemS} value={itemS}>{itemS}</option>
            )
        })


        
        return(
      

                <Col md="4" key={myItems.id} >
                    {props.children}
                    <Fade >
                        <Card onClick={() => buyOptions(
                            myItems.config.img,
                            myItems.config.title,
                            myItems.config.description,
                            myItems.id,
                            myItems.config.price,
                            selectQuantity,
                            selectSize,
                            myItems.config.sizeValue,
                            myItems.config.quantityValue,
                            myItems.config.addedToCart,
                            myItems.config.buttonText)} className={classes.ItemList} >

                            <Card.Img className={classes.itemImage} src={myItems.config.img} alt={myItems.config.title} />
                            <Card.Body className={classes.itemBox}>
                                <Card.Text className={classes.Title}>{myItems.config.title}</Card.Text>
                                <Card.Title className={classes.Price}>${myItems.config.price}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Fade>
                </Col>

           
           
        )
    })

   

    return (
        <React.Fragment>
            {purchase}
            
            <Row className={classes.ShopItems}>
                {showItems}

                {showViewMore}


            </Row>
        </React.Fragment>
    )
    
   


    
}

export default ShopItems