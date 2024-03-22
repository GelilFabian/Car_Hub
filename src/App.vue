<script>
import Sidenav from "@/components/Sidenav.vue";
import Background from "@/components/Background.vue";
export default {
  components: {Sidenav,Background},
}
</script>

<template>

  <Sidenav v-if="$route.path !== '/loginPage' && $route.path !=='/'" />
  <Background />
  <div class="router-view-container">
    <RouterView />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
* {
  font-family: "Poppins", sans-serif;
}
.router-view-container {
  position: relative;
}
</style>
