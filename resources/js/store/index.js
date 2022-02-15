
import Vue from 'vue';
import Vuex from 'vuex';
import AdminStore from './AdminStore';
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
  });

export default new Vuex.Store({
    //strict: true,
    modules: {
        AdminStore,
    },
    plugins: [vuexLocal.plugin],
});
