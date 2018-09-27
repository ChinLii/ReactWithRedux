import React, { Component } from "react";
import WebTime from "./webTime";

class AllWebTime extends Component {
  render() {
    console.log("Render in allWebTime");
    return (
      <div>
        <br />
        <h5>Websites status</h5>
        <button
          onClick={this.props.onChecking}
          className="btn btn-primary btn-sm m-2"
        >
          Check
        </button>
        <br />
        <div className="row">
          <div className="col-md-6">
            <h4> Website </h4>
          </div>
          <div className="col-md-6">
            <h4> Response time </h4>
          </div>
        </div>
        {this.props.webs.map((web, index) => (
          <WebTime key={index} web={web} />
        ))}
      </div>
    );
  }
}

export default AllWebTime;
