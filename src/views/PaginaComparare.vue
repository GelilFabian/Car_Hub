<script>
import { bazaDateMasini } from '/src/carData.js';

export default {
  name:'paginaComparare',
  data(){
    return {
      carData: bazaDateMasini,
      selectedMarca1: '',
      selectedModel1: '',
      selectedCaroserie1: '',
      selectedMotorizare1: '',

      selectedMarca2: '',
      selectedModel2: '',
      selectedCaroserie2: '',
      selectedMotorizare2: '',

      showInfo: false,
      comparareRezultate: {}
    }
  },

  computed: {
    selectedMarca1Models() {
      return this.carData[this.selectedMarca1] || {};
    },
    selectedModel1Caroserii() {
      return this.selectedMarca1Models[this.selectedModel1] || {};
    },
    selectedCaroserie1Motorizari() {
      return this.selectedModel1Caroserii[this.selectedCaroserie1] || {};
    },
    selectedMarca2Models() {
      return this.carData[this.selectedMarca2] || {};
    },
    selectedModel2Caroserii() {
      return this.selectedMarca2Models[this.selectedModel2] || {};
    },
    selectedCaroserie2Motorizari() {
      return this.selectedModel2Caroserii[this.selectedCaroserie2] || {};
    }
  },

  methods: {
    compareValues(value1, value2) {
      if (value1 > value2) {
        return 'A';
      } else if (value1 < value2) {
        return 'B';
      } else {
        return 0;
      }
    },
    comparareButon() {
      if (this.selectedMarca1 && this.selectedModel1 && this.selectedCaroserie1 && this.selectedMotorizare1 && this.selectedMarca2 && this.selectedModel2 && this.selectedCaroserie2 && this.selectedMotorizare2) {
        this.showInfo = true;
        this.comparareRezultate = {
          anFabricatie: this.compareValues(this.carData[this.selectedMarca1][this.selectedModel1][this.selectedCaroserie1][this.selectedMotorizare1].an_fabricatie, this.carData[this.selectedMarca2][this.selectedModel2][this.selectedCaroserie2][this.selectedMotorizare2].an_fabricatie),
          consumUrban: this.compareValues(this.carData[this.selectedMarca1][this.selectedModel1][this.selectedCaroserie1][this.selectedMotorizare1].consum_urban, this.carData[this.selectedMarca2][this.selectedModel2][this.selectedCaroserie2][this.selectedMotorizare2].consum_urban),
          consumAutostrada: this.compareValues(this.carData[this.selectedMarca1][this.selectedModel1][this.selectedCaroserie1][this.selectedMotorizare1].consum_autostrada, this.carData[this.selectedMarca2][this.selectedModel2][this.selectedCaroserie2][this.selectedMotorizare2].consum_autostrada),
          consumMixt: this.compareValues(this.carData[this.selectedMarca1][this.selectedModel1][this.selectedCaroserie1][this.selectedMotorizare1].consum_mixt, this.carData[this.selectedMarca2][this.selectedModel2][this.selectedCaroserie2][this.selectedMotorizare2].consum_mixt),
          acceleratie: this.compareValues(this.carData[this.selectedMarca1][this.selectedModel1][this.selectedCaroserie1][this.selectedMotorizare1].acceleratie, this.carData[this.selectedMarca2][this.selectedModel2][this.selectedCaroserie2][this.selectedMotorizare2].acceleratie),
          vitezaMaxima: this.compareValues(this.carData[this.selectedMarca1][this.selectedModel1][this.selectedCaroserie1][this.selectedMotorizare1].viteza_maxima, this.carData[this.selectedMarca2][this.selectedModel2][this.selectedCaroserie2][this.selectedMotorizare2].viteza_maxima),
          standardEco: this.compareValues(this.carData[this.selectedMarca1][this.selectedModel1][this.selectedCaroserie1][this.selectedMotorizare1].euro, this.carData[this.selectedMarca2][this.selectedModel2][this.selectedCaroserie2][this.selectedMotorizare2].euro),
          rapGrPut: this.compareValues(this.carData[this.selectedMarca1][this.selectedModel1][this.selectedCaroserie1][this.selectedMotorizare1].rap_greutate_putere, this.carData[this.selectedMarca2][this.selectedModel2][this.selectedCaroserie2][this.selectedMotorizare2].rap_greutate_putere),
          rapGrCup: this.compareValues(this.carData[this.selectedMarca1][this.selectedModel1][this.selectedCaroserie1][this.selectedMotorizare1].rap_greutate_cuplu, this.carData[this.selectedMarca2][this.selectedModel2][this.selectedCaroserie2][this.selectedMotorizare2].rap_greutate_cuplu),
          Cilindree:this.compareValues(this.carData[this.selectedMarca1][this.selectedModel1][this.selectedCaroserie1][this.selectedMotorizare1].cilindree,this.carData[this.selectedMarca2][this.selectedModel2][this.selectedCaroserie2][this.selectedMotorizare2].cilindree),
          Putere:this.compareValues(this.carData[this.selectedMarca1][this.selectedModel1][this.selectedCaroserie1][this.selectedMotorizare1].putere,this.carData[this.selectedMarca2][this.selectedModel2][this.selectedCaroserie2][this.selectedMotorizare2].putere),
          Cuplu:this.compareValues(this.carData[this.selectedMarca1][this.selectedModel1][this.selectedCaroserie1][this.selectedMotorizare1].cuplu,this.carData[this.selectedMarca2][this.selectedModel2][this.selectedCaroserie2][this.selectedMotorizare2].cuplu),
          masaProprie:this.compareValues(this.carData[this.selectedMarca1][this.selectedModel1][this.selectedCaroserie1][this.selectedMotorizare1].greutate,this.carData[this.selectedMarca2][this.selectedModel2][this.selectedCaroserie2][this.selectedMotorizare2].greutate),
          masaMaxima:this.compareValues(this.carData[this.selectedMarca1][this.selectedModel1][this.selectedCaroserie1][this.selectedMotorizare1].masa_maxima,this.carData[this.selectedMarca2][this.selectedModel2][this.selectedCaroserie2][this.selectedMotorizare2].masa_maxima),
          volumPortbagaj:this.compareValues(this.carData[this.selectedMarca1][this.selectedModel1][this.selectedCaroserie1][this.selectedMotorizare1].volum_portbagaj,this.carData[this.selectedMarca2][this.selectedModel2][this.selectedCaroserie2][this.selectedMotorizare2].volum_portbagaj),
          volumRezervor:this.compareValues(this.carData[this.selectedMarca1][this.selectedModel1][this.selectedCaroserie1][this.selectedMotorizare1].volum_rezervor,this.carData[this.selectedMarca2][this.selectedModel2][this.selectedCaroserie2][this.selectedMotorizare2].volum_rezervor),
      };
      }
    },
  },
}
</script>
<template>
  <div class="container">
    <div class="form-container">
      <div class="form">
        <h2>Masina A</h2>
        <form action="/carA" method="post">
          <label for="marca1">1) Alege marca masinii:</label><br>
          <select v-model="selectedMarca1">
            <option value="" selected>Alege marca</option>
            <option v-for="(value, key) in carData" :value="key" :key="key">{{ key }}</option>
          </select>

          <br><br>

          <label for="model1">2) Alege modelul masinii:</label><br>
          <select v-model="selectedModel1">
            <option value="" selected>Alege modelul</option>
            <option v-for="(value, key) in selectedMarca1Models" :value="key" :key="key">{{ key }}</option>
          </select>

          <br><br>

          <label for="caroserie1">3) Alege tipul caroseriei masinii:</label><br>
          <select v-model="selectedCaroserie1">
            <option value="" selected>Alege tipul caroseriei</option>
            <option v-for="(value, key) in selectedModel1Caroserii" :value="key" :key="key">{{ key }}</option>
          </select>

          <br><br>

          <label for="motorizare1">4) Alege motorizarea masinii:</label><br>
          <select v-model="selectedMotorizare1">
            <option value="" selected>Alege motorizarea</option>
            <option v-for="(value, key) in selectedCaroserie1Motorizari" :value="key" :key="key">{{ key }}</option>
          </select>
        </form>
      </div>
      <div class="form">
        <h2>Masina B</h2>
        <form action="/carB" method="post">
          <label for="marca2">1) Alege marca masinii:</label><br>
          <select v-model="selectedMarca2">
            <option value="" selected>Alege marca</option>
            <option v-for="(value, key) in carData" :value="key" :key="key">{{ key }}</option>
          </select>

          <br><br>

          <label for="model2">2) Alege modelul masinii:</label><br>
          <select v-model="selectedModel2">
            <option value="" selected>Alege modelul</option>
            <option v-for="(value, key) in selectedMarca2Models" :value="key" :key="key">{{ key }}</option>
          </select>

          <br><br>

          <label for="caroserie2">3) Alege tipul caroseriei masinii:</label><br>
          <select v-model="selectedCaroserie2">
            <option value="" selected>Alege tipul caroseriei</option>
            <option v-for="(value, key) in selectedModel2Caroserii" :value="key" :key="key">{{ key }}</option>
          </select>

          <br><br>

          <label for="motorizare2">4) Alege motorizarea masinii:</label><br>
          <select v-model="selectedMotorizare2">
            <option value="" selected>Alege motorizarea</option>
            <option v-for="(value, key) in selectedCaroserie2Motorizari" :value="key" :key="key">{{ key }}</option>
          </select>
        </form>
      </div>
    </div>
    <button class="button" @click="comparareButon"><b>Start Comparare</b></button>
    <div id="informatiiSelectate" class="afisare" v-if="showInfo">
      <div class="informatii-masina" id="informatii-masina-a">
        <img :src="carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].imagine" alt="Mașină">
        <ul>
          <li>Marca: {{ selectedMarca1 }}</li>
          <li>Model: {{ selectedModel1 }}</li>
          <li>Caroserie: {{ selectedCaroserie1 }}</li>
          <li>Motorizare: {{ selectedMotorizare1 }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.anFabricatie === 'A' ? 'green' : comparareRezultate.anFabricatie === 'B' ? 'red' : 'grey'}">Anii de fabricatie: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].an_fabricatie }}</li>
          <li>Numar de scaune: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].nrscaune }}</li>
          <li>Numar de usi: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].nrusi }}</li>
          <p style="color:#339966">Performanta</p>
          <li v-bind:style="{ backgroundColor: comparareRezultate.consumUrban === 'A' ? 'red' : comparareRezultate.consumUrban === 'B' ? 'green' : 'grey'}">Consumul urban(l/100km): {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].consum_urban }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.consumAutostrada === 'A' ? 'red' : comparareRezultate.consumAutostrada === 'B' ? 'green' : 'grey' }">Consumul pe autostrada(l/100km): {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].consum_autostrada }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.consumMixt === 'A' ? 'red' : comparareRezultate.consumMixt === 'B' ? 'green' : 'grey'}">Consum mixt(l/100km): {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].consum_mixt }}</li>
          <li>Tipul carburantului: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].carburant }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.acceleratie === 'A' ? 'red' : comparareRezultate.acceleratie === 'B' ? 'green' : 'grey'}">Acceleratie(0-100km/h)(secunde): {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].acceleratie }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.vitezaMaxima === 'A' ? 'green' : comparareRezultate.vitezaMaxima ==='B' ? 'red' : 'grey' }">Viteza maxima: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].viteza_maxima }}</li>
          <li>Standardul ecologic: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].euro }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.rapGrPut === 'A' ? 'red' : comparareRezultate.rapGrPut === 'B' ? 'green' : 'grey'}">Raport greutate/putere: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].rap_greutate_putere }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.rapGrCup === 'A' ? 'red' : comparareRezultate.rapGrCup === 'B' ? 'green' : 'grey'}">Raport greutate/cuplu: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].rap_greutate_cuplu }}</li>
          <p style="color:#339966">Motorul</p>
          <li v-bind:style="{ backgroundColor: comparareRezultate.Cilindree === 'A' ? 'green' : comparareRezultate.Cilindree === 'B' ? 'red' : 'grey'}">Cilindree: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].cilindree }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.Putere === 'A' ? 'green' : comparareRezultate.Putere === 'B' ? 'red' : 'grey'}">Putere: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].putere }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.Cuplu === 'A' ? 'green' : comparareRezultate.Cuplu === 'B' ? 'red' : 'grey'}">Cuplu: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].cuplu }}</li>
          <li>Codul Motor: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].cod_motor }}</li>
          <li>Configuratia motorului: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].configuratie }}</li>
          <li>Tipul de aspiratie: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].aspiratie }}</li>
          <li>Capacitate baie ulei: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].cap_ulei }}</li>
          <li>Cantitate lichid de racire: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].cap_lichid_racire }}</li>
          <p style="color:#339966">Volum si greutati</p>
          <li v-bind:style="{ backgroundColor: comparareRezultate.masaProprie === 'A' ? 'red' : comparareRezultate.masaProprie === 'B' ? 'green' : 'grey'}">Masa proprie: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].greutate }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.masaMaxima === 'A' ? 'green' : comparareRezultate.masaMaxima === 'B' ? 'red' : 'grey'}">Masa maxima autorizata: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].masa_maxima }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.volumPortbagaj === 'A' ? 'green' : comparareRezultate.volumPortbagaj === 'B' ? 'red' : 'grey'}">Volumul minim al portbagajului: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].volum_portbagaj }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.volumRezervor === 'A' ? 'green' : comparareRezultate.volumRezervor === 'B' ? 'red' : 'grey'}">Volumul rezervorului: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].volum_rezervor }}</li>
          <p style="color:#339966">Dimensiuni</p>
          <li>Lungime: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].lungime }}</li>
          <li>Latime: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].latime }}</li>
          <li>Inaltime: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].inaltime }}</li>
          <p style="color:#339966">Transmisie, franare si suspensie</p>
          <li>Tractiune: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].tractiune }}</li>
          <li>Tipul cutiei de viteze: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].tip_cutie_viteze }}</li>
          <li>Suspensie fata: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].suspensie_fata }}</li>
          <li>Suspensie spate: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].suspensie_spate }}</li>
          <li>Frane fata: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].frane_fata }}</li>
          <li>Frane spate: {{ carData[selectedMarca1][selectedModel1][selectedCaroserie1][selectedMotorizare1].frane_spate }}</li>
        </ul>
      </div>
      <div class="informatii-masina" id="informatii-masina-b">
        <img :src="carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].imagine" alt="Mașină">
        <ul>
          <li>Marca: {{ selectedMarca2 }}</li>
          <li>Model: {{ selectedModel2 }}</li>
          <li>Caroserie: {{ selectedCaroserie2 }}</li>
          <li>Motorizare: {{ selectedMotorizare2 }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.anFabricatie === 'B' ? 'green' : comparareRezultate.anFabricatie === 'A' ? 'red' : 'grey'}">Anii de fabricatie: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].an_fabricatie }}</li>
          <li>Numar de scaune: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].nrscaune }}</li>
          <li>Numar de usi: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].nrusi }}</li>
          <p style="color:#339966">Performanta</p>
          <li v-bind:style="{ backgroundColor: comparareRezultate.consumUrban === 'B' ? 'red' : comparareRezultate.consumUrban === 'A' ? 'green' : 'grey'}">Consumul urban(l/100km): {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].consum_urban }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.consumAutostrada === 'B' ? 'red' : comparareRezultate.consumAutostrada === 'A' ? 'green' : 'grey'}">Consumul pe autostrada(l/100km): {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].consum_autostrada }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.consumMixt === 'B' ? 'red' : comparareRezultate.consumMixt === 'A' ? 'green' : 'grey'}">Consum mixt(l/100km): {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].consum_mixt }}</li>
          <li>Tipul carburantului: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].carburant }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.acceleratie === 'B' ? 'red' : comparareRezultate.acceleratie === 'A' ? 'green' : 'grey'}">Acceleratie(0-100km/h)(secunde): {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].acceleratie }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.vitezaMaxima === 'B' ? 'green' : comparareRezultate.vitezaMaxima ==='A' ? 'red' : 'grey' }">Viteza maxima: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].viteza_maxima }}</li>
          <li>Standardul ecologic: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].euro }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.rapGrPut === 'B' ? 'red' : comparareRezultate.rapGrPut === 'A' ? 'green' : 'grey'}">Raport greutate/putere: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].rap_greutate_putere }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.rapGrCup === 'B' ? 'red' : comparareRezultate.rapGrCup === 'A' ? 'green' : 'grey'}">Raport greutate/cuplu: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].rap_greutate_cuplu }}</li>
          <p style="color:#339966">Motorul</p>
          <li v-bind:style="{ backgroundColor: comparareRezultate.Cilindree === 'B' ? 'green' : comparareRezultate.Cilindree === 'A' ? 'red' : 'grey'}">Cilindree: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].cilindree }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.Putere === 'B' ? 'green' : comparareRezultate.Putere === 'A' ? 'red' : 'grey'}">Putere: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].putere }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.Cuplu === 'B' ? 'green' : comparareRezultate.Cuplu === 'A' ? 'red' : 'grey'}">Cuplu: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].cuplu }}</li>
          <li>Codul Motor: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].cod_motor }}</li>
          <li>Configuratia motorului: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].configuratie }}</li>
          <li>Tipul de aspiratie: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].aspiratie }}</li>
          <li>Capacitate baie ulei: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].cap_ulei }}</li>
          <li>Cantitate lichid de racire: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].cap_lichid_racire }}</li>
          <p style="color:#339966">Volum si greutati</p>
          <li v-bind:style="{ backgroundColor: comparareRezultate.masaProprie === 'B' ? 'red' : comparareRezultate.masaProprie === 'A' ? 'green' : 'grey'}">Masa proprie: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].greutate }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.masaMaxima === 'B' ? 'green' : comparareRezultate.masaMaxima === 'A' ? 'red' : 'grey'}">Masa maxima autorizata: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].masa_maxima }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.volumPortbagaj === 'B' ? 'green' : comparareRezultate.volumPortbagaj === 'A' ? 'red' : 'grey'}">Volumul minim al portbagajului: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].volum_portbagaj }}</li>
          <li v-bind:style="{ backgroundColor: comparareRezultate.volumRezervor === 'B' ? 'green' : comparareRezultate.volumRezervor === 'A' ? 'red' : 'grey'}">Volumul rezervorului: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].volum_rezervor }}</li>
          <p style="color:#339966">Dimensiuni</p>
          <li>Lungime: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].lungime }}</li>
          <li>Latime: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].latime }}</li>
          <li>Inaltime: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].inaltime }}</li>
          <p style="color:#339966">Transmisie, franare si suspensie</p>
          <li>Tractiune: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].tractiune }}</li>
          <li>Tipul cutiei de viteze: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].tip_cutie_viteze }}</li>
          <li>Suspensie fata: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].suspensie_fata }}</li>
          <li>Suspensie spate: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].suspensie_spate }}</li>
          <li>Frane fata: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].frane_fata }}</li>
          <li>Frane spate: {{ carData[selectedMarca2][selectedModel2][selectedCaroserie2][selectedMotorizare2].frane_spate }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
  box-sizing: border-box;
}

.container {
  margin-left:25%;
  margin-right: 15%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.form-container {
  margin-top: 150px;
  display: flex;
  width: 100%;
  justify-content: center;
}

.form {
  padding: 30px;
  width: 400px;
  border: 2px solid #339966;
  border-radius: 20px;
  margin-right:20px;
  background-color: rgba(0,0,0,.7);
  Backdrop-filter:blur(7px);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: #fff;
}

li{
  margin-bottom: 5px;
  border-radius: 15px;
  list-style-type: none;
  width:70%;
  padding:3px;
}

select {
  margin-top: 10px;
  width:70%;
  height:30px;
  border-radius: 20px;
  border:2px solid #339966;
}

.button {
  height: 60px;
  width:400px;
  margin-top: 20px;
  border-radius: 20px;
  border: 2px solid #339966;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  background-color: #339966;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.29);
  transform: scale(1.05);
}

.afisare {
  color: #fff;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  animation: fadeIn 1s linear;
}

@keyframes fadeIn {
  0% {opacity:0;}
  50% {opacity: 5;}
}

.informatii-masina {
  width: 48%;
  float: left;
  margin-right: 2%;
  border: 2px solid #339966;
  border-radius: 20px;
  background-color: rgba(0,0,0,.7);
  Backdrop-filter:blur(7px);
}

img{
  display: block;
  border-radius: 20px;
  border: 2px solid #339966;
  width:50%;
  margin-top:15px;
  margin-left:25%;
}

.informatii-masina img {
  height: 150px;
  object-fit: cover;
}

@media (max-width: 800px) {
  .form-container {
    flex-direction: column;
    align-items: center;
    margin-top:50px;
    width:100%;
  }

  .afisare {
    flex-direction: column;
    align-items: center;
    width:100%;
  }

  .informatii-masina {
    width:100%;
    margin-right:0;
  }

  .form {
    width: 100%;
    max-width:400px;
    margin-bottom: 10px;
    text-align: center;
    margin-right:0;
    padding:20px;
  }

  .button {
    width: 100%;
    max-width:400px;
    margin-bottom:20px;
  }

  .container {
    margin-left: 2%;
    width:96%;
  }

  li{
    width:90%
  }
}

</style>