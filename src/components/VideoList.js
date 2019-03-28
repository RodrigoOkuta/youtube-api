import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const renderList = videos.map(video => {
        return <VideoItem key={video.id.videoId} video={video} />
    })

    return (
        <div className="ui relaxed divided list">
            {renderList}
        </div>
    )
}

VideoList.defaultProps = {
    videos: [],
}

export default VideoList
