// Implement backend logic
const fs = require('fs')
const path = require('path')
const thumbsupply = require('thumbsupply');

const Video = {
  readVideo: (req, res) => {
    console.log("[components/video/readVideo] start");
    const videoPath = `assets/${req.params.videoId}.mp4`
    const fileSize = fs.statSync(videoPath).size
    const range = req.headers.range
    if (range) {
      console.log("[components/video/readVideo] if start")
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
      fs.createReadStream(videoPath, {start, end}).pipe(res)
      console.log("[components/video/readVideo] if end")
    } else {
      console.log("[components/video/readVideo] else start")
      res.writeHead(200, {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      })
      fs.createReadStream(videoPath).pipe(res)
      console.log("[components/video/readVideo] else end")
    }
  },
  readVideoMetadata: (req, res) => {
    console.log("[components/video/readVideoMetadata] start");
    const id = parseInt(req.params.videoId, 10);
    res.json({ something: id });
    console.log("[components/video/readVideoMetadata] exit");
  },
  readVideoThumbnail: (req, res) => {
    console.log("[components/video/readVideoThumbnail] start");
    const videoPath = `assets/${req.params.videoId}.mp4`
    thumbsupply.lookupThumbnail(videoPath)
      .then(thumb => res.sendFile(thumb))
      .catch(err => {
        // thumbnail doesn't exist try to create
        thumbnail = thumbsupply.generateThumbnail(videoPath)
          .then(thumb => res.sendFile(thumb))
          .catch(err => {
            console.log(err)
        })
      });
    console.log("[components/video/readVideoThumbnail] exit");
  }
}

module.exports = Video;
