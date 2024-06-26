<script setup>
import BaseInput from '../Forms/components/BaseInput.vue'
</script>
<template>
  <div class="d-flex" role="search">
    <BaseInput
      class="form-control me-2"
      type="search"
      placeholder="Search Books, Authors, Sections"
      aria-label="Search"
    />
    <button class="btn btn-outline-success" type="button">Search</button>
  </div>
</template>
<style scoped></style>
