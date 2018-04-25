import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxilary from "../../../hoc/Auxiliary";

const sideDrawer = (props) => {
  console.log(props)
  return (
    <Auxilary>
      <Backdrop clicked={props.closed} show={props.open} />
      <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <NavigationItems />
      </div>
    </Auxilary>
  );
};

export default sideDrawer;
