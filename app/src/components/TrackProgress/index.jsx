import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { BodyText } from "../Typography";
import SeekBar from "./SeekBar";

const formatAsTime = duration =>
  `${duration.minutes()}:${duration
    .seconds()
    .toString()
    .padStart(2, "0")}`;

const TrackProgress = props => {
  const position = moment.duration(props.position);
  const duration = moment.duration(props.duration || 1);
  return (
    <div>
      <BodyText>
        {formatAsTime(position)} / {formatAsTime(duration)}
      </BodyText>
      <SeekBar position={position} duration={duration} />
    </div>
  );
};

TrackProgress.propTypes = {
  position: PropTypes.number,
  duration: PropTypes.number,
};

TrackProgress.defaultProps = {
  position: 0,
  duration: 0,
};

export default TrackProgress;
