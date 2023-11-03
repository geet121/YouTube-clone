import React from "react";
import "./Sidebarr.css";
import SidebarRow from "./SidebarRow";
import WhatShotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
// import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import DownloadIcon from "@mui/icons-material/Download";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Sidebarr() {
  return (
    <div className="sidebar">
      <Link to="/">
        <SidebarRow selected Icon={HomeIcon} title="Home" />
      </Link>
      <Link to="/shorts">
        <SidebarRow Icon={WhatShotIcon} title="Shorts" />
      </Link>
      <Link to="/subscriptions">
        <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      </Link>
      <hr />
      <Link to="/library">
        <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      </Link>
      <Link to="/watchlater">
        <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
      </Link>
      <Link to="/downloads">
        <SidebarRow Icon={DownloadIcon} title="Downloads" />
      </Link>
      <Link to="/likedvideos">
        <SidebarRow Icon={ThumbUpOffAltIcon} title="Liked videos" />
      </Link>
      <Link to="/showmore">
        <SidebarRow Icon={ExpandMoreIcon} title="Show more" />
      </Link>
      <hr />

    </div>
  );
}

export default Sidebarr;
