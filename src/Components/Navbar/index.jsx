import React from "react";
import { IcLogo } from "../../Assets";
import { Language, Profile } from "../../Partials";

function Navbar() {
  return (
    <nav className="navbar container">
      <ul className="menu-left">
        <li className="list-item">
          <img src={IcLogo} />
        </li>
        <li className="list-item">
          <button className="btn btn-outline-light rounded-pill">
            <i className="ic-home"></i> Home
          </button>
        </li>
        <li className="list-item">
          <button className="btn btn-outline-light rounded-pill">
            <i className="ic-faq"></i> FAQ
          </button>
        </li>
      </ul>
      <ul className="menu-left">
        <li className="li list-item">
          <button className="btn btn-warning rounded-pill">
            <i className="ic-premium"></i> donate & become premium
          </button>
        </li>
        <li className="li list-item">
          <Language />
        </li>
        <li className="li list-item">
          <button className="btn">
            <i className="ic-setting"></i>
          </button>
        </li>
        <li className="li list-item">
          <Profile />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
