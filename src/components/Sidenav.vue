<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {RouterLink} from "vue-router";
import {userData} from "@/userInfo.js";
export default {
  name:'Sidenav',
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    'router-link':RouterLink,
  },
  data() {
    return {
      showSidenav:window.innerWidth > 800,
      user: userData,
      username:localStorage.getItem('username') || 'User',
    }
  },
  watch: {
    '$route.params.username': function() {
      this.username = localStorage.getItem('username') || 'User';
    }
  },
  methods:{
    getPageClass() {
      const path = this.$route.path;
      const pageClasses = {
        '/newsPage': '#80002a',
        '/paginaComparare': '#339966',
        '/forum': '#FFA500FF'
      };

      if (path.startsWith('/profilUtilizator')) {
        return '#00004d';
      } else {
        return pageClasses[path] || '';
      }
    },
    toggleSidenav() {
      this.showSidenav = !this.showSidenav;
    },
    closeSidenav() {
      if (window.innerWidth <= 800) {
        this.showSidenav = false;
      }
    },
    logout(){
      localStorage.removeItem('username')
      localStorage.removeItem('image')
    }
  }
}
</script>
<template>
    <aside class="sidenav" :style="{ backgroundColor: getPageClass() }" v-if="showSidenav">
      <div class="logo-container">
        <router-link to="/newsPage"><img src="../assets/logo2.jpg" alt="CarHub"></router-link>
        <p>Welcome, {{username}}!</p>
      </div>
      <hr>
      <div class="link-container">
        <router-link to="/newsPage" @click.native="closeSidenav"><font-awesome-icon icon="newspaper" /> Stiri</router-link>
        <router-link :to="{ name: 'profilUtilizator', params: { username: username } }" @click.native="closeSidenav"><font-awesome-icon icon="user" /> Profil</router-link>
        <router-link to="/paginaComparare" @click.native="closeSidenav"><font-awesome-icon icon="car" /> Comparare</router-link>
        <router-link to="/forum" @click.native="closeSidenav"><font-awesome-icon icon="comments" /> Forum</router-link>
        <router-link to="/loginPage" @click.native="logout"><font-awesome-icon icon="sign-out" /> Log Out</router-link>
      </div>
    </aside>
    <aside class="sidenav" :style="{ backgroundColor: getPageClass() }" v-if="!showSidenav">
      <div class="link-container">
        <router-link to="/newsPage" @click.native="closeSidenav"><font-awesome-icon icon="newspaper" /></router-link>
        <router-link :to="{ name: 'profilUtilizator', params: { username: username } }" @click.native="closeSidenav"><font-awesome-icon icon="user" /></router-link>
        <router-link to="/paginaComparare" @click.native="closeSidenav"><font-awesome-icon icon="car" /></router-link>
        <router-link to="/forum" @click.native="closeSidenav"><font-awesome-icon icon="comments" /></router-link>
        <router-link to="/loginPage" @click.native="logout"><font-awesome-icon icon="sign-out" /></router-link>
      </div>
    </aside>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
.sidenav {
  width:80%;
  margin:0 10% 10px 10%;
  height:100px;
  bottom:0;
  position:fixed;
  z-index:1;
  border-radius:20px;
  display:flex;
}
.link-container {
  width:78%;
  display:flex;
  align-items: center;
}
.logo-container{
  width:22%;
  display:flex;
  align-items: center;
}
.logo-container a{
  width:40%;
}
.link-container a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 22px;
  color: white;
  display: block;
  width:20%;
  text-align: center;
  transition: .5s;
}
.sidenav p {
  padding: 6px 8px 6px 16px;
  color: white;
  font-size: 22px;
}
img {
  width:100px;
  height:100px;
  margin-left:10%;
}
.link-container a:hover {
  color: black;
}

@media (max-width: 800px) {
  .sidenav {
    width: 96%;
    margin: 0 2% 10px 2%;
    height:80px;
  }
  .link-container {
    width:100%;
  }
  .sidenav a {
    font-size:25px;
  }
  img {
    margin-left:-5px;
    padding:10px;
  }
}
</style>