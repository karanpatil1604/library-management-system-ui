<script setup>
import { onBeforeMount, ref } from 'vue'
import BookCard from '@/components/Cards/BookCard.vue'

function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx)
}

const books = ref([])

const fetchBooks = async () => {
  books.value = await fetch('http://localhost:8000/api/v1/books')
    .then((result) => result.json())
    .then((data) => data)
}
onBeforeMount(fetchBooks)
</script>
<template>
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-md-2 d-md-block text-center items-center vh-100 d-none">
        <div class="w-100 d-md-flex mt-2">
          <RouterLink to="/books/new" class="btn btn-outline-info w-100">+ Add Book</RouterLink>
        </div>
      </div>
      <div class="col-md-10">
        <div class="row text-center row-cols-md-4 row-cols-2">
          <div class="col py-3" v-for="book in books" :key="book.book_id">
            <BookCard :book="book"></BookCard>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-4 offset-4">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
