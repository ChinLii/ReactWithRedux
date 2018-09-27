import React, { Component } from "react";
import { Link } from "react-router-dom";

class NarBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Checking Access
        </Link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/time">
                Time
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NarBar;
