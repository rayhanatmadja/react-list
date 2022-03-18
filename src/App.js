import React from "react";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link> |<Link to="/aboutMe">About Me</Link> |
        <Link to="/art">Art</Link> |<Link to="/contact">Contact</Link> |
        <Link to="/gallery">Gallery</Link> |
        <p>
          <Main />
        </p>
      </div>
    );
  }
}

export default App;
