import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selected: null,
    stations: [
      {
        name: "Tanke 1",
        price: "1.23",
        lat: 49.6,
        lng: 6.7
      },
      {
        name: "Tanke 2",
        price: "1.10",
        lat: 49.5,
        lng: 7
      },
      {
        name: "Tanke 3",
        price: "1.40",
        lat: 49.999,
        lng: 6.93
      }
    ]
  },

  getters: {
    stations: state => {
      return state.stations;
    },

    selected: state => {
      return state.selected;
    }
  },

  mutations: {
    select: (state, station) => {
      state.selected = station;
    }
  },

  actions: {
    select: ({commit}, station) => {
      commit('select', station);
    },

    loadStations() {

    }
  }
});
