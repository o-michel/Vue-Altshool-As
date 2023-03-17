<template>
  <div class="about">
    <!-- <h1 v-for="eachTitle in title" :key="eachTitle.id" > {{ title }}</h1> -->
    <!-- <MyPortfolio    /> -->
    <!-- <Portfolio :recievedData="title"  /> -->
    <MyPortfolio  :recievedData="title"   />
  </div>
</template>


<script>
// @ is an alias to /src
import MyPortfolio from '@/components/MyPortfolio.vue'
// import Portfolio from '@/components/RepoData.vue'

export default {
  name: 'HomeView',
  props: {
    title: {
      type: Object,
    }
  },
  components: {
    MyPortfolio,
    // Portfolio
  }

  

}
</script>
