import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='fsdf' active>Burger Builder</NavigationItem>
      <NavigationItem link='fsdf'>Checkout</NavigationItem>
    </ul> 
  )
}

export default navigationItems
