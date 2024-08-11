<script setup>
import { defineEmits } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: 'Are you sure?'
  },
  confirmButton: {
    type: String,
    default: 'Yes'
  },
  buttonClass: {
    type: String,
    default: 'Yes'
  }
})

const emits = defineEmits(['confirm', 'cancel'])

const confirm = () => emits('confirm')
const cancel = () => emits('cancel')
</script>

<template>
  <div v-if="visible" class="modal fade show" style="display: block" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirm Deletion</h5>
          <button type="button" class="btn-close" @click="cancel" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>{{ props.message }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="cancel">Cancel</button>
          <button type="button" :class="'btn btn-' + buttonClass" @click="confirm">
            {{ props.confirmButton }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  display: none;
}
</style>
