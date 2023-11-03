import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
//In react-router-dom v6 useHistory() is replaced by useNavigate().

import { useNavigate } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  let navigate = useNavigate();
  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      // alert("You pressed enter!");
      navigate(`/search/${inputSearch}`);
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          onKeyDown={keyPressHandler}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationIcon className="header__icon" />
        <Avatar alt="" />
      </div>
    </div>
  );
}

export default Header;
