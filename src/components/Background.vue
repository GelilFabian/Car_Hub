<script>
export default {
  name:"Background",
  methods: {
    getPageClass() {
      const path = this.$route.path;
      const pageClasses = {
        '/loginPage': 'page5Image',
        '/newsPage': 'page1Image',
        '/paginaComparare': 'page3Image',
        '/forum': 'page4Image'
      };

      if (path.startsWith('/profilUtilizator')) {
        return 'page2Image';
      } else {
        return pageClasses[path] || '';
      }
    }

  }
}

</script>
<template>
  <div class="background-image" :class="getPageClass()">
  </div>
</template>
<style scoped>
.background-image{
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: fixed;
  width:100%;
  height:100%;
}

.page1Image {
  background-image: url('/src/assets/stelvio.jpg');
}

.page2Image {
  background-image: url('/src/assets/garage.jpg');
  background-position: right bottom;
}

.page3Image {
  background-image: url('/src/assets/ferari.jpg');
  background-position: center;
}

.page4Image {
  background-image: url('/src/assets/meet.jpg');
  background-position: right bottom;
}

.page5Image {
  background-image: url("/src/assets/alfa.jpg");
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 800px) {
  .page1Image {
    background-position: 60% 50%;
  }
  .page2Image {
    background-position: 65% 50%;
  }
  .page3Image {
    background-position: 75% 50%;
  }
  .page5Image {
    background-position: 78% 50%;
  }
}
</style>