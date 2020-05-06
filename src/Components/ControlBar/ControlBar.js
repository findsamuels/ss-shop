import React from 'react'
import classes from './ControlBar.module.scss'
import ControlComponent from '../../hooks/ControlComponent/ControlComponent'
import Logo from '../Logo/Logo'
import HeaderBar from '../HeaderBar/HeaderBar'
import Hamburger from '../Hamburger/Hamburger'
import {Row, Col} from 'react-bootstrap'
const header = () => (
  <HeaderBar backgroundColor="primary" >
    <div className={classes.ControlBar}>
      <div className={classes.barClass} ><Hamburger /></div>
      <div className={classes.logoClass}  ><Logo size='lg' /></div>
      <div className={classes.controlClass} ><ControlComponent /></div>

    </div>
  </HeaderBar>
);


    
  


export default header