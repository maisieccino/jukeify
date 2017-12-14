import React from "react";
import { storiesOf } from "@storybook/react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { Title, Subtitle, BodyText } from "./";
import { Center } from "../../storybook";

storiesOf("Typography", module)
  .addDecorator(withKnobs)
  .add(
    "title",
    withInfo({
      text: `
      Title element.
  `,
    })(() => (
      <Center>
        <Title>{text("content", "Title")}</Title>
      </Center>
    )),
  )
  .add(
    "subtitle",
    withInfo(`
      Subtitle element.
  `)(() => (
      <Center>
        <Subtitle>{text("content", "Subtitle")}</Subtitle>
      </Center>
    )),
  )
  .add(
    "body text",
    withInfo(`
      Subtitle element.
  `)(() => (
      <Center>
        <BodyText>{text("content", "Body Text")}</BodyText>
      </Center>
    )),
  )
  .add(
    "example page",
    withInfo(`
      An example of the title, subtitle and body text elements being used together.
  `)(() => (
      <div>
        <Title>{text("title", "Page Title")}</Title>
        <Subtitle>{text("subtitle", "Section Name")}</Subtitle>
        <BodyText>
          {text(
            "body text",
            `
        Nostrum unde non praesentium. Omnis voluptates nobis dolorem. Est
        officiis neque totam et sed.
        
        Ipsum enim iusto reprehenderit. Sed consequatur harum nisi in itaque.
        Omnis tempore voluptatem itaque vel pariatur soluta.
        
        Voluptates dolorem quasi illum quidem dolorem quia ratione.
        Distinctio ad laborum consequatur. Quae excepturi explicabo tempore.
        Qui ipsum velit commodi. Inventore consequatur modi animi eum culpa.
        Qui accusantium nihil officia illo.
        `,
          )}
        </BodyText>
      </div>
    )),
  );
