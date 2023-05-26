import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/globalStyles.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
