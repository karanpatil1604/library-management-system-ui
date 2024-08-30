<script setup>
import { useAuthStore } from '@/stores/auth.js'
import { computed } from 'vue'

const useAuth = useAuthStore()
const isAdmin = computed(() => useAuth.userRole === 'admin')

defineEmits(['accept', 'reject', 'revoke', 'return'])

const props = defineProps({
  request: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <div class="w-100 mt-1">
    <div class="row d-flex justify-content-evenly rounded p-2 mx-1 border border-primary">
      <div class="col-md-3 text-center text-dark">{{ props.request.book.title }}</div>
      <div class="col-md-3 text-center text-dark">{{ props.request.user.username }}</div>
      <div class="col-md-3 text-center text-dark">
        <button class="badge text-bg-warning">
          {{ props.request.status }}
        </button>
      </div>
      <div class="d-flex gap-2 col-md-3 text-center text-dark">
        <button
          class="btn btn-outline-danger"
          v-if="props.request.status === 'requested' && isAdmin"
          @click="$emit('reject', props.request.id)"
        >
          Reject
        </button>
        <button
          class="btn btn-outline-secondary"
          v-if="props.request.status === 'issued' && isAdmin"
          @click="$emit('revoke', props.request.id)"
        >
          Revoke
        </button>
        <button
          class="btn btn-outline-info"
          v-if="props.request.status === 'requested' && isAdmin"
          @click="$emit('accept', props.request.id)"
        >
          Accept
        </button>
        <button
          class="btn btn-outline-info"
          v-if="props.request.status === 'issued' && !isAdmin"
          @click="$emit('return', props.request.id)"
        >
          Return
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
