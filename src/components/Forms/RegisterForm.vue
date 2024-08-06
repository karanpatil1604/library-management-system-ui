<script setup>
import { computed, ref } from 'vue'
import FloatInput from './components/FloatInput.vue'
import ApiService from '@/services/ApiService.js'
import AlertService from '@/services/AlertService.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const register = ref({
  username: '',
  fname: '',
  lname: '',
  email: '',
  password: '',
  confirmPassword: ''
})
const usernameTouched = ref(false)
const fnameTouched = ref(false)
const lnameTouched = ref(false)
const emailTouched = ref(false)
const passwordTouched = ref(false)
const confirmPasswordTouched = ref(false)

const touchField = (field) => {
  switch (field) {
    case 'username':
      usernameTouched.value = true
      break
    case 'fname':
      fnameTouched.value = true
      break
    case 'lname':
      lnameTouched.value = true
      break
    case 'email':
      emailTouched.value = true
      break
    case 'password':
      passwordTouched.value = true
      break
    case 'confirmPassword':
      confirmPasswordTouched.value = true
      break
  }
}

// Validation rules
const usernameClass = computed(() => {
  return usernameTouched.value ? (register.value.username ? 'is-valid' : 'is-invalid') : ''
})

const fnameClass = computed(() => {
  return fnameTouched.value ? (register.value.fname ? 'is-valid' : 'is-invalid') : ''
})

const lnameClass = computed(() => {
  return lnameTouched.value
    ? register.value.lname && lnameTouched.value
      ? 'is-valid'
      : 'is-invalid'
    : ''
})

const emailClass = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailTouched.value
    ? emailRegex.test(register.value.email) && emailTouched.value
      ? 'is-valid'
      : 'is-invalid'
    : ''
})

const passwordClass = computed(() => {
  return passwordTouched.value ? (register.value.password ? 'is-valid' : 'is-invalid') : ''
})

const confirmPasswordClass = computed(() => {
  return confirmPasswordTouched.value
    ? register.value.password === register.value.confirmPassword && register.value.confirmPassword
      ? 'is-valid'
      : 'is-invalid'
    : ''
})
const isFormValid = computed(() => {
  return (
    usernameClass.value === 'is-valid' &&
    fnameClass.value === 'is-valid' &&
    lnameClass.value === 'is-valid' &&
    emailClass.value === 'is-valid' &&
    passwordClass.value === 'is-valid' &&
    confirmPasswordClass.value === 'is-valid'
  )
})
const handleRegister = async () => {
  if (isFormValid.value) {
    const data = await ApiService.post('/register', register.value)
    if (data.msg && data.msg == 'CREATED NEW USER') {
      AlertService.showAlert(`Registration successful!`)
      register.value = {
        username: '',
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
      await router.push({ name: 'login' })
    }
    console.log(data)
  }
}
</script>
<template>
  <div class="shadow rounded-1 p-4 mt-4 col-md-6 offset-md-3">
    <div class="mt-2 gy-2">
      <div class="text-center fw-semibold fs-2">New User</div>
    </div>
    <hr />
    <form class="mt-1 fs-6">
      <div class="form-group has-validation">
        <FloatInput
          v-model="register.username"
          type="text"
          id="username"
          class="mb-2"
          @blur="touchField('username')"
          :class="usernameClass"
          aria-describedby="usernameHelp"
          label="Username"
        />
      </div>
      <div class="form-group has-validation">
        <FloatInput
          v-model="register.email"
          type="email"
          id="email"
          class="mb-2"
          :class="emailClass"
          @blur="touchField('email')"
          aria-describedby="emailHelp"
          label="Email Address"
        />
        <div class="invalid-feedback mb-1">Please provide valid email address.</div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="form-group has-validation">
            <FloatInput
              v-model="register.fname"
              type="text"
              class="mb-2"
              :class="fnameClass"
              @blur="touchField('fname')"
              label="First Name"
              id="fname"
            />
            <div class="invalid-feedback mb1">First name can't be blank.</div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="form-floating mb-2">
            <div class="form-group has-validation">
              <FloatInput
                v-model="register.lname"
                type="text"
                class="mb-2"
                :class="lnameClass"
                @blur="touchField('lname')"
                id="lname"
                label="Last Name"
                aria-describedby="lnameHelp"
                placeholder="doe"
              />
              <div class="invalid-feedback mb1">Last name can't be blank.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div id="emailHelp" class="form-text ms-1">
        We'll never share your email with anyone else.
      </div> -->

      <div class="row mt-2">
        <div class="col-sm-12 col-md-6">
          <div class="form-group has-validation">
            <FloatInput
              v-model="register.password"
              type="password"
              label="Password"
              id="passoword"
              :class="confirmPasswordClass"
              @blur="touchField('password')"
            />
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="input-group has-validation mb-2">
            <FloatInput
              v-model="register.confirmPassword"
              type="password"
              label="Confirm Password"
              id="confirmPassword"
              :class="confirmPasswordClass"
              @blur="touchField('confirmPassword')"
              required
            />
            <div class="invalid-feedback">Passwords did not match.</div>
            <div class="valid-feedback">Passwords matched</div>
          </div>
        </div>
      </div>

      <div class="my-2 form-text">
        Already Have account?
        <router-link to="/login">Login</router-link>
      </div>
      <div class="text-start d-flex flex-column gap-1 w-100">
        <button type="button" @click.prevent="handleRegister" class="btn btn-primary">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>
