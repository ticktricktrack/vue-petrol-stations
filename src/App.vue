<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <app-stations></app-stations>
        </div>
        <div class="column">
          <app-map></app-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Stations from './components/Stations.vue';
import Map from './components/Map.vue';

export default {
  components: {
    appHeader: Header,
    appStations: Stations,
    appMap: Map
  }
}
</script>

<style>
  body {
    padding: 30px;
  }

  #mappy {
    height: 180px;
  }

</style>
