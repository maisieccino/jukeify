import React from "react";
import { storiesOf } from "@storybook/react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { AlbumArtImage, BackgroundImage } from "./";
import { Center } from "../../storybook";

storiesOf("Containers", module)
  .addDecorator(withKnobs)
  .add(
    "Album Art Image",
    withInfo({
      text: `
Displays album art in a nicne looking container.
  `,
    })(() => (
      <Center>
        <AlbumArtImage
          imgUrl={text("album art url", "https://unsplash.it/640/480/?random")}
        />
      </Center>
    )),
  )
  .add(
    "Background Image",
    withInfo({
      text: `
Displays a blurred background image.
  `,
    })(() => (
      <Center
        style={{
          position: "relative",
          zIndex: "0",
          height: "20rem",
          overflow: "hidden",
        }}
      >
        <BackgroundImage
          imgUrl={text("album art url", "https://unsplash.it/640/480/?random")}
        />
      </Center>
    )),
  );
