<script setup>
import BaseIcon from '@/components/icons/BaseIcon.vue'
import { isAuthenticated } from '@/services/AuthHelper.js'
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
        <RouterLink to="/" class="nav-link" active-class="active">Dashboard</RouterLink>
      </li>
      <li
        class="nav-item"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-label="Close"
      >
        <RouterLink to="/sections" class="nav-link" active-class="active">Sections</RouterLink>
      </li>
      <li
        class="nav-item"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-label="Close"
      >
        <RouterLink to="/books" class="nav-link" active-class="active">Books</RouterLink>
      </li>
      <li
        class="nav-item"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-label="Close"
      >
        <RouterLink to="/users" class="nav-link" active-class="active">Subscribers</RouterLink>
      </li>
      <button
        class="nav-item"
        style="border: none; background: none"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-label="Close"
      >
        <RouterLink v-if="!isAuthenticated()" to="/login" style="text-decoration: none">
          <BaseIcon icon-name="pi pi-user" icon-text="text-orange-700" icon-b-g="bg-orange-200" />
        </RouterLink>
      </button>
      <button
        class="nav-item"
        style="border: none; background: none"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-label="Close"
      >
        <RouterLink v-if="isAuthenticated()" to="/login" style="text-decoration: none">
          <BaseIcon icon-name="pi pi-sign-out" icon-text="text-red-700" icon-b-g="bg-red-200" />
        </RouterLink>
      </button>
    </ul>
  </div>
</template>
