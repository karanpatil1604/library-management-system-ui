<script setup></script>

<template>
  <main>
    <div class="border border-danger mt-2 mx-2 px-2 text-center">
      <div class="row my-2 gap-2" style="height: 250px">
        <div class="col bg-warning rounded-0">One</div>
        <div class="col bg-success rounded-0">Two</div>
        <div class="col bg-danger rounded-0">Three</div>
        <div class="col bg-primary rounded-0">Four</div>
      </div>
      <div class="row my-2 gap-2" style="height: 375px">
        <div class="col bg-success">Two</div>
        <div class="col bg-primary">Four</div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.row {
  margin: 0;
  padding: 0;
}
</style>
