<template>
<a href="#" style="text-decoration: none;color: white">
  <h2>{{ topic.title }}</h2>
  <p>By {{ topic.author }}</p>
  <p>{{ topic.message }}</p>
</a>
</template>
<script>
export default {
  name: 'Post',
  props: {
    topic:{
      type:Object
    }
  }
}
</script>