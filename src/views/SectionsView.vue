<script setup>
import SectionCard from '@/components/Cards/SectionCard.vue'
import SectionForm from '@/components/Forms/SectionForm.vue'
</script>

<template>
  <div class="p-2 m-2">
    <div class="w-100 d-md-flex justify-content-end mb-2">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-outline-info"
        data-bs-toggle="modal"
        data-bs-target="#sectionCreateFormModal"
      >
        + Add Section
      </button>
    </div>
    <div class="row row-cols-md-4 gy-3 row-cols-2">
      <SectionCard></SectionCard>
      <SectionCard></SectionCard>
      <SectionCard></SectionCard>
      <SectionCard></SectionCard>
      <SectionCard></SectionCard>
      <SectionCard></SectionCard>
    </div>
    <div>
      <RouterView></RouterView>
    </div>
  </div>

  <!-- Modal -->
  <SectionForm new-section="true" id="sectionCreateForm"></SectionForm>
  <SectionForm></SectionForm>
</template>
