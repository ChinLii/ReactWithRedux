import React, { Component } from "react";
import NavBar from "../navbar";
import AllWebTime from "./allWebTime";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkingTime } from "../../actions/checkingAction";

class Time extends Component {
  handleCheckingTime = () => {
    this.props.checkingTime(this.props.webs);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <AllWebTime
            webs={this.props.webs}
            onChecking={this.handleCheckingTime}
          />
        </main>
      </React.Fragment>
    );
  }
}
Time.propTypes = {
  checkingTime: PropTypes.func.isRequired,
  webs: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  webs: state.checking.webs
});

export default connect(
  mapStateToProps,
  { checkingTime }
)(Time);
