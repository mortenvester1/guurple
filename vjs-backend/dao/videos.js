const _mongoConnection = require("../utils/mongo");
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


const VideosDAO = {
  readVideo: async ({ unit_id, units_data_id, operator, value, start_datetime, end_datetime }) => {
    console.log("[DAO/Videos] readVideo");
    let result = `A Random Number: ${getRandomInt(100)}`
    //let { error, result: { recordset: videos } = {} } = await _mongoConnection.query(q);
    // if (error) {
    //   return { error };
    // }
    return { result: result.length ? result : null };
  },
}

module.exports = VideosDAO;
