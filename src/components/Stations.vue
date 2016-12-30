<template lang="html">
  <div class="horizontal-scroll">
      <app-station v-for="station in stations" :station="station"></app-station>
  </div>
</template>

<script>
import Station from './Station.vue';

export default {
  components: {
    appStation: Station
  },
  computed: {
    stations() {
      return this.$store.getters.stations;
    }
  }
}
</script>

<style lang="css" scoped>
  .horizontal-scroll {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
  }
</style>
