<template lang="html">
  <div class="box">
    <div id="mymap"></div>
  </div>
</template>

<script>
  import Leaflet from 'leaflet';
  const L = Leaflet;

  export default {
    data() {
      return {
        mymap: null
      }
    },
    computed: {
      selected() {
        return this.$store.getters.selected;
      }
    },
    watch: {
      selected: function(val, oldVal) {
        this.updateMap();
      }
    },
    methods: {
      updateMap() {
        if (this.mymap) { this.mymap.remove();}
        this.mymap = L.map('mymap').setView([this.selected.lat, this.selected.lng], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          maxZoom: 18,
          id: 'mapbox.streets',
          accessToken: 'pk.eyJ1IjoidGlja3RyaWNrdHJhY2siLCJhIjoiY2l3d2swZzBtMDAzaDJwanRmOTdlazl4ZiJ9.2VmjgLWfKQIdAWNNKenQag'
        }).addTo(this.mymap);
      }
    }
  }
</script>

<style lang="css" scoped>
  #mymap {
    height: 400px;
  }
</style>
