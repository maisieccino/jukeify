import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import Button, { RoundButton } from "./";
import { Center } from "../../storybook";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add(
    "with text",
    withInfo({
      text: `
  Regular button.
  `,
    })(() => (
      <Center>
        <Button onClick={action("clicked")}>
          {text("Label", "Hello Button")}
        </Button>
      </Center>
    )),
  )
  .add(
    "with emoji",
    withInfo({
      text: `
  Regular button, containing emoji.

  Emoji must be wrapped in a span with \`role="img"\` and an \`aria-label\` for accessibility.
  If the emoji conveys information, you should explain that rather than just list the emoji.
  `,
    })(() => (
      <Center>
        <Button onClick={action("clicked")}>
          <span
            role="img"
            aria-label="Smiley face, sunglasses face, thumbs up, 100%"
          >
            😀 😎 👍 💯
          </span>
        </Button>
      </Center>
    )),
  )
  .add(
    "rounded",
    withInfo(`
    Small, round, button, mainly designed for icons.
    `)(() => (
      <Center>
        <RoundButton>A</RoundButton>
      </Center>
    )),
  );
