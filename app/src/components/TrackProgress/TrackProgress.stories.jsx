import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import TrackProgress from "./index";
import { Center } from "../../storybook";

storiesOf("Composed/Track Progress", module)
  .addDecorator(withKnobs)
  .add(
    "default",
    withInfo({
      text: `
      Shows progress of the current track.
  `,
    })(() => (
      <Center>
        <TrackProgress
          position={number("position (ms)", 0)}
          duration={number("duration (ms)", 1)}
        />
      </Center>
    )),
  );
