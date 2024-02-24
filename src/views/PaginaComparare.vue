<script>
import { bazaDateMasini } from '/src/carData.js';

export default {
  name:'paginaComparare',
  data(){
    return {
      carData: bazaDateMasini,
      cars: {
        carA: {
          selectedMarca: '',
          selectedModel: '',
          selectedCaroserie: '',
          selectedMotorizare: '',
        },
        carB: {
          selectedMarca: '',
          selectedModel: '',
          selectedCaroserie: '',
          selectedMotorizare: '',
        },
      },

      showInfo: false,
      comparareRezultate: {},
      allProperties: {},
      keys : ['Anii de fabricatie', 'Consumul urban (l/100km)', 'Consumul pe autostrada (l/100km)', 'Consumul mixt (l/100km)', 'Acceleratie (0-100km/h) (secunde)', 'Viteza maxima (km/h)', 'Standard ecologic', 'Raport putere/greutate (CP/tona)', 'Raport cuplu/greutate (Nm/tona)', 'Capacitate cilindrica(cc)', 'Putere(hp)', 'Cuplu(Nm)', 'Masa proprie(kg)', 'Masa maxima autorizata(kg)', 'Volumul minim al portbagajului(l)', 'Volumul rezervorului(l)'],
      isHigherBetter: {
        'Anii de fabricatie': true,
        'Consumul urban (l/100km)': false,
        'Consumul pe autostrada (l/100km)': false,
        'Consumul mixt (l/100km)': false,
        'Acceleratie (0-100km/h) (secunde)': false,
        'Viteza maxima (km/h)': true,
        'Standard ecologic': true,
        'Raport putere/greutate (CP/tona)': true,
        'Raport cuplu/greutate (Nm/tona)': true,
        'Capacitate cilindrica(cc)': true,
        'Putere(hp)': true,
        'Cuplu(Nm)': true,
        'Masa proprie(kg)': false,
        'Masa maxima autorizata(kg)': true,
        'Volumul minim al portbagajului(l)': true,
        'Volumul rezervorului(l)': true,
      },
    }
  },

  computed: {
    selectedModels() {
      return {
        carA: this.carData[this.cars.carA.selectedMarca] || {},
        carB: this.carData[this.cars.carB.selectedMarca] || {},
      };
    },
    selectedCaroserii() {
      return {
        carA: this.selectedModels.carA[this.cars.carA.selectedModel] || {},
        carB: this.selectedModels.carB[this.cars.carB.selectedModel] || {},
      };
    },
    selectedMotorizari() {
      return {
        carA: this.selectedCaroserii.carA[this.cars.carA.selectedCaroserie] || {},
        carB: this.selectedCaroserii.carB[this.cars.carB.selectedCaroserie] || {},
      };
    },
  },

  methods: {
    compareValues(value1, value2, isHigherBetter) {
      if (isHigherBetter) {
        return { winner: value1 > value2 ? 'carA' : (value1 < value2 ? 'carB' : 'TIE'), isHigherBetter };
      } else {
        return { winner: value1 < value2 ? 'carA' : (value1 > value2 ? 'carB' : 'TIE'), isHigherBetter };
      }
    },

    comparareButon() {
      let carA = this.cars.carA;
      let carB = this.cars.carB;
      if (carA.selectedMarca && carA.selectedModel && carA.selectedCaroserie && carA.selectedMotorizare && carB.selectedMarca && carB.selectedModel && carB.selectedCaroserie && carB.selectedMotorizare) {
        this.showInfo = true;
        let allKeys = Object.keys(this.carData[carA.selectedMarca][carA.selectedModel][carA.selectedCaroserie][carA.selectedMotorizare]);
        this.comparareRezultate = {};
        this.allProperties = {};
        for (let key of allKeys) {
          if (this.keys.includes(key)) {
            this.comparareRezultate[key] = this.compareValues(this.carData[carA.selectedMarca][carA.selectedModel][carA.selectedCaroserie][carA.selectedMotorizare][key], this.carData[carB.selectedMarca][carB.selectedModel][carB.selectedCaroserie][carB.selectedMotorizare][key], this.isHigherBetter[key]);
          }
          this.allProperties[key] = this.carData[carA.selectedMarca][carA.selectedModel][carA.selectedCaroserie][carA.selectedMotorizare][key];
        }
      }
    }
  },
}
</script>
<template>
  <div class="container">
    <div class="form-container">
      <div v-for="(car, carKey) in cars" :key="carKey" class="form">
        <h2>{{ carKey }}</h2>
        <form :action="'/' + carKey" method="post">
          <label :for="'marca' + carKey">1) Alege marca masinii:</label><br>
          <select v-model="car.selectedMarca">
            <option value="" selected>Alege marca</option>
            <option v-for="(value, key) in carData" :value="key" :key="key">{{ key }}</option>
          </select>

          <br><br>

          <label :for="'model' + carKey">2) Alege modelul masinii:</label><br>
          <select v-model="car.selectedModel">
            <option value="" selected>Alege modelul</option>
            <option v-for="(value, key) in selectedModels[carKey]" :value="key" :key="key">{{ key }}</option>
          </select>

          <br><br>

          <label :for="'caroserie' + carKey">3) Alege tipul caroseriei masinii:</label><br>
          <select v-model="car.selectedCaroserie">
            <option value="" selected>Alege tipul caroseriei</option>
            <option v-for="(value, key) in selectedCaroserii[carKey]" :value="key" :key="key">{{ key }}</option>
          </select>

          <br><br>

          <label :for="'motorizare' + carKey">4) Alege motorizarea masinii:</label><br>
          <select v-model="car.selectedMotorizare">
            <option value="" selected>Alege motorizarea</option>
            <option v-for="(value, key) in selectedMotorizari[carKey]" :value="key" :key="key">{{ key }}</option>
          </select>
        </form>
      </div>
    </div>

    <button class="button" @click="comparareButon"><b>Start Comparare</b></button>

    <div class="afisare" v-if="showInfo">
      <table class="imagesTable">
        <tr>
          <td><img :src="carData[this.cars.carA.selectedMarca][this.cars.carA.selectedModel][this.cars.carA.selectedCaroserie][this.cars.carA.selectedMotorizare].imagine" alt="Mașină"></td>
          <td class="empty"></td>
          <td><img :src="carData[this.cars.carB.selectedMarca][this.cars.carB.selectedModel][this.cars.carB.selectedCaroserie][this.cars.carB.selectedMotorizare].imagine" alt="Mașină"></td>
        </tr>
      </table>
      <table class="dataTable">
        <tr>
          <td>
            <p>{{this.cars.carA.selectedMarca}}</p>
            <p>{{this.cars.carA.selectedModel}}</p>
            <p>{{this.cars.carA.selectedCaroserie}}</p>
            <p>{{this.cars.carA.selectedMotorizare}}</p>
          </td>
          <td>
          </td>
          <td>
            <p>{{this.cars.carB.selectedMarca}}</p>
            <p>{{this.cars.carB.selectedModel}}</p>
            <p>{{this.cars.carB.selectedCaroserie}}</p>
            <p>{{this.cars.carB.selectedMotorizare}}</p>
          </td>
        </tr>
        <tr v-for="key in Object.keys(carData[this.cars.carA.selectedMarca][this.cars.carA.selectedModel][this.cars.carA.selectedCaroserie][this.cars.carA.selectedMotorizare]).filter(key => key !== 'imagine')">
          <td v-bind:style="{ backgroundColor: keys.includes(key) ? (comparareRezultate[key] ? (comparareRezultate[key].winner === 'carA' ? 'green' : comparareRezultate[key].winner === 'carB' ? 'red' : 'grey') : '') : '' }">
            <span>{{ carData[this.cars.carA.selectedMarca][this.cars.carA.selectedModel][this.cars.carA.selectedCaroserie][this.cars.carA.selectedMotorizare][key] }}</span>
          </td>
          <td>
            <span>{{ key }}</span>
          </td>
          <td v-bind:style="{ backgroundColor: keys.includes(key) ? (comparareRezultate[key] ? (comparareRezultate[key].winner === 'carB' ? 'green' : comparareRezultate[key].winner === 'carA' ? 'red' : 'grey') : '') : '' }">
            <span>{{ carData[this.cars.carB.selectedMarca][this.cars.carB.selectedModel][this.cars.carB.selectedCaroserie][this.cars.carB.selectedMotorizare][key] }}</span>
          </td>
        </tr>
      </table>
    </div>

  </div>
</template>

<style scoped>
*{
  box-sizing: border-box;
}

.container {
  margin-left:20%;
  margin-right: 10%;
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
  animation: fadeIn 1s linear;
  width: 100%;
  flex-wrap: wrap;
  background-color: rgba(0,0,0,.7);
  Backdrop-filter:blur(7px);
  border: 2px solid #339966;
  border-radius: 20px;
}

h1{
  margin-top:80px;
  color: #339966;
}

img{
  display: block;
  margin: auto;
  border-radius: 20px;
  border: 2px solid #339966;
  width:100%;
  height: 100%;
}

.imagesTable, .dataTable{
  width:100%;
  padding:20px 20px 0 20px;
}

.imagesTable .empty {
  width:20%;
}

.imagesTable td{
  width:40%;
}

.dataTable td {
  width:33.33%;
  border-radius: 15px;
  height:35px;
  text-align: center;
}

@keyframes fadeIn {
  0% {opacity:0;}
  50% {opacity: 5;}
}

@media (max-width: 800px) {
  .container {
    margin-left: 2%;
    width:96%;
  }

  .form-container {
    flex-direction: column;
    align-items: center;
    margin-top:50px;
    width:100%;
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

  .afisare {
    width: 100%;
    margin-bottom: 10px;
  }

  h1, p, span{
    font-size: 0.9em;
  }

  .imagesTable, .dataTable{
    padding:3px;
  }

  img{
    margin-top:20px;
    width:180px;
    height:90px;
  }
}
</style>