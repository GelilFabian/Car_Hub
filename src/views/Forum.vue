<script>
import {userData} from "@/userInfo.js";
import Post from "@/components/Post.vue"
export default {
  name: 'forum',
  components: {Post},
  data() {
    return {
      searchInput: '',
      searchResultIndex: -1,
      showAdd: false,
      showModal: false,
      selectedTopicIndex: -1,
      comment: '',
      newTopic: {
        title: '',
        message: ''
      },
      topics: [],
      selectedUser: null,
      showUserModal: false,
      user: userData
    };
  },
  mounted() {
    this.topics = this.loadTopicsFromLocalStorage();
  },
  methods: {
    clearInput() {
      this.searchInput = '';
    },
    toggleAdd() {
      this.showAdd = !this.showAdd;
    },
    openModal(index) {
      this.selectedTopicIndex = index;
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
      this.selectedTopicIndex = -1;
      this.comment = '';
    },

    postComment() {
      if (this.comment.trim() !== '') {
        if (!this.topics[this.selectedTopicIndex].comments) {
          this.topics[this.selectedTopicIndex].comments = [];
        }
        this.topics[this.selectedTopicIndex].comments.push({
          author: this.getUsername(),
          content: this.comment,
          image: this.getUserImage()
        });
        this.saveTopicsToLocalStorage();
        this.comment = '';
      }
    },
    postTopic() {
      if (this.newTopic.title && this.newTopic.message) {
        this.topics.push({
          title: this.newTopic.title,
          message: this.newTopic.message,
          author: this.getUsername()
        });

        this.saveTopicsToLocalStorage();
        this.newTopic.title = '';
        this.newTopic.message = '';
        this.showAdd = false;
      }
    },
    saveTopicsToLocalStorage() {
      localStorage.setItem('topics', JSON.stringify(this.topics));
    },
    loadTopicsFromLocalStorage() {
      const savedTopics = localStorage.getItem('topics');
      if (savedTopics) {
        return JSON.parse(savedTopics);
      }
      return [];
    },
    getUsername() {
      return localStorage.getItem('username') || 'User';
    },
    getUserImage() {
      return localStorage.getItem('image') ;
    },
    searchTopics() {
      const searchTerm = this.searchInput.toLowerCase();
      let foundTopic = false;

      for (let i = 0; i < this.topics.length; i++) {
        const title = this.topics[i].title.toLowerCase();
        if (title.includes(searchTerm)) {
          foundTopic = true;
          const element = document.getElementById(`card-${i}`);
          if (element) {
            element.scrollIntoView({behavior: 'smooth', block: 'start'});
            return;
          }
        }
      }

      if (!foundTopic) {
        alert('Nu a fost găsită nicio potrivire');
      }
    },
  }
};
</script>
<template>
  <div class="main">
    <div class="row" style="margin-top:30px">
        <div class="box">
          <form @submit.prevent="searchTopics">
            <input
                type="text"
                class="input"
                v-model="searchInput"
                @mouseleave="clearInput"
                @blur="clearInput"
            />
          </form>
          <i class="fa fa-search"></i>
        </div>

        <div v-for="(topic, index) in topics" :key="index" :id="'card-' + index" class="card" @click="openModal(index)">
          <Post
          :topic="topic"
          ></Post>
        </div>

    </div>
  </div>

  <div class="bottom-button">
    <button class="button" @click="toggleAdd"><i class="fa fa-plus"></i></button>
  </div>

  <div class="modal-overlay" v-if="showAdd">
    <div class="modal">
      <span class="close" @click="toggleAdd">&times;</span>
      <div class="modal-content">
        <h2>Adauga un nou topic</h2>
        <form @submit.prevent="postTopic">
          <label>Titlu Topic</label>
          <input type="text" class="topicInput" placeholder="titlu.." v-model="newTopic.title" required/>
          <label>Subiect Topic</label>
          <textarea placeholder="Introdu mesajul tau" rows="10" v-model="newTopic.message" required></textarea>
          <input type="submit" value="Posteaza">
        </form>
      </div>
    </div>
  </div>

  <div class="modal-overlay1" style="overflow-y: auto;" v-if="showModal">
    <div class="modal-topic">
      <span class="close" @click="closeModal">×</span>
      <div class="modal-content" >
        <h2>{{ topics[selectedTopicIndex].title }}</h2>
        <p>By <router-link :to="{ name: 'profilUtilizator', params: { username: topics[selectedTopicIndex].author } }"><strong>{{ topics[selectedTopicIndex].author }}</strong></router-link></p>
        <p>{{ topics[selectedTopicIndex].message }}</p>
        <textarea v-model="comment" rows="10" style="width:100%" placeholder="Introdu un comentariu"></textarea><br>
        <input type="submit" value="Posteaza comentariul" @click="postComment" style="width:200px;">
        <div v-if="topics[selectedTopicIndex].comments && topics[selectedTopicIndex].comments.length > 0">
          <h3>Comentarii:</h3>
          <div v-for="(comment, commentIndex) in topics[selectedTopicIndex].comments" :key="commentIndex">
            <div style="display: flex; align-items: center;">
              <img :src="comment.image" alt="Avatar" style="width: 30px; height: 30px; border-radius: 50%;margin-right: 5px;">
              <p><router-link :to="{ name: 'profilUtilizator', params: { username: comment.author } }"><strong>{{ comment.author }}</strong></router-link> {{ comment.content }}</p>
            </div>
          </div>
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
  width: 60vw;
  margin:0 auto 150px auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
}

.card {
  background-color: rgba(0, 0, 0, .8);
  Backdrop-filter:blur(7px);
  color: #fff;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  border: 3px solid orange;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.29);
  transform: scale(1.05);
}

.box {
  position: relative;
  width: 80px;
  margin-left: 0;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, .8);
  color: #fff;
}

.input {
  padding: 10px;
  width: 80px;
  height: 80px;
  background: none;
  border: 3px solid orange;
  border-radius: 50px;
  box-sizing: border-box;
  font-size: 26px;
  color: orange;
  outline: none;
  transition: .5s;
}

.box:hover input {
  width: 60vw;
  max-width: 59vw;
  background: #3b3640;
  border-radius: 20px;
}

.box i {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translate(-50%, -50%);
  font-size: 26px;
  color: orange;
  transition: .2s;
}

.box:hover i {
  opacity: 0;
  z-index: -1;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.bottom-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
  background-color: rgba(0, 0, 0, .8);
  Backdrop-filter:blur(3px);
  color: #fff;
  border-radius: 50px;
}

.button {
  width: 80px;
  height: 80px;
  background: none;
  border: 4px solid orange;
  border-radius: 50px;
  box-sizing: border-box;
  font-size: 26px;
  color: orange;
  outline: none;
  cursor: pointer;
  transition: .5s;
  margin: 0;
}

.button:hover {
  width: 80px;
  background: #3b3640;
  border-radius: 20px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.5s linear;

}

.modal-overlay1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: start;
  animation: fadeIn 0.5s linear;
}

@keyframes fadeIn {
  0% {opacity:0;}
  50% {opacity: 5;}
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  max-width: 80%;
  width: 400px;
  border: 4px solid orange;
}

.modal-topic {
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  max-width: 80%;
  width: 1000px;
  border: 4px solid orange;
  margin-top:20px;
  margin-bottom:20px;
}

.modal-content {
  margin-top: 20px;
}

a{
  text-decoration: none;
  color:black;
}

a:hover{
  color:orange
}

.close {
  position: relative;
  cursor: pointer;
  font-size: 50px;
}

.topicInput {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid orange;
  border-radius: 10px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: orange;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: rgba(204, 135, 9, 0.99);
}

textarea {
  margin: 8px 0;
  border: 2px solid orange;
  border-radius: 10px;
  width: 100%;
}

@media (max-width: 800px) {
  .main {
    margin:0 auto 100px auto;
    width: 100%;
  }

  .box:hover input {
    width: 96vw;
    max-width: 95.5vw;
  }

  .modal-topic {
    padding:10px;
    max-width:92%;
  }

  .bottom-button {
    bottom: 110px;
  }
}
</style>