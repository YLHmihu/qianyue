import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userOrderNo: "",
  },
  mutations: {
    userchange (state, aude) {
      state.userOrderNo = aude;
    },
  },
  actions: {},
  modules: {},
});
