<script setup>
import BaseIcon from '@/components/icons/BaseIcon.vue'
import { useAuthStore } from '@/stores/auth.js'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()

const authStore = useAuthStore()
const userRole = computed(() => authStore.userRole)
const logout = async () => {
  await authStore.logout()
  await router.push({ name: 'home' })
}

const userId = computed(() => authStore.user.id)
</script>

<template>
  <div>
    <ul
      class="navbar-nav my-md-2 my-lg-0 navbar-nav-scroll z-100 align-items-center"
      style="--bs-scroll-height: 400px"
    >
      <li
        class="nav-item"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-label="Close"
      >
        <RouterLink v-if="userRole === 'admin'" to="/" class="nav-link" active-class="active"
          >Dashboard
        </RouterLink>
        <RouterLink v-else to="/books" class="nav-link" active-class="active">
          <!--          <i class="pi pi-home text-slate-600" style="font-size: 2rem"></i>-->
          Home
        </RouterLink>
      </li>
      <li
        class="nav-item"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-label="Close"
        v-if="userRole === 'admin'"
      >
        <RouterLink :to="{ name: 'sections' }" class="nav-link" active-class="active"
          >Sections
        </RouterLink>
      </li>
      <li
        class="nav-item"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-label="Close"
        v-if="userRole === 'admin'"
      >
        <RouterLink
          :to="{ name: 'books' }"
          class="nav-link text-dark-emphasis"
          active-class="active"
          >Books
        </RouterLink>
      </li>

      <li
        class="nav-item"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-label="Close"
        v-if="userRole === 'consumer'"
      >
        <RouterLink :to="{ name: 'requests' }" class="nav-link" active-class="active"
          >My Requests
        </RouterLink>
      </li>

      <li
        class="nav-item"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-label="Close"
        v-if="userRole === 'admin'"
      >
        <RouterLink :to="{ name: 'requests' }" class="nav-link" active-class="active"
          >Requests
        </RouterLink>
      </li>

      <button
        class="nav-item"
        style="border: none; background: none"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-label="Close"
      >
        <RouterLink v-if="!userRole" to="/login" style="text-decoration: none">
          <BaseIcon icon-name="pi pi-user" icon-text="text-orange-700" icon-b-g="bg-orange-200" />
        </RouterLink>
        <RouterLink v-else-if="userRole" to="/profile" style="text-decoration: none">
          <BaseIcon icon-name="pi pi-user" icon-text="text-orange-700" icon-b-g="bg-orange-200" />
        </RouterLink>
      </button>
      <button
        class="nav-item"
        style="border: none; background: none"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-label="Close"
        v-if="userRole"
        @click="logout"
      >
        <BaseIcon icon-name="pi pi-sign-out" icon-text="text-red-700" icon-b-g="bg-red-200" />
      </button>
    </ul>
  </div>
</template>
