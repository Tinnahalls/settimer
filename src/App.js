import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Click The Button!</h1>
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return <button className="counter" onClick={this.handleClick}>{this.state.count}</button>;
  }
}

export default App;
