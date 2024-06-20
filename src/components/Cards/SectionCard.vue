<script setup>
defineProps(['section'])
</script>
<template>
  <div class="col">
    <div class="card" aria-hidden="true">
      <!-- <img src="../../assets//imgs/600x600.png" class="card-img-top w-100" /> -->
      <div class="card-header">{{ section.name }}</div>
      <div class="card-body">
        <p class="card-text placeholder-glow">5 books</p>
        <!-- <div class="d-flex justify-content-between d-none d-md-inline-block">
          <button class="btn btn-outline-info col-6">Edit</button>
          <button class="btn btn-outline-danger col-6">Delete</button>
        </div> -->
        <div class="d-flex justify-content-between">
          <button
            class="btn btn-outline-info"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#sectionEditFormModal"
          >
            <i class="bi bi-pencil-square"></i>
          </button>
          <button class="btn btn-outline-danger">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
