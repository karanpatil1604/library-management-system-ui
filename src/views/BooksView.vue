<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import BookCard from '@/components/Cards/BookCard.vue'
import ApiService from '@/services/ApiService.js'
import AlertService from '@/services/AlertService.js'
import ConfirmationDialogue from '@/components/Popups/ConfirmationDialogue.vue'
import { useAuthStore } from '@/stores/auth.js'

const authStore = useAuthStore()
const props = defineProps({
  book: Object
})

const isAdmin = computed(() => authStore.userRole === 'admin')

const books = ref([])
const bookToDelete = ref(null)
const showDialogue = ref(false)

const fetchBooks = async () => {
  books.value = await ApiService.get('/books')
  // AlertService.showAlert('Books fetched successfully!', 'info')
}
onBeforeMount(fetchBooks)

const deleteBook = async (id) => {
  try {
    await ApiService.delete(`/books/${id}`)
    AlertService.showAlert('Book deleted successfully!', 'success')
    await fetchBooks()
  } catch {
    AlertService.showAlert('Failed to delete the book!', 'danger')
  }
}
const confirmDelete = (bookId) => {
  bookToDelete.value = bookId
  showDialogue.value = true
}

const onConfirm = () => {
  if (bookToDelete.value) {
    deleteBook(bookToDelete.value)
    bookToDelete.value = null
  }
  showDialogue.value = false
}

const onCancel = () => {
  bookToDelete.value = null
  showDialogue.value = false
}
</script>
<template>
  <div class="container-fluid mt-2">
    <div class="row">
      <div
        :class="{
          'col-md-2 d-md-block text-center items-center vh-md-100': isAdmin,
          'd-none': !isAdmin
        }"
      >
        <div class="w-100 d-md-flex mt-2">
          <RouterLink to="/books/new" class="btn btn-outline-info w-100">+ Add Book</RouterLink>
        </div>
      </div>
      <div
        :class="{
          'col-md-10': isAdmin
        }"
      >
        <div
          class="row p-0 m-0"
          :class="{
            'row-cols-md-4 row-cols-2': isAdmin,
            'row-cols-md-6': !isAdmin
          }"
        >
          <BookCard
            v-for="book in books"
            :key="book.id"
            :book="book"
            @delete="confirmDelete"
          ></BookCard>
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
  <ConfirmationDialogue
    label="Book"
    :visible="showDialogue"
    @confirm="onConfirm"
    @cancel="onCancel"
  ></ConfirmationDialogue>
</template>
<style scoped></style>
