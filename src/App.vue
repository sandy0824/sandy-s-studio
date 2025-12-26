<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  
  <main class="content">
    <RouterView />
  </main>
</template>

<style>
/* 基礎重置，確保滿版 */
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: #f4f4f4;
  font-family: 'Inter', 'Noto Sans TC', sans-serif;
}

.container {
  margin: 2rem auto;
  padding: 0 20px;
  text-align: center;
}
</style>