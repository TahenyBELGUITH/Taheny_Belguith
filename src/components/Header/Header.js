import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.View}>
      <p>Belguith</p>
      <ul>
        <li>
          <span>01.</span> About
        </li>
        <li>
          <span>02.</span> Work
        </li>
        <li>
          <span>03.</span> Contact
        </li>
        <li>Resume</li>
      </ul>
    </div>
  );
}

export default Header;
