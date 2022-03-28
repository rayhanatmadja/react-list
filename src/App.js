import React from "react";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/" className="nav-link text-white bg-dark">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/aboutMe" className="nav-link text-white bg-dark">
                  About Me
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/art" className="nav-link text-white bg-dark">
                  Art
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" className="nav-link text-white bg-dark">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/gallery" className="nav-link text-white bg-dark">
                  Gallery
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/employee" className="nav-link text-white bg-dark">
                  Form Employee
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <p>
          <Main />
        </p>
      </div>
    );
  }
}

export default App;
