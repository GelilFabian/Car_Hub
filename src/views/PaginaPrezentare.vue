<template>
  <div class="header">
    <img src="../assets/logo2.jpg" alt="CarHub">
  </div>

  <div class="row">
      <div class="card-target" >
        <div class="writecolumn-target" style="text-align: left">
          <h1>Descrierea Aplicatiei</h1>
          <h2>De ce sa o folosesti?</h2>
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
        <div class="imagecolumn-target" style="padding: 5px;">
          <img src="../assets/loginPageComputer-front.png" alt="loginPageComputer" style="max-width:700px">
        </div>
      </div>

      <h1 style="background-color: #e8d36a;color:white;text-align: center;padding:50px;">Detalierea paginilor</h1>

      <div class="card">
        <div class="writecolumn" style="border:2px solid red;">
          <h1 style="color: red">Login Page</h1>
          <p>Aceasta este pagina pentru autentificare sau de creare a unui cont daca acesta nu exista inca.</p>
          <p>Daca contul exista deja, doar se vor introduce datele de autentificare in formularul <span style="color: red">Autentificare</span></p>
          <p>Daca contul nu exista inca, utilizatorul va apasa pe butonul <span style="color: red">Nu ai cont? Inregistrare</span>. Dupa apasarea butonului, se va schimba formularul din cel de Autentificare in cel de Inregistrare</p>
          <p>In formularul de inregistrare exista campurile in care se vor completa email-ul, parola si confirmarea parolei</p>
        </div>
        <div class="imagecolumn">
          <img src="../assets/loginPage.png" alt="loginPage">
        </div>
      </div>

      <div class="card">
        <div class="imagecolumn">
          <img src="../assets/newsPage.png" alt="newsPage">
        </div>
        <div class="writecolumn" style="border:2px solid #80002a;">
          <h1 style="color:#80002a">Pagina de stiri</h1>
          <p>Aceasta este pagina de unde iti poti lua doza de stiri auto actuale.</p>
          <p>In prima faza, stirea afiseaza inceputul subiectului, dar apasand butonul <span style="color:#80002a">Afiseaza mai mult</span>, va aparea tot subiectul stirii pe care il doresti a il citi </p>
          <p>Sus pe pagina exista un <span style="color:#80002a">Sort Bar</span> pentru a putea vizualiza stirile sortate in functie de daata publicarii sau in ordine alfabetica(crescatoare sau descrescatoare)</p>
        </div>
      </div>

      <div class="card">
        <div class="writecolumn" style="border:2px solid #00004d">
          <h1 style="color:#00004d">Pagina de profil</h1>
          <p>Aceasta pagina este dedicata utilizatorului si a preferintelor sale.</p>
          <p>Utilizatorul poate sa isi schimbe numele din cadrul aplicatiei, poza de profil, detaliile masinii pe care o conduce si poate adauga o mica descriere despre el.</p>
          <p>La o derulare in jos a paginii, se va regasi butonul de editare profil care va permite editarea sau adaugarea de informatii in cadrul contului dumneavoastra.</p>
        </div>
        <div class="imagecolumn">
          <img src="../assets/userProfile.png" alt="userProfile">
        </div>
      </div>

    <div class="card">
      <div class="imagecolumn">
        <img src="../assets/comparePage.png" alt="comparePage">
      </div>
      <div class="writecolumn" style="border:2px solid #339966">
        <h1 style="color: #339966">Pagina de comparare masini</h1>
        <p>Aceasta este pagina unde se pot compara 2 autovehicule pentru a vizualiza diferente intre ele si pentru a te ajuta in decizia de achizitie sau doar pentru a afla informatii.</p>
        <p>In prima faza se vor selecta datele autovehiculului pe care doriti sa le comparati cu ajutorul listelor derulante, selectand optiunea dorita.</p>
        <p>Dupa selectare, sub aceste forulare exista butonul <span style="color: #339966;">Start comparare</span>. Dupa apasarea acestui buton, se vor afisa datele autovehiculelor selectate.</p>
        <p>Acea comparare cuprinde tot, de la dimensiunile fizice ale autovehiculului pana la detalii legate de performanta.</p>
      </div>
    </div>

    <div class="card">
      <div class="writecolumn" style="border:2px solid #FFA500FF">
        <h1 style="color: #FFA500FF">Forumul</h1>
        <p>In cadrul acestei pagini, se pot desfasura discutii intre utilizatori, cu specificatia ca discutiile trebuie sa fie din domeniul auto.</p>
        <p>Pentru a introduce un subiect de discutie, se va apasa btonul plus din dreapta jos. Se va deschide un modal cu un input pentru a introduce titlul si subiectul discutiei</p>
        <p>Dupa ce subiectul este postat, se poate deschide orice card de discutie doar apasand chenarul respectiv. Se va deschide un modal cu toate detaliile afisate inainte de deschidere plus un camp de introducere de caractere pentru a comenta la postarea respectiva, alaturi de un buton pentru postarea comentariului.</p>
        <p>De asemenea, exista posibilitatea de cautare a unui anumit subiect de discutie.</p>
      </div>
      <div class="imagecolumn">
        <img src="../assets/forumPage.png" alt="forumPage">
      </div>
    </div>

    <div class="end-card">
      <h1>Concluzii</h1>
      <p>Daca prezentarea aplicatiei vi s-a parut atragatoare, puteti incerca varianta demo a aplicatiei accesand link-ul de mai jos</p>
      <router-link to="/loginPage" style="float: right">Log In / Sign Up</router-link>
    </div>
  </div>

  <div class="footer">
    <p>© Copyright Gelil Fabian</p>
    <p>All rights reserved</p>
  </div>

</template>
<script>
import {RouterLink} from "vue-router";
export default {
  name:'paginaPrezentare',
  components: {
    'router-link':RouterLink,
  },
  data(){}
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}

body {
  background: #f1f1f1;
}

.header {
  background-color: #e8d36a;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
}

h1 {
  font-size: 60px;
  margin:0;
}

h2 {
  font-size:40px;
}

p,li{
  font-size:20px;
}

img {
  width:100%;
  max-width:400px;
}

a {
  background-color: #e8d36a;
  padding: 10px;
  border-radius: 15px;
  text-decoration: none;
  color: white;
}

a:hover {
  background-color: #776519;
}

.card {
  padding: 50px;
  display:flex;
  width:100%;
}

.card-target{
  padding:50px;
  display:flex;
  width:100%;
}

.end-card {
  padding: 50px;
  display:inline-block;
  width:100%;
}

.writecolumn{
  width:55%;
  background-color: #e1e1e1;
  border-radius: 30px;
  padding:20px;
  border:2px solid #f13535
}

.writecolumn-target {
  background-color: #e1e1e1;
  border-radius: 30px;
  padding:70px;
  border:2px solid black;
}

.writecolumn-target h2 {
  color:#e8d36a;
}


.imagecolumn{
  width:45%;
}

.writecolumn, .imagecolumn {
  float:left;
  text-align:center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.row::after {
  content: "";
  display: table;
  clear: both;
}

.footer {
  padding: 20px;
  text-align: center;
  background: black;
  color:white;
  margin-top: 20px;
}

@media (min-width: 800px) {
  .writecolumn-target, .imagecolumn-target {
    display:inline-block;
  }
  .writecolumn-target {
    width:55%;
  }

  .imagecolumn-target{
    width:45%;
  }
}

@media (max-width: 800px) {
  .card {
    padding:10px;
    margin-top:20px;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size:30px;
  }

  p,li{
    font-size:15px;
  }

  .writecolumn {
    padding: 10px;
  }

  .writecolumn h1{
    padding:15px;
  }

  .writecolumn-target {
    padding: 40px;
  }

  .card-target{
    margin-top:40px;
    display:inline-block;
    padding:10px;
  }

  .header {
    height:800px;
  }

}

</style>