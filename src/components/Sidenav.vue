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
  <nav :style="{ backgroundColor: getPageClass() }">
    <button class="toggle-button" @click="toggleSidenav()"><font-awesome-icon icon="bars" /></button>
    <aside class="sidenav" :style="{ backgroundColor: getPageClass() }" v-if="showSidenav">
      <button class="close-button" @click="toggleSidenav()">x</button>
      <img src="../assets/logo2.jpg" alt="CarHub">
      <p>Welcome, {{username}}!</p>
      <hr>
      <div class="container">
        <router-link to="/newsPage" @click.native="closeSidenav"><font-awesome-icon icon="newspaper" /> News Page</router-link>
        <router-link :to="{ name: 'profilUtilizator', params: { username: username } }" @click.native="closeSidenav"><font-awesome-icon icon="user" /> Profil Utilizator</router-link>
        <router-link to="/paginaComparare" @click.native="closeSidenav"><font-awesome-icon icon="car" /> Comparare Masini</router-link>
        <router-link to="/forum" @click.native="closeSidenav"><font-awesome-icon icon="comments" /> Forum</router-link>
      </div>
      <div class="logout-container">
      <router-link to="/loginPage" @click.native="logout"><font-awesome-icon icon="sign-out" /> Log Out</router-link>
      </div>
    </aside>
  </nav>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
.sidenav {
  height: 100%;
  width:250px;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: inline-block;
  background-color: #ffffff;
  animation: slideIn 0.3s linear;
}
.container {
  height: 500px;
  margin-top:30px;
}
.logout-container {
  bottom:0;
  position: absolute;
  margin-bottom:40px;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 19px;
  color: white;
  display: block;
  height: 27%;
  transition: .5s;
}
.sidenav p {
  padding: 6px 8px 6px 16px;
  color: white;
  font-size: 19px;
}
img {
  margin-left:15%;
  width:100px;
  height:100px;
}
hr {
  border: 1px solid black
}
.container a:hover {
  color: black;
}
.logout-container a:hover {
  color: black;
}
.toggle-button {
  font-size: 24px;
  background-color: rgba(0,0,0,0);
  color:white;
  border: none;
  cursor: pointer;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: none;
}

.close-button {
  font-size: 25px;
  background-color: rgba(0,0,0,0);
  color:white;
  border: none;
  cursor: pointer;
  margin-left:10px;
  text-align: center;
  text-decoration: none;
  display: none;
}

.toggle-button:hover, .close-button:hover {
  background-color: rgba(0,0,0,.8);}
@keyframes slideIn {
  0% {transform: translateX(-100%)}
  50% {transform: translateX(-50%)}
  100% {transform: translateX(0%)}
}
@media (max-width: 800px) {
  .toggle-button, .close-button {
    display: block;
  }
  .sidenav {
    width: 100%;
  }
  nav{
    position: sticky;
    top: 0;
    z-index:10;
  }
  .container {
    height: 400px;
  }
  .logout-container{
    margin-bottom: 40px;
  }
  .sidenav a {
    height: 27%;
  }
  img {
    width:80px;
    height:80px;
  }
}
</style>