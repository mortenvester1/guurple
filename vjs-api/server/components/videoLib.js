// Implement backend logic
const VideoLibDAO = require("../../DAO/VideoLib");
const fs = require('fs')
const path = require('path')
const thumbsupply = require('thumbsupply');
const MEDIADIR = process.env.VJS_MEDIA_DIR || "assets";


const VideoLib = {
  readDirectory: (req, res) => {
    const ROOTDIR = req.rootDir || MEDIADIR
    console.log(`[components/videoLib] readDirectory (${ROOTDIR})`);
    let files = fs.readdirSync(ROOTDIR)
    files = files.filter(file => !file.startsWith(".") )
      .map( (file, idx) => ({
        key: idx,
        name: file,
        path: path.join(ROOTDIR, file),
        isDir: fs.statSync(path.join(ROOTDIR, file)).isDirectory()
    }))

    files.forEach(file => {
      console.log(file);
    })
    res.send({result: {files: files, rootDir: ROOTDIR}})
  },
  readVideoDetail: (req, res) => {
    console.log("[components/videoLib] readVideoDetails");
    //return await VideoLibDAO.readVideos({ video_id });
  },
}

module.exports = VideoLib;
