//require('./videoPlayer.css');
import React from 'react';
import videojs from 'video.js'
import 'video.js/dist/video-js.css';
import videoService from "../services/video.js";


class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videoId: this.props.videoId,
      videoMetadata: {
        name: this.props.name
      },
      playerOptions: this.props.playerOptions,
    }
  }

  async componentDidMount() {
    console.log('[containers/VideoPlayer] componentDidMount entry')
    try {
      console.log('[containers/VideoPlayer] componentDidMount props', this.props)
      this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
        console.log('[containers/VideoPlayer] onPlayerReady', this)
      });
    } catch (error) {
      console.log('[containers/VideoPlayer] componentDidMount error', error);
    }
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }


  render() {
    console.log('[containers/VideoPlayer] render')
    return (
        <div className="video-wrapper">
          <video
            crossOrigin="anonymous"
            ref={ node => this.videoNode = node }
            className="video-js"
            id="video-js-player"
            poster={videoService.getVideoThumbnailUrl(this.state.videoId)}
            //poster={`http://localhost:8080/api/video/${this.state.videoId}/thumbnail`}
            data-setup={JSON.stringify(this.state.playerOptions)}
            >
            <source
              // src={`http://localhost:8080/api/video/${this.state.videoId}`}
              src={videoService.getVideoUrl(this.state.videoId)}
              type="video/mp4">
            </source>
          </video>
          <h1>{ this.state.videoMetadata.name }</h1>
        </div>
    )
  }
}

export default VideoPlayer
