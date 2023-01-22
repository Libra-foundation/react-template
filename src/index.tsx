import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import App from "./App";

const ROOT: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
ROOT.render(<App />);
