<template>
  <p>Hi I am the data only for Portfolio</p>
  <!-- <h1  class="repo_name" v-for="eachrepo in recievedData" :key="eachrepo.id" > <div @click="getEachRepo(eachrepo.id)"  class="toBeClicked">  {{ eachrepo.full_name }} </div> </h1> -->

  <!-- <h1  class="repo_name" v-for="eachrepo in recievedData" :key="eachrepo.id" > <div @click="getEachRepo(eachrepo.id)"  class="toBeClicked">  {{ eachrepo.full_name }} </div> </h1> -->

  <!-- <h1 v-for="eachrepo in recievedData" :key="eachrepo.id" > {{ eachrepo.full_name }}</h1> -->

</template>

<script>

export default {
    name: 'RepoData',
    props: {
    // title: {
    //   type: Object,
    // }
  },
    methods: {
    // console.log(this.recievedData);
    }

}
</script>

<style>

</style>