import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🐱‍👤": "ninja cat",
  "🤪": "zany face",
  "🤥": "lying face",
  "🤗": "hugging face",
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "✌": "victory hand"
};
const emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputEventHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! This emoji is not availabel in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav className="navigation">
        <h1>Emoji Interpreter</h1>
      </nav>
      <input placeholder="Put emoji here" onChange={inputEventHandler} />
      <div class="output">{meaning}</div>
      <p>Available Emojis</p>
      {emojiList.map((item) => {
        return (
          <span
            className="emojiSpan"
            key={item}
            onClick={() => emojiClickHandler(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
