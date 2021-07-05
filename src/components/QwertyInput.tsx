import { useState } from "react";
import WordDescription from "./WordDescription";

function QwertyInput(): JSX.Element {
  const [text, setText] = useState("");

  const addLetter = (letter: string) => {
    setText(text + letter);
    // better: setText(prev => prev + letter);
  };

  const addSymbol = (symbol: string) => {
    setText(text + symbol);
  };

  const handleBackspace = () => {
    const textMinusLast = text.slice(0, text.length - 1);
    setText(textMinusLast);
    // better:
    // setText(prev => {
    //   const prevMinusLast = prev.slice(0, prev.length - 1)
    //   return prevMinusLast
    // })
  };

  
  return (
    <>
      <input value={text} />
      <button onClick={() => addLetter("Q".toLocaleUpperCase())}>Q</button>
      <button onClick={() => addLetter("W")}>W</button>
      <button onClick={() => addLetter("E")}>E</button>
      <button onClick={() => addLetter("R")}>R</button>
      <button onClick={() => addLetter("T")}>T</button>
      <button onClick={() => addLetter("Y")}>Y</button>
      <button onClick={() => addLetter("U")}>U</button>
      <button onClick={() => addLetter("I")}>I</button>
      <button onClick={() => addLetter("O")}>O</button>
      <button onClick={() => addLetter("P")}>P</button>
      <button onClick={() => addLetter("q")}>q</button>
      <button onClick={() => addLetter("w")}>w</button>
      <button onClick={() => addLetter("e")}>e</button>
      <button onClick={() => addLetter("r")}>r</button>
      <button onClick={() => addLetter("t")}>t</button>
      <button onClick={() => addLetter("y")}>y</button>
      <button onClick={() => addLetter("u")}>u</button>
      <button onClick={() => addLetter("i")}>i</button>
      <button onClick={() => addLetter("o")}>o</button>
      <button onClick={() => addLetter("p")}>p</button>
      
      <button onClick={() => addSymbol("!")}>!</button>
      <button onClick={() => addSymbol("?")}>?</button>
      <button onClick={() => addSymbol("£")}>£</button>
      <br />
      <button onClick={handleBackspace}>Backspace</button>
      <button onClick={() => setText("")}>Clear all</button>
      
      <WordDescription wordToDescribe={text} />
    </>
  );
}

export default QwertyInput;
