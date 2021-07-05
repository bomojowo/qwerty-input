import { useState } from "react";

function UncontrolledInput(): JSX.Element {
  const [typedMessage, setTypedMessage] = useState('')
  return (
    <>
      <p>Here's an input:</p>
      <input 
      value={typedMessage}
      onChange={(e) =>{
        setTypedMessage(e.target.value)
      }}/>
      <button
        onClick={() => console.log({typedMessage})}
      >
        Log input
      </button>
      <p>
        But it's hard to detect what it contains (in a nice React-friendly way)
      </p>
      <p>So I can't tell you anything about it...</p>
      <p>{typedMessage}</p>
    </>
  );
}

export default UncontrolledInput;
