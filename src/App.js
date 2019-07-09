import React from "react";
import Router from "./routes/routes";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
