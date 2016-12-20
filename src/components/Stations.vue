<template lang="html">
  <div>
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

<style lang="css">
</style>
