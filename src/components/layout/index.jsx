import React from "react";
import PropTypes from "prop-types";
import Navigation from "../navigation";
import { container } from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Navigation>{children}</Navigation>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
