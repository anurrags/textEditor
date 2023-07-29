import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const Editor = () => {
  const [content, setContent] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [textSize, setTextSize] = useState(16);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleToggleBold = () => {
    setIsBold(!isBold);
    // formatSelectedText("bold", !isBold);
  };

  const handleToggleItalic = () => {
    setIsItalic(!isItalic);
    // formatSelectedText("italic", !isItalic);
  };

  const handleToggleUnderline = () => {
    setIsUnderline(!isUnderline);
    // formatSelectedText("underline", !isUnderline);
  };
  const handleTextSize = (event) => {
    setTextSize(event.target.value);
  };
  const handleSizeChange = ({ size }) => {
    setTextSize(size);
  };
  // const formatSelectedText = (style, value) => {
  //   const textarea = document.getElementById("text-editor");
  //   const { selectionStart, selectionEnd } = textarea;
  //   const text = textarea.value;

  //   const beforeSelection = text.substring(0, selectionStart);
  //   const selectedText = text.substring(selectionStart, selectionEnd);
  //   const afterSelection = text.substring(selectionEnd);

  //   let formattedText = "";
  //   if (value) {
  //     formattedText = `<${style}>${selectedText}</${style}>`;
  //   } else {
  //     formattedText = selectedText.replace(
  //       new RegExp(`<${style}>|<\/${style}>`, "g"),
  //       ""
  //     );
  //   }

  //   setContent(`${beforeSelection}${formattedText}${afterSelection}`);
  // };

  return (
    <>
      <div className="editordiv">
        <div className="editorMenu">
          <button
            onClick={handleToggleBold}
            className="styleBtn styleCom"
            style={{ fontWeight: isBold ? "bold" : "normal" }}
          >
            Bold
          </button>
          <button
            onClick={handleToggleItalic}
            className="styleBtn styleCom"
            style={{ fontStyle: isItalic ? "italic" : "normal" }}
          >
            Italic
          </button>
          <button
            onClick={handleToggleUnderline}
            className="styleBtn styleCom"
            style={{ textDecoration: isUnderline ? "underline" : "none" }}
          >
            Underline
          </button>
          <div className="styleCom textSizediv">
            <label for="size">Size:</label>

            <input
              name="size"
              className="editorTextSize"
              min="8"
              max="172"
              value={textSize}
              onChange={handleTextSize}
            />
          </div>
        </div>
        <textarea
          className="textarea"
          value={content}
          style={{
            textDecoration: isUnderline ? "underline" : "none",
            fontStyle: isItalic ? "italic" : "normal",
            fontWeight: isBold ? "bold" : "normal",
            fontSize: `${textSize}px`,
          }}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Editor;
