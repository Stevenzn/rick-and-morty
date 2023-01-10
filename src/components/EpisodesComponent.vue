<template>
  <ul v-if="episodes && episodes.length >= 1" class="cards-container">
    <div v-for="episode in episodes" :key="episode.id" class="card">
      <li>
        <button class="btn-Episode" @click="getCharactersEpisode">
          <h1 class="card-content-paragrapg">{{ episode.name }}</h1>
          <div class="card-characters">
            <p style="color: blue" class="card-content-span">
              {{ episode.air_date }}
            </p>
          </div>
        </button>
      </li>
    </div>
  </ul>
  <div class="btn-container">
    <PaginationBtnComponent
      @click="scrollToTop(), prevEpisodes()"
      nameBtn="prev"
    ></PaginationBtnComponent>
    <span>{{ counter }}</span>
    <PaginationBtnComponent
      @click="scrollToTop(), nextEpisodess()"
      nameBtn="next"
    ></PaginationBtnComponent>
  </div>
</template>

<script>
import axios from "axios";
import enviroment from "../enviroments/enviroment.js";
import PaginationBtnComponent from "../components/PaginationBtnComponent.vue";
export default {
  data() {
    return {
      episodes: [],
      meta: null,
      counter: 1,
    };
  },
  components: {
    PaginationBtnComponent,
  },
  mounted() {
    this.getEpisodes();
  },

  methods: {
    async getEpisodes() {
      axios.get(enviroment.URL_API + "episode").then((response) => {
        this.episodes = response.data.results;
        this.meta = response.data.info;
        console.log(this.episodes);
      });
    },
    async nextEpisodess() {
      axios.get(this.meta.next).then((response) => {
        this.episodes = response.data.results;
        this.meta = response.data.info;
      });
      if (this.counter == 3) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        this.counter = 3;
      } else {
        this.counter++;
      }
    },
    async prevEpisodes() {
      axios.get(this.meta.prev).then((response) => {
        this.episodes = response.data.results;
        this.meta = response.data.info;
      });

      if (this.counter == 1) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
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

<style scoped|>
ul {
  list-style: none;
}
.btn-Episode{
  border: none;
   background: none;
  width: 100%;    
  cursor: pointer;
}
</style>