import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import the SDK provided styles
// import { StreamTheme } from "@stream-io/video-react-sdk";
// import "@stream-io/video-react-sdk/dist/css/styles.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StreamTheme style={{ fontFamily: "sans-serif", color: "white" }}>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
    //{" "}
  //  </StreamTheme> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
