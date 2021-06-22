import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import drizzleOptions from "./drizzleOptions";
import { Drizzle } from "@drizzle/store";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import LoadingContainer from "./components/LoadingContainer";

const drizzle = new Drizzle(drizzleOptions);
const {DrizzleProvider} = drizzleReactHooks;

ReactDOM.render(
    <DrizzleProvider drizzle={drizzle}>
      <LoadingContainer>
        <App />
      </LoadingContainer>
    </DrizzleProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
