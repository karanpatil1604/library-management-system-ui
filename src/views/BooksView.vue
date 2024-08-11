<script setup>
import { computed, onBeforeMount, ref, watch } from 'vue'
import BookCard from '@/components/Cards/BookCard.vue'
import ApiService from '@/services/ApiService.js'
import AlertService from '@/services/AlertService.js'
import ConfirmationDialogue from '@/components/Popups/ConfirmationDialogue.vue'
import { useAuthStore } from '@/stores/auth.js'
import { useRoute } from 'vue-router'
import BaseInput from '@/components/Forms/components/BaseInput.vue'

const authStore = useAuthStore()
const route = useRoute()
const props = defineProps({
  book: Object,
  query: String
})

const isAdmin = computed(() => authStore.userRole === 'admin')

const books = ref([])
const bookToDelete = ref(null)
const showDialogue = ref(false)
watch(
  () => route.query.q,
  async (newQuery) => {
    books.value = await ApiService.get(`/search?q=${newQuery}`)
  },
  { immediate: true }
)
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
    <h4 v-if="route.query.q && !isAdmin">Search Results...</h4>
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
        <div class="d-flex flex-column mt-3">
          <p>
            <label>section 1</label>
            <base-input type="checkbox"></base-input>
          </p>
        </div>
      </div>
      <div
        :class="{
          'col-md-10': isAdmin
        }"
      >
        <div
          class="row p-0 m-0 g-2"
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
    <h2 v-if="books.length === 0" class="text-center">No books found</h2>
  </div>
  <ConfirmationDialogue
    message="Are you sure you want to delete the Book?"
    :visible="showDialogue"
    @confirm="onConfirm"
    confirm-button="Delete"
    button-class="danger"
    @cancel="onCancel"
  ></ConfirmationDialogue>
</template>
<style scoped></style>
