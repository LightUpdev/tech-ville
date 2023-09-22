import React from "react";
import { headerStyles } from "../styles/header";

const Header = () => {
  return (
    <>
      <div className="container-fluid" style={headerStyles.container}>
        <div style={headerStyles.logo}>Logo</div>
        <div>
          <ul style={headerStyles.links}>
            <li style={headerStyles.link}>Home</li>
            <li style={headerStyles.link}>About Us</li>
            <li style={headerStyles.link}>Contact us</li>
          </ul>
        </div>
        <div>
          <div style={headerStyles.actions}>
            <div className="btn btn-warning">Sign Up</div>
            <div className="btn btn-warning">Login</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
