import { createRouter, createWebHistory } from 'vue-router'
import IndexView from "../views/IndexView.vue";
import EpisodesView from "../views/EpisodesView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: "home",
      component: IndexView
    },
    {
      path: '/episodes-view',
      name: 'episodes',
      component: EpisodesView
    }
  ]
})

export default router
