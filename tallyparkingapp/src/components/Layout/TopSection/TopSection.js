import React from 'react';
import logo from '../../../assets/logo.svg';
import classes from './TopSection.module.css';

const topsection = (props)=>(    
    <header className={classes.content}>
    <img src={logo} className={classes.logo} alt="logo" />TALLY PARKING
  </header>
);

export default topsection;