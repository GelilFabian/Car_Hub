<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <h2>{{ modalTitle }}</h2>
      <p>{{ modalMessage }}</p>
      <button @click="closeModal">Închide</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      modalTitle: '',
      modalMessage: ''
    };
  },
  methods: {
    openModal(title, message) {
      this.modalTitle = title;
      this.modalMessage = message;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:20;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
}

button {
  border: none;
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
  background-color:#ff0000;
  color:white;
  height: 35px;
  border-radius: 20px;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .4), 0 -1px 1px #fff, 0 1px 0 #fff;

}
button:hover{
  background-color: #5b0808;
  color:white;
}
</style>
