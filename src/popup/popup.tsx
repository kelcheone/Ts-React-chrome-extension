import React from "react";
import ReactDom from "react-dom/client";
import "../static/tailwind.css";
// import "./popup.css";

// const test = <p>Hello world</p>;
const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      <p className="font-semibold text-xl">Hello world</p>
    </div>
  );
};
// create root and append to body
const root = document.createElement("div");
document.body.appendChild(root);
// add class to root
root.classList.add("root");

const rootElement = document.querySelector(".root");

ReactDom.createRoot(rootElement).render(<App />);
