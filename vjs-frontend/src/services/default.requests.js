import axios from "axios";
var qs = require('qs');
import process from 'process';

//TODO: Why the fuck is this not working?
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";
console.log(API_URL)
console.log(process.env)

const baseService = {
  formUrl: function(url, params) {
    if (params) {
      return `${API_URL}${url}?${qs.stringify(params)}`
    }
    else {
      return `${API_URL}${url}`
    }
  },
  post: async function(url, data, params) {
    return axios
      .post({
        baseURL: API_URL,
        url: url,
        data: data,
        params: params
      })
      .then(response => {
        return response.data;
      })
      .catch(reason => {
        return {
          error: {
            code: reason.statusCode,
            message: reason.statusMessage
          }
        };
      });
  },
  put: async function(url, data, params) {
    return axios
    .put({
      baseURL: API_URL,
      url: url,
      data: data,
      params: params
    })
    .then(response => {
      return response.data;
    })
    .catch(reason => {
      return {
        error: {
          code: reason.statusCode,
          message: reason.statusMessage
        }
      };
    });
  },
  get: async function(url, params) {
    return axios
    .get({
      baseURL: API_URL,
      url: url,
      params: params
    })
    .then(response => {
      return response.data;
    })
    .catch(reason => {
      return {
        error: {
          code: reason.statusCode,
          message: reason.statusMessage
        }
      };
    });
  },
  del: async function(url, data, params) {
    return axios
    .delete({
      baseURL: API_URL,
      url: url,
      data: data,
      params: params
    })
    .then(response => {
      return response.data;
    })
    .catch(reason => {
      return {
        error: {
          code: reason.statusCode,
          message: reason.statusMessage
        }
      };
    });
  }
};

export { baseService };
