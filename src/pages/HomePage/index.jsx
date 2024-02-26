import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    const linkStyle = {
        color: "#1746A2",
      };
  return (
    <div>
      <h1>Top TV</h1>
      <em>All about the smaller silver screen</em>
      <ul>
        <li>
          <Link to="/shows" style={linkStyle}>Explore Shows</Link>
        </li>
        <li>
          <Link to="/search"style={linkStyle}>Search your favorite Shows</Link>
        </li>
      </ul>
    </div>
  );
}

//em is for emphasis! if you wanted to bolden texts
