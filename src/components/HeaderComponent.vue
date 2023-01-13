<template>
  <header id="scrollToTop"  class="header">
    <div class="logo-container">
      <img
        src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
        alt="Logo"
      />
    </div>

    <nav class="nav-content">
      <ul class="nav-ul">
        <li class="nav-link"><router-link to="/">Home</router-link></li>
        <li class="nav-link">
          <router-link to="/episodes-view">Episodes</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",

  data() {
    return {
      Search: "",
    };
  },
};
</script>

<style scoped>
h1 {
  margin: 0;
}
.header {
  background: #160440;
  color: white;
  height: 5rem;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  width: 15%;
  height: auto;
}

.logo-container img {
  width: 100%;
  min-width: 160px;
  height: auto;
  padding: 0rem 1rem 0.5rem 1rem;
}
.input-container {
  width: 30%;
  padding: 1rem;
}
input {
  width: 100%;
  padding: 1rem;
  height: 20px;
}

.nav-ul {
  list-style: none;
  display: flex;
}

.nav-link a {
  padding: 1rem;
  text-decoration: none;
  color: #fff;
}
</style>