<script setup>
import BaseIcon from '@/components/icons/BaseIcon.vue'
import MenuItems from '@/components/Navbar/MenuItems.vue'
</script>

<template>
  <!-- <BaseIcon
    class="navbar-toggler rounded border border-secondary col-2 d-md-none m-0 d-none"
    icon-name="pi pi-bars"
    icon-text="text-gray-500"
    icon-b-g="bg-gray-100"
    data-bs-toggle="collapse"
    data-bs-target="#navbarScroll"
    aria-controls="navbarScroll"
    aria-expanded="false"
    aria-label="Toggle navigation"
  /> -->

  <BaseIcon
    class="rounded col-2 d-md-none m-0 me-1 bg-body-tertiary mb-1"
    icon-name="pi pi-bars"
    icon-text="text-gray-600"
    style="font-size: 2rem"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasResponsive"
    aria-controls="offcanvasResponsive"
  />

  <div
    class="offcanvas-sm offcanvas-end d-md-none"
    tabindex="-1"
    id="offcanvasResponsive"
    aria-labelledby="offcanvasResponsiveLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">LMS</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <MenuItems />
    </div>
  </div>

  <MenuItems
    class="collapse navbar-collapse p-md-0 w-md-100 col-md-5 d-md-flex justify-content-md-end"
    id="navbarScroll"
    style="position: static"
  ></MenuItems>
</template>
