import classes from "./Hello.module.css";

import React from "react";

function Hello() {
  return (
    <div className={classes.Hello}>
      <span>Hi, my name is </span>
      <h1>Taheny Belguith.</h1>
      <h2>I build things for the web.</h2>
      <p>
        I’m a software engineer specializing in building{" "}
        <span> (and occasionally designing) </span> exceptional digital
        experiences. I <span> enjoy </span> create things that live on the
        internet, wether that be websites , applications,or anything on between
        .
      </p>
    </div>
  );
}

export default Hello;
