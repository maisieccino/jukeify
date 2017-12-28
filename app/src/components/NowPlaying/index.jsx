import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Icon from "react-feather";
import { ButtonContainer, RoundButton } from "../Button";
import { AlbumArtImage } from "../Containers";
import { BodyText, Subtitle, Title } from "../Typography";

export default class NowPlaying extends Component {
  static propTypes = {
    onPlayClick: PropTypes.func,
    onNextClick: PropTypes.func,
    onPrevClick: PropTypes.func,
    artists: PropTypes.string,
    trackName: PropTypes.string,
    albumName: PropTypes.string,
    isPlaying: PropTypes.bool,
    albumArtUrl: PropTypes.string,
  };

  static defaultProps = {
    onPlayClick: () => {},
    onNextClick: () => {},
    onPrevClick: () => {},
    artists: "Artist Name",
    trackName: "Track Name",
    albumName: "Album Name",
    isPlaying: false,
    albumArtUrl: "",
  };

  render() {
    const {
      onPlayClick,
      onNextClick,
      onPrevClick,
      artists,
      trackName,
      albumName,
      isPlaying,
      albumArtUrl,
    } = this.props;
    return (
      <div id="now-playing">
        <AlbumArtImage imgUrl={albumArtUrl} />
        <Subtitle>{artists}</Subtitle>
        <Title>{trackName}</Title>
        <BodyText>{albumName}</BodyText>
        <ButtonContainer>
          <RoundButton onClick={() => onPrevClick()}>
            <Icon.SkipBack />
          </RoundButton>
          <RoundButton onClick={() => onPlayClick()}>
            {isPlaying ? <Icon.Pause /> : <Icon.Play />}
          </RoundButton>
          <RoundButton onClick={() => onNextClick()}>
            <Icon.SkipForward />
          </RoundButton>
        </ButtonContainer>
      </div>
    );
  }
}
