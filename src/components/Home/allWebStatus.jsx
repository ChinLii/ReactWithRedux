import React, { Component } from "react";
import WebStatus from "./webStatus";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changingText } from "../../actions/checkingAction";

class AllWebStatus extends Component {
  onChange = e => {
    this.props.changingText(e.target.value);
  };
  render() {
    console.log("Render in allWebstatus");
    return (
      <div>
        <br />
        <h5>Websites status</h5>
        <div className="row">
          <div className="col-md-1">
            <button
              onClick={this.props.onChecking}
              className="btn btn-primary btn-sm m-2"
            >
              Check
            </button>
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.props.title}
            />
          </div>
        </div>
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

AllWebStatus.propTypes = {
  changingText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  title: state.checking.title
});

export default connect(
  mapStateToProps,
  { changingText }
)(AllWebStatus);
