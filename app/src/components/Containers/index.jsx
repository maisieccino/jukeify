import React from "react";
import PropTypes from "prop-types";
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

export const BackgroundImage = ({ imgUrl }) => (
  <div
    className="background-image"
    style={{ backgroundImage: `url("${imgUrl}")` }}
  />
);
BackgroundImage.propTypes = { imgUrl: PropTypes.string };
BackgroundImage.defaultProps = { imgUrl: "" };

export const AlbumArtImage = ({ imgUrl }) => (
  <div className="album-art" style={{ backgroundImage: `url("${imgUrl}")` }} />
);
AlbumArtImage.propTypes = { imgUrl: PropTypes.string };
AlbumArtImage.defaultProps = { imgUrl: "" };
