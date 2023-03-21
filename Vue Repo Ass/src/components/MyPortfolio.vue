<template>
    <div class="hello">
        <p v-if="loading">{{ isLoading }}</p>
        <Pagination />
        <!-- :title="recievedData" -->
        <h1  class="repo_name" v-for="eachrepo in recievedData" :key="eachrepo.id" >
             <div @click="getEachRepo(eachrepo.id)"  class="toBeClicked">  {{ eachrepo.full_name }} </div> 

             <div v-if="isclicked">
                <Moredetails :title = "recievedData" />
            </div>
             
            <!-- </Moredetails> -->

            <!-- Pagination section -->
            
        </h1>
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
           active-color="#DCEDFF"
           @update:modelValue="getPosts"
            />
        </div> 
         

        <p>my portfolio</p>
        <!-- <Portfolio :title="recievedData"  /> -->
              
        <RepoData />

  
      <!-- Small info and pagination -->

    </div>
</template>

<script>
// import VPagination from "@hennge/vue3-pagination";
// import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css"


import RepoData from "./RepoData.vue";
import Moredetails from "./MoreDetails.vue";
import Pagination from "./Pagination.vue";

console.log(RepoData);
export default {
  name: 'MyPortfolio',
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
        // currentPage:5,
        // rows: 200,
        // perPage: 5,
        page:15,
        pages:1,
        pageCount:null,
      recievedData: null,
      isclicked: false,
      moreinfo: 'more info',
      repclicked: {},
      loading: false,
      isLoading: "Loading...",
    }
  },

  //   methods: {
      
      // clickedRepoData() {
      
          //   // console.log( id);
          // },
          
          
          // async getUser () {
              //   const fetchData = await fetch('https://api.github.com/users/o-michel/repos');
              //   const data = await fetchData.json()
              
              // console.log(data);
              // }
              //   },
              
              methods: {
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
            getPosts(data){
                this.pageCount = data.length;
                
    },
  },
//   mounted() {
//     // bus.$on('repo-clicked', (data) =>{
//       // console.log(data);
//     // })
    
//   },
  async created() {
    
//    const getPosts = async () => {
   this.loading= true
    const res = await fetch(`https://api.github.com/users/o-michel/repos?page`+this.page);
    // this.pageCount = res.status;
    const data = await res.json();
    this.pageCount = data.length;
    // console.log("expect", data.length);
    this.recievedData = await data;
    // this.getPosts(data)
   this.loading= false


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
    background-color: #eee;
    padding: 1rem;
    margin: 1rem;
    border: 1rem;
    
  }

  /* .toBeClicked{ */
    /* background-color: red; */
    
  /* } */

  h1{
    background-color: rgb(217, 240, 183);
    padding: 1rem;
    margin: 1rem;
    border: 1rem;
  }
 
  </style>
  