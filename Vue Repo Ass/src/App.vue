<template>
  <div>
    <h1>Always render</h1>
    <Navigation />
    <!-- <nav>
      <router-link  to="/">Home</router-link> |
      <router-link  to="/about"> My Portfolio</router-link>
    </nav> -->
    <!-- <Portfolio :title="recievedData"  /> -->
  </div>
  <router-view :title="recievedData" />
</template>

<script  >
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
      recievedData: null
    }
  },
   methods: {



    // async getUser () {
    //   const fetchData = await fetch('https://api.github.com/users/o-michel/repos');
    //   const data = await fetchData.json()

    // console.log(data);
    // }
  },
  async created() {
    const res = await fetch('https://api.github.com/users/o-michel/repos');
      const data = await res.json()
      this.recievedData = await data;

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
  }
  
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
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
