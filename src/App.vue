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
* {
  font-family: "Poppins", sans-serif;
}
.router-view-container {
  position: relative;
}
</style>
