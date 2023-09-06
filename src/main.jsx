import React from "react";
import ReactDOM from "react-dom/client";
import "react-lazy-load-image-component/src/effects/blur.css";
import App from "./App.jsx";
import { AppContext } from "./context/appContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);
