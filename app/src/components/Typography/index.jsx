import React from "react";
import { propTypes, defaultProps } from "./Typography.props";
import "./Typography.css";

export const Title = ({ children, ...rest }) => <h1 {...rest}>{children}</h1>;
Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export const Subtitle = ({ children, ...rest }) => (
  <h2 {...rest}>{children}</h2>
);
Subtitle.propTypes = propTypes;
Subtitle.defaultProps = defaultProps;

export const BodyText = ({ children, ...rest }) => <p {...rest}>{children}</p>;
BodyText.propTypes = propTypes;
BodyText.defaultProps = defaultProps;
