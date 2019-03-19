import React from "react";
import { Router } from "@reach/router";
import Home from "./Home/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Home path="/" />
      </Router>
    );
  }
}

export default App;
