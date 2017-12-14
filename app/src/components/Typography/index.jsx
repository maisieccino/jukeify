import React from "react";
import "./Typography.css";

export const Title = ({ children, ...rest }) => <h1 {...rest}>{children}</h1>;
export const Subtitle = ({ children, ...rest }) => (
  <h2 {...rest}>{children}</h2>
);
export const BodyText = ({ children, ...rest }) => <p {...rest}>{children}</p>;
