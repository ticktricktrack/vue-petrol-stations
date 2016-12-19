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
  data() {
    return {
      stations: [
        {
          name: "Tanke 1",
          price: "1.23",
          lat: 50,
          lng: 10
        },
        {
          name: "Tanke 2",
          price: "1.10",
          lat: 50,
          lng: 10
        },
        {
          name: "Tanke 3",
          price: "1.40",
          lat: 50,
          lng: 10
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
