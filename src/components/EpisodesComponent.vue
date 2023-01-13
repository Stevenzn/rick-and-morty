<template>
  <div>
    <ul v-if="episodes && episodes.length >= 1" class="cards-container-episode">
      <div v-for="episode in episodes" :key="episode.id" class="card-episode">
        <li class="episodes">
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
        @click="Scroll(), prevEpisodes()"
        nameBtn="prev"
      ></PaginationBtnComponent>
      <span>{{ counter }}</span>
      <PaginationBtnComponent
        @click="Scroll(), nextEpisodess()"
        nameBtn="next"
      ></PaginationBtnComponent>
    </div>
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
    Scroll() {
      $("html, body").animate(
        {
          scrollTop: $("#scrollToTop").offset().top,
        },
        600
      );
    },
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
  },
};
</script>

<style scoped>
.cards-container-episode{
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
}
ul {
  list-style: none;
  font-size: 10px;
}
.btn-Episode {
  border: none;
  background: none;
  width: 100%;
  cursor: pointer;
}

.episodes {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 220px;
  height: 110px;
  padding: 1rem;
  margin: 1rem;
}

@media  screen and (max-width:884px) {
    .cards-container-episode{
      width: 100%;
    }
}

@media  screen and (max-width:795px) {
    .cards-container-episode{
      width: 70%;
    }
}
@media  screen and (max-width:777px) {
    .cards-container-episode{
      width: 100%;
    }
    .episodes{
      width: 300px;
    }
}
</style>