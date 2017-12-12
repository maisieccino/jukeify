import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, ...rest }) => <button {...rest}>{children}</button>;

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: "",
};

export default Button;
