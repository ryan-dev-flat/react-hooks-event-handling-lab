import React from 'react';
import reactDom from 'react-dom';
import { useState } from "react"

function EyesOnMe() {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event) {
    setIsFocused(true)
    console.log("Good!")
  }
  function handleBlur(event) {
    setIsFocused(false)
    console.log("Hey! Eyes on me!")
  }

  return (
    <div>
      <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on Me</button>
    </div>
  );
};


export default EyesOnMe;
