import React from "react";
import { PageContainer } from "../../components/Containers";
import { Title, Subtitle, BodyText } from "../../components/Typography";
import { ButtonContainer, LinkButton } from "../../components/Button";

export default ({ error }) => (
  <PageContainer>
    {error && <BodyText>Error: {JSON.stringify(error)}</BodyText>}
    <Title>Jukeify</Title>
    <Subtitle>Spotify web playback API demo.</Subtitle>
    <ButtonContainer>
      <LinkButton href="/api/connect/spotify/">Sign In With Spotify</LinkButton>
    </ButtonContainer>
  </PageContainer>
);
