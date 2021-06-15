import React from 'react';
import videojs from 'video.js'
import 'video.js/dist/video-js.css';


class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      video_id: this.props.video_id,
      video_metadata: {
        name: this.props.name
      }
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
        <div
          className="video-wrapper"
          style={{ width: "100%", height:"100%"}}>
          <video
            controls
            muted
            autoPlay
            crossOrigin="anonymous"
            ref={ node => this.videoNode = node }
            className="video-js"
            poster={`http://localhost:8080/api/video/${this.state.video_id}/thumbnail`}
            style={{ "min-width": "100%", "min-height": "100%", "object-fit": "fill"}}>
            <source
              src={`http://localhost:8080/api/video/${this.state.video_id}`}
              type="video/mp4">
            </source>
          </video>
          <h1>{ this.state.video_metadata.name }</h1>
        </div>
    )
  }
}

export default VideoPlayer
