<script setup>
import { ref } from 'vue'
import FloatInput from './components/FloatInput.vue'

const register = ref({
  firstName: '',
  lastName: '',
  email: '',
  passoword: '',
  confirmPassoword: ''
})
</script>
<template>
  <div class="shadow rounded-1 p-4 mt-4 col-md-6 offset-md-3">
    <div class="mt-2 gy-2">
      <div class="text-center fw-semibold fs-2">New User</div>
    </div>
    <hr />
    <form class="mt-1 fs-6">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <FloatInput
            v-model="register.firstName"
            type="text"
            class="mb-3"
            label="First Name"
            id="firstName"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="form-floating mb-3">
            <FloatInput
              v-model="register.lastName"
              type="text"
              class="mb-3"
              id="lastName"
              label="Last Name"
              aria-describedby="lnameHelp"
              placeholder="doe"
            />
          </div>
        </div>
      </div>
      <FloatInput
        v-model="register.email"
        type="email"
        id="email"
        aria-describedby="emailHelp"
        label="Email Address"
      />
      <!-- <div id="emailHelp" class="form-text ms-1">
        We'll never share your email with anyone else.
      </div> -->

      <div class="row mt-3">
        <div class="col-sm-12 col-md-6">
          <FloatInput
            v-model="register.passoword"
            type="password"
            label="Password"
            id="passoword"
            class="mb-3"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <FloatInput
            v-model="register.confirmPassoword"
            type="password"
            label="Confirm Password"
            id="confirmPassword"
            class="mb-3"
          />
        </div>
      </div>

      <div class="mb-3 form-text">
        Already Have account? <router-link to="/login">Login</router-link>
      </div>
      <div class="text-start d-flex flex-column gap-1 w-100">
        <button type="submit" class="btn btn-primary">Sign Up</button>
        <!-- <button type="submit" class="btn btn-subtle me-2">Cancel</button> -->
      </div>
    </form>
  </div>
</template>
