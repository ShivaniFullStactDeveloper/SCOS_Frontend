import React from "react";
import Highlighter from "react-highlight-words";

export default function HighlightText({ text, search }) {
  if (!search) return <span>{text}</span>;

  return (
    <>
      <Highlighter
        searchWords={search.split(" ")}
        autoEscape={true}
        textToHighlight={text || ""}
      />
    </>
  );
}