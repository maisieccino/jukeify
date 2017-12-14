import React from "react";
import { configure } from "@storybook/react";
import { setDefaults } from "@storybook/addon-info";
import { Center } from "../src/storybook";

import "../src/style/variables.css";

const req = require.context("../src/components", true, /\.stories\.jsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

function Code({ children }) {
  return <code>{children}</code>;
}

function P({ children }) {
  return <p>{children}</p>;
}

setDefaults({
  propTablesExclude: [Center],
  inline: true,
  marksyConf: {
    code: Code,
    p: P,
  },
  header: true,
  styles: styles => ({
    ...styles,
    infoBody: {
      backgroundColor: "var(--color-grey)",
      color: "var(--color-fg) !important",
      padding: "0.2rem",
    },
    infoStory: {
      color: "var(--color-fg) !important",
    },
  }),
});

configure(loadStories, module);
