<script setup>
import SearchBar from '@/components/Navbar/SearchBar.vue'
import BrandLogo from '@/components/Navbar/BrandLogo.vue'
import NavMenue from '@/components/Navbar/NavMenue.vue'
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container row">
      <BrandLogo class="col-2 col-md-1 p-md-0 p-xs-1 m-0 ps-md-1 text-md-center" />
      <SearchBar class="col-md-7 col-8" />
      <NavMenue class=""> </NavMenue>
    </div>
  </nav>
</template>
<style scoped>
.row {
  margin: 0;
  padding: 0;
}

.col-md-* {
  padding: 0;
  margin: 0;
}
</style>
