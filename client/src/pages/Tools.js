import React from "react";
import { Link } from "react-router-dom";

export const Tools = () => {
  return (
    <div>
      <h2>Tricks of the Trade</h2>

      <ul>
        <li>
          <Link to="/holidays/">Plan your holiday!</Link>
        </li>
        <li>
          <Link to="/moneytips/">Money Tips</Link>
        </li>
        <li>
          <Link to="/">Back</Link>
        </li>
      </ul>
    </div>
  );
};

export default Tools;
