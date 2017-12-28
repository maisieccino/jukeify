import React from "react";
import PropTypes from "prop-types";
import { PageContainer } from "../../components/Containers";
import { Title, Subtitle, BodyText } from "../../components/Typography";
import { ButtonContainer, LinkButton } from "../../components/Button";

const SplashPage = ({ error }) => (
  <PageContainer>
    {error && <BodyText>Error: {JSON.stringify(error)}</BodyText>}
    <Title>Jukeify</Title>
    <Subtitle>Spotify web playback API demo.</Subtitle>
    <ButtonContainer>
      <LinkButton href="/api/connect/spotify/">Sign In With Spotify</LinkButton>
    </ButtonContainer>
  </PageContainer>
);

SplashPage.propTypes = {
  error: PropTypes.string,
};

SplashPage.defaultProps = {
  error: "",
};

export default SplashPage;
