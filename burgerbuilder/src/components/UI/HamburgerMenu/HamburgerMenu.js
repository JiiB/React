import React from 'react';
import classes from './HamburgerMenu.css';

const hamburgerMenu = (props) => {
  let HamburgerClasses = [classes.HamburgerMenu];
  return (
    <div onClick={props.clicked} className={HamburgerClasses.join(' ')}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default hamburgerMenu
