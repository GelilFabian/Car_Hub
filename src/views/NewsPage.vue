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
      <button @click="sortBy('asc')">Alfabetic crescator</button>
      <button @click="sortBy('desc')">Alfabetic descrescator</button>
      <button @click="sortByDate('newest')">Cele mai Noi</button>
      <button @click="sortByDate('oldest')">Cele mai Vechi</button>
    </div>
    <div class="row">
      <div class="column">
        <div v-for="(news, index) in sortedNewsData" :key="index" class="card">
          <News
          :news="news"
          ></News>
        </div>
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
  width: 80%;
  margin-left: 15%;
  margin-top:30px;
  display: inline-block;
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
  margin-top: 20px;
  margin-left: 150px;
  margin-bottom: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius:20px;
  border: 3px solid #80002a;
  max-width: 1000px;
}

button {
  height: 40px;
  width:200px;
  border-radius: 20px;
  border: 2px solid #80002a;
  margin-right:5px;
  margin-bottom:10px;
  transition: all 0.3s ease-in-out;
}

.filter-bar{
  margin-left:250px;
  background-color: rgba(0,0,0,.8);
  Backdrop-filter:blur(7px);
  border-radius:20px;
  border: 3px solid #80002a;
  width:850px;
  text-align:center;
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
    margin-top:0;
    margin-left:0;
    width:98%;
  }
  button {
    width:160px;
    margin-bottom:10px;
  }
  .main{
    margin-left:2%;
    width:96%;
    margin-top:20px;
  }
  .card{
    margin-left:0;
  }
}
</style>