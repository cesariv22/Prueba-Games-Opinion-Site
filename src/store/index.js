import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataGames: [],
    dataOpinion: [],
  },
  getters: {},
  mutations: {
    MUTA_DATA(state, payload) {
      state.dataGames = payload;
    },
    MUTA_OPINION(state, payload) {
      state.dataOpinion.push(payload);
    },
  },
  actions: {
    async getData({ commit }) {
      try {
        const req = await fetch("games.json");
        const data = await req.json();
        this.dataGames = data;
        commit("MUTA_DATA", data);
        // console.log(this.dataGames);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
