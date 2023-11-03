import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebarr from "./Sidebarr";
import RecommendedVideos from "./RecommendedVideos";

function Shorts() {
  return (
    <div>
      <div>
        <Header />
        <div className="app__page">
          <Sidebarr />
          <RecommendedVideos />
        </div>
        Home Page
      </div>
      <Link to="/shorts"></Link>
    </div>
  );
}

export default Shorts;
