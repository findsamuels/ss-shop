import React from 'react'
import { Row } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import ItemListContainer from '../../ItemListContainer/ItemListContainer'
import * as actionCreators from '../../../store/index'
import classes from './ShopItems.module.scss'

const ShopItems = (props) => {
const dispatch = useDispatch()


  
   
    
    const shopItem = useSelector(state => state.shopItemReducer.shopItem)
    const inputText = useSelector(state => state.shopItemReducer.inputText)
    const categoryToFilter = useSelector(state => state.shopItemReducer.categoryToFilter)
    const categorySelected = useSelector(state => state.shopItemReducer.categorySelected)
    
    const inputEntered = useSelector(state => state.shopItemReducer.inputEntered)
    const amountInCart = useSelector(state => state.cartReducer.amountInCart)

    const addToCart = (itemImg, itemTitle, itemId, itemPrice, itemValue, addedToCart) => {

        let amountInCarts = 1
        let newItemPrice = itemPrice * itemValue
 let cartItem = itemId
        cartItem = {
            itemImg: itemImg,
            itemTitle: itemTitle,
            itemPrice: newItemPrice,
            itemQuantity: itemValue,
          
           
        }

        if (!addedToCart){
            amountInCarts = amountInCart + amountInCarts

            dispatch(actionCreators.updateShopPurchasable(itemId))

            dispatch(actionCreators.addToCart(cartItem, itemId, amountInCarts))
        }

      
        
        
        
    }

    const selectQuantity = (event, itemId, price) => {
        let value = event.target.value
      
        dispatch(actionCreators.getItemValue(value, itemId))

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
        console.log(categoryToFilter)
    }

    const showItems = itemArray.map(myItems => {
        let selectedQuantity = myItems.config.quantity.map(itemQ => {
          
            return(
               
                    <option value={itemQ}>{itemQ}</option>
              
            )
        } )
        
        return(
            <ItemListContainer
                key={myItems.id}
            id={myItems.id}
            itemTitle={myItems.config.title}
            itemDescription={myItems.config.description}
            itemPrice={myItems.config.price}
                btnText={myItems.config.buttonText}
                selectQuantity={(event) => selectQuantity(event, myItems.id, myItems.config.price)}
                selectedValue={myItems.config.selectedValue}
            options={selectedQuantity}
                disabled={myItems.config.addedToCart}
                addToCart={() => addToCart(myItems.config.img, myItems.config.title, myItems.id, myItems.config.price, myItems.config.selectedValue, myItems.config.addedToCart ) }
            itemImg={myItems.config.img}
            />
        )
    })

   

    return <Row className={classes.ShopItems}>{showItems}</Row>


    
}

export default ShopItems