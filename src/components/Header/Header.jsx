import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NetflixLogo from "../../assets/img/image.png";
import Search from "../Search/Search";
import "./Header.css";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li><img src={NetflixLogo} alt="Netflix Logo" /></li>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li onClick={() => setIsSearchOpen(true)}><SearchIcon /></li>
              <li><NotificationsNoneIcon /></li>
              <li className="profile-menu" onClick={() => setShowProfileMenu(!showProfileMenu)}>
                <AccountBoxIcon />
                <ArrowDropDownIcon />
                {showProfileMenu && (
                  <div className="profile-dropdown">
                    <div className="profile-item">Account</div>
                    <div className="profile-item">Help Center</div>
                    <div className="profile-item">Sign out of Netflix</div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

export default Header;