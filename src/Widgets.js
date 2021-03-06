import React from 'react'
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetID={"1411331318105796611"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="NarraSupriya"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={"https://www.facebook.com/supriya.narra.77"}
                    options={{ text: "#reactjs is awesome", via: "NarraSupriya" }}
                />
            </div>
        </div>
    );
}

export default Widgets
