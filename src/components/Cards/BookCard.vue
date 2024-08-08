<script setup>
import { getImageUrl } from '@/services/ImageService.js'

const props = defineProps({
  book: Object
})
const emits = defineEmits(['delete'])
const deleteBook = () => {
  emits('delete', props.book.id)
}
</script>
<template>
  <div class="">
    <div class="card" aria-hidden="true">
      <div class="card-header">{{ book.section_id }}</div>
      <img :src="getImageUrl(book.cover_img)" class="card-img-top w-100" />
      <div class="card-body">
        <p class="card-text placeholder-glow">{{ book.num_of_pages }} books</p>
        <p class="card-title">{{ book.title }}</p>
        <p class="card-text">{{ book.cover_img }}</p>
        <p class="card-text">$ {{ 19.99 + book.id }}</p>
        <hr />
        <div class="d-flex justify-content-between">
          <RouterLink
            :to="{
              name: 'bookEdit',
              params: { id: book.id }
            }"
          >
            <button class="btn btn-outline-info" type="button">
              <i class="bi bi-pencil-square"></i>
            </button>
          </RouterLink>
          <button class="btn btn-outline-danger" @click.prevent="deleteBook">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  border-radius: 0;
}
</style>
