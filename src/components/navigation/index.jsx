import React from "react";
import { Link } from "gatsby";
import { container, smallContainer } from "./navigation.module.css";

const Navigation = () => {
  return (
    <>
      <div className={container}>
        <Link to="/">Home</Link>
        <Link to="/hand-to-hand">Hand To Hand</Link>
        <Link to="/shotguns">Shotguns</Link>
      </div>
      <div className={smallContainer}>
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default Navigation;
