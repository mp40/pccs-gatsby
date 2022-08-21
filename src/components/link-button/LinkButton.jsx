import React from "react";
import PropTypes from "prop-types";
import { button } from "./link-button.module.css";

const LinkButton = ({ children }) => {
  return <button className={button}>{children}</button>;
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LinkButton;
