import axios from "axios";
var qs = require('qs');

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

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
    try {
      const resp = await axios
        .request({
          method: "post",
          baseURL: API_URL,
          url: url,
          data: data,
          params: params
      })
      console.log(resp.data)
      return resp.data
    } catch (err) {
      console.log(err)
    }
  },
  put: async function(url, data, params) {
    try {
      const resp = await axios
        .request({
          method: "post",
          baseURL: API_URL,
          url: url,
          data: data,
          params: params
      })
      console.log(resp.data)
      return resp.data
    } catch (err) {
      console.log(err)
    }
  },
  get: async function(url, params) {
    console.log("[baseService] get")
    try {
      const resp = await axios
      .request({
        method: "get",
        baseURL: API_URL,
        url: url,
        params: params
      })
      console.log(resp.data)
      return resp.data
    } catch (err) {
      console.log(err)
    }
  },
  del: async function(url, data, params) {
    try {
      const resp = await axios
        .request({
          method: "delete",
          baseURL: API_URL,
          url: url,
          data: data,
          params: params
      })
      console.log(resp.data)
      return resp.data
    } catch (err) {
      console.log(err)
    }
  }
};

export { baseService };
