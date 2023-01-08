<template>
  <button class="btn"> {{ nameBtn }}</button>
</template>

<script>
export default {
  name: "ButtonArticles",
  props: ["nameBtn"],
};
</script>

<style scoped>

.btn{
  margin: 0.5rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.7rem 2rem ;
  border: 2px solid #A1140A;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
}

.btn:hover{
  background: #A1140A;
  color: white;
}
</style>