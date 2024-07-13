import React, { Component } from "react";
import navStyles from "./navBar.module.css"

class Navbar extends Component {

  render() {
    console.log(this.props);
    const cartCount = this.props.cartCount;
    return (
      <div className={navStyles.nav}>
        <div className = {navStyles.title}>Movie-App</div>
        <div className={navStyles.cartIconContainer}>
          <img
            className={navStyles.cartIcon}
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            alt="cart-icon"
          />
          <span className={navStyles.cartCount}>{cartCount}</span>
        </div>
      </div>
    );
  }
}

// const styles = {
//   cartIcon: {
//     height: 48,
//     marginRight: 20,
//   },
//   nav: {
//     height: 70,
//     background: "#4267b2",
//     display: "flex",
//     justifyContent: "space-between" ,
//     alignItems: "center",
//     position: "relative",
//   },
//   title:{
//     fontSize: 30,
//     color: "#fff",
//     fontWeight: 600,
//     fontFamily: '"Montserrat", sans-serif',
//     textTransform: "uppercase",
//     marginLeft: 20
//   },
  
//   cartIconContainer: {
//     position: "relative",
//     cursor: "pointer",
//   },
//   cartCount: {
//     background: "orange",
//     borderRadius: "50%",
//     padding: "4px 8px",
//     position: "absolute",
//     right: 10,
//     top: -5,
//     fontSize: 12,
//   },
// };

export default Navbar;
