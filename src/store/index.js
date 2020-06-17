export {
    openBackdrop,
    closeBackdrop,
    openSideBar,
    closeSideBar,
    showSideBarBackdrop,
    closeSideBarBackdrop,
    toggleCart,
    closeCart,
    openLogin,
    closeLogin,
    openPayment,
    closePayment
}from './Ui/action'

export {
buyOptions,
openBuyOptions,
closeBuyOptions
}from './buyOptions/action'

export{
searchShopItem,
updateShopPurchasable,
resetShop,
setShopItems,
resetShopItem,
getItemValue,
getSizeValue,
filterCategories
}from './shop/action'


export{
addToCart,
    removeFromCart,
    clearCart
}from'./cart/actions'

export{
goToCheckout,
checkoutClicked,
checkoutNotClicked
}from './checkout/action'

export {
  login,
  register,
  removeAuth,
  logout,
  startCheckAuth,
  autoLogout,
} from "./auth/action";

export{
getOrderDetails
} from './orderItems/action'

export {
  orderStart
} from './order/action'



