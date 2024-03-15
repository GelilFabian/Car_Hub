<template>
<div class="header">
  <div class="hero-image">
    <div class="hero-text">
      <h1>CARHUB</h1>
      <p>Your car related app!</p>
      <button><router-link to="/loginPage">Try Demo</router-link></button>
    </div>
  </div>
</div>
  <div class="body">
    <div class="descriere">
      <div class="descriere-text">
        <hr>
        <h1>DESCRIEREA APLICATIEI</h1>
        <hr>
        <h2 class="coloredParagraph">De ce sa o folosesti?</h2>
        <p>Aplicatia CarHub este o platforma noua, cu un aspect modern, atat pentru computer, cat si pentru mobil, care rezolva problema cautarii informatiilor din domeniul auto, intr-un mod mult mai rapid.</p>
        <p>Ai acces la toate tipurile de informatii din acest domeniu, de la stiri la comparari de masini si pana la informatii oferite de alti utilizatori.</p>
        <p>Aplicatia este foarte usoara de folosit,de oriunde si oricand.</p>
        <p>Compartimentarea aplicatiei:</p>
        <ul>
          <li>Pagina de autentificare / creare cont</li>
          <li>Pagina de stiri</li>
          <li>Pagina de profil a utilizatorului</li>
          <li>Pagina de comparare a masinilor</li>
          <li>Pagina de discutii (forum)</li>
        </ul>
      </div>
      <div class="descriere-poza">
        <img src="../assets/loginPageComputer-front.png" alt="loginPageComputer">
      </div>
    </div>
    <div class="caracteristici">
      <hr>
      <h1>CARACTERISTICI</h1>
      <hr>
      <div class="row1">
        <div class="column">
          <div class="card">
            <font-awesome-icon class="icon" icon="smile"></font-awesome-icon>
            <h2 class="coloredParagraph">Interfata Prietenoasa</h2>
            <p>Interfata intuitiva si usor de navigat prin ea.</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <font-awesome-icon class="icon" icon="star"></font-awesome-icon>
            <h2 class="coloredParagraph">Aplicatie noua</h2>
            <p>Platforma noua, de actualitate, in comparatie cu concurenta.</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <font-awesome-icon class="icon" icon="check"></font-awesome-icon>
            <h2 class="coloredParagraph">Informatii reale</h2>
            <p>Informatii din surse documentate, informatii noi si veridice.</p>
          </div>
        </div>
      </div>

      <div class="row2">
        <div class="column">
          <div class="card">
            <font-awesome-icon class="icon" icon="th"></font-awesome-icon>
            <h2 class="coloredParagraph">Varietate</h2>
            <p>Disponibilitatea unor functionalitati variate, inglobate intr-un loc.</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <font-awesome-icon class="icon" icon="users"></font-awesome-icon>
            <h2 class="coloredParagraph">Comunitate</h2>
            <p>Partea de forum poate deservi la alcatuirea unei comunitati.</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <font-awesome-icon class="icon" icon="universal-access"></font-awesome-icon>
            <h2 class="coloredParagraph">Accesibilitate</h2>
            <p>Usor accesibila de oriunde si de pe orice device.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="titlu-detaliere-pagini">
      <hr>
      <h1>DETALIERE PAGINI</h1>
      <hr>
    </div>
    <div class="detaliere-pagini">
      <div class="detaliere-pagini-imagine-stanga">
        <img src="../assets/loginPage.png" alt="loginPage">
      </div>
      <div class="detaliere-pagini-text" id="right">
        <h1 class="coloredParagraph">Login Page</h1>
        <p>Aceasta este pagina pentru autentificare sau de creare a unui cont daca acesta nu exista inca.</p>
        <p>Daca contul exista deja, doar se vor introduce datele de autentificare in formularul <span class="coloredParagraph">Autentificare</span></p>
        <p>Daca contul nu exista inca, utilizatorul va apasa pe butonul <span class="coloredParagraph">Nu ai cont? Inregistrare</span>. Dupa apasarea butonului, se va schimba formularul din cel de Autentificare in cel de Inregistrare</p>
        <p>In formularul de inregistrare exista campurile in care se vor completa email-ul, parola si confirmarea parolei</p>
      </div>
    </div>

    <div class="detaliere-pagini">
      <div class="detaliere-pagini-text">
        <h1 class="coloredParagraph">Pagina de stiri</h1>
        <p>Aceasta este pagina de unde iti poti lua doza de stiri auto actuale.</p>
        <p>In prima faza, stirea afiseaza inceputul subiectului, dar apasand butonul <span class="coloredParagraph">Afiseaza mai mult</span>, va aparea tot subiectul stirii pe care il doresti a il citi </p>
        <p>Sus pe pagina exista un <span class="coloredParagraph">Sort Bar</span> pentru a putea vizualiza stirile sortate in functie de daata publicarii sau in ordine alfabetica(crescatoare sau descrescatoare)</p>
      </div>
      <div class="detaliere-pagini-imagine-dreapta">
        <img src="../assets/newsPage.png" alt="newsPage">
      </div>
    </div>

    <div class="detaliere-pagini">
      <div class="detaliere-pagini-imagine-stanga">
        <img src="../assets/userProfile.png" alt="userProfile">
      </div>
      <div class="detaliere-pagini-text" id="right">
        <h1 class="coloredParagraph">Pagina de profil</h1>
        <p>Aceasta pagina este dedicata utilizatorului si a preferintelor sale.</p>
        <p>Utilizatorul poate sa isi schimbe numele din cadrul aplicatiei, poza de profil, detaliile masinii pe care o conduce si poate adauga o mica descriere despre el.</p>
        <p>La o derulare in jos a paginii, se va regasi butonul de editare profil care va permite editarea sau adaugarea de informatii in cadrul contului dumneavoastra.</p>
      </div>
    </div>

    <div class="detaliere-pagini">
      <div class="detaliere-pagini-text">
        <h1 class="coloredParagraph">Pagina de comparare masini</h1>
        <p>Aceasta este pagina unde se pot compara 2 autovehicule pentru a vizualiza diferente intre ele si pentru a te ajuta in decizia de achizitie sau doar pentru a afla informatii.</p>
        <p>In prima faza se vor selecta datele autovehiculului pe care doriti sa le comparati cu ajutorul listelor derulante, selectand optiunea dorita.</p>
        <p>Dupa selectare, sub aceste forulare exista butonul <span class="coloredParagraph">Start comparare</span>. Dupa apasarea acestui buton, se vor afisa datele autovehiculelor selectate.</p>
        <p>Acea comparare cuprinde tot, de la dimensiunile fizice ale autovehiculului pana la detalii legate de performanta.</p>
      </div>
      <div class="detaliere-pagini-imagine-dreapta">
        <img src="../assets/comparePage.png" alt="comparePage">
      </div>
    </div>

    <div class="detaliere-pagini">
      <div class="detaliere-pagini-imagine-stanga">
        <img src="../assets/forumPage.png" alt="forumPage">
      </div>
      <div class="detaliere-pagini-text" id="right">
        <h1 class="coloredParagraph">Forumul</h1>
        <p>In cadrul acestei pagini, se pot desfasura discutii intre utilizatori, cu specificatia ca discutiile trebuie sa fie din domeniul auto.</p>
        <p>Pentru a introduce un subiect de discutie, se va apasa btonul plus din dreapta jos. Se va deschide un modal cu un input pentru a introduce titlul si subiectul discutiei</p>
        <p>Dupa ce subiectul este postat, se poate deschide orice card de discutie doar apasand chenarul respectiv. Se va deschide un modal cu toate detaliile afisate inainte de deschidere plus un camp de introducere de caractere pentru a comenta la postarea respectiva, alaturi de un buton pentru postarea comentariului.</p>
        <p>De asemenea, exista posibilitatea de cautare a unui anumit subiect de discutie.</p>
      </div>
    </div>

    <div class="end-card">
      <hr>
      <h1>CONCLUZII</h1>
      <hr>
      <p>Daca prezentarea aplicatiei vi s-a parut atragatoare, puteti incerca varianta demo a aplicatiei accesand link-ul de mai jos</p>
      <button><router-link to="/loginPage">Log In / Sign Up</router-link></button>
    </div>
  </div>
  <div id="footer">
    <p>© All Right Reserved By <span class="coloredParagraph">Gelil Fabian</span></p>
  </div>
</template>
<script>
import {RouterLink} from "vue-router";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  name:'paginaPrezentare',
  components: {
    'router-link':RouterLink,
    'font-awesome-icon': FontAwesomeIcon,
  },
  data(){
    return{}
  }
}
</script>
<style scoped>
* {
  font-weight: 800;
  margin-top:0;
  overflow-x:hidden;
  overflow-y: hidden;
}

h1,h2,p {
  letter-spacing: 1px;
  line-height:1.5;
}

h1{
  letter-spacing: 2px;
}

p{
  font-weight: 100;
}
li{
  letter-spacing: 1px;
  font-weight: 100;
}

.header {
  height:100vh;
  width:100%;
}

.hero-image{
  height:100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url("../assets/hero-img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.hero-text {
  text-align: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width:700px;
}

.hero-text h1{
  font-size:100px;
  color: red;
}

.hero-text p{
  font-size:20px;
  color: white;
}

button {
  margin-top: 30px;
  padding:20px;
  border:0;
  background-color: red;
  border-radius:15px;
  margin-bottom: 30px;
}

button:hover{
  background-color: #600909;
  transition:all 0.3s ease;
}

a {
  text-decoration: none;
  color:white;
  font-size:18px;
  font-weight: 400;
}

.body{
  background-color: #181717;
  overflow-x:hidden;
  color: white;
}

.descriere, .detaliere-pagini{
  max-width:1200px;
  display:flex;
  margin:100px auto;
}

.caracteristici{
  max-width:1200px;
  margin:100px auto;
  text-align: center;
}

.descriere-text, .detaliere-pagini-text {
  width:50%;
  padding:20px;
}

.descriere-text h1{
  text-align: center;
  margin-top:10px;
  margin-bottom:10px;
  font-size:35px;
}

.caracteristici h1{
  margin-top:10px;
  margin-bottom:10px;
  font-size:35px;
}

.descriere-text h2{
  margin-top:50px;
}

.descriere-text hr{
  width:40%;
  border-width:0;
  height:1px;
  background-color: red;
}

.caracteristici hr {
  width:15%;
  border-width:0;
  height:1px;
  background-color: red;
}

.caracteristici .column{
  float: left;
  text-align:center;
  width: 31%;
  margin:0 auto;
}

.descriere-poza {
  width:50%;
}

.detaliere-pagini-imagine-dreapta, .detaliere-pagini-imagine-stanga{
  width:40%;
}

.descriere-poza img{
  width:100%;
  background-image: linear-gradient(90deg, #181717 50%, red 50%);
}

.detaliere-pagini-imagine-dreapta img{
  height:650px;
  float:right;
  background-image: linear-gradient(90deg, #181717 50%, red 50%);
}

.detaliere-pagini-imagine-stanga img{
  height:650px;
  background-image: linear-gradient(90deg, red 50%, #181717 50%);
}

.detaliere-pagini-text {
  width:60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.titlu-detaliere-pagini {
  max-width:1200px;
  margin:100px auto;
  text-align: center;
}

.titlu-detaliere-pagini h1{
  margin-top:10px;
  margin-bottom:10px;
  font-size:35px;
}

.titlu-detaliere-pagini hr{
  width:15%;
  border-width:0;
  height:1px;
  background-color: red;
}

.coloredParagraph {
  color:red;
}

.row1 {
  margin-top:50px;
  display:flex;
}

.row2 {
  margin-bottom:80px;
  display:flex;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 50px;
  text-align: center;
  background-color: #0a0a0c;
  margin-top:25px;
  height: 200px;
}

.card h2 {
  font-size:20px;
  font-weight: 600;
}

.card .icon{
  height:80px;
  width:80px;
  text-align: center;
  background-color: #0F0F0F;
  color: red;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  margin-bottom:15px;
}

.card .icon:hover{
  background-color: red;
  color:#0F0F0F;
}

#right{
  text-align:right;
}

.end-card {
  max-width:1200px;
  margin:0 auto;
  text-align: center;
}

.end-card p{
  margin-top:40px;
}

.end-card hr{
  width:15%;
  border-width:0;
  height:1px;
  background-color: red;
}

.end-card h1{
  margin-top:10px;
  margin-bottom:10px;
  font-size:35px;
}

#footer{
  background-color: #0F0F0F;
  text-align:center;
  padding:30px;
  color:white;
  clear:both;
}

@media (max-width:800px){
  .hero-text h1{
    font-size:70px;
  }
  .descriere {
    display:block;
  }
  .descriere-text {
    width:90%;
    padding:0;
    margin:0 auto;
  }
  .descriere-poza {
    width:100%;
  }
  .caracteristici .row1, .caracteristici .row2 {
    display:block;
  }
  .caracteristici .column{
    float:none;
    width:90%;
    margin:0 auto;
  }
  .detaliere-pagini{
    display:block;
  }
  .detaliere-pagini .detaliere-pagini-text, .detaliere-pagini .detaliere-pagini-imagine-dreapta, .detaliere-pagini .detaliere-pagini-imagine-stanga{
    width:90%;
    margin:0 auto;
  }
}

</style>