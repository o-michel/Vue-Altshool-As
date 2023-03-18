<template>
  <div class="about">
    <!-- <h1 v-for="eachTitle in title" :key="eachTitle.id" > {{ title }}</h1> -->
    <!-- <MyPortfolio    /> -->
    <!-- <Portfolio :recievedData="title"  /> -->
    <MyPortfolio @repo-clicked="getEachRepo2(eachrepo.id)"   :recievedData="title"   />
    <!-- <MyPortfolio @repo-clicked="$emit('repo-clicked', eachrepo.id)"   :recievedData="title"   /> -->
  </div>
</template>


<script>
// console.log(repo-clicked);
// @ is an alias to /src
import MyPortfolio from '@/components/MyPortfolio.vue'
// import Portfolio from '@/components/RepoData.vue'

export default {
  name: 'AboutView',
  // name: 'HomeView',
  props: {
    title: {
      type: Object,
    }
  },
  components: {
    MyPortfolio,
    // Portfolio
  },
  methods: {
    getEachRepo2(id) {
    //    const fig = await eachrepo.full_name
          console.log(id);
          // this.$emit('repo-clicked', id)
    }
  },
  // emits: ['repo-clicked'],

  

}
</script>
