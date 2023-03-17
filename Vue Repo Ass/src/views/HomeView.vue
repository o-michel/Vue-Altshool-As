<template>
  <div class="home">
    <!-- My image -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- little intro -->
    <HelloWorld />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
