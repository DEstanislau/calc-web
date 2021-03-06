import React from "react";

import "./config/ReactotronConfig";

import { Router } from "react-router-dom";
import history from "./services/history";

import GlobalStyle from "./styles/globalStyles";
import Routes from "./Routes";

const App = () => {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
};

export default App;
