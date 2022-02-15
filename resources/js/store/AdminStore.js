import Vue from "vue";

export default {
    state: {
        adminDetails: {},
        loggedIn: false,
    },
    getters: {
        getAdminDetails: state => state.adminDetails,
        isLoggedIn: state => state.loggedIn,
    },
    actions: {
        loginAdmin ({ commit }, $this) {
            return $this.$api.adminLogin($this.form).then((response) => {
                commit('setAdminDetails', response.data);

                return response;
            });
        },
        unsetAdminUserDetails ({commit}) {
            commit('clearAdminUserDetails');
        },
    },
    mutations: {
        setAdminDetails (state, data) {
            state.adminDetails = Object.assign({}, state.adminDetails, data);
            state.loggedIn = true;
        },
        clearAdminUserDetails (state) {
            state.adminDetails = {};
            state.loggedIn = false;
        },
    },
};
