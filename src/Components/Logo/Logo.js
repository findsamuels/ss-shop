import React from "react";
import classes from "./Logo.module.scss";
import { NavLink } from "react-router-dom";

const logo = (props) => {
  return (
    
      <NavLink className={[classes.Logo, classes[props.size]].join(' ')} to='/'>HT</NavLink>
  
  );
};

export default logo;
