chrome.runtime.sendMessage("From the content script", (response) => {
  console.log(response);
});

import React from "react";
import ReactDom from "react-dom/client";

const App: React.FC = () => {
  return <div></div>;
};

// create root and append to body
const root = document.createElement("div");
document.body.appendChild(root);
// add class to root
root.classList.add("root");

const rootElement = document.querySelector(".root");

ReactDom.createRoot(rootElement).render(<App />);
