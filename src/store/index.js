export {
    openBackdrop,
    closeBackdrop,
    togglesSideBar,
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

export{
searchShopItem,
updateShopPurchasable,
removeShopItem,
setShopItems,
resetShopItem,
getItemValue,
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
} from './order/action'
