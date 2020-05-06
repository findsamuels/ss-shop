import * as actionTypes from '../actionTypes'
import utilityObject from '../../Utility/Utility'
import shopImg from '../../assets/img/bedroom.png'
import gardenImg from '../../assets/img/garden.png'
import bathroomimg from '../../assets/img/bathroom.png'

const initialState = {

    inputEntered: false,
    inputText: '',
    categoryToFilter:'',
    filteredShopItems: '',
    categorySelected: '',
    shopItem: {
        bed1: {
            category: 'Item 1',
            img: shopImg,
            title: 'Deluxe Bed',
            description: 'Great bed for a great night, you will sleep and wake up feeling energized well get it today at a good price',
            price: 45.32,
            selectedValue: 1,
            addedToCart: false,
            quantity: [1, 2, 3, 4, 5],
            buttonText: 'Add to cart'
        },
        bed2: {
            category: 'Item 1',
            img: shopImg,
            title: 'Single Bed',
            description: 'Great bed for a great night, you will sleep and wake up feeling energized well get it today at a good price',
            price: 98.01,
            selectedValue: 1,
            addedToCart: false,
            quantity: [1, 2, 3],
           
            buttonText: 'Add to cart'
        },
        bed3: {
            category: 'Item 1',
            img: shopImg,
            title: 'Double Bed',
            description: 'Great bed for a great night, you will sleep and wake up feeling energized well get it today at a good price',
            price: 78.65,
            addedToCart: false,
            selectedValue: 1,
            quantity: [1, 2],
           
            buttonText: 'Add to cart'
        },

        mirror: {
            category: 'Item 2',
            img: gardenImg,
            title: 'Mirror',
            description: 'Great bed for a great night, you will sleep and wake up feeling energized well get it today at a good price',
            price: 45.32,
            selectedValue: 1,
            addedToCart: false,
            quantity: [1, 2, 3, 4, 5],
            buttonText: 'Add to cart'
        },
        table: {
            category: 'Item 2',
            img: gardenImg,
            title: 'Table',
            description: 'Great bed for a great night, you will sleep and wake up feeling energized well get it today at a good price',
            price: 98.01,
            selectedValue: 1,
            addedToCart: false,
            quantity: [1, 2, 3],

            buttonText: 'Add to cart'
        },
        lawnmower: {
            category: 'Item 2',
            img: gardenImg,
            title: 'Lawnmower',
            description: 'Great bed for a great night, you will sleep and wake up feeling energized well get it today at a good price',
            price: 78.65,
            addedToCart: false,
            selectedValue: 1,
            quantity: [1, 2],

            buttonText: 'Add to cart'
        },
         toiletTowel: {
            category: 'Item 3',
             img: bathroomimg,
             title: 'ToiletTowel',
            description: 'Great bed for a great night, you will sleep and wake up feeling energized well get it today at a good price',
            price: 45.32,
            selectedValue: 1,
            addedToCart: false,
            quantity: [1, 2, 3, 4, 5],
            buttonText: 'Add to cart'
        },
        shower: {
            category: 'Item 3',
            img: bathroomimg,
            title: 'Shower',
            description: 'Great bed for a great night, you will sleep and wake up feeling energized well get it today at a good price',
            price: 98.01,
            selectedValue: 1,
            addedToCart: false,
            quantity: [1, 2, 3],

            buttonText: 'Add to cart'
        },
        bath: {
            category: 'Item 3',
            img: bathroomimg,
            title: 'Bath',
            description: 'Great bed for a great night, you will sleep and wake up feeling energized well get it today at a good price',
            price: 78.65,
            addedToCart: false,
            selectedValue: 1,
            quantity: [1, 2],

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


const updateShopPurchasable = (state, action) => {
    
   

    const updatedShop = {
        ...state.shopItem,
        [action.itemId]: {
            ...state.shopItem[action.itemId],
            addedToCart: true,
            buttonText:'Item in cart',
           
        }
    }
    console.log(action.itemInCart)
   
    return utilityObject(state, {
        shopItem: updatedShop,
        filteredShopItems: updatedShop

        
    })
}

const removeShopItem = (state, action) => {


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
            selectedValue: action.value,
            
            
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
            case actionTypes.UPDATE_SHOP_PURCHASABLE:
                return updateShopPurchasable(state,action)
        case actionTypes.REMOVE_SHOP_ITEM:
            return removeShopItem(state, action)
            case actionTypes.RESET_SHOP_ITEM:
            return resetShopItem(state, action)
            case actionTypes.GET_ITEM_VALUE:
            return getItemValue(state, action)
        case actionTypes.FILTER_CATEGORIES:
            return filterCategories(state, action)
            
        default:
            return state;
    }
}