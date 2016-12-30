import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const GOOGLE_GEO = 'AIzaSyB0ZPdrd_zcZKXJjM0oTXsJlCM1UI-A4Cs'
const GOOGLE_TZ = 'AIzaSyAaXjpRzDBNwz5mka52VXjUJK_CZEGF1Bo'
const TANKER = '45caee49-4410-1536-20ee-509b9fc223e7'

export default new Vuex.Store({
  state: {
    selected: null,
    coords: {
      lat: null,
      long: null
    },
    stations: [],
    spinner: false
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
    },

    spinner: state => {
      return state.spinner;
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
    },
    toggleSpinner: (state, spinner) => {
      state.spinner = spinner;
    }
  },

  actions: {
    select: ({commit}, station) => {
      commit('select', station);
    },

    showSpinner({commit}) {
      commit("toggleSpinner", true);
    },

    hideSpinner({commit}) {
      commit("toggleSpinner", false);
    },

    loadStations({getters, commit, dispatch}, {lat, lng}) {
      Vue.http.get(
        `https://creativecommons.tankerkoenig.de/json/list.php?lat=${lat}&lng=${lng}&rad=4&sort=price&type=diesel&apikey=${TANKER}`,
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
        dispatch("hideSpinner");
      })
    },

    currentLocation({ commit, dispatch }) {
      Vue.http.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_GEO}`)
      .then(response => response.json())
      .then(data => {
        commit("coords", data.location);
        dispatch("checkCountry", data.location);
      });
    },

    checkCountry({ commit, dispatch}, coords) {
      Vue.http.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${coords.lat},${coords.lng}&timestamp=1458000000&key=${GOOGLE_TZ}`)
      .then(response => response.json())
      .then(data => {
        if (data.timeZoneId != "Europe/Berlin") {
          coords = {
            lat: 52.52,
            lng: 13.4
          }
        }
        console.log("cooords", coords);
        commit("coords", coords);
        dispatch("loadStations", coords);
      });
    },

    currentLocationFromBrowser({ commit, dispatch }) {
      navigator.geolocation.getCurrentPosition(position => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        commit("coords", coords);
        dispatch("checkCountry", coords);
      });
    }
  }
});
