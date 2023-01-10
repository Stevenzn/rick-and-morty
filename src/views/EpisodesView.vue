<template>
  <HeaderComponent></HeaderComponent>
  <div class="main-content">
    <EpisodesComponent></EpisodesComponent>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import EpisodesComponent from "../components/EpisodesComponent.vue";
export default {
  name: "EpisodesView",
  components: {
    HeaderComponent,
    EpisodesComponent,
  },
};
</script>

<style>
</style>