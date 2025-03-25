<script setup lang="ts">
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: #f3f3f3;
}
</style>
