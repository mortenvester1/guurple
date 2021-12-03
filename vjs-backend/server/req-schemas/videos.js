// Implement request validator
const Joi = require("joi");

const videoId = Joi.object({
  videoId: Joi.number().integer().required(),
});

module.exports = {
  videoId
};
