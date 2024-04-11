<script setup>
import SectionCard from '@/components/Cards/SectionCard.vue'
</script>

<template>
  <div class="p-2 m-2">
    <div class="w-100 d-md-flex justify-content-end mb-2">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-outline-info"
        data-bs-toggle="modal"
        data-bs-target="#sectionFormModal"
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
  <div
    class="modal fade"
    id="sectionFormModal"
    tabindex="-1"
    aria-labelledby="sectionFormModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="sectionFormModalLabel">Add new section</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form class="fs-6">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Section name</label>
            </div>

            <div class="text-start d-flex flex-column gap-1 w-100">
              <button type="button" class="btn btn-primary">Add Section</button>
              <!-- <button type="submit" class="btn btn-subtle me-2">Cancel</button> -->
            </div>
          </form>
        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div> -->
      </div>
    </div>
  </div>
</template>
