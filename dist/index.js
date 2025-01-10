import React from "react";
import ReactDOM from "react-dom/client";
// import "./styles/index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
/**
 * Render the App (mock) element to front-end using React
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(React.StrictMode, null,
    React.createElement(App, null)));
