// src/context.jsx

import { createContext, useEffect, useState } from "react";
import run from "../config/config"; // Corrected import path

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const contextValue = {
    onSent: async (prompt) => {
      await run(prompt);
    },
  };

  // Example of usage inside useEffect to avoid direct call on initialization
  useEffect(() => {
    contextValue.onSent("how to switch job");
  }, []);

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
