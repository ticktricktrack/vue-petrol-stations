<template lang="html">
  <div id="mymap"></div>
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
        this.mymap = L.map('mymap').setView([this.selected.lat, this.selected.lng], 15);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          maxZoom: 18,
          id: 'mapbox.streets',
          accessToken: 'pk.eyJ1IjoidGlja3RyaWNrdHJhY2siLCJhIjoiY2l3d2swZzBtMDAzaDJwanRmOTdlazl4ZiJ9.2VmjgLWfKQIdAWNNKenQag'
        }).addTo(this.mymap);
        L.marker([this.selected.lat, this.selected.lng]).addTo(this.mymap);
      }
    }
  }
</script>

<style lang="css" scoped>
  #mymap {
    border: 20px solid white;
    flex-grow: 1;
    width: 100%;
  }
</style>
