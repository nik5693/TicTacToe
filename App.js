// import "styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [disable, setDisable] = React.useState(false);
  const [count, setCount] = useState(0);
  const buttonText = [],
    setButtonText = [];
  for (let i = 0; i < 9; i++) {
    [buttonText[i], setButtonText[i]] = useState("Click");
  }

  useEffect(() => {
    check();
  }, [count]);

  function check() {
    if (
      buttonText[0] !== "Click" &&
      buttonText[0] === buttonText[1] &&
      buttonText[1] === buttonText[2]
    ) {
      if (buttonText[0] === "O") {
        alert("O Wins!");
      } else {
        alert("X Wins!");
      }
    }
    if (
      buttonText[0] !== "Click" &&
      buttonText[0] === buttonText[3] &&
      buttonText[3] === buttonText[6]
    ) {
      if (buttonText[0] === "O") {
        alert("O Wins!");
      } else {
        alert("X Wins!");
      }
    }
    if (
      buttonText[0] !== "Click" &&
      buttonText[0] === buttonText[4] &&
      buttonText[4] === buttonText[8]
    ) {
      if (buttonText[0] === "O") {
        alert("O Wins!");
      } else {
        alert("X Wins!");
      }
    }
    if (
      buttonText[1] !== "Click" &&
      buttonText[1] === buttonText[4] &&
      buttonText[4] === buttonText[7]
    ) {
      if (buttonText[1] === "O") {
        alert("O Wins!");
      } else {
        alert("X Wins!");
      }
    }
    if (
      buttonText[2] !== "Click" &&
      buttonText[2] === buttonText[5] &&
      buttonText[5] === buttonText[8]
    ) {
      if (buttonText[2] === "O") {
        alert("O Wins!");
      } else {
        alert("X Wins!");
      }
    }
    if (
      buttonText[3] !== "Click" &&
      buttonText[3] === buttonText[4] &&
      buttonText[4] === buttonText[5]
    ) {
      if (buttonText[3] === "O") {
        alert("O Wins!");
      } else {
        alert("X Wins!");
      }
    }
    if (
      buttonText[6] !== "Click" &&
      buttonText[6] === buttonText[7] &&
      buttonText[7] === buttonText[8]
    ) {
      if (buttonText[6] === "O") {
        alert("O Wins!");
      } else {
        alert("X Wins!");
      }
    }
    if (
      buttonText[2] !== "Click" &&
      buttonText[2] === buttonText[4] &&
      buttonText[4] === buttonText[6]
    ) {
      if (buttonText[2] === "O") {
        alert("O Wins!");
      } else {
        alert("X Wins!");
      }
    }
  }

  const changeText = (i) => {
    if (count % 2 === 0) {
      setButtonText[i]("X");
    } else {
      setButtonText[i]("O");
    }
    setCount(count + 1);
    // check();
  };

  return (
    <div className="App">
      <header> TIC-TAC-TOE</header>
      <h1 id="heading">First player plays with X and Second with O.</h1>
      <div className="container">
        <button
          disable={disable}
          className="TopLeft btn"
          onClick={() => changeText(0)}
        >
          <div>{buttonText[0]}</div>
        </button>
        <button
          disable={disable}
          className="Top btn"
          onClick={() => changeText(1)}
        >
          <div>{buttonText[1]}</div>
        </button>
        <button
          disable={disable}
          className="TopRight btn"
          onClick={() => changeText(2)}
        >
          <div>{buttonText[2]}</div>
        </button>
        <button
          disable={disable}
          className="Left btn"
          onClick={() => changeText(3)}
        >
          <div>{buttonText[3]}</div>
        </button>
        <button
          disable={disable}
          className="Centre btn"
          onClick={() => changeText(4)}
        >
          <div>{buttonText[4]}</div>
        </button>
        <button
          disable={disable}
          className="Right btn"
          onClick={() => changeText(5)}
        >
          <div>{buttonText[5]}</div>
        </button>
        <button
          disable={disable}
          className="BottomLeft btn"
          onClick={() => changeText(6)}
        >
          <div>{buttonText[6]}</div>
        </button>
        <button
          disable={disable}
          className="Bottom btn"
          onClick={() => changeText(7)}
        >
          <div>{buttonText[7]}</div>
        </button>
        <button
          disable={disable}
          className="BottomRight btn"
          onClick={() => changeText(8)}
        >
          <div>{buttonText[8]}</div>
        </button>
      </div>
      <footer> &copy; </footer>
    </div>
  );
}
