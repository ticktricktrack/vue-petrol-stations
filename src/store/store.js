import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selected: null,
    coords: {
      lat: null,
      long: null
    },
    stations: []
  },

  getters: {
    stations: state => {
      return state.stations;
    },

    selected: state => {
      return state.selected;
    },
    coords: state => {
      return state.coords;
    }
  },

  mutations: {
    select: (state, station) => {
      state.selected = station;
    },
    loadStations: (state, stations) => {
      state.stations = stations;
    },
    coords: (state, location) => {
      state.location = location;
    }
  },

  actions: {
    select: ({commit}, station) => {
      commit('select', station);
    },

    loadStations({getters, commit}, {lat, lng}) {
      Vue.http.get(
        `https://creativecommons.tankerkoenig.de/json/list.php?lat=${lat}&lng=${lng}&rad=4&sort=price&type=diesel&apikey=45caee49-4410-1536-20ee-509b9fc223e7`,
      )
      .then(response => response.json())
      .then(data => {
        const stations = _.map(data.stations, station => {
           return {
            name: station.name,
            price: station.price,
            lat: station.lat,
            lng: station.lng
          }
        })
        commit("loadStations", stations);
      })
    },

    currentLocation({ commit, dispatch }) {
      navigator.geolocation.getCurrentPosition(position => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        commit("coords", coords);
        dispatch("loadStations", coords);
      });
    }
  }
});
