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
      friendsList() {
        const listaUs = JSON.parse(localStorage.getItem('listUser'));
        return this.user.friends.map(email => {
          const friend = listaUs.find(user => user.email === email);
          return friend ? { email: friend.email, username: friend.username, image: friend.profilePicture } : null;
        }).filter(friend => friend !== null);
      },
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
      showFriendsModal() {
        this.showModal = true;
      },
      closeFriendsModal() {
        this.showModal = false;
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

      addFriend() {
        const loggedInUserEmail = localStorage.getItem('loggedInUser');
        const listaUs = JSON.parse(localStorage.getItem('listUser'));

        const currentUserIndex = listaUs.findIndex(user => user.email === loggedInUserEmail);

        if (currentUserIndex !== -1) {
          if (!listaUs[currentUserIndex].friends) {
            listaUs[currentUserIndex].friends = [];
          }
          if (listaUs[currentUserIndex].friends.includes(this.user.email)) {
            alert("Utilizatorul se află deja în lista de prieteni.");
          } else {
            listaUs[currentUserIndex].friends.push(this.user.email);
            localStorage.setItem('listUser', JSON.stringify(listaUs));
            alert("Utilizatorul a fost adăugat la lista de prieteni.");
          }
        }
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
    <button v-if="!isCurrentUser" @click="addFriend" class="button">Adauga Prieten</button>
    <button v-if="isCurrentUser" @click="showFriendsModal" class="button">Afiseaza lista de prieteni</button>
    <button @click="saveChangesToLocalStorage" class="button" :style="{ display: editing ? 'block' : 'none' }">Salveaza Modificari</button>
  </div>

  <div class="modal-overlay" v-if="showModal">
    <div class="modal-topic">
      <span class="close" @click="closeFriendsModal">×</span>
      <div class="modal-content" >
        <h2 style="color:black;">Lista de prieteni</h2>
        <ul>
          <li v-for="(friend, friendIndex) in friendsList" :key="friendIndex">
            <div style="display: flex; align-items: center;">
              <img :src="friend.image" alt="Avatar" >
              <p style="color:black;"><strong>{{ friend.username }}</strong></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
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
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.5s linear;
}
.modal-topic {
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  max-width: 80%;
  width: 500px;
  border: 4px solid  #00004d;
  margin-top:20px;
  margin-bottom:20px;
}
.modal-content {
  margin-top: 20px;
}
.close {
  position: relative;
  cursor: pointer;
  font-size: 50px;
  color:black;
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