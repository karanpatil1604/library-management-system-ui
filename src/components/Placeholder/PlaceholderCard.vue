<template>
  <div class="card" aria-hidden="true">
    <img src="../../assets//imgs/600x600.png" class="card-img-top w-100" />
    <div class="card-body">
      <p class="card-text placeholder-glow">
        <span class="placeholder col-6"></span>
        <span class="placeholder col-8"></span>
      </p>
      <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 300px;
}

.card,
.col* {
  margin: 0 !important;
  padding: 0 !important;
}
/* img {
  height: 240px;
} */
</style>
