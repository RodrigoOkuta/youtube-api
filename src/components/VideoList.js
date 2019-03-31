import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId || video.id.channelId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderList}</div>;
};

VideoList.defaultProps = {
  videos: []
};

export default VideoList;
