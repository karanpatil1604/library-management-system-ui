<script setup>
import { ref } from 'vue'
const props = defineProps({
  id: {
    type: String,
    default: 'sectionEditForm'
  },
  newSection: {
    type: Boolean,
    default: false
  },
  section: {
    type: Object,
    default: null
  }
})

const defaultSection = ref({
  section_name: 'defaultSection',
  section_id: '-1'
})
</script>
<template>
  <div
    class="modal fade"
    :id="`${props.id}Modal`"
    tabindex="-1"
    aria-labelledby="`${props.id}ModalLabel`"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" :id="`${props.id}ModalLabel`">Add new section</h1>
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
                v-if="props.newSection"
              />
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-else
                :value="defaultSection.section_name + defaultSection.section_id"
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
<style scoped></style>
