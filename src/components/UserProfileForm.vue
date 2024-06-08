<script>
export default {
  name: 'UserProfileForm',
  props: ['user', 'editing'],
  methods: {
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.user.profilePicture = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
  }
}
</script>
<template>
  <form>
    <input type="file" @change="handleImageUpload" class="hidden" ref="fileInput" accept="image/*" />
    <div class="image-section">
      <img v-if="user.profilePicture" :src="user.profilePicture" alt="Profile Picture" class="profile-picture">
      <img v-else src="/src/assets/user.png" class="default-picture" alt="Default ProfilePicture">
      <button @click.prevent="openFileInput" class="button" :style="{ display: editing ? 'block' : 'none' }">Încarcă imagine</button>
      <h1>{{ user.username }}</h1>
      <input v-model="user.username" type="text" :style="{ display: editing ? 'block' : 'none' }">
      <hr>
    </div>
    <div class="specs-section">
      <h1>Detalii Masina</h1>
      <label for="marca">Marca masina:</label>
      <p>{{user.carDetails.marca}}</p>
      <input v-model="user.carDetails.marca" type="text" name="marca" :style="{ display: editing ? 'block' : 'none' }">
      <label for="model">Model masina:</label>
      <p>{{user.carDetails.model}}</p>
      <input v-model="user.carDetails.model" type="text" name="model" :style="{ display: editing ? 'block' : 'none' }">
      <label for="an">Anul fabricatiei:</label>
      <p>{{user.carDetails.an_fabricatie}}</p>
      <input v-model="user.carDetails.an_fabricatie" type="text" name="an" :style="{ display: editing ? 'block' : 'none' }">
      <label for="motor">Motorizare:</label>
      <p>{{user.carDetails.motorizare}}</p>
      <input v-model="user.carDetails.motorizare" type="text" name="motor" :style="{ display: editing ? 'block' : 'none' }">
      <label for="putere">Putere:</label>
      <p>{{user.carDetails.putere}}</p>
      <input v-model="user.carDetails.putere" type="text" name="putere" :style="{ display: editing ? 'block' : 'none' }">
      <h1>Descriere</h1>
      <textarea v-model="user.description" rows="10" cols="50" :style="{ display: editing ? 'block' : 'none' }"></textarea>
      <p class="description">{{user.description}}</p>
      <hr>
    </div>
  </form>
</template>
<style scoped>
form{
  text-align: center;
}
.image-section h1,p, .specs-section h1,p{
  margin:15px 0;
}

input[type=text] {
  display:none;
  border-radius:20px;
  padding:5px;
  text-align: center;
  width:30%;
  margin:0 auto;
}
.hidden {
  display: none;
  width:30%;
  margin:0 auto;
}
.profile-picture {
  width: 200px;
  height: 200px;
  margin-top: 30px;
  border-radius: 50%;
}
.default-picture {
  width: 300px;
  margin-top: 30px;
}
textarea {
  border-radius:20px;
  padding:5px;
  animation: fadeIn 1s linear;
  width:40%;
  margin:0 auto;
}
input{
  animation: fadeIn 1s linear;
}
.button {
  height: 60px;
  border-radius: 20px;
  border: 2px solid #00004d;
  transition: all 0.3s ease-in-out;
  width:30%;
  margin:0 auto;
}
.button:hover {
  background-color: #00004d;
  color:white;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.29);
  transform: scale(1.05);
}
label {
  font-size: 20px;
}
p{
  color:dodgerblue;
  font-size:20px;
}
h1{
  font-size: 40px;
}

.description {
  word-wrap: break-word;
}
@keyframes fadeIn {
  0% {opacity:0;}
  50% {opacity: 5;}
}
@media (max-width:800px){
  .button{
    width:50%;
    margin-left:25%;
  }
  h1{
    font-size:25px;
  }
  p{
    font-size: 17px;
  }
  textarea {
    max-width:280px;
  }
  hr {
    width:100%;
  }
  .image-section, .specs-section{
    margin-left: 0;
  }
}
</style>