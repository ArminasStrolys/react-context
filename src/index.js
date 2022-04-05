import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import { AppProvider } from "./context/TasksContext.js";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
