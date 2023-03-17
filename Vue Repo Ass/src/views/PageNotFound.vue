<template>
  <h4>Sorry this page is not found</h4>
  <!-- <router-link  to="/">Back toHome</router-link> | -->
  <router-link  :to="{ name: 'home'}">Home</router-link> |


</template>

<script>
export default {
    name: "PageNotFound",
    props: {

    }

}
</script>

<style>

</style>