<template>
    <div class="container" >
        <div class="dis" >
                <!-- {{ eachrepo.description }}  -->
        </div>
        <!-- <p >NASTED ROUTE</p> -->
        <div>
            <h3 class="discription">Project Discription</h3>
            <p >{{ title[0].description}} </p>
            <h3 class="visibility">visibility</h3>
            <p >{{ title[0].visibility
}} </p>
            <h3 class="language">language</h3>
            <p >{{ title[0].language}} </p>
            <!-- <h3 class="default_branch">default_branch
</h3>
            <p >{{ title[0].default_branch
}} </p> -->
        </div>
        <!-- <p >{{ title[0].description}} </p> -->
        <router-link  :to="{ name: 'home'}">Home</router-link> |


    </div>
</template>

<script>
export default {
    name: "More-details",
    props: { 
        title: {
            type: Object,
        }
    },
    // props: {
        //     title:  {
            // console.log(title);
            //         type: boolean
            //     }
            // }
            

        }
</script>

<style scoped>
.container{
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  padding: 1rem;
}

h3{
    color: #6383be;
    text-transform: capitalize;
    /* text-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 2px 2px rgba(0,0,0,0.23);; */
}

p{
    font-size: 0.9rem;
}



</style>