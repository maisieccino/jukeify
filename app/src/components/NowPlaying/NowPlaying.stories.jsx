import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import NowPlaying from "./index";
import { Center } from "../../storybook";

storiesOf("Composed/Now Playing", module)
  .addDecorator(withKnobs)
  .add(
    "paused",
    withInfo({
      text: `
  Now playing element. Displays currently playing track,
  as well as player controls.
  `,
    })(() => (
      <Center>
        <NowPlaying
          albumArtUrl={text(
            "album art url",
            "https://unsplash.it/640/480/?random",
          )}
          trackName={text("track name", "Track Name")}
          artists={text("artists", "Artists")}
          albumName={text("album name", "Album Name")}
          onPrevClick={action("previous track")}
          onPlayClick={action("play track")}
          onNextClick={action("next track")}
        />
      </Center>
    )),
  )
  .add(
    "playing",
    withInfo({
      text: `
When track is playing, shows a pause button.
  `,
    })(() => (
      <Center>
        <NowPlaying
          albumArtUrl={text(
            "album art url",
            "https://unsplash.it/640/480/?random",
          )}
          isPlaying
          trackName={text("track name", "Track Name")}
          artists={text("artists", "Artists")}
          albumName={text("album name", "Album Name")}
          onPrevClick={action("previous track")}
          onPlayClick={action("pause track")}
          onNextClick={action("next track")}
        />
      </Center>
    )),
  );
