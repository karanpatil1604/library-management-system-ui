<script setup>
import { onBeforeMount, ref } from 'vue'
import SectionCard from '@/components/Cards/SectionCard.vue'
import ConfirmationDialogue from '@/components/Popups/ConfirmationDialogue.vue'
import AlertService from '@/services/AlertService.js'

const sections = ref([])
const sectionToDelete = ref(null)
const showDialogue = ref(false)

const fetchSections = async () => {
  sections.value = await fetch('http://localhost:8000/api/v1/sections')
    .then((response) => response.json())
    .then((data) => data)
  console.log('Ready to fetch sections')
}

onBeforeMount(fetchSections)

const deleteSection = async (id) => {
  try {
    await fetch(`http://localhost:8000/api/v1/sections/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    }).then((res) => res.json())
    AlertService.showAlert('Section deleted successfully!', 'success')
    fetchSections()
  } catch {
    AlertService.showAlert('Failed to delete the section!', 'danger')
  }
}
const confirmDelete = (sectionId) => {
  sectionToDelete.value = sectionId
  showDialogue.value = true
}

const onConfirm = () => {
  if (sectionToDelete.value) {
    deleteSection(sectionToDelete.value)
    sectionToDelete.value = null
  }
  showDialogue.value = false
}

const onCancel = () => {
  sectionToDelete.value = null
  showDialogue.value = false
}
</script>

<template>
  <div class="p-2 m-2">
    <div class="w-100 d-md-flex justify-content-end mb-2">
      <RouterLink to="/sections/new">
        <button type="button" class="btn btn-outline-info">+ Add Section</button>
      </RouterLink>
    </div>
    <div class="row row-cols-md-4 gy-3 row-cols-2">
      <SectionCard
        v-for="section in sections"
        :key="section.section_id"
        :section="section"
        @delete="confirmDelete"
      ></SectionCard>
    </div>
    <ConfirmationDialogue
      :visible="showDialogue"
      @confirm="onConfirm"
      @cancel="onCancel"
    ></ConfirmationDialogue>
    <div>
      <RouterView></RouterView>
    </div>
  </div>
</template>
