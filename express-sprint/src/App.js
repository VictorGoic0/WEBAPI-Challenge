import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Actions from "./Actions";

class App extends Component {
  state = {
    actions: []
  };
  componentDidMount() {
    axios
      .get("https://deployed-node-sprint.herokuapp.com/api/actions")
      .then(actions => {
        console.log(actions);
        this.setState(actions);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <Actions actions={this.state.actions} />
      </div>
    );
  }
}

export default App;
