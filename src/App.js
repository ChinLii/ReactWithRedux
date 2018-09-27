import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Time from "./components/Time/Time";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/time" component={Time} />
      </div>
    );
  }
}

export default App;
