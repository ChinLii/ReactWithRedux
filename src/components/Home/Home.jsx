import React, { Component } from "react";
import NavBar from "../navbar";
import PropTypes from "prop-types";
import AllWebStatus from "./allWebStatus";
import { connect } from "react-redux";
import { checkingStatus } from "../../actions/checkingAction";

class Home extends Component {
  handleCheckingStatus = () => {
    this.props.checkingStatus(this.props.webs);
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <AllWebStatus
            webs={this.props.webs}
            onChecking={this.handleCheckingStatus}
          />
        </main>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  checkingStatus: PropTypes.func.isRequired,
  webs: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  webs: state.checking.webs
});

export default connect(
  mapStateToProps,
  { checkingStatus }
)(Home);
