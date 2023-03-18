<template>
    <div class="hello">
        
        <h1  class="repo_name" v-for="eachrepo in recievedData" :key="eachrepo.id" > <div @click="getEachRepo(eachrepo.id)"  class="toBeClicked">  {{ eachrepo.full_name }} </div> </h1>

              

  
      <!-- Small info and pagination -->

    </div>
  </template>
  
  <script>
  import { bus } from '../main';

//   console.log(eachrepo);


  export default {
    name: 'MyPortfolio',
    props: {
        recievedData: Object
    },
   
  data() {
    return {
        // const model : eachrepo 
        // console.log({eachrepo});
        // recievedData1: recievedData
    }
},
methods: {
    getEachRepo(id) {
        //    const fig = await eachrepo.full_name
        console.log(id);
        
        // console.log(this.recievedData1);
        //   this.$emit('repo-clicked', id)
        bus.$emit('repo-clicked', id)
    }


    // const clicked = console.log(eachrepo);
    //    console.log(eachrepo);
    
    

    // async getUser () {
    //   const fetchData = await fetch('https://api.github.com/users/o-michel/repos');
    //   const data = await fetchData.json()

    // console.log(data);
    // }
  },

  }
  </script>
  
  <style scoped>
  .hello{
    background-color: #eee;
    padding: 1rem;
    margin: 1rem;
    border: 1rem;
    
  }

  .toBeClicked{
    background-color: red;
    
  }

  h1{
    background-color: rgb(217, 240, 183);
    padding: 1rem;
    margin: 1rem;
    border: 1rem;
  }
 
  </style>
  