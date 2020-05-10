import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import LoginPage from "./pages/login";
import { Route, withRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family: opensans,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,sans-serif;
    }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Route exact path="/" component={LoginPage} />
    </React.Fragment>
  );
}

export default withRouter(App);
