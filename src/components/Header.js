import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {faEnvelope, faBell} from '@fortawesome/free-regular-svg-icons';
import { IoSettingsOutline } from "react-icons/io5";
import profileImg from "../img/img-1.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search" />
      </div>
      <div className="header-icons">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <IoSettingsOutline className="icon" />
        <FontAwesomeIcon icon={faBell} className="icon" />
        <div className="profile-pic">
          <img src={profileImg} alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;