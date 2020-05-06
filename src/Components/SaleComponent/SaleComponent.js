import React from 'react'
import classes from "./SaleComponent.module.scss";
import HeaderBar from '../HeaderBar/HeaderBar';

const SaleComponent = () => {
    return (
        <HeaderBar color="red">
<h3 className={classes.SaleComponent}>10% Off All Purchases!</h3>
        </HeaderBar>
      
    );
}

export default SaleComponent