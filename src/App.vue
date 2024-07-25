<script setup>
import Navbar from '@/components/Navbar/NavBar.vue'
import FlashMessage from '@/components/Popups/FlashMessage.vue'
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
  <FlashMessage></FlashMessage>
</template>

<style scoped></style>
