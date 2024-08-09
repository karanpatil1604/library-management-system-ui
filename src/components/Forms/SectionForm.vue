<script setup>
import { onBeforeMount, ref } from 'vue'
import AlertService from '@/services/AlertService.js'
import { useRouter } from 'vue-router'
import ApiService from '@/services/ApiService.js'

const router = useRouter()
const props = defineProps({
  isNew: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    default: null
  }
})
const submitButtonText = props.isNew ? ref('Add Section') : ref('Edit Section')

const section = ref('')
const fetchSection = async () => {
  if (!props.isNew && props.id) {
    let section_json = await ApiService.get('/sections/' + props.id)
    console.log(section_json)
    section.value = section_json ? section_json.name : ''
  }
}

onBeforeMount(fetchSection)

const handleSubmit = async () => {
  let createOrEditURL = props.isNew
    ? 'http://localhost:8000/api/v1/sections'
    : `http://localhost:8000/api/v1/sections/${props.id}`
  let method = props.isNew ? 'POST' : 'PUT'
  let response
  try {
    response = await fetch(createOrEditURL, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: section.value })
    })

    switch (response.status) {
      case 200: {
        AlertService.showAlert(`Section updated successfully!`, 'info', 3000)
        section.value = ''
        await router.push('/sections')
        break
      }
      case 201: {
        const data = await response.json()
        AlertService.showAlert(`Section: ${data.name} added successfully!`, 'success', 3000)
        section.value = ''
        await router.push({ name: 'sections' })
        break
      }
      case 400: {
        const errorData = await response.json()
        AlertService.showAlert(`Bad Request: ${errorData.message}`, 'danger', 3000)
        break
      }
      case 409: {
        const errorData = await response.json()
        AlertService.showAlert(`${errorData.msg}`, 'warning', 3000)
        break
      }
      case 500: {
        AlertService.showAlert('Internal Server Error. Please try again later.', 'danger', 3000)
        break
      }
      default: {
        AlertService.showAlert('An unexpected error occurred.', 'danger', 3000)
        break
      }
    }
  } catch (error) {
    AlertService.showAlert(
      'Network error. Please check your connection and try again.',
      'danger',
      3000
    )
  }
}
</script>
<template>
  <div>
    <div class="row mt-md-4 p-0 m-0">
      <div class="offset-md-4 col-md-4">
        <div class="row">
          <h2 v-if="props.isNew">Add New Section</h2>
          <h2 v-if="!props.isNew">Edit Section</h2>
        </div>
        <form class="fs-6">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="sectionName"
              v-model="section"
            />
            <label for="floatingInput">Section name</label>
          </div>

          <div class="d-flex gap-1 w-100">
            <button type="button" @click.prevent="handleSubmit" class="btn btn-success">
              {{ submitButtonText }}
            </button>
            <RouterLink to="/sections">
              <button type="button" class="btn btn-secondary me-2">Cancel</button>
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
