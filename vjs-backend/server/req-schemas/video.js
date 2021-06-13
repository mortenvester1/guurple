// Implement request validator
const Joi = require("joi");

const video_id = Joi.object({
  video_id: Joi.number().integer().required(),
});

module.exports = {
  video_id,
};
