import React, { Component } from "react";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    const initialState = this.state.showSideDrawer;
    this.setState({showSideDrawer: !initialState})
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar clicked={this.sideDrawerClosedHandler} />
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
        <main className={classes.container}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
