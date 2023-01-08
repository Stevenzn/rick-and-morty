<template>
  <div v-if="characters && characters.length >= 1" class="cards-container">
    <div v-for="character in characters" :key="character.id" class="card">
      <figure class="img-content">
        <img class="img" :src="character.image" :alt="character.name" />
      </figure>
      <h1 class="card-content-paragrapg">{{ character.name }}</h1>
      <div class="card-characters">
        <p :class="character.status" class="card-content-span">
          {{ character.status }}
        </p>
        <p class="card-content-span">{{ character.species }}</p>
        <p class="card-content-span">{{ character.gender }}</p>
      </div>
      <div class="card-more-info">
        <p class="card-content-span"></p>
        <p class="card-content-location">{{ character.location.name }}</p>
      </div>
    </div>
  </div>
  <div class="btn-container">
    <pagination-btn-component
      @click="scrollToTop(), prevCharacters()"
      nameBtn="Prev"
    ></pagination-btn-component>

    <span>{{ counter }}</span>
    <pagination-btn-component
      @click="scrollToTop(), nextCharacters()"
      nameBtn="Next"
    ></pagination-btn-component>
  </div>
</template>

<script>
import PaginationBtnComponent from "./PaginationBtnComponent.vue";
import axios from "axios";
import enviroment from "../enviroments/enviroment.js";

export default {
  name: "CardComponent",
  components: {
    PaginationBtnComponent,
  },
  data() {
    return {
      characters: [],
      meta: null,
      counter: 1,
    };
  },
  mounted() {
    this.getCharacters();
  },
  methods: {
    async getCharacters() {
      axios.get(enviroment.URL_API + "character").then((response) => {
        this.characters = response.data.results;
        this.meta = response.data.info;
      });
    },
    async nextCharacters() {
      axios.get(this.meta.next).then((response) => {
        this.characters = response.data.results;
        this.meta = response.data.info;
      });
      this.counter++;
    },
    async prevCharacters() {
      axios.get(this.meta.prev).then((response) => {
        this.characters = response.data.results;
        this.meta = response.data.info;
      });

      if (this.counter == 1) {
        this.counter = 1;
      } else {
        this.counter--;
      }
    },
    scrollToTop() {
      let currentScroll = document.documentElement.scrollTop,
        int = setInterval(frame, 6);

      function frame() {
        if (0 > currentScroll) clearInterval(int);
        else {
          currentScroll = currentScroll - 12;
          document.documentElement.scrollTop = currentScroll;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../status-specie.scss";
p,
h1 {
  margin: 0;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
}

.card {
  width: 23%;
  padding: 1rem;
  margin: 10px;
  background-color: #e9e0ff;
  border-radius: 5px;
}

.card h1 {
  text-align: center;
  font-size: 1.3rem;
}

.img-content {
  width: 100%;
  margin: 0;
}

.img {
  width: 100%;
  /* border-top-left-radius: 1rem;
    border-bottom-right-radius: 1rem; */
  border-radius: 1rem;
  transition: all 0.2s ease-in;
}

.img:hover {
  filter: contrast(125%);

  transform: scale(0.97);
  cursor: pointer;
}

.img-content:hover {
}
.card-characters {
  display: flex;
  text-transform: uppercase;
}

.card-characters p {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
}

.card-more-info p {
  width: 100%;
  text-align: center;
}

.card-content-location{
  color: rgb(109, 10, 109);
}

.btn-container {
  text-align: center;
  padding: 1rem;
}

.Alive {
  color: $alive;
  font-weight: bold;
}
.Dead {
  color: $dead;
  font-weight: bold;
}
.unknown {
  font-weight: bold;

  color: $unknown;
}
</style>