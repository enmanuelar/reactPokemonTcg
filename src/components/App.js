import React from "react";
import { Router } from "@reach/router";
import Home from "./Home/Home";
import { GamePlayProvider } from "../context/GamePlayContext";

class App extends React.Component {
  render() {
    return (
      <GamePlayProvider>
        <Router>
          <Home path="/" />
        </Router>
      </GamePlayProvider>
    );
  }
}

export default App;
