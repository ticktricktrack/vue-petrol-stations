<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <app-stations></app-stations>
        </div>
        <div class="column">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Stations from './components/Stations.vue';

export default {
  components: {
    appHeader: Header,
    appStations: Stations
  }
}
</script>

<style>
  body {
    padding: 30px;
  }

</style>
