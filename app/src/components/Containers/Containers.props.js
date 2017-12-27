import PropTypes from "prop-types";

export const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape(),
  visible: PropTypes.bool,
};

export const defaultProps = {
  children: "",
  className: "",
  style: {},
  visible: true,
};
