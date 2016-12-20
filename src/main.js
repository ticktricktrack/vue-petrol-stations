import Vue from 'vue';
import App from './App.vue';

import store from './store/store';

const mapBus = new Vue();

new Vue({
  el: '#app',
  store,
  mapBus,
  render: h => h(App)
})
