<template>
  <div class="columns full-height-container">
    <div class="column">
      <app-header></app-header>
      <!-- <app-search></app-search> -->
      <app-start></app-start>
      <app-loading></app-loading>
      <div class="container">
        <app-stations></app-stations>
      </div>
      <div class="container fill-all">
        <app-map></app-map>
      </div>
      <p class="content is-small is-pulled-right">version 0.6</p>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Start from './components/Start.vue';
import Loading from './components/Loading.vue';
import Search from './components/Search.vue';
import Stations from './components/Stations.vue';
import Map from './components/Map.vue';

export default {
  components: {
    appHeader: Header,
    appStart: Start,
    appLoading: Loading,
    appStations: Stations,
    appSearch: Search,
    appMap: Map,
  }
}
</script>

<style>
  body {
    padding: 30px;
  }

  .full-height-container {
    height: 100vh;
  }

  .fill-all {
    height: 100%;
    flex-grow: 1;
    width: 100%;
  }
</style>
