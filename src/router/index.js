import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '/src/views/LoginPage.vue'
import NewsPage from "/src/views/NewsPage.vue";
import PaginaComparare from "/src/views/PaginaComparare.vue";
import ProfilUtilizator from "/src/views/ProfilUtilizator.vue";
import Forum from "/src/views/Forum.vue";
import PaginaPrezentare from "/src/views/PaginaPrezentare.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'paginaPrezentare',
      component: PaginaPrezentare
    },
    {
      path: '/loginPage',
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
    {
      path: '/*',
      component: 404
    },
  ]
})

export default router
