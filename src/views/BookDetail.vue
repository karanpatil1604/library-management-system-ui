<script setup>
import { onBeforeMount, ref } from 'vue'
import ApiService from '@/services/ApiService.js'
import ConfirmationDialogue from '@/components/Popups/ConfirmationDialogue.vue'
import { getImageUrl } from '@/services/ImageService.js'
import { useAuthStore } from '@/stores/auth.js'
import AlertService from '@/services/AlertService.js'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})
const useAuth = useAuthStore()
const userId = useAuth.user.id

const book = ref({})
const requestsByUser = ref(null)

const showDialogue = ref(false)
const onConfirm = async () => {
  if (userId && book.value.id) {
    const res = await ApiService.post('/requests', {
      user_id: userId,
      book_id: book.value.id
    })
    console.log(res, 'this is response')
    if (res.status) {
      AlertService.showAlert(res.data.message, 'danger')
    } else {
      AlertService.showAlert('Requested Book Issue', 'info')
    }
    showDialogue.value = false
  } else {
    AlertService.showAlert('Please login to request a book', 'warning')
  }
}
const handleRequest = () => {
  showDialogue.value = true
}
const onCancel = () => {
  showDialogue.value = false
}

const fetchBook = async () => {
  book.value = await ApiService.get(`/books/${props.id}`)
}
const fetchRequests = async () => {
  requestsByUser.value = await ApiService.get(`/requests?user_id=${props.id}&status=requested`)
  if (
    props.id in
    requestsByUser.value
      .filter((request) => request.user.id == useAuth.user.id)
      .map((issue) => issue.book.id)
  ) {
    isRequested.value = true
  }
}

onBeforeMount(() => {
  fetchBook()
  fetchRequests()
})
const isRequested = ref(false)
</script>

<template>
  <div class="container-fluid mt-3">
    <div class="row p-0 m-0">
      <div class="offset-md-1 col-md-5">
        <div class="d-flex flex-column">
          <div>
            <img
              class="rounded shadow shadow-sm"
              :src="getImageUrl(book.cover_img)"
              width="90%"
              alt="Book Cover Image"
            />
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="d-flex flex-column justify-content-center gap-3">
          <div>
            <h1>{{ book.title }}</h1>
            <p>
              By:
              <span v-for="author in book.authors" :key="author.id">{{ author.name + ' ' }}</span>
            </p>
          </div>

          <div class="d-flex flex-column justify-content-center gap-3">
            <div>
              <p>Rating: {{ book.rating }} | <span>234 ratings</span></p>
            </div>
            <div>
              <span>
                Rent $: <strong>{{ book.rent }}</strong>
              </span>
            </div>
            <div
              class="my-2 d-flex flex-column justify-content-center gap-2 w-75"
              v-if="!isRequested"
            >
              <button class="btn btn-dark w-100" @click.prevent="handleRequest">
                Request Book
              </button>
              <button class="btn btn-warning bg-rose-800 w-100">Add to wishlist</button>
            </div>
            <div v-else>
              <button class="btn btn-dark w-100" disabled>Already Requested</button>
            </div>
          </div>
          <div class="row p-0 m-0">
            <h4>Book Description</h4>

            <div>
              <p><strong>Pages: </strong> {{ book.num_of_pages }}</p>
              <p><strong>Section: </strong> {{ book.section_id }}</p>
              <p><strong>ISBN: </strong> {{ book.ISBN }}</p>
            </div>
            <div>
              <h3>Summary</h3>

              <p>
                {{ book.summary }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-3">
      <div class="row p-0 m-0"></div>
    </div>
  </div>
  <ConfirmationDialogue
    message="Issue Request will be sent for this book"
    :visible="showDialogue"
    @confirm="onConfirm"
    confirm-button="Send"
    button-class="warning"
    @cancel="onCancel"
  ></ConfirmationDialogue>
</template>

<style scoped>
img {
  border-radius: 0;
  position: relative;
  aspect-ratio: 0.85;
}
</style>
