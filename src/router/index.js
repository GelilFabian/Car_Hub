import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '/src/views/LoginPage.vue'
import NewsPage from "/src/views/NewsPage.vue";
import PaginaComparare from "/src/views/PaginaComparare.vue";
import ProfilUtilizator from "/src/views/ProfilUtilizator.vue";
import Forum from "/src/views/Forum.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: LoginPage
    },
    {
      path: '/newsPage',
      name: 'newsPage',
      component: NewsPage
    },
    {
      path:'/paginaComparare',
      name: 'paginaComparare',
      component: PaginaComparare
    },
    {
      path: '/profilUtilizator/:username',
      name: 'profilUtilizator',
      component: ProfilUtilizator,
      props: true
    },
    {
      path:'/forum',
      name:'forum',
      component: Forum
    },
  ]
})

export default router
