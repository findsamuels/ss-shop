import React from "react";
import classes from "./HeaderBar.module.scss";

const HeaderBar = (props) => {
  return (
    <div className={[classes.HeaderBar, classes[props.backgroundColor]].join(' ')}>
      {props.children}
    </div>
  );
};

export default HeaderBar;
