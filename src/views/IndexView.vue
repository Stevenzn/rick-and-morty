<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <h1>Hola desde la vista <strong>INDEX</strong></h1>
    
  </div>
</template>

<script>
import axios from "axios";
import enviroment from "../enviroments/enviroment.js";
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  name: "IndexView",
  components: {
    HeaderComponent,
  },

  created() {
    axios.get(enviroment.URL_API + "character").then((response) => {
      console.log(response.data);
    });
  },
};
</script>

<style>
</style>