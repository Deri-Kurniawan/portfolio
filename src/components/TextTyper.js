import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./TextTyper.css";

export default function TextTyper({
  speed = 50,
  eraseSpeed = 50,
  typingDelay = 50,
  eraseDelay = 1000,
  text = ["Example 1", "Example 2", "Example 3"],
}) {
  return (
    <ReactTypingEffect
      speed={speed}
      eraseSpeed={eraseSpeed}
      typingDelay={typingDelay}
      eraseDelay={eraseDelay}
      text={text}
      cursorRenderer={(cursor) => (
        <span className="TextTyper__cursor">{cursor}</span>
      )}
      displayTextRenderer={(text) => {
        return (
          <>
            {text.split().map((char, i) => (
              <span key={i}>{char}</span>
            ))}
          </>
        );
      }}
    />
  );
}
