<script setup>
defineProps({
  book: Object
})
</script>
<template>
  <div class="">
    <div class="card" aria-hidden="true">
      <div class="card-header">{{ book.section.name }}</div>
      <!--      <img src="@/assets/imgs/600x600.png" class="card-img-top w-100" />-->
      <div class="card-body">
        <p class="card-text placeholder-glow">{{ book.book_content }} books</p>
        <p class="card-title">{{ book.title }}</p>
        <p class="card-text">{{ book.image_url }}</p>
        <p class="card-text">$ {{ 19.99 + book.book_id }}</p>
        <hr />
        <div class="d-flex justify-content-md-end justify-content-between gap-2">
          <button class="btn btn-outline-info">
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

<style scoped>
img {
  border-radius: 0;
}
</style>
