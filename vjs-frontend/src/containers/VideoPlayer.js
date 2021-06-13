import React from 'react';
//import videojs from 'video.js'
//import '@videojs/themes/dist/forest/index.css';

// class VideoPlayer extends React.Component {
//   componentDidMount() {
//     // instantiate Video.js
//     this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
//       console.log('[VideoPlayer] ready')
//     });
//   }
//
//   // destroy player on unmount
//   componentWillUnmount() {
//     if (this.player) {
//       this.player.dispose()
//       console.log('[VideoPlayer] remove')
//     }
//   }
//
//   componentWillReceiveProps(newProps) {
//       // When a user moves from one title to the next, the VideoPlayer component will not be unmounted,
//       // instead its properties will be updated with the details of the new video. In this case,
//       // we can update the src of the existing player with the new video URL.
//       if (this.player) {
//         console.log('[VideoPlayer] update')
//         this.player.src({
//           type: newProps.video.mime_type,
//           src: newProps.video.video_url
//         });
//       }
//     }
//
//   // wrap the player in a div with a `data-vjs-player` attribute
//   // so videojs won't create additional wrapper in the DOM
//   // see https://github.com/videojs/video.js/pull/3856
//   render() {
//     return (
//       <div>
//         <div data-vjs-player>
//           <video id="videoPlayer" controls muted="muted" autoplay>
//             <source src="/videostream/" type="video/mp4">
//             </source>
//           </video>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default VideoPlayer


class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videoId: this.props.id,
      videoData: {}
    };
  }

  async componentDidMount() {
    try {
      console.log('[containers/VideoPlayer] componentDidMount entry')
      const res = await fetch(`http://localhost:8080/api/video/${this.state.videoId}/metadata`);
      const data = await res.json();
      this.setState({ videoData: data });
      console.log('[containers/VideoPlayer] componentDidMount exit')
    } catch (error) {
      console.log('[containers/VideoPlayer]', error);
    }
  }

  render() {
    console.log('[containers/VideoPlayer] render')
    return (
      <div className="VideoPlayer">
        <video controls muted autoPlay crossOrigin="anonymous">
          <source
            src={`http://localhost:8080/api/video/${this.state.videoId}`}
            type="video/mp4">
          </source>
        </video>
        <h1>{ this.state.videoData.name }</h1>
      </div>
    )
  }
}

export default VideoPlayer
// <source
//   src={`http://localhost:8080/api/video/${this.state.videoId}`}
//   type="video/mp4">
// </source>
//<img src={`http://localhost:8080/api/video/${this.state.videoId}/thumbnail`} alt="adsad" />
