<script setup>
import BaseInput from '../Forms/components/BaseInput.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { debounce } from 'lodash'

const router = useRouter()
const search = ref('')
const handleClick = () => {
  debouncedSearch.flush()
}

const debouncedSearch = debounce(async () => {
  await router.push({ name: 'books', query: { q: search.value } })
}, 300)
</script>
<template>
  <div class="d-flex" role="search">
    <BaseInput
      class="form-control me-2"
      v-model="search"
      @input="debouncedSearch"
      type="search"
      placeholder="Search Books, Authors, Sections"
      aria-label="Search"
    />
    <button class="btn btn-outline-success" @click="handleClick" type="button">Search</button>
  </div>
</template>
<style scoped></style>
