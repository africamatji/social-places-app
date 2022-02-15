const client = {};
import store from '../store';

client.install = (Vue, options) => {
    Vue.prototype.$store = store;
}

export default client;