import logo from "./logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
library.add(fas);



const Header = () => {
  return (
    <header className="header">
      <div className="topnav">
        <a href="#" className="le">
          <img src={logo} alt="Logo" />
        </a>
        <a href="#" className="login ri">
          Login
        </a>
        <a href="#" className="profile ri">
          <FontAwesomeIcon icon=" fa-user" className="user" />
          Profile
        </a>
      </div>
    </header>
  );
};

export default Header;
