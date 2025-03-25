<script setup lang="ts">
  import Header from "./components/Header.vue"
  import Footer from "./components/Footer.vue"
</script>

<template>
  <div>
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  
}
</style>
