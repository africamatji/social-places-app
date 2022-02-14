import axios from "axios";

const api = {};

api.install = function (Vue, options) {
  const base_url = 'http://127.0.0.1:8000';
  Vue.prototype.$api = {
      createContact: (requestData) => axios.post(base_url + '/api/contacts', requestData)
      .then((resp) => {
          return resp;
      })
      .catch((error)=> {
        return error;
      }),
      adminLogin: (requestData) => axios.post(base_url + '/api/login', requestData)
      .then((resp) => {
          return resp;
      })
      .catch((error)=> {
        return error;
      }),
  }
};

export default api;
