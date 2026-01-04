import { createStore } from "vuex"
import { loginUser } from "../api/users"

export default createStore({
  state: {
    user: null,
    loading: false,
    error: null,
  },

  getters: {
    username: state => state.user?.username || "",
    roles: state => state.user?.roles || [],
    isLoading: state => state.loading,
    isError: state => state.error,
    isAuthenticated: state => state.user && state.user.status === "ENABLED"
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    CLEAR_USER(state) {
      state.user = null
    },
    SET_LOADING(state, value) {
      state.loading = value
    },
    SET_ERROR(state, error) {
      state.error = error
    },
  },

  actions: {
    async login({ dispatch, commit }, username) {
      commit("SET_ERROR", null);
      commit("SET_LOADING", true);
      try {
        const res = await loginUser(username)
        commit("SET_USER", res.data)
      }
      catch (error) {
        commit("CLEAR_USER");
        if(error.response && error.response.data && error.response.data.message) {
          commit("SET_ERROR", error.response.data.message);
        } else {
          commit("SET_ERROR", error);
        }
      }
      finally {
        commit("SET_LOADING", false)
      }
    },

    logout({ commit }) {
      commit("CLEAR_USER")
    },
  },
})
