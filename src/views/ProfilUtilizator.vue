<script>
import {userData} from "@/userInfo.js";
import UserProfileForm from "@/components/UserProfileForm.vue";
export default{
    name:'profilUtilizator',
    components:{UserProfileForm},
    data(){
      return{
        editing:false,
        user: userData,
        showModal: false
      };
    },
  created() {
    const username = this.$route.params.username;
    const listaUs = JSON.parse(localStorage.getItem('listUser'));
    const user = listaUs.find(user => user.username === username);
    if (user) {
      this.user = user;
    }
  },
    computed: {
      isCurrentUser() {
        const loggedInUserEmail = localStorage.getItem('loggedInUser');
        const loggedInUsername = localStorage.getItem('username');
        return loggedInUserEmail === this.user.email || !this.user.username || loggedInUsername === this.user.username;
      },
    },
    methods: {
      toggleEdit() {
        this.editing = true;
      },
      saveChangesToLocalStorage() {
        const loggedInUserEmail = localStorage.getItem('loggedInUser');
        const listaUs = JSON.parse(localStorage.getItem('listUser'));
        for(let i=0;i<listaUs.length;i++){
          if(loggedInUserEmail === listaUs[i].email){
            listaUs[i].username = this.user.username;
            listaUs[i].carDetails.marca = this.user.carDetails.marca;
            listaUs[i].carDetails.model = this.user.carDetails.model;
            listaUs[i].carDetails.an_fabricatie = this.user.carDetails.an_fabricatie;
            listaUs[i].carDetails.motorizare = this.user.carDetails.motorizare;
            listaUs[i].carDetails.putere = this.user.carDetails.putere;
            listaUs[i].description = this.user.description;
            listaUs[i].profilePicture = this.user.profilePicture;
            localStorage.setItem('username',listaUs[i].username)
            localStorage.setItem('image',listaUs[i].profilePicture)
            break;
          }
        }
        localStorage.setItem('listUser', JSON.stringify(listaUs));
        this.editing = false;
        this.$router.push({ name: 'profilUtilizator', params: { username: this.user.username }});
      },

    },
  }
</script>
<template>
  <div class="main">
    <div class="mid">
      <UserProfileForm
          :user="user" :editing="editing"
      ></UserProfileForm>
    </div>
    <button v-if="isCurrentUser" @click="toggleEdit" class="button" :style="{ display: !editing ? 'block' : 'none' }">Editeaza Profil</button>
    <button @click="saveChangesToLocalStorage" class="button" :style="{ display: editing ? 'block' : 'none' }">Salveaza Modificari</button>
  </div>
</template>
<style scoped>
*{
  box-sizing: border-box;
}
.main {
  margin-left: 30%;
  width: 50%;
  display: inline-block;
  padding: 0 10px;
  border: 2px solid #00004d;
  Backdrop-filter:blur(7px);
  background-color: rgba(0,0,0,.8);
  color: #fff;
  border-radius:20px;
  margin-top:30px;
}
.mid {
  margin-left: 30px;
  margin-right: 30px;
}
.button {
  height: 60px;
  width:200px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left:30px;
  border-radius: 20px;
  border: 2px solid #00004d;
  transition: all 0.3s ease-in-out;
}
.button:hover {
  background-color: #00004d;
  color:white;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.29);
  transform: scale(1.05);
}
li {
  list-style-type: none;
  margin-bottom: 10px;
}
img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 5px;
}

@keyframes fadeIn {
  0% {opacity:0;}
  50% {opacity: 5;}
}

@media (max-width:800px){
  .main{
    margin:2%;
    width:96%;
  }
  .button{
    width:50%;
    margin-left:25%;
  }
  textarea {
    max-width:280px;
  }
  hr {
    width:100%;
  }
}
</style>