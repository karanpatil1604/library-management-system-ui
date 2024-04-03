<script setup>
import Navbar from '@/components/Navbar/NavBar.vue'
</script>

<template>
  <!-- Navbar here -->
  <Navbar></Navbar>
  <!-- logo + search-bar + Account -->
  <!-- Dashboard ========== SECTIONS ========== Books ========== Authors ========== Users ======  -->
  <!-- Navbar here -->
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
