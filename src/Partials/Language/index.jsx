import React from "react";

function Language() {
  return (
    <div className="sec-center">
      <input
        className="dropdown"
        type="checkbox"
        id="dropdown"
        name="dropdown"
      />
      <label className="for-dropdown" for="dropdown">
        <i className="ic-flag-en"></i>
        <i className="ic-dropdown"></i>
      </label>
      <div className="section-dropdown">
        <a id="menu-list" href="#">
          <i className="ic-flag-id"></i> Bahasa Indonesia
        </a>
        <a id="menu-list" href="#">
          <i className="ic-flag-en"></i> English
        </a>
      </div>
    </div>
  );
}

export default Language;
