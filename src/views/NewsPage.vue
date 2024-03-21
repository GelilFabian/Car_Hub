<script>
import {newsData} from "@/newsData.js";
import News from "@/components/News.vue"
export default {
  name:'newsPage',
  components:{News},
  data(){
    return{
      newsData: newsData,
      sortType: null,
    };
  },
  computed: {
    sortedNewsData() {
      if (this.sortType === 'asc') {
        return this.newsData.slice().sort((a, b) => a.title.localeCompare(b.title));
      } else if (this.sortType === 'desc') {
        return this.newsData.slice().sort((a, b) => b.title.localeCompare(a.title));
      } else if (this.sortType === 'newest') {
        return this.newsData.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (this.sortType === 'oldest') {
        return this.newsData.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
      } else {
        return this.newsData;
      }
    },
  },
  methods: {
    sortBy(type) {
      this.sortType = type;
    },
    sortByDate(type) {
      this.sortType = type;
      if (type === 'newest') {
        this.newsData.sort((a, b) => this.compareDates(b.date, a.date));
      } else if (type === 'oldest') {
        this.newsData.sort((a, b) => this.compareDates(a.date, b.date));
      }
    },
    compareDates(dateStringA, dateStringB) {
      const dateA = this.parseDate(dateStringA);
      const dateB = this.parseDate(dateStringB);
      return dateA - dateB;
    },

    parseDate(dateString) {
      const [day, month, year] = dateString.split('.');
      return new Date(year, month - 1, day);
    },
  },
}
</script>

<template>
  <div class="main">
    <div class="filter-bar">
      <p style="color:white">Sortati in functie de:</p>
      <div class="button-area">
        <button @click="sortBy('asc')">Alfabetic crescator</button>
        <button @click="sortBy('desc')">Alfabetic descrescator</button>
        <button @click="sortByDate('newest')">Cele mai Noi</button>
        <button @click="sortByDate('oldest')">Cele mai Vechi</button>
      </div>
    </div>
    <div class="row">
        <div v-for="(news, index) in sortedNewsData" :key="index" class="card">
          <News
          :news="news"
          ></News>
        </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.main {
  font-size: 28px;
  display: inline-block;
  width:100%;
  margin: 30px auto 100px auto;
}

img {
  background-color: #aaa;
  width: 70%;
}

.card {
  background-color: rgba(0,0,0,.8);
  Backdrop-filter:blur(7px);
  color: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius:20px;
  border: 3px solid #80002a;
  max-width: 1200px;
  width:80%;
  margin:20px auto 30px auto;
}

button {
  height: 50px;
  width:24%;
  border-radius: 15px;
  border: 2px solid #80002a;
  margin-bottom:10px;
  transition: all 0.3s ease-in-out;
}

.filter-bar{
  background-color: rgba(0,0,0,.8);
  Backdrop-filter:blur(7px);
  border-radius:20px;
  border: 3px solid #80002a;
  text-align:center;
  width:80%;
  margin:0 auto;
  max-width: 1200px;
}

.button-area {
  width:98%;
  margin:0 1%;
  display:flex;
  justify-content: space-between
}

button:hover{
  background-color: #80002a;
  color:white;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.29);
  transform: scale(1.05);
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media (max-width:800px){
  .filter-bar{
    width:100%;
  }
  button {
    width:45%;
    margin:0 2.5% 10px 2.5%;
  }
  .main{
    padding:15px;
    margin-top:10px;
    margin-bottom:70px;
  }
  .card{
    width:100%;
  }
  .button-area{
    display:inline-block;
  }
}
</style>