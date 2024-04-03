<script setup>
import SearchBar from '@/components/Navbar/SearchBar.vue'
import BrandLogo from '@/components/Navbar/BrandLogo.vue'
import NavMenue from '@/components/Navbar/NavMenue.vue'
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <BrandLogo />
      <NavMenue>
        <SearchBar />
      </NavMenue>
    </div>
  </nav>
</template>
<style scoped></style>
