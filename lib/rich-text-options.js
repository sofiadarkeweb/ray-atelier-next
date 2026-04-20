import React from "react";

/** Rich text: newline → `<br />` between segments. */
export const lineBreakRichTextOptions = {
  renderText: (text) =>
    text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []),
};

/** Rich text: line breaks + bare `email@` segments become mailto links. */
export const mailtoLineBreakRichTextOptions = {
  renderText: (text) =>
    text.split("\n").reduce((children, textSegment, index) => {
      if (textSegment.includes("@")) {
        return [
          ...children,
          index > 0 && <br key={`${index}-br`} />,
          <a key={`${index}-a`} href={`mailto:${textSegment}`}>
            {textSegment}
          </a>,
        ];
      }
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []),
};
