<script setup>
import PlaceholderCard from '@/components/Placeholder/PlaceholderCard.vue'
</script>

<template>
  <div class="p-2 m-2">
    <div class="w-100 d-md-flex justify-content-end mb-2">
      <RouterLink to="/" class="btn btn-outline-info">Add Section</RouterLink>
    </div>
    <div class="row row-cols-md-4 gy-3 row-cols-2">
      <PlaceholderCard></PlaceholderCard>
      <PlaceholderCard></PlaceholderCard>
      <PlaceholderCard></PlaceholderCard>
      <PlaceholderCard></PlaceholderCard>
      <PlaceholderCard></PlaceholderCard>
      <PlaceholderCard></PlaceholderCard>
    </div>
  </div>
</template>
