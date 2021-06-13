import React, {Component} from 'react'

const VideoTableBody = (props) => {
  const rows = props.videosData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.filename}</td>
        <td>{row.duration}</td>
        <td>{row.type}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}


export default VideoTableBody
