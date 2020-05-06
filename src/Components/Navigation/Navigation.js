import React from "react";
import classes from "./Navigation.module.scss";
import HeaderBar from "../HeaderBar/HeaderBar";
import {NavLink} from 'react-router-dom'
const navigation = (props) => {
const navItems = {
  all: {
    link: "/",
    value: "Home-Treasure",
  },
  Bedroom: {
    link: "/bedroom",
    value: "Bedroom",
  },
  Bathroom: {
    link: "/bathroom",
    value: "Bathroom",
  },
  LivingRoom: {
    link: "/livingroom",
    value: "Living Room",
  },
  Kitchen: {
    link: "/kitchen",
    value: "Kitchen",
  },
  Garden: {
    link: "/garden",
    value: "Garden",
  },
  Accessories: {
    link: "/accessories",
    value: "Accessories",
  },
 
};

let navArray = []
for(let nav in navItems){
    navArray.push({
        id: nav,
        config: navItems[nav]
    })
}

    let showNav = navArray.map((myNav) => (
      <li key={myNav.id}>
        <NavLink className={classes.NavText} to={myNav.config.link}>{myNav.config.value}</NavLink>
      </li>
    ));
    return (
      <HeaderBar backgroundColor="grey">
        <ul className={classes.Navigation}>{showNav}</ul>
      </HeaderBar>
    );
}

export default navigation
