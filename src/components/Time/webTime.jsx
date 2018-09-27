import React, { Component } from "react";

class WebStatus extends Component {
  render() {
    console.log(this.props.web.status);
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <p>{this.props.web.url}</p>
          </div>
          <div className="col-md-6">
            <p>{this.props.web.time}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WebStatus;
