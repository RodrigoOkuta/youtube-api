import React from 'react'

const VideoDetail = ({ video }) => {
    if (!video)
        return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <div className="ui embed">
                <iframe width="560" height="315" src={videoSrc}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title={video.snippet.title} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail