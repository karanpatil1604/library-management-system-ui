<script setup>
const props = defineProps(['section', 'isNew'])
const emits = defineEmits(['delete'])
const deleteSection = () => {
  emits('delete', props.section.section_id)
}
</script>
<template>
  <div class="col">
    <div class="card" aria-hidden="true">
      <!-- <img src="../../assets//imgs/600x600.png" class="card-img-top w-100" /> -->
      <div class="card-header">{{ section.name }}</div>
      <div class="card-body">
        <p class="card-text placeholder-glow">{{ section.books.length }} books</p>

        <div class="d-flex justify-content-between">
          <RouterLink
            :to="{
              name: 'sectionEdit',
              params: { id: section.section_id }
            }"
          >
            <button class="btn btn-outline-info" type="button">
              <i class="bi bi-pencil-square"></i>
            </button>
          </RouterLink>
          <button class="btn btn-outline-danger" @click.prevent="deleteSection">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
