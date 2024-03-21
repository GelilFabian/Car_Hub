<template>
  <div v-if="isLoading" class="loading-overlay">
    <div class="fulfilling-square-spinner">
      <div class="spinner-inner"></div>
    </div>
    <p>Se incarca...</p>
  </div>
    <h1>Bine ai venit pe CarHub!</h1>
  <div class="container" :class="{'sign-up-active' : signUp}">
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-left">
          <h2>Salutare, amic nou!</h2>
          <p>Am inteles ca nu ai un cont creat, introdu-ti datele pentru a putea crea contul!</p>
          <p>Daca ai un cont deja creat, apasa pe Autentificare pentru a te loga in contul tau!</p>
          <button class="invert" id="signIn" @click="signUp = !signUp">Autentificare</button>
        </div>
        <div class="overlay-right">
          <h2>Hei!</h2>
          <p>Introdu-ti datele de autentificare</p>
          <p>Nu ai cont? Apasa pe Înregistrare pentru a iti crea unul</p>
          <button class="invert" id="signUp" @click="signUp = !signUp">Înregistrare</button>
          <button class="invert"><router-link to="/">Inapoi la Landing Page</router-link></button>
        </div>
      </div>
    </div>
    <form class="sign-in">
      <h2>Autentificare</h2>
      <input type="text" placeholder="Your email.." v-model="user.email1" maxlength="25" required>
      <input type="password" placeholder="Your password.." v-model="user.password1" maxlength="15" minlength="8" required>
      <input type="checkbox" id="remember" v-model="rememberChecked" @change="rememberMe" style="box-shadow: none">
      <label for="remember"> Tine-ma minte</label><br>
      <input type="submit" value="Autentificare" v-on:click.prevent="Login">
      <input type="button" class="switch-form" value="Nu ai cont? Înregistrare" @click="signUp = !signUp">
      <button><router-link to="/">Inapoi la Landing Page</router-link></button>
    </form>
    <form class="sign-up" >
      <h2>Înregistrare</h2>
      <input type="text" placeholder="Your email.." v-model="user.email" maxlength="25" required>
      <input type="password" placeholder="Your password.." v-model="user.password" maxlength="15" minlength="8" required>
      <input type="password" placeholder="Your confirm password.." v-model="user.confirmPassword" maxlength="15" minlength="8" required>
      <input type="submit" value="Inregistrare" v-on:click.prevent="Signup">
      <input type="button" class="switch-form" value="Ai un cont? Autentificare" @click="signUp = !signUp">
    </form>
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
      signUp: false,
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
.container {
  position: relative;
  display: block;
  border-radius: 40px;
  width: 70%;
  max-width:800px;
  margin-top: 40px;
  margin-right:45%;
  margin-left:7%;
  height: 55vh;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, .2), 0 10px 10px rgba(0, 0, 0, .2);
}

.container .overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform .5s ease-in-out;
  z-index:11;
}
.container .overlay {
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  background: linear-gradient(to bottom right, rgba(255, 0, 0, 0.8), rgba(91, 8, 8, 0.8));
  Backdrop-filter: blur(15px);
  color: #fff;
  transform: translateX(0);
  transition: transform .5s ease-in-out;
}
.container .overlay-left {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 70px 40px;
  width: calc(50% - 80px);
  height: calc(100% - 140px);
  text-align: center;
  transform: translateX(-20%);
  transition: transform .5s ease-in-out;
}
.container .overlay-right {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 70px 40px;
  width: calc(50% - 80px);
  height: calc(100% - 140px);
  text-align: center;
  transform: translateX(0);
  transition: transform .5s ease-in-out;
  right: 0;
}
h2 {
  margin: 0;
}
h1 {
  margin-left: 20%;
  margin-top: 150px;
  margin-right: 30%;
}
p {
  margin: 20px 0 30px;
}
a {
  color: white;
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
}
button {
  border-radius: 20px;
  border: 1px solid #ff0000;
  background-color: #ff0000;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
button:active {
  transform: scale(.9);
}
button:focus {
  outline: none;
}
button.invert {
  background-color: transparent;
  border-color: #fff;
}
form {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 90px 60px;
  width: calc(50% - 120px);
  height: calc(100% - 180px);
  text-align: center;
  background: linear-gradient(to bottom, #efefef, #ccc);
  transition: all .5s ease-in-out;

}
form div {
  font-size: 1rem;
}
form input {
  background-color: #eee;
  border: none;
  padding: 8px 15px;
  margin: 6px 0;
  width: calc(100% - 30px);
  border-radius: 15px;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .4), 0 -1px 1px #fff, 0 1px 0 #fff;
  overflow: hidden;
}
input[type=submit]{
  background-color:#ff0000;
  color:white;
  height: 35px;
  transition: all 0.3s ease-in-out;
}

.sign-in button{
  background-color:#ff0000;
  height: 35px;
  transition: all 0.3s ease-in-out;
  text-transform: none;
  border: none;
  border-radius:15px;
  margin: 6px 0;
  width:70%;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .4), 0 -1px 1px #fff, 0 1px 0 #fff;
  padding:3px;
}

.sign-in a{
  font-size:15px;
  letter-spacing: normal;
  font-weight: normal;
}

input[type=button]{
  background-color:#ff0000;
  color:white;
  height: 35px;
}

input[type=submit]:hover{
  background-color: #710a10;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.29);
  transform: scale(1.05);
}
button:hover{
  background-color: #5b0808;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.29);
  transform: scale(1.05);
}
form input:focus {
  outline: none;
  background-color: #fff;
}
.sign-in {
  left: 0;
  z-index: 2;
}
.sign-up {
  left: 0;
  z-index: 1;
  opacity: 0;
}
.sign-up-active .sign-in {
  transform: translateX(100%);
}
.sign-up-active .sign-up {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show .5s;
}
.sign-up-active .overlay-container {
  transform: translateX(-100%);
}
.sign-up-active .overlay {
  transform: translateX(50%);
}
.sign-up-active .overlay-left {
  transform: translateX(0);
}
.sign-up-active .overlay-right {
  transform: translateX(20%);
}
@keyframes show {
  0% {
    opacity: 0;
    z-index: 1;
  }
  49% {
    opacity: 0;
    z-index: 1;
  }
  50% {
    opacity: 1;
    z-index: 10;
  }
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

.switch-form {
  display: none;
}

@media(max-width:800px){
  .overlay-container{
    display:none;
  }
  .container{
    width:90%;
    margin-left:5%;
    margin-right:5%;
  }
  form{
    width:100%;
    padding:90px 0;
  }
  form input{
    margin-left:60px;
    margin-right:60px;
    width:70%
  }
  h1{
    margin-right:0;
    margin-left:0;
    margin-top: 100px;
    text-align: center;
  }
  .switch-form {
    display: block;
  }
  .sign-in,
  .sign-up,
  .sign-up-active .sign-in,
  .sign-up-active .sign-up,
  .sign-up-active .overlay-container,
  .sign-up-active .overlay,
  .sign-up-active .overlay-left,
  .sign-up-active .overlay-right {
    transform: none;
  }
  .sign-up {
    opacity: 1;
  }
}
</style>
