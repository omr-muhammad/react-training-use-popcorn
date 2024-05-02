import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
// import StartRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating /> */}
  </React.StrictMode>
);
