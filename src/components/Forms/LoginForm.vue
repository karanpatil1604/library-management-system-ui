<script setup>
import { ref } from 'vue'
import FloatInput from './components/FloatInput.vue'

const login = ref({
  email: '',
  password: ''
})
</script>

<template>
  <div class="shadow rounded-1 p-4 mt-4 col-md-4 offset-md-4">
    <div class="mt-2">
      <div class="text-center fw-semibold fs-2">Login</div>
    </div>
    <hr />
    <form class="fs-6">
      <FloatInput v-model="login.email" class="mb-3" id="loginEmail" label="Email" type="email" />
      <FloatInput
        v-model="login.password"
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
        Don't have an account? <router-link to="/register">Register</router-link>
      </div>

      <div class="text-start d-flex flex-column gap-1 w-100">
        <button type="submit" class="btn btn-primary">Log In</button>
        <!-- <button type="submit" class="btn btn-subtle me-2">Cancel</button> -->
      </div>
    </form>
  </div>
</template>
