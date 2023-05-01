import React from "react";

function Language() {
  return (
    <div className="sec-center">
      <input
        className="dropdown"
        type="checkbox"
        id="dropdown-profile"
        name="dropdown"
      />
      <label className="profile-wrap" for="dropdown-profile">
        <div className="wrapper">
          <img
            src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
            width="32"
            height="32"
            alt=""
          />
        </div>
      </label>
      <div className="section-dropdown">
        <a id="menu-list" href="#">
          My Account
        </a>
        <a id="menu-list" href="#">
          Logout
        </a>
      </div>
    </div>
  );
}

export default Language;
