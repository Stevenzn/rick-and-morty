<template>
  <div>
    <div class="input-container">
      <input
        placeholder="Search character"
        type="text"
        id=""
        v-model="search"
      />
    </div>
    <div v-if="characters && characters.length >= 1" class="cards-container">
      <div v-for="character in filterSearch" :key="character.id" class="card">
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
        id="refresh"
        @click="prevCharacters(), Scroll()"
        nameBtn="Prev"
      ></pagination-btn-component>

      <span>{{ counter }}</span>
      <pagination-btn-component
        id="refresh"
        @click="nextCharacters(), Scroll()"
        nameBtn="Next"
      ></pagination-btn-component>
    </div>
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
      search: "",
    };
  },
  computed: {
    filterSearch() {
      return this.characters.filter((post) => {
        return post.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  mounted() {
    this.getCharacters();
  },
  methods: {
    Scroll() {
      $("html, body").animate(
        {
          scrollTop: $("#scrollToTop").offset().top,
        },
        600
      );
    },

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
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
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

<style lang="scss">
@import "../status-specie.scss";
.input-container {
  display: flex;
  margin: 0 auto;
  width: 30%;
  padding: 1rem;
}
input {
  width: 100%;
  padding: 1rem;
  height: 20px;
  border-radius: 1px;
}

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
  min-width: 190px;
  width: 25%;
  padding: 1rem;
  border-radius: 5px;
}

.card h1 {
  text-align: center;
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

.card h1:hover {
  color: #a1140a;
  cursor: pointer;
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

.card-content-location {
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

/* Responsive Design */

@media screen and (max-width: 1110px) {
  .input-container {
    width: 50%;
  }

  .cards-container {
    display: flex;
    width: 90%;
  }

  .card {
    width: 25%;
  }

  .card h1 {
    text-align: center;
    font-size: 1.2rem;
  }
  .card-characters {
    display: flex;
  }

  .card-characters p {
    font-size: 0.9rem;
  }
}
@media screen and (max-width: 999px) {
  .input-container {
    width: 50%;
  }
  .cards-container {
    display: flex;
  }

  .card {
    width: 25%;
    border-radius: 5px;
  }

  .card h1 {
    text-align: center;
    font-size: 1.2rem;
  }
  .card-characters {
    display: flex;
    flex-direction: column;
  }

  .card-characters p {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
}

@media screen and (max-width: 844px) {
  .cards-container {
    width: 100%;
  }
  .card {
    width: 33%;
  }
}

@media screen and (max-width: 569px) {
  .card {
    width: 50%;
  }
  .input-container {
    width: 80%;
  }
}

@media screen and (max-width: 379px) {
  .card {
    min-width: 120px;
  }
}
</style>