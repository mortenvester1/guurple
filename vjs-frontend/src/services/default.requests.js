import axios from "axios";

const post = async (host, service, payload, ...urlParams) => {
  return axios
  .post([host, service, ...urlParams].join("/"), payload)
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
};


const put = async (host, service, payload, ...urlParams) => {
  return axios
  .put([host, service, ...urlParams].join("/"), payload)
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
};


const get = async (host, service, ...urlParams) => {
  return axios
  .get([host, service, ...urlParams].join("/"))
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
};


const del = async (host, service, ...urlParams) => {
  return axios
  .delete([host, service, ...urlParams].join("/"))
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
};

export { post, get, del, put };
