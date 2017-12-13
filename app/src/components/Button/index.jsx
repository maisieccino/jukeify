import React from "react";
import { propTypes, defaultProps } from "./button.props";
import "./Button.css";

const Button = ({ children, ...rest }) => <button {...rest}>{children}</button>;

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export const RoundButton = ({ children, className, ...rest }) => (
  <button className={`round ${className}`} {...rest}>
    {children}
  </button>
);

RoundButton.propTypes = propTypes;
RoundButton.defaultProps = defaultProps;

export default Button;
