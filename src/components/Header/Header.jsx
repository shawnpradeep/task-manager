import React from "react";
import profilePicture from "../../images/empty_user.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>task manager</h1>
      <div className="user-signed-in">
        <div className="profile_picture_wrapper">
          <img
            className="profile-picture"
            src={profilePicture}
            alt="user's face"
            style={{ width: 30, height: 30, borderRadius: 50 }}
          />
        </div>
        <p className="user-name">sign in</p>
      </div>
    </div>
  );
};

export default Header;
