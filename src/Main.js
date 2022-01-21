import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-5 container">
          <h1>React Counter</h1>
          <h1>0</h1>
          <button className="btn btn-danger">DECREMENT</button>
          <button className="btn btn-primary">NEUTRAL</button>
          <button className="btn btn-success">INCREMENT</button>
        </div>
      </div>
    );
  }
}

export default Main;
