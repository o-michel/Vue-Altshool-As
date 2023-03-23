<template>
  <!-- <p>More details like discription should be display here</p> -->
  <Moredetails />
  <!-- <router-link  to="/about"> Nasted link</router-link> -->
  <!-- <router-link  :to="{ name: 'about'}">Home</router-link> | -->


</template>

<script>
// console.log(Moredetails);

import Moredetails from "../components/MoreDetails.vue";
export default {
    name:  "Moredetails",
    components:{
        Moredetails
    }

}
</script>

<style>

</style>