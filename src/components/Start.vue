<template>
  <div class="container start">
    <button class="button is-info is-large" @click="fetchLocation">
      <span class="icon">
        <i class="fa fa-search"></i>
      </span>
      <span>Suche in der Nähe</span>
    </button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    methods: {
      ...mapActions(['showSpinner']),
      fetchLocation() {
        this.showSpinner();
        this.$store.dispatch('currentLocationFromBrowser');
      }
    }
  }
</script>

<style lang="css" scoped>
  .start {
    margin-bottom: 20px;
  }
</style>
