import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stations: [
      {
        name: "Tanke 1",
        price: "1.23",
        lat: 50,
        lng: 10
      },
      {
        name: "Tanke 2",
        price: "1.10",
        lat: 50,
        lng: 10
      },
      {
        name: "Tanke 3",
        price: "1.40",
        lat: 50,
        lng: 10
      }
    ]
  },

  getters: {
    stations: state => {
      return state.stations;
    }
  }
});
