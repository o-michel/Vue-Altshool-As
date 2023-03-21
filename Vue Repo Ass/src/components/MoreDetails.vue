<template>
    <div class="container" >
        <div class="dis" >
                <!-- {{ eachrepo.description }}  -->
        </div>
        <p >NASTED ROUTE</p>
        <p >{{ title[0].description}} </p>
        <router-link  :to="{ name: 'home'}">Home</router-link> |


    </div>
</template>

<script>
// console.log({title});
export default {
    name: "More-details",
    props: { 
    title: {
      type: Object,
    }
  },
    // props: {
    //     title:  {
    //         type: boolean
    //     }
    // }


}
</script>

<style>

</style>