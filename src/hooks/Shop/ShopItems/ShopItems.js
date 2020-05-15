import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import ItemListContainer from '../../ItemListContainer/ItemListContainer'
import * as actionCreators from '../../../store/index'
import classes from './ShopItems.module.scss'
import Button from '../../../Components/Button/Button'
const ShopItems = (props) => {
const dispatch = useDispatch()

const [maxDisplay, setMaxDisplay] = useState(3)
  
   
    
    const shopItem = useSelector(state => state.shopItemReducer.shopItem)
    const inputText = useSelector(state => state.shopItemReducer.inputText)
    const categoryToFilter = useSelector(state => state.shopItemReducer.categoryToFilter)
    const categorySelected = useSelector(state => state.shopItemReducer.categorySelected)
    
    const inputEntered = useSelector(state => state.shopItemReducer.inputEntered)
    let amountInCart = useSelector(state => state.cartReducer.amountInCart)

    const addToCart = (itemImg, itemTitle, itemId, itemPrice, itemValue, addedToCart) => {

        let amountInCarts = 0
        let newItemPrice = itemPrice * itemValue
 let cartItem = itemId
        cartItem = {
            itemImg: itemImg,
            itemTitle: itemTitle,
            itemPrice: newItemPrice,
            itemQuantity: itemValue,
          
           
        }

        if (!addedToCart){
            amountInCarts = amountInCart += 1 

            dispatch(actionCreators.updateShopPurchasable(itemId))

            dispatch(actionCreators.addToCart(cartItem, itemId, amountInCarts))
        }

      
        
        
        
    }

    const selectQuantity = (event, itemId, price) => {
        let value = event.target.value
      
        dispatch(actionCreators.getItemValue(value, itemId))

    }
    const viewMore = () => {
        setMaxDisplay(maxDisplay +3)
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
    let showViewMore = null

    if(itemArray.length > maxDisplay){
        showViewMore = (<Button btnColor='primary' onClick={viewMore}>View more...</Button>)
    }

    const showItems = itemArray.slice(0, maxDisplay).map(myItems => {
        let selectedQuantity = myItems.config.quantity.map(itemQ => {
          
            return(
               
                    <option value={itemQ}>{itemQ}</option>
              
            )
        } )
        
        return(
            <ItemListContainer
                
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

   

    return <Row className={classes.ShopItems}>
        {showItems}
        <div className={classes.ViewMore}>
            {showViewMore}
        </div>
       
        </Row>


    
}

export default ShopItems