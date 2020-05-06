import React from "react";
import classes from "./Icon.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const logo = (props) => {
  return (
    
      <FontAwesomeIcon
onClick={props.onClick}
        icon={props.icon}
        className={[
          classes.Icon,
          classes[props.size],
          classes[props.color],
        ].join(" ")}
      />
   
  );
};

export default logo;
