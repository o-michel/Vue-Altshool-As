<template>
  <p>Hi I am the data only for Portfolio</p>
  <h1 v-for="eachrepo in recievedData" :key="eachrepo.id" > {{ eachrepo.full_name }}</h1>

</template>

<script>

export default {
    name: 'Portfolio',
    props: {
        recievedData: Object
    }

}
</script>

<style>

</style>