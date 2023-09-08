import React from "react";
import Header from "./Header";
import Sidebarr from "./Sidebarr";
import RecommendedVideos from "./RecommendedVideos";

function Home() {
  return (
    <div>
      <Header />
      <div className="app__page">
        <Sidebarr />
        <RecommendedVideos />
      </div>
      Home Page
    </div>
  );
}

export default Home;
