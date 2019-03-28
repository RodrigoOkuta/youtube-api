import './VideoItem.css'
import React from 'react'

const VideoItem = ({ video }) => {
    return (
        <div className="video-item item">
            <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}
                className="ui image" />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}

VideoItem.defaultProps = {

}

export default VideoItem
