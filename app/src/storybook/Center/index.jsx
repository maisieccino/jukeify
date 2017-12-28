import React from "react";
import PropTypes from "prop-types";

import "./center.css";

const Center = ({ children, ...rest }) => (
  <div className="centered" {...rest}>
    {children}
  </div>
);

Center.propTypes = {
  children: PropTypes.node,
};

Center.defaultProps = {
  children: "",
};
export default Center;
