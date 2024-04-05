<script setup>
import PlaceholderCard from '@/components/Placeholder/PlaceholderCard.vue'
</script>

<template>
  <div class="p-2 m-2 w-100">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 gap-2">
      <PlaceholderCard></PlaceholderCard>
      <PlaceholderCard></PlaceholderCard>
      <PlaceholderCard></PlaceholderCard>
      <PlaceholderCard></PlaceholderCard>
      <PlaceholderCard></PlaceholderCard>
      <PlaceholderCard></PlaceholderCard>
    </div>
  </div>
</template>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}
</style>
