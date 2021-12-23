import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️":  "love",
  "😑": "annoyance"
};

var emogisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function emogiInputHandler(event) {
    // console.log(event.target.value);
    //  setUserInput(event.target.value);
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    setMeaning(meaning);
  }
  function emogiClickHandler(emogi) {
    var meaning = emojiDictionary[emogi];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside out</h1>
      <input onChange={emogiInputHandler} />
      <h2> {meaning} </h2>

      <h3> emogis we know </h3>
      {emogisWeKnow.map(function (emogi) {
        return (
          <span
            onClick={() => emogiClickHandler(emogi)}
            style={{ fontSize: "2rem" }}
            key={emogi}
          >
            {emogi}
          </span>
        );
      })}
    </div>
  );
}
