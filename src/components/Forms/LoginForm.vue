<script setup>
import { ref } from 'vue'
import FloatInput from './components/FloatInput.vue'
import ApiService from '@/services/ApiService.js'
import AlertService from '@/services/AlertService.js'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const router = useRouter()
const authStore = useAuthStore()

const credentials = ref({
  email_or_username: '',
  password: ''
})

const handleSubmit = async () => {
  const response = await ApiService.post('/login', credentials.value)
  console.log(response.token, 'this is response')

  if (response.token) {
    credentials.value = {
      email_or_username: '',
      password: ''
    }
    await authStore.initializeUserRole(response.token)
    AlertService.showAlert('Login successful!', 'info')
    await router.push({ name: 'home' })
  }
}
</script>

<template>
  <div class="shadow rounded-1 p-4 mt-4 col-md-4 offset-md-4">
    <div class="mt-2">
      <div class="text-center fw-semibold fs-2">Login</div>
    </div>
    <hr />
    <form class="fs-6">
      <FloatInput
        v-model="credentials.email_or_username"
        class="mb-3"
        id="loginEmail"
        label="Email"
        type="email"
      />
      <FloatInput
        v-model="credentials.password"
        class="mb-3"
        id="loginPassword"
        label="Password"
        type="password"
      />

      <div class="mb-3 form-check ms-2">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" checked />
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
      </div>
      <div class="mb-3 form-text">
        Don't have an account?
        <router-link to="/register">Register</router-link>
      </div>

      <div class="text-start d-flex flex-column gap-1 w-100">
        <button type="button" @click.prevent="handleSubmit" class="btn btn-primary">Log In</button>
      </div>
    </form>
  </div>
</template>
