import React from "react";
import { useState } from "react";

const useTestHook = () => {
  const [text, setText] = useState("");
  const makeText = (txt) => {
    setText(txt);
  };
  return {
    text,
    setText,
    makeText,
  };
};

export default useTestHook;
