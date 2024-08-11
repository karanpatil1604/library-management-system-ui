<script setup>
import { getImageUrl } from '@/services/ImageService.js'
import { useAuthStore } from '@/stores/auth.js'
import { computed } from 'vue'

const authStore = useAuthStore()
const userRole = computed(() => authStore.userRole)
const props = defineProps({
  book: Object
})
const emits = defineEmits(['delete'])
const deleteBook = () => {
  emits('delete', props.book.id)
}
</script>
<template>
  <RouterLink
    :to="{
      name: 'bookDetail',
      params: { id: props.book.id }
    }"
    class="text-decoration-none"
  >
    <div class="col">
      <div class="card shadow shadow-sm">
        <div
          class="card-header d-flex g-1 align-items-center justify-content-between text-black font-bold"
        >
          <span class="title">{{ book.title }}</span>
          <div v-if="userRole === 'admin'" class="d-flex gap-2 justify-content-between">
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
        <img :src="getImageUrl(book.cover_img)" class="" />
        <div class="card-body py-1 px-2">
          <div class="d-flex justify-content-around align-items-center my-2">
            <span class="badge rounded-pill text-teal-200 bg-slate-600"
              >{{ book.num_of_pages }} Pages</span
            >
            <span class="badge rounded-pill bg-teal-600 text-slate-600"
              >Rent: $ {{ 19.99 + book.id }}</span
            >
          </div>
          <button
            type="submit"
            v-if="userRole === 'consumer'"
            class="btn btn-warning rounded w-100 my-2"
          >
            Rent
          </button>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.title {
  font: 1.3rem bold;
}

img {
  border-radius: 0;
  position: relative;

  aspect-ratio: 0.85;
}
</style>
