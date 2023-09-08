import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzR3TGO0ojAOrCK7a1f11tWR0-0-fE1AnEQ&usqp=CAU"
        channel="Techco Guy"
        verified
        subs="659K"
        noOfVideos={382}
        description="You can also find some cool gadgets informations in my page."
      />

      <hr />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you a free review of Samsung Galaxy S8 then watch this video"
        timestamp="59secinds ago"
        channel="Techco Guy"
        title="Let's review Galaxy S9"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwCnCm9P694G6lXhDQ1KWXfz8-ymXF7WEbg&usqp=CAU"
      />

      <VideoRow
        views="605K"
        subs="1.48M"
        description="So Guys, These are the best and most useful gadgets in Amazon under ₹100"
        timestamp="4 weeks ago"
        channel="Techco Guy"
        title="12 New Cool Under ₹100 | Available On Amazon!  "
        image="https://i.ytimg.com/vi/NCtvcq19Y3M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1-SdFWIrTLAxMhVJiOjIZyO1L-A"
      />

      <VideoRow
        views="12,371 views"
        subs="1.48M"
        description="Hello friends main hoon Akash..awr Technical Sky YouTube channel pe aapka Swagat hai "
        timestamp="5 years ago"
        channel="Techco Guy"
        title="Don't Buy A Smartphone Before Watching This! "
        image="https://i.ytimg.com/vi/sUoaPrBHivw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAl6Nwhc-7UceML1tm_rmN6paO5Zg"
      />

      <VideoRow
        views="12,371 views"
        subs="1.48M"
        description="If you are someone who loves getting cool Gadgets "
        timestamp="5 years ago"
        channel="Techco Guy"
        title="I BOUGHT 20 GADGETS Under ₹2, ₹5, ₹10 from DeoDap 😍 | Total spent ₹500"
        image="https://i.ytimg.com/vi/UOzUiP6Z2dw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5b3KZlODa19LYepirZbWeZoFfmA"
      />

      <VideoRow
        views="164"
        subs="529K"
        description="The all new GoPro Hero 12 Black is now available with several new software features such as HDR video and wireless Bluetooth ..."
        timestamp="2 hours ago"
        channel="Techco Guy"
        title="GoPro Hero 12 Black First Look: Taking Things Up a Notch "
        image="https://i.ytimg.com/vi/tmIa7oYAXXQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaKR_eWlOM-giKyRNO57B-qT_dXw"
      />
      <VideoRow
        views="12,371 views"
        subs="1.48M"
        description="Hello friends main hoon Akash..awr Technical Sky YouTube channel pe aapka Swagat hai "
        timestamp="5 years ago"
        channel="Techco Guy"
        title="Don't Buy A Smartphone Before Watching This! "
        image="https://i.ytimg.com/vi/E7uptljrsFI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxWU9cPESiA5pzeT4fL2n1yUqvtQ"
      />
      <VideoRow
        views="12,371 views"
        subs="1.48M"
        description="Hello friends main hoon Akash..awr Technical Sky YouTube channel pe aapka Swagat hai "
        timestamp="5 years ago"
        channel="Techco Guy"
        title="Don't Buy A Smartphone Before Watching This! "
        image="https://i.ytimg.com/vi/qn_AL5IBZNw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkXMmG6CtFwbwoTdFdPq2jvqn-Uw"
      />
    </div>
  );
}

export default SearchPage;
