<template>
  <header class="header">
    <div class="logo-container">
      <img
        src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
        alt="Logo"
      />
    </div>
    <div class="input-container">
      <input
        placeholder="Search character"
        type="text"
        name="search"
        id=""
        v-model="Search"
      />
    </div>
    <nav class="nav-content">
      <ul class="nav-ul">
        <li class="nav-link"><a href="">Episodes</a></li>
        <li class="nav-link"><a href="">aaaaa</a></li>
        <li class="nav-link"><a href="">aaaaa</a></li>
      </ul>
    </nav>
  </header>
  <p>{{ this.Search }}</p>
</template>

<script>
export default {
  name: "HeaderComponent",

  data() {
    return {
      Search: "",
    };
  },
  computed: {
    filterSearch() {},
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