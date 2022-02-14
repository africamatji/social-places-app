import axios from "axios";

const api = {};

api.install = function (Vue, options) {
  //const base_url = process.env.MIX_HOST_URL;
  Vue.prototype.$api = {
      createContact: (requestData) => axios.post('http://127.0.0.1:8000/api/contacts', requestData),
      //registerClient: (requestData) => axios.post(base_url + '/register', requestData), 
  }
};

export default api;
