<template lang="html">
  <div @click="showMap" class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="unsplashURL()">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <div class="title">
          {{ station.name }}
        </div>
        <div class="subtitle">
          <p class="content is-bold">{{ station.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    props: ["station"],
    methods: {
      ...mapActions(['select']),
      unsplashURL() {
        return "https://source.unsplash.com/collection/329542/300x225?sig=" + Math.floor(Math.random() * 1000);
      },
      showMap() {
        this.select(this.station);
      }
    }
  }
</script>

<style lang="css" scoped>
  .card {
    margin-bottom: 20px;
    min-width: 300px;
  }
</style>
