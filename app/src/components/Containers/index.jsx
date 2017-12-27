import React from "react";
import { propTypes, defaultProps } from "./Containers.props";

import "./Containers.css";

export const AppContainer = ({ children }) => (
  <div className="app">{children}</div>
);

AppContainer.propTypes = propTypes;
AppContainer.defaultProps = defaultProps;

export const PageContainer = ({ children, className, style, visible }) => (
  <div
    className={`page-container ${className || ""} ${visible ? "" : "hidden"}`}
    style={style}
  >
    {children}
  </div>
);
PageContainer.propTypes = propTypes;
PageContainer.defaultProps = defaultProps;
