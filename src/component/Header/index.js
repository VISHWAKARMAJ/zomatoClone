import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        className="header-logo"
        src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
        alt="logo"
      />
      <div className="header-Right">
        <div className="header-location-search-container">
          <div className="location-wraper">
            <div className="location-icon-name">
              <i className="fa-solid fa-location-dot location-icon absolute-center"></i>
              <div>Gurugram</div>
            </div>
            <i className="fa-solid fa-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separater"> </div>
          <div className="header-search-bar">
            <i className="fa-thin fa-magnifying-glass  absolute-center  search-icon"></i>
            <input
              className="search-input"
              placeholder="search for restaurent, cuisine or a dish"
            />
          </div>
        </div>
        <div className="profile-wraper">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.pn…fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A "
            alt=""
            className="header-profile-image"
          />
          <span className="header-user-name">pankaj</span>
          <i className="fa-solid fa-chevron-down  absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
