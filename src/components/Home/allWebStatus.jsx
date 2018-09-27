import React, { Component } from "react";
import WebStatus from "./webStatus";

class AllWebStatus extends Component {
  render() {
    console.log("Render in allWebstatus");
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
            <h4> HTTP STATUS </h4>
          </div>
        </div>
        {this.props.webs.map((web, index) => (
          <WebStatus key={index} web={web} />
        ))}
      </div>
    );
  }
}

export default AllWebStatus;
