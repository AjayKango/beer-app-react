import React from "react";
import { BeerContainer } from "./containers";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BeerContainer />
    </Provider>
  );
}

export default App;
