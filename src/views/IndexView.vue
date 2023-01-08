<template>
  <HeaderComponent></HeaderComponent>
  <main>
    <div class="main-content">
      <CardComponent />
    </div>
  </main>
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import CardComponent from "../components/CardComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
export default {
  name: "IndexView",
  components: {
    HeaderComponent,
    CardComponent,
    FooterComponent,
  },
};
</script>

<style>
.main-content {
  width: auto;
}
</style>