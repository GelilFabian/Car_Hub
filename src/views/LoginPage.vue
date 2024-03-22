<template>
  <div v-if="isLoading" class="loading-overlay">
    <div class="fulfilling-square-spinner">
      <div class="spinner-inner"></div>
    </div>
    <p>Se incarca....</p>
  </div>
  <div class="body">
    <div class="wrapper" v-if="showLoginForm">
      <form action="">
        <h1>Autentificare</h1>

        <div class="input-box">
          <input type="text" v-model="user.email1" placeholder="Username" required>
          <font-awesome-icon icon="user" class="icon"/>
        </div>

        <div class="input-box">
          <input type="password" v-model="user.password1" placeholder="Password" required>
          <font-awesome-icon icon="lock" class="icon"/>
        </div>

        <div class="remember">
          <label><input type="checkbox" id="remember" v-model="rememberChecked" @change="rememberMe">Tine-ma minte</label>
        </div>

        <button type="submit" v-on:click.prevent="Login" class="btn">Autentifica</button>

        <div class="register-link">
          <p>Nu ai un cont? <a href="#" @click="toggleForm">Inregistrare</a></p>
          <p>Inapoi la <router-link to="/">Landing Page</router-link></p>
        </div>
      </form>
    </div>
    <div class="wrapper1" v-else>
      <form action="">
        <h1>Inregistrare</h1>

        <div class="input-box">
          <input type="text" v-model="user.email" placeholder="Username" required>
          <font-awesome-icon icon="user" class="icon"/>
        </div>

        <div class="input-box">
          <input type="password" v-model="user.password" placeholder="Password" required>
          <font-awesome-icon icon="lock" class="icon"/>
        </div>

        <div class="input-box">
          <input type="password" v-model="user.confirmPassword" placeholder="Confirm Password" required>
          <font-awesome-icon icon="lock" class="icon"/>
        </div>

        <button type="submit" v-on:click.prevent="Signup" class="btn">Inregistrare</button>

        <div class="register-link">
          <p>Ai un cont? <a href="#" @click="toggleForm">Autentificare</a></p>
        </div>
      </form>
    </div>
  </div>
  <ModalBox ref="modalBox" />
</template>
<script>
import { userData } from '/src/userInfo.js';
import { listaUseri } from "/src/userInfo.js";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import ModalBox from '/src/components/ModalBox.vue';

export default {
  name:'loginPage',
  components: {FontAwesomeIcon,ModalBox},

  data() {
    return {
      user: userData,
      listaUser : listaUseri,
      rememberChecked: false,
      isLoading: false,
      showLoginForm: true,
    };
  },
  mounted() {
    let check = window.localStorage.getItem('Remembered');
    if (check !== null) {
      let c = document.getElementById('remember');
      c.checked = true;
      let rememberedEmail = window.localStorage.getItem('RememberedEmail');
      let rememberedPassword = window.localStorage.getItem('RememberedPassword');
      if (rememberedEmail && rememberedPassword) {
        this.user.email1 = rememberedEmail;
        this.user.password1 = rememberedPassword;
      }
    }
    let listaUseri = JSON.parse(window.localStorage.getItem('listUser'))
    this.listaUser = listaUseri != null ? listaUseri : []
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
    rememberMe() {
      let c1 = document.getElementById('remember');
      if (c1.checked) {
        window.localStorage.setItem('Remembered', c1.value);
        window.localStorage.setItem('RememberedEmail', this.user.email1);
        window.localStorage.setItem('RememberedPassword', this.user.password1);
      } else {
        window.localStorage.removeItem('Remembered');
        window.localStorage.removeItem('RememberedEmail');
        window.localStorage.removeItem('RememberedPassword');
      }
    },
    Signup() {
      for(let i=0;i<this.listaUser.length;i++){
        if(this.user.email === this.listaUser[i].email){
          this.$refs.modalBox.openModal('Eroare','Email existent, introdu altul');
          return;
        }
      }
      if (this.user.password === this.user.confirmPassword) {
        this.$refs.modalBox.openModal('Felicitari!',"Contul a fost creat");
        let newUser = Object.assign({},this.user)
        this.listaUser.push(newUser)
        localStorage.setItem('listUser',JSON.stringify(this.listaUser))
      } else {
        this.$refs.modalBox.openModal('Eroare',"Parolele nu coincid!");
      }
      setTimeout(this.toggleForm, 2000);
    },
    Login(){
      if(this.listaUser.length===0){
        this.$refs.modalBox.openModal('Eroare', 'Nu există utilizatori');
        return;
      }

      let foundUser = this.listaUser.find(user => user.email === this.user.email1 && user.password === this.user.password1);

      if(foundUser){
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
          this.$router.push('/newsPage');
          localStorage.setItem('loggedInUser', this.user.email1);
          localStorage.setItem('username', foundUser.username);
          localStorage.setItem('image', foundUser.profilePicture);
        }, 3000);
      } else {
        this.$refs.modalBox.openModal('Eroare', 'Datele introduse sunt incorecte');
      }
    },
  }
};
</script>
<style scoped>
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.fulfilling-square-spinner , .fulfilling-square-spinner * {
  box-sizing: border-box;
}

.fulfilling-square-spinner {
  height: 100px;
  width: 100px;
  position: relative;
  border: 4px solid #ff0000;
  animation: fulfilling-square-spinner-animation 3s infinite ease;
}

.fulfilling-square-spinner .spinner-inner {
  vertical-align: top;
  display: inline-block;
  background-color: #ff0000;
  width: 100%;
  opacity: 1;
  animation: fulfilling-square-spinner-inner-animation 3s infinite ease-in;
}

@keyframes fulfilling-square-spinner-animation {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fulfilling-square-spinner-inner-animation {
  0% {
    height: 0;
  }
  25% {
    height: 0;
  }
  50% {
    height: 100%;
  }
  75% {
    height: 100%;
  }
  100% {
    height: 0;
  }
}

.body{
  text-align: center;
  position:absolute;
  transform: translate(60%, 50%);
}

.wrapper, .wrapper1{
  width:420px;
  background: transparent;
  border:2px solid #544949;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px rgba(0,0,0, .2);
  color: #544949;
  border-radius: 10px;
  padding:30px 40px;
}

.wrapper h1, .wrapper1 h1{
  font-size: 36px;
  text-align: center;
  color:red;
}

.wrapper .input-box, .wrapper1 .input-box{
  position:relative;
  width: 100%;
  height: 50px;
  margin:30px 0;
}

.input-box input {
  width:100%;
  height:100%;
  background: transparent;
  border:2px solid #544949;
  border-radius: 40px;
  font-size: 16px;
  color: #544949;
  padding:20px 45px 20px 20px;
}

.input-box input::placeholder {
  color: #544949;
}

.input-box .icon{
  position: absolute;
  right: 20px;
  top:50%;
  transform: translateY(-50%);
  font-size: 20px;
  color:red;
}

.wrapper .remember{
  font-size: 14.5px;
  margin: -15px 0 15px;
}

.remember label input{
  accent-color: #fff;
  margin-right: 5px;
}

.wrapper .btn, .wrapper1 .btn{
  width:100%;
  height: 45px;
  background: #fff;
  border:none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0,0,0, .1);
  cursor:pointer;
  font-size: 16px;
  color:#544949;
  font-weight: 600;
}

.wrapper .btn:hover, .wrapper1 .btn:hover{
  background: red;
  color:#fff;
}

.wrapper .register-link, .wrapper1 .register-link{
  font-size:14.5px;
  text-align: center;
  margin: 20px 0 15px;
}

.register-link p a {
  color:red;
  text-decoration: none;
  font-weight: 600;
}

.register-link a{
  text-decoration: none;
  color: red;
  font-weight: 600;
}

.register-link a:hover{
  text-decoration: underline;
  color:red;
}

@media (max-width: 800px){
  .body{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    transform:translate(0,50%);
    width:100%;
  }

  .wrapper{
    color:white;
    border:2px solid white;
    width:95%;
  }

  .input-box input::placeholder {
    color: white;
  }

  .input-box input{
    border:2px solid white;
  }
}
</style>