import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import * as Icon from "react-feather";
import { RoundButton } from "./";
import { Center } from "../../storybook";

storiesOf("Button/Rounded", module)
  .addDecorator(withKnobs)
  .add(
    "with icon",
    withInfo(`
    Small, round, button, mainly designed for icons.
    `)(() => (
      <Center>
        <RoundButton
          disabled={boolean("disabled", false)}
          spinning={boolean("spinning", false)}
          onClick={action("clicked")}
        >
          <Icon.ChevronsRight />
        </RoundButton>
      </Center>
    )),
  )
  .add(
    "spinning",
    withInfo(`
    Rounded button with spinning set to true. Makes the icon spin round.
    `)(() => (
      <Center>
        <RoundButton spinning onClick={action("clicked")}>
          <Icon.RefreshCw />
        </RoundButton>
      </Center>
    )),
  );
