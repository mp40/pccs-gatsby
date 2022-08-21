import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { container } from "./navigation.module.css";

const Navigation = ({ children }) => {
  return (
    <div className={container}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/hand-to-hand">Hand To Hand</Link>
        <Link to="/shotguns">Shotguns</Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navigation;
