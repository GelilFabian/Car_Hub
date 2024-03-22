<script>
export default {
  name: 'News',
  data(){
    return{
      expandedCardIndex: false,
    }
  },
  props: {
    news:{
      type:Object
    }
  },
  methods:{
    toggleCard() {
      this.expandedCardIndex=!this.expandedCardIndex
      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs.image.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    },
  }
}
</script>

<template>
  <img :src="news.image" ref="image" alt="News Image" class="news-image" />
  <h2>{{ news.title }}</h2>
  <h5>{{ news.date }}</h5>
  <div v-show="!expandedCardIndex">
    <p>{{ news.shortContent }}</p>
  </div>
  <div v-if="expandedCardIndex" class="expanded-content slide-down">
    <pre class="formatted-text">{{ news.longContent }}</pre>
  </div>
  <button v-show="!expandedCardIndex" @click="toggleCard()">Afiseaza mai mult</button>
  <button v-show="expandedCardIndex" @click="toggleCard()">Ascunde</button>
</template>

<style scoped>
.formatted-text {
  white-space: pre-wrap;
  word-wrap: break-word;
}
p {
  font-size: 17px;
}
pre {
  font-size: 17px;
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
button:hover{
  background-color: #80002a;
  color:white;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.29);
  transform: scale(1.05);
}
img {
  background-color: #aaa;
  width: 70%;
}

@media (max-width:800px){
  button {
    width:195px;
    margin-bottom:5px;
  }
  img{
    width:99%;
  }
  p{
    font-size:15px;
  }
  h5{
    font-size: 20px;
  }
  h2{
    font-size:25px;
  }
}
</style>