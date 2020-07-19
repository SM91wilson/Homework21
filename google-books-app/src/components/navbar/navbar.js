import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Google Books App</Link>
        <ul>
          <li>
            <Link to="/">Saved</Link>
          </li>
          <li>
            <Link to="/search">search</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;