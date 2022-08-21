import React from "react";
import PropTypes from "prop-types";
import Navigation from "../navigation";
import { container, page } from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Navigation />
      <div className={page}>{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
