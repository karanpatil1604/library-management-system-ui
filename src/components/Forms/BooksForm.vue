<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import AlertService from '@/services/AlertService.js'
import ApiService from '@/services/ApiService.js'
import { useRouter } from 'vue-router'
import { getImageUrl } from '@/services/ImageService.js'

const props = defineProps({
  isNew: {
    type: Boolean
  },
  id: {
    type: String,
    default: null
  }
})
const router = useRouter()
const sections = ref([])
const authors = ref([])
const publishers = ref([])

const fetchSections = async () => {
  sections.value = await ApiService.get('/sections')
}
const fetchAuthors = async () => {
  authors.value = await ApiService.get('/authors')
}
const fetchPublishers = async () => {
  publishers.value = await ApiService.get('/publishers')
}

onMounted(() => {
  fetchSections()
  fetchAuthors()
  fetchPublishers()
})

const book = ref({
  ISBN: null,
  title: '',
  summary: '',
  num_of_pages: 0,
  rent: 0,
  due_days: 7,
  section_id: null,
  date_published: null,
  authors: [],
  publishers: []
})
const editingBook = ref(null)
const fetchBook = async () => {
  let book_json = await ApiService.get('/books/' + props.id)
  console.log(book_json)
  editingBook.value = book_json ? book_json : null
  if (book_json) {
    book.value.ISBN = book_json.ISBN
    book.value.title = book_json.title
    book.value.description = book_json.description
    book.value.section_id = book_json.section_id
    book.value.publishers = book_json.publishers.map((publisher) => {
      return publisher.id
    })
    book.value.authors = book_json.authors.map((author) => {
      return author.id
    })
    book.value.num_of_pages = book_json.num_of_pages
    book.value.due_days = book_json.due_time
    book.value.date_published = book_json.date_published.split(' ')[0]
    book.value.summary = book_json.summary
    book.value.rent = book_json.rent
  }
}
if (!props.isNew && props.id) {
  onBeforeMount(fetchBook)
}

const files = ref({
  content: '',
  cover_img: ''
})
const onFileChange = (event, fileName) => {
  files.value[fileName] = event.target.files[0]
}

const getFormData = () => {
  const formData = new FormData()
  formData.append('content', files.value.content)
  formData.append('cover_img', files.value.cover_img)

  formData.append('title', book.value.title)
  formData.append('ISBN', book.value.ISBN)
  formData.append('rent', book.value.rent)
  formData.append('summary', book.value.summary)
  formData.append('num_of_pages', book.value.num_of_pages)
  formData.append('date_published', book.value.date_published)
  formData.append('due_days', book.value.due_days)
  formData.append('section_id', book.value.section_id)
  for (const id of book.value.authors) {
    formData.append('authors', id)
  }
  for (const id of book.value.publishers) {
    formData.append('publishers', id)
  }
  return formData
}

const handleSubmit = async () => {
  if ((!files.value.content || !files.value.cover_img) && props.isNew) {
    AlertService.showAlert('Please select both files!', 'warning')
    return
  }
  console.log('Ready to submit form')
  const formData = getFormData()
  if (props.isNew) {
    const response = await ApiService.post('/books', formData)
    if (response.id) {
      AlertService.showAlert('Book Created Successfully!', 'info')
      book.value = {
        ISBN: null,
        title: '',
        description: '',
        section_id: null,
        authors: [],
        publishers: [],
        num_of_pages: 0,
        due_days: 7,
        date_published: null
      }
      await router.push({ name: 'books' })
    } else {
      AlertService.showAlert('Not CREATED', 'danger')
    }
  } else {
    const response = await ApiService.put('/books/' + props.id, formData)
    if (response.id) {
      AlertService.showAlert('Book Updated Successfully!', 'primary')
      await router.push({ name: 'books' })
    } else {
      AlertService.showAlert('Not UPDATED', 'danger')
    }
  }
}
</script>
z
<template>
  <div>
    <div class="row mt-md-4 p-0 m-0">
      <div class="offset-md-2 col-md-8 shadow p-md-4 rounded">
        <div class="row m-2">
          <h2 v-if="isNew">Add New Book</h2>
          <h2 v-else>Update Book</h2>
          <hr />
        </div>

        <form class="mt-3 fs-6">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="mb-3">
                <label for="bookTitle" class="form-label">Title</label>
                <input
                  v-model="book.title"
                  type="text"
                  class="form-control"
                  id="bookTitle"
                  aria-describedby="bookTitleHelp"
                  placeholder="Fault in our stars"
                />
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="mb-3">
                <label for="ISBN" class="form-label">ISBN</label>
                <input
                  v-model="book.ISBN"
                  type="text"
                  class="form-control"
                  id="ISBN"
                  aria-describedby="isbnHelp"
                  placeholder="125458695784"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 col-md-6">
              <label for="coverImage" class="form-label">Cover Image</label>
              <div class="input-group mb-3">
                <input
                  type="file"
                  @change="onFileChange($event, 'cover_img')"
                  class="form-control"
                  id="coverImage"
                  aria-describedby="coverImageHelp"
                  aria-label="upload cover"
                />
              </div>
              <p v-if="!isNew">
                Current Img:
                <a :href="getImageUrl(editingBook.cover_img)" target="_blank">cover img</a>
              </p>
            </div>
            <div class="col-sm-12 col-md-6">
              <label for="bookContent" class="form-label">Book Content</label>
              <div class="input-group mb-3">
                <input
                  type="file"
                  class="form-control"
                  id="bookContent"
                  @change="onFileChange($event, 'content')"
                  aria-describedby="bookContentHelp"
                  placeholder="doe"
                />
              </div>
              <p v-if="!isNew">
                Book Content:
                <a :href="getImageUrl(editingBook.content)" target="_blank">Open Book</a>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="mb-3">
                <div class="">
                  <label class="form-label" for="selectSection">Section</label>
                  <select v-model="book.section_id" class="form-select" id="selectSection">
                    <option selected readonly="">Select section...</option>
                    <option v-for="section in sections" :key="section.id" :value="section.id">
                      {{ section.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-2">
                <label for="numOfPages" class="form-label">No. of Pages</label>
                <input
                  v-model="book.num_of_pages"
                  type="number"
                  class="form-control"
                  id="numOfPages"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-2">
                <label for="dueTime" class="form-label">Due Days</label>
                <input v-model="book.due_days" type="number" class="form-control" id="dueTime" />
              </div>
            </div>
          </div>

          <div class="row mb-3 align-items-center">
            <div class="col-md-3">
              <div class="">
                <div class="dropdown">
                  <button
                    class="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Authors
                  </button>
                  <ul class="dropdown-menu bg-teal-50">
                    <li class="dropdown-item" v-for="author in authors" :key="author.id">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        :value="author.id"
                        v-model="book.authors"
                      />
                      <label class="form-check-label" for="firstCheckbox">{{ author.name }}</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="">
                <div class="dropdown">
                  <button
                    class="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Publishers
                  </button>
                  <ul class="dropdown-menu bg-teal-50">
                    <li class="dropdown-item" v-for="publisher in publishers" :key="publisher.id">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        :value="publisher.id"
                        v-model="book.publishers"
                      />
                      <label class="form-check-label" for="firstCheckbox">{{
                        publisher.name
                      }}</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-3 d-flex flex-column gap-1">
              <div>
                <label for="rent" class="form-label">Rent</label>
                <input v-model="book.rent" type="number" class="form-control" id="rent" />
              </div>
            </div>
            <div class="col-md-3 d-flex flex-column gap-1">
              <div class="">
                <label for="publishedDate" class="form-label">Published Date</label>
                <input
                  v-model="book.date_published"
                  type="date"
                  class="form-control"
                  id="publishedDate"
                />
              </div>
            </div>
          </div>
          <div>
            <div class="mb-2">
              <label for="summary" class="form-label">Summary</label>
              <textarea v-model="book.summary" rows="8" class="form-control" id="summary" />
            </div>
          </div>
          <div class="text-start d-flex flex-column gap-1 w-100">
            <button
              type="button"
              @click.prevent="handleSubmit"
              :class="isNew ? 'btn btn-success' : 'btn btn-primary'"
            >
              {{ isNew ? 'Add Book' : 'Update Book' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
