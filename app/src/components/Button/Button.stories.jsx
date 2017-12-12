import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";
import Button from "./";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("with text", () => (
    <Button onClick={action("clicked")}>{text("Label", "Hello Button")}</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span
        role="img"
        aria-label="Smiley face, sunglasses face, thumbs up, 100%"
      >
        😀 😎 👍 💯
      </span>
    </Button>
  ));
