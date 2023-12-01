import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import DataContextProvider from "./context/dataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </Provider>
  </React.StrictMode>
);
