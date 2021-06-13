import React, {Component} from 'react'
import VideoTableHeader from '../components/VideoTableHeader'
import VideoTableBody from './VideoTableBody'

class VideoTable extends Component {
  render() {
    const {videosData} = this.props

    return (
      <table>
        <VideoTableHeader />
        <VideoTableBody videosData={videosData}/>
      </table>
    )
  }
}

export default VideoTable;
