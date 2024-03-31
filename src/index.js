import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { EmojisProvider } from "./contexts/EmojisContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmojisProvider>
      <App />
    </EmojisProvider>
  </React.StrictMode>
);
