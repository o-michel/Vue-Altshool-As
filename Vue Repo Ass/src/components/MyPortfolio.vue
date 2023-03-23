<template>
    <div class="hello">
        <p v-if="loading">{{ isLoading }}</p>
        <Pagination />
        <!-- :title="recievedData" -->
        <h1  class="repo_name" v-for="eachrepo in recievedData" :key="eachrepo.id" >
             <div @click="getEachRepo(eachrepo.id)"  class="toBeClicked">  {{ eachrepo.name
 }} </div> 

             <div v-if="isclicked">
                <Moredetails :title = "recievedData" />
            </div>

            <!-- </Moredetails> -->
            
            <!-- Pagination section -->
            
        </h1>
        <!-- Pagination from john start -->
        
        <!-- <button @click="backPage">prev</button>
        <button
        v-for="eachrepo in Math.ceil(data.length / perPage)"
             :key="eachrepo"
             @click="() => goToPage(eachrepo)"
        >
        {{ eachrepo }}
        </button>
        <button @click="nextPage">next</button> -->
        <!-- Pagination from john end -->
        

        <div>
           <!-- <v-pagination> -->
               <!-- v-model = "currentPage"
               :total-rows = "rows"
               :per-page = "perPage" -->
               <!-- </v-pagination> -->
               <v-pagination
               v-model="page"
               :pages="pageCount"
               :range-size="1"
               :per-page = "perPage" 
           active-color="#6383be"
           @update:modelValue="fetchRepoData"
            />
        </div> 
         

        <!-- <p>my portfolio</p> -->
        <!-- <Portfolio :title="recievedData"  /> -->
              
        <RepoData />
        <!-- <p>{{ eachrepo }}</p> -->

  
      <!-- Small info and pagination -->

    </div>
</template>

<script >
// import handlePagination from "../handlePagination";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import axios from "axios";
// import VPagination from "@hennge/vue3-pagination";
// import "@hennge/vue3-pagination/dist/vue3-pagination.css"


import RepoData from "./RepoData.vue";
import Moredetails from "./MoreDetails.vue";
import Pagination from "./Pagination.vue";

// console.log(RepoData);
export default {
    name: 'MyPortfolio',
    //   setup() {
        //     const handlePaginationValue = handlePagination();
        
        //     return { ...handlePaginationValue };
        //   },
        components: {
            Pagination,
            // Navigation
            RepoData,
            // router-link
            Moredetails,
            VPagination,
            
        },
  
  data() {
      return {
          // eachrepos: eachrepo.full_name,
          check: null,
        //   currentPage:5,
          rows: 200,
          perPage: 5,
          // page:15,
        page:1,

        pageCount:null,

      recievedData: null,
      isclicked: false,
      moreinfo: 'more info',
      repclicked: {},
      loading: false,
      isLoading: "Loading...",
    }
},
computed: {
    eachrepo: {
        get() {
            return `${this.eachrepo}`
            //   console.log(this.eachrepo);
        },
        // set(value) {
            //      const name = value.split('haaa ')
            //      this.recievedData = name[0]
            //  value.map((val)=> val = val.full_name);
            // const name = value
            // console.log("expect", name);
            // this.recievedData = name
            // eachrepo = this.recievedData
            // },
        },
    },
    methods: {
        
       async fetchRepoData(){
           this.loading= true
           axios.get(`https://api.github.com/users/o-michel/repos?page=` + this.page).then((response) => {
               // data.slice((page.value - 1) * perPage, page.value * perPage)
            const perPage = 2;
            // const check = {};
            // console.log(this.recievedData);
            
            this.check = response.data.slice((this.page - 1) * perPage, this.page * perPage)
            this.pageCount = this.check.length
            this.recievedData = response.data
            this.loading= false
        });


        // let res = await fetch(`https://api.github.com/users/o-michel/repos`);
        // this.pageCount = res.status;
        // let data = await res.json();
        // this.recievedData = await data;
        // let res = await fetch(`https://api.github.com/users/o-michel/repos`);
        // // this.pageCount = res.status;
        // let data = await res.json();
        // this.recievedData = await data;
            // console.log("this", this.eachrepo),

       },






        
        
             //   page: this.page,
       getEachRepo(id) {
            
            //    const fig = await eachrepo.full_name
            // console.log(id);
            // console.log(this.recievedData[0].id);
            this.recievedData = this.recievedData.filter((rep) =>  rep.id == id )
            
            this.isclicked = true
            // this.repclicked = this.recievedData
            // console.log(this.recievedData);
            // function manipulate(rep){
                //     rep.id == id;
                //     console.log(rep.id);
                // isclicked = false
                // }
                // function check(details){
                    //     // rep.id == id;
                    //     console.log(details);
                // }
                
                //   this.$emit('repo-clicked', id)
                // bus.$emit('repo-clicked', id)
            },
            // getPosts(data){
                // this.pageCount = data.length;
                
        // },
    },
    //   mounted() {
        //     // bus.$on('repo-clicked', (data) =>{
            //       // console.log(data);
            //     // })
            
            //   },
    async created() {
        // this.loading= true
 
        await this.fetchRepoData()

        // this.loading= false
    
        // setTimeout(() => {
        //     console.log(this.recievedData);
        // }, 5000);
//    const getPosts = async () => {

    // comment start
//    this.loading= true
//     let res = await fetch(`https://api.github.com/users/o-michel/repos`);
//     // this.pageCount = res.status;
//     let data = await res.json();
//     this.recievedData = await data;
//     // this.pageCount = data.length;
//     // console.log("expect", data.length);
//     // this.recievedData = await data;
//     // console.log(this.recievedData);
//     // setInterval(async() => {
//     //     console.log(this.recievedData);
//     // }, 10000);
//     // this.getPosts(data)
//     this.loading= false
// comment end



//    }
// const res = await fetch(`https://api.github.com/users/o-michel/repos?page` + this.page);
//     console.log("expect", res);
//     this.pageCount = res.data.pageCount;
//     const data = await res.json();
//     this.recievedData = await data;
    
    // console.log(this.recievedData[0].full_name);
    // console.log(data[0].full_name);
    // console.log('mounted!')
    
    // async load =da   ta.map((eachData)=>{
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
//   import { bus } from '../main';

//   console.log(eachrepo);


//   export default {
//     name: 'MyPortfolio',
//     props: {
//         recievedData: Object
//     },

//   data() {
//     return {
//         // const model : eachrepo 
//         // console.log({eachrepo});
//         // recievedData1: recievedData
//     }
// },
// methods: {
//     getEachRepo(id) {
//         //    const fig = await eachrepo.full_name
//         console.log(id);

//         // console.log(this.recievedData1);
//         //   this.$emit('repo-clicked', id)
//         bus.$emit('repo-clicked', id)
//     }


//     // const clicked = console.log(eachrepo);
//     //    console.log(eachrepo);
    
    

//     // async getUser () {
//     //   const fetchData = await fetch('https://api.github.com/users/o-michel/repos');
//     //   const data = await fetchData.json()

//     // console.log(data);
//     // }
//   },

//   }
  </script>
  
  <style scoped>
  .dis{
    background-color: blue;
  }
  .hello{
    font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    background-color: #eee;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 1rem;
    margin: 1rem;
    border: 1rem;
    
  }

  .toBeClicked{ 
    padding: 1rem;
    /* background-color: red; */
    
   }

  h1{
    background-color: rgb(217, 240, 183);
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    padding: 1rem;
    margin: 1rem;
    border: 1rem;
    font-size: 1rem;
    
  }


  h1:hover{
    background-color: rgb(200, 236, 145);

  }
  /* h1:active{
    color: #eee;
  } */
 
  </style>
  