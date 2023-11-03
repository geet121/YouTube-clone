import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Become a Web Developer | 2023"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100063591787802&tbnid=o2H1C0RTQ75QhM&vet=12ahUKEwjp9u6ouJaBAxVFoekKHeZzBesQMygJegUIARCKAQ..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fultimatecodersclub%2F&docid=RcM7HsCRevLFvM&w=2042&h=2042&q=coder%20%20images&ved=2ahUKEwjp9u6ouJaBAxVFoekKHeZzBesQMygJegUIARCKAQ"
          channel="Coder rides"
          image="https://kinsta.com/wp-content/uploads/2021/07/how-to-become-a-web-developer-1200x675.jpg"
        />

        <VideoCard
          title="India VS Bharat Debate"
          views="4.9K views"
          timestamp="1 days ago"
          channelImage="https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/79/f5/45/79f5458a-ebf4-2843-d58c-e3dc695821ba/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/200x0w.webp"
          channel="Jansatta"
          image="https://www.boomlive.in/h-upload/2023/09/07/1014510-india-or-bharat-01.webp"
        />
        <VideoCard
          title="Priyanka Chopra Jonas Takes a challenge"
          views="1.3M views"
          timestamp="3 month ago"
          channelImage="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/zaoenmykx6eitpece5tc"
          channel="Vanity Fair"
          image="https://hips.hearstapps.com/hmg-prod/images/priyanka-chopra-discusses-quantico-with-the-build-series-at-news-photo-951562696-1559810425.jpg?crop=0.669xw:1.00xh;0.221xw,0&resize=1200:*"
        />
        <VideoCard
          title="Oneplus Nord CE Reviews"
          views="154K views"
          timestamp="5 monts ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzR3TGO0ojAOrCK7a1f11tWR0-0-fE1AnEQ&usqp=CAU"
          channel="Techco Guy"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReRR2e2UvtuRZCaV2H-bifTJoLFhVACQEwCw&usqp=CAU"
        />
        <VideoCard
          title="30 minutes of peace best Bwood songs"
          views="3.1M views"
          timestamp="3 days ago"
          channelImage="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/252px-Spotify_logo_without_text.svg.png"
          channel="coder rides"
          image="https://i.ytimg.com/vi/voN-LFwJtPc/sddefault.jpg"
        />
        <VideoCard
          title="make Money online Work from Home"
          views="1M views"
          timestamp="6 days ago"
          channelImage="https://drive.google.com/file/d/1MMxv0Wh32fV6tx-92foIpanee5K9QZG-/view?usp=drive_link"
          channel="WorkOnline"
          image="https://img.freepik.com/premium-vector/work-from-home-office-vector-background-banner-freelance-remote-online-business-job-background_572288-1794.jpg"
        />
        <VideoCard
          title="Kushi Title Song | Vijay D, Samantha | Hesham"
          views="1M views"
          timestamp="5 hours ago"
          channelImage="https://upload.wikimedia.org/wikipedia/en/5/54/Saregama_logo.png"
          channel="Saregama Telgue"
          image="https://i.ytimg.com/vi/xKz-_4Gc2WU/maxresdefault.jpg"
        />
        <VideoCard
          title="Wedding Film | Geetika & Rishi 2023"
          views="13K views"
          timestamp="3 months ago"
          channelImage={
            "https://cdn.theorg.com/78a1a3e9-c6c5-4da2-a0f0-e73d8cff780d_thumb.jpg"
          }
          channel="WedmeGood"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50bxR9SkkjvkZ7b-iyXAoo1bU2lOiqzm9WA&usqp=CAU"
        />

        <VideoCard
          title="Fit Body Transformation | Reduce belly fat"
          views="2.3M views"
          timestamp="1 year ago"
          channelImage="https://drive.google.com/file/d/1MMxv0Wh32fV6tx-92foIpanee5K9QZG-/view?usp=drive_link"
          channel="FitBody"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCPZ9_Ex_0vGnAOwCUFX3vYWPuX17z-2cPA&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
