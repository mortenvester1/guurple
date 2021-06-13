// Implement backend logic
const fs = require('fs')
const path = require('path')
const thumbsupply = require('thumbsupply');

const Video = {
  readVideo: (req, res) => {
    console.log("[components/video] readVideo");
    const filepath = 'assets/sample.mp4'
    const fileSize = fs.statSync(filepath).size
    const range = req.headers.range
    if (range) {
      console.log("[components/videoStream] if start")
      // parse out the requested range of bytes
      const parts = range.replace(/bytes=/, "").split("-")
      const start = parseInt(parts[0], 10)
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize-1
      const chunksize = (end-start)+1

      // create stream and pipe it
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      });
      fs.createReadStream(filepath, {start, end}).pipe(res)
      console.log("[components/videoStream] if end")
    } else {
      console.log("[components/videoStream] else start")
      res.writeHead(200, {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      })
      fs.createReadStream(filepath).pipe(res)
      console.log("[components/videoStream] else end")
    }
  },
  readVideoMetadata: (req, res) => {
    console.log("[components/video] readVideoMetadata");
    const id = parseInt(req.params.video_id, 10);
    res.json({ something: 1 });
    console.log("[components/video] readVideoMetadata exit");
  },
  readVideoThumbnail: (req, res) => {
    console.log("[components/video] readVideoThumbnail");

    thumbsupply.generateThumbnail('assets/sample.mp4')
      .then(thumb => res.sendFile(thumb));

    console.log("[components/video] readVideoThumbnail exit");
  }
}

module.exports = Video;
