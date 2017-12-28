import React from "react";
import PropTypes from "prop-types";
import { propTypes, defaultProps } from "./button.props";
import "./Button.css";

export const Button = ({ children, onClick, className, ...rest }) => (
  <button onClick={onClick} className={className} {...rest}>
    {children}
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export const LinkButton = ({ children, className, href, ...rest }) => (
  <a href={href} className={`button ${className || ""}`} {...rest}>
    {children}
  </a>
);

LinkButton.propTypes = { href: PropTypes.string.isRequired, ...propTypes };
LinkButton.defaultProps = defaultProps;

export const RoundButton = ({
  children,
  className,
  spinning,
  onClick,
  ...rest
}) => (
  <button
    className={`round ${className} ${spinning ? "spinning" : ""}`}
    onClick={onClick}
    {...rest}
  >
    {children}
  </button>
);

RoundButton.propTypes = {
  ...propTypes,
  spinning: PropTypes.bool,
};
RoundButton.defaultProps = {
  ...defaultProps,
  spinning: false,
};

export const ButtonContainer = ({ children, className }) => (
  <div className={`button-container ${className || ""}`}>{children}</div>
);

ButtonContainer.propTypes = propTypes;
ButtonContainer.defaultProps = defaultProps;
