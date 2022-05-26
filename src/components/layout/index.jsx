import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../sidebar";
import { container } from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
