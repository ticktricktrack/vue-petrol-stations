<template lang="html">
  <div id="mymap">

  </div>
</template>

<script>
  import Leaflet from 'leaflet';
  const L = Leaflet;

  export default {
    mounted() {;
      const mymap = L.map('mymap').setView([51.505, -0.09], 13);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoidGlja3RyaWNrdHJhY2siLCJhIjoiY2l3d2swZzBtMDAzaDJwanRmOTdlazl4ZiJ9.2VmjgLWfKQIdAWNNKenQag'
      }).addTo(mymap);
    }
  }
</script>

<style lang="css" scoped>
  #mymap {
    height: 400px;
    width: 400px;
  }
</style>
