<script setup>
import BookCard from '@/components/Cards/BookCard.vue'

function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx)
}
</script>
<template>
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-md-2 d-md-block text-center items-center vh-100 d-none">
        <div class="w-100 d-md-flex mt-2">
          <RouterLink to="/" class="btn btn-outline-info w-100">+ Add Book</RouterLink>
        </div>
      </div>
      <div class="col-md-10">
        <div class="row text-center row-cols-md-4 row-cols-2">
          <div class="col py-3" v-for="i in range(1, 13)" :key="i">
            <BookCard></BookCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
