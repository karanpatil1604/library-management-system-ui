<script setup lang="ts">
import LoginForm from '@/components/Forms/LoginForm.vue'
</script>
<template>
  <div class="container-fluid d-flex flex-column justify-content-around pb-2">
    <LoginForm></LoginForm>
    <RouterView></RouterView>
  </div>
</template>
<style scoped></style>
