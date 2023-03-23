<template>
  <div>
    <!-- <h1>Always render</h1> -->
    <Navigation />
    <!-- <nav>
      <router-link  to="/">Home</router-link> |
      <router-link  to="/about"> My Portfolio</router-link>
    </nav> -->
    <!-- <Portfolio :title="recievedData"  /> -->
  </div>
  <router-view   />
  <!-- <router-view   :title="recievedData" /> -->
  <!-- <router-view @repo-clicked="clickedRepoData"  :title="recievedData" /> -->
</template>

<script  >
  // import { bus } from './main';

import Navigation from "./components/Navigation.vue";
// import Portfolio from "./components/RepoData.vue";
 


export default {
  name: 'App',
  components: {
    Navigation
    // Portfolio
    // router-link

  },
  
  data() {
    return {
      // recievedData: {}
    }
  },
  methods: {
    // console.log(recievedData);
    
    // clickedRepoData() {
      
      //   // console.log( id);
      // },
    
    
    // async getUser () {
      //   const fetchData = await fetch('https://api.github.com/users/o-michel/repos');
    //   const data = await fetchData.json()
    
    // console.log(data);
    // }
  },
  created() {
    // bus.$on('repo-clicked', (data) =>{
      // console.log(data);
    // })
    
  },


  // async mounted() {
  //   const res = await fetch('https://api.github.com/users/o-michel/repos');
  //   const data = await res.json()
  //   this.recievedData = await data;
  
  

    // console.log(data[0].full_name);
    // console.log(data[0].full_name);
    // console.log('mounted!')
    
    // async load =data.map((eachData)=>{
      // console.log(eachData.full_name)
      // this.recievedData = await eachData
      // console.log(this.displayedData);
      // })
      // setInterval(() => {
        // console.log(this.displayedData);
        //   // console.log(fetchData);
        // }, 1000);
      // }
      
      
    }
  </script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

nav {
  padding: 30px;
}

nav a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
  padding: 1rem;
  background-color: rgba(240, 239, 239, 0.507);
  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12);
}

nav a:hover{
  background-color: rgba(232, 240, 225, 0.89);

}

nav a.router-link-exact-active {
  color: #426cb9;
  /* color: #42b983; */
}
</style>
