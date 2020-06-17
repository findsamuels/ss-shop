import * as actionTypes from '../actionTypes'



export const updateShopPurchasable = (itemId, itemInCart) => {

    return {
        type: actionTypes.UPDATE_SHOP_PURCHASABLE,
        itemId: itemId,
        itemInCart: itemInCart

    }
}

export const setShopItems = () => {

    return {
        type: actionTypes.SET_SHOP_ITEMS,

    }
}

export const getItemValue = (value, itemId) => {

    return {
        type: actionTypes.GET_ITEM_VALUE,
        value: value,
        itemId: itemId,
        
       
    }
}

export const getSizeValue = (value, itemId) => {

    return {
        type: actionTypes.GET_SIZE_VALUE,
        value: value,
        itemId: itemId,
    }
}

export const resetShopItem = (resetShopItem) => {

    return {
        type: actionTypes.RESET_SHOP_ITEM,
        
        resetShopItem: resetShopItem
        
    }
}

export const resetShop = (itemId) => {
    return {
        type: actionTypes.RESET_SHOP,
        

    }

}


export const searchShopItem = (inputText, inputEntered) => {

    return {
        type: actionTypes.SEARCH_SHOP_ITEMS,
        inputText: inputText,
        inputEntered: inputEntered

    }
}

export const filterCategories = (value, categorySelected) => {

    return {
        type: actionTypes.FILTER_CATEGORIES,
        value: value,
        categorySelected: categorySelected
       

    }
}