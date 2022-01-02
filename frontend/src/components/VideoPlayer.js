import React from 'react';
import videojs from 'video.js'
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/fantasy/index.css'
import videoService from "../services/video.js";
import './VideoPlayer.css';


class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playerOptions: this.props.playerOptions,
      skin: this.props.skin,
      videoId: this.props.videoId,
      videoMetadata: {
        name: this.props.name
      },
    }
  }

  async componentDidMount() {
    console.log('[components/VideoPlayer] componentDidMount entry')
    try {
      console.log('[components/VideoPlayer] componentDidMount props', this.props)
      this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
        console.log('[components/VideoPlayer] onPlayerReady', this)
      });
    } catch (error) {
      console.log('[components/VideoPlayer] componentDidMount error', error);
    }
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }


  render() {
    console.log('[components/VideoPlayer] render')
    return (
        <div className="video-wrapper">
          <video
            crossOrigin="anonymous"
            ref={ node => this.videoNode = node }
            className={this.state.skin}
            id="video-js-player"
            poster={videoService.getVideoThumbnailUrl(this.state.videoId)}
            data-setup={JSON.stringify(this.state.playerOptions)}
            >
            <source
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
