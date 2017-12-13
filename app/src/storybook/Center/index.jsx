import React from "react";
import PropTypes from "prop-types";

import "./center.css";

const Center = ({ children }) => <div className="centered">{children}</div>;

Center.propTypes = {
  children: PropTypes.node,
};

Center.defaultProps = {
  children: "",
};
export default Center;
