<template>
  <nav>
      <router-link  to="/">Home</router-link> 
      <router-link  to="/about"> My Portfolio</router-link>
      <!-- <router-link  to="/about"> Nasted link</router-link> -->
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    props: {
        // recievedData: Object
    }

}
</script>

<style scoped>

</style>