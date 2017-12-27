/* eslint react/no-unused-state: 0 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Icon from "react-feather";
import { PageContainer } from "../../components/Containers";
import { Title, Subtitle, BodyText } from "../../components/Typography";
import { Button, ButtonContainer, RoundButton } from "../../components/Button";

export default class PlayerPage extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired,
    onAuthError: PropTypes.func.isRequired,
  };

  static ARTIST_PLACEHOLDER = "Artist";
  static TRACK_PLACEHOLDER = "Track Name";

  constructor(props) {
    super(props);
    this.state = {
      player: null,
      error: "",
      deviceId: "",
      track: PlayerPage.TRACK_PLACEHOLDER,
      artist: PlayerPage.ARTIST_PLACEHOLDER,
    };
    this.checkPlayer = setTimeout(() => this.checkForPlayer(), 2000);
  }

  onPlayerError(error) {
    this.setState({ error });
  }

  async getState() {
    try {
      const state = await this.player.getCurrentState();
      if (state === null) {
        this.setState({ error: "Not currently connected :(" });
      } else {
        console.log(state);
        const { current_track: currentTrack } = state.track_window;
        const artist = currentTrack.artists.map(a => a.name).join(", ");
        const track = currentTrack.name;
        this.setState({
          track,
          artist,
          error: "",
        });
      }
    } catch (err) {
      console.error(typeof err === "string" ? err : err.message);
      this.setState({
        track: PlayerPage.TRACK_PLACEHOLDER,
        artist: PlayerPage.ARTIST_PLACEHOLDER,
      });
    }
  }

  async switchPlayback() {
    const { token } = this.props;
    const { deviceId } = this.state;
    fetch("https://api.spotify.com/v1/me/player", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        device_ids: [deviceId],
        play: false,
      }),
    });
  }

  initializePlayerHandlers() {
    this.player.on("initialization_error", e => this.onPlayerError(e));
    this.player.on("authentication_error", e => {
      this.onPlayerError(`Authentication error: ${e.message}`);
      this.props.onAuthError(e);
    });
    this.player.on("player_state_changed", playerState =>
      console.log(playerState),
    );
    this.player.on("account_error", e =>
      this.onPlayerError(`account error: ${e.message}`),
    );
    this.player.on("playback_error", e =>
      this.onPlayerError(`playback error: ${e.message}`),
    );
    this.player.on("ready", async data => {
      await this.setState({ deviceId: data.device_id });
      await this.switchPlayback();
      await this.getState();
    });
    this.player.connect();
  }

  clickPlayButton() {
    this.player.togglePlay();
  }

  checkForPlayer() {
    if (window.Spotify) {
      const { token } = this.props;

      this.player = new window.Spotify.Player({
        name: "Jukeify Online Player",
        getOAuthToken: cb => {
          cb(token);
        },
      });
      this.initializePlayerHandlers();
      this.forceUpdate();
      clearTimeout(this.checkPlayer);
    }
  }

  render() {
    const { error, deviceId, track, artist } = this.state;
    return (
      <PageContainer>
        {!deviceId && <BodyText>Awaiting player connection...</BodyText>}
        {error && <BodyText>Error: {error}</BodyText>}
        <Subtitle>{artist}</Subtitle>
        <Title>{track}</Title>
        <ButtonContainer>
          <RoundButton>
            <Icon.SkipBack />
          </RoundButton>
          <RoundButton onClick={() => this.clickPlayButton()}>
            <Icon.Pause />
          </RoundButton>
          <RoundButton>
            <Icon.SkipForward />
          </RoundButton>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={() => this.getState()}>Get Info</Button>
        </ButtonContainer>
      </PageContainer>
    );
  }
}
