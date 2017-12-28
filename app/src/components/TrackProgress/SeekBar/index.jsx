// @flow
import React, { Component } from "react";
import { momentDurationObj } from "react-moment-proptypes";

import "./SeekBar.css";

export default class SeekBar extends Component {
  static propTypes = {
    position: momentDurationObj,
    duration: momentDurationObj,
  };

  static defaultProps = {
    position: 0,
    duration: 1,
  };

  constructor(props) {
    super(props);
    this.state = {
      // width: 0,
      // progress: 0,
      right: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { width } = this.div.getBoundingClientRect();
    const { position, duration } = nextProps;
    // prevent any divide by zero errors...
    const progress =
      position.asMilliseconds() /
      (duration.asMilliseconds() > 0 ? duration.asMilliseconds() : 1);
    this.setState({
      // width,
      // progress,
      right: progress <= 1 ? width - width * progress : 0,
    });
  }

  render() {
    return (
      <div
        className="seek-bar"
        ref={el => {
          this.div = el;
        }}
      >
        <div className="seek-content" style={{ right: this.state.right }} />
      </div>
    );
  }
}
