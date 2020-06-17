import * as actionTypes from '../actionTypes'
import utilityObject from '../../Utility/Utility'
import whiteshirt2 from '../../assets/img/whiteshirtgirl2.jpg'
import redshirt from '../../assets/img/redshirt.jpg'
import redshirtgirl from '../../assets/img/redshirtgirl.jpg'
import redandblackshirt from '../../assets/img/redandblackshirt.jpg'
import whiteshirtgirl from '../../assets/img/whiteshirtgirl.jpg'
import spartanshirt from '../../assets/img/spartanshirt.jpg'
import blackshirt2 from '../../assets/img/blackshirt2.jpg'
import yellowjumper from '../../assets/img/yellowhoddie.jpg'
import blackshirt from '../../assets/img/blackshirt.jpg'
const initialState = {

    inputEntered: false,
    inputText: '',
    categoryToFilter:'',
    filteredShopItems: '',
    categorySelected: '',
    shopItem: {
        bed1: {
            category: 'Item 1',
            img: whiteshirt2,
            title: 'Bright Top',
            description: 'This item including the images are listed here as a placeholder please replace them when using template. thank you for trying this template',
            price: 45.32,
            quantityValue: '',
            sizeValue: '',
            addedToCart: false,
            quantity: ['Select quantity', 1, 2, 3, 4],
            size: ['UK Size: Please Select', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
            buttonText: 'Add to cart'
        },
        bed2: {
            category: 'Item 1',
            img: redshirt,
            title: 'Red Shirt',
            description: 'This item including the images are listed here as a placeholder please replace them when using template. thank you for trying this template',
            price: 98.01,
            quantityValue: '',
            sizeValue: '',
            addedToCart: false,
            quantity: ['Select quantity', 1, 2, 3, 4, 5],
            size: ['UK Size: Please Select', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
            buttonText: 'Add to cart'
        },
        bed3: {
            category: 'Item 1',
            img: redshirtgirl,
            title: 'Lovely Red Shirt',
            description: 'This item including the images are listed here as a placeholder please replace them when using template. thank you for trying this template',
            price: 78.65,
            addedToCart: false,
             quantityValue: '',
            sizeValue: '',
            quantity: ['Select quantity', 1, 2, 3, 4],
            size: ['UK Size: Please Select', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
            buttonText: 'Add to cart'
        },

        mirror: {
            category: 'Item 2',
            img: redandblackshirt,
            title: 'Mixed Top',
            description: 'This item including the images are listed here as a placeholder please replace them when using template. thank you for trying this template',
            price: 45.32,
             quantityValue: '',
            sizeValue: '',
            addedToCart: false,
            quantity: ['Select quantity', 1, 2, 3, 4],
            size: ['UK Size: Please Select', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
            buttonText: 'Add to cart'
        },
        table: {
            category: 'Item 2',
            img: whiteshirtgirl,
            title: 'White Shirt',
            description: 'This item including the images are listed here as a placeholder please replace them when using template. thank you for trying this template',
            price: 98.01,
             quantityValue: '',
            sizeValue: '',
            addedToCart: false,
            quantity: ['Select quantity', 1, 2, 3],
            size: ['UK Size: Please Select', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],

            buttonText: 'Add to cart'
        },
        lawnmower: {
            category: 'Item 2',
            img: spartanshirt,
            title: 'Spartan Shirt',
            description: 'This item including the images are listed here as a placeholder please replace them when using template. thank you for trying this template',
            price: 78.65,
            addedToCart: false,
             quantityValue: '',
            sizeValue: '',
            quantity: ['Select quantity', 1, 2],
            size: ['UK Size: Please Select', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
            buttonText: 'Add to cart'
        },
         toiletTowel: {
            category: 'Item 3',
             img: blackshirt2,
             title: 'Dark Shirt',
            description: 'This item including the images are listed here as a placeholder please replace them when using template. thank you for trying this template',
            price: 45.32,
             quantityValue: '',
             sizeValue: '',
            addedToCart: false,
            quantity: ['Select quantity', 1, 2, 3, 4],
             size: ['UK Size: Please Select', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
            buttonText: 'Add to cart'
        },
        shower: {
            category: 'Item 3',
            img: yellowjumper,
            title: 'Yellow Jumper',
            description: 'This item including the images are listed here as a placeholder please replace them when using template. thank you for trying this template',
            price: 98.01,
            quantityValue: '',
            addedToCart: false,
            sizeValue: '',
            quantity: ['Select quantity', 1, 2, 3, 4, 5],
            size: ['UK Size: Please Select', 'XS', 'S', 'M', 'L', 'XL','XXL'],
            buttonText: 'Add to cart'
        },
        bath: {
            category: 'Item 3',
            img: blackshirt,
            title: 'Cool Black shirt',
            description: 'This item including the images are listed here as a placeholder please replace them when using template. thank you for trying this template',
            price: 78.65,
            addedToCart: false,
            quantityValue: '',
            quantity: ['Select quantity', 1, 2],
            size: ['UK Size: Please Select', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
            sizeValue: '',
            buttonText: 'Add to cart'
        }
    }
}


const searchShopItems = (state, action) => {
   
    return utilityObject(state, {
        inputEntered: action.inputEntered,
        inputText: action.inputText
    })
}


// const updateShopPurchasable = (state, action) => {
    
   

//     const updatedShop = {
//         ...state.shopItem,
//         [action.itemId]: {
//             ...state.shopItem[action.itemId],
//             addedToCart: true,
            
           
//         }
//     }
//     console.log(action.itemInCart)
   
//     return utilityObject(state, {
//         shopItem: updatedShop,
//         filteredShopItems: updatedShop

        
//     })
// }

const resetShop = (state, action) => {
   let resetShop = JSON.parse(localStorage.getItem('shopItem'))
    console.log(resetShop)

    return utilityObject(state, {
        shopItem: resetShop,
        


    })

}

const resetShopItem = (state, action) => {
    if (!action.itemInCart && action.resetShopItem !== null){
        return utilityObject(state, {
            shopItem: action.resetShopItem,
        })
    }
   
    else{
        return utilityObject(state, {
            shopItem: state.Shop,
        })
    }
}

const getItemValue = (state, action) => {
   
    const updatedShop = {
        ...state.shopItem,
        [action.itemId]: {
            ...state.shopItem[action.itemId],
            quantityValue: action.value,
            
            
            
        }
    }
    
        return utilityObject(state, {
            shopItem: updatedShop,
        })
    
}

const getSizeValue = (state, action) => {

    const updatedShop = {
        ...state.shopItem,
        [action.itemId]: {
            ...state.shopItem[action.itemId],
            sizeValue: action.value,
            


        }
    }

    return utilityObject(state, {
        shopItem: updatedShop,
    })

}

const filterCategories = (state, action) => {


    return utilityObject(state, {
       
        categoryToFilter: action.value,
        categorySelected: action.categorySelected
    })

}



export const shopItemReducer = (state = initialState, action) => {

    switch (action.type) {
       
        case actionTypes.SEARCH_SHOP_ITEMS:
            return searchShopItems(state, action)
            // case actionTypes.UPDATE_SHOP_PURCHASABLE:
            //     return updateShopPurchasable(state,action)
        case actionTypes.RESET_SHOP:
            return resetShop(state, action)
            case actionTypes.RESET_SHOP_ITEM:
            return resetShopItem(state, action)
            case actionTypes.GET_ITEM_VALUE:
            return getItemValue(state, action)
        case actionTypes.GET_SIZE_VALUE:
            return getSizeValue(state, action)
        case actionTypes.FILTER_CATEGORIES:
            return filterCategories(state, action)
            
        default:
            return state;
    }
}