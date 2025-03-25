<script setup lang="ts">
  import Header from "./components/Header.vue"
</script>

<template>
  <div>
    <Header></Header>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  
}
</style>
