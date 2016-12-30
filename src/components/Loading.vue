<template>
  <div v-show="loadingData" class="modal is-active loading">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head has-text-centered">
        <p class="modal-card-title">Lade Location und Daten</p>
      </header>
      <section class="modal-card-body has-text-centered">
        <i class="fa fa-circle-o-notch fa-spin fa-5x fa-fw"></i>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      loadingData() {
        return this.$store.getters.spinner;
      }
    }
  }
</script>

<style lang="css" scoped>
  .modal-card-title, i {
    color: #3273dc;
  }
</style>
