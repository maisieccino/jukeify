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

setDefaults({
  propTablesExclude: [Center],
  inline: true,
  marksyConf: {
    code: Code,
  },
});

configure(loadStories, module);
