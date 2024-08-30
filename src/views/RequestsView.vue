<script setup>
import RequestCard from '@/components/Cards/RequestCard.vue'
import { computed, onBeforeMount, ref } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import ApiService from '@/services/ApiService.js'
import AlertService from '@/services/AlertService.js'
import ConfirmationDialogue from '@/components/Popups/ConfirmationDialogue.vue'
import { useRoute } from 'vue-router'

const requests = ref([])
const confirmMessage = ref('')
const confirmClass = ref('')
const confirmButton = ref('')
const action = ref('')
const requestId = ref('')
const showDialogue = ref(false)

const data = ref({
  status: '',
  action: 'update'
})
const authStore = useAuthStore()
const fetchRequests = async () => {
  try {
    const res = await ApiService.get('/requests')
    if (res.status) {
      AlertService.showAlert(res.data.message, 'danger')
    } else {
      requests.value = res
    }
  } catch (error) {
    AlertService.showAlert('Failed to fetch requests', 'danger')
  }
}

const onConfirm = async () => {
  try {
    const res = await ApiService.put(`/requests/${requestId.value}`, data.value, {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      'Content-Type': 'application/json'
    })
    if (!res.status) {
      AlertService.showAlert('Request updated successfully!', 'success')
      await fetchRequests()
    } else {
      AlertService.showAlert(res.data.message, 'danger')
    }
  } catch (error) {
    AlertService.showAlert('An error occurred while updating the request', 'danger')
  }
  showDialogue.value = false
}

const onAccept = (reqId) => {
  action.value = 'accept'
  requestId.value = reqId
  data.value.status = 'issued'
  confirmMessage.value = 'Are you sure you want to issue the book to the user?'
  confirmButton.value = 'Accept'
  confirmClass.value = 'success'
  showDialogue.value = true
}

const onReject = (reqId) => {
  action.value = 'reject'
  requestId.value = reqId
  data.value.status = 'rejected'
  confirmMessage.value = 'Are you sure you want to reject this request?'
  confirmButton.value = 'Reject'
  confirmClass.value = 'danger'
  showDialogue.value = true
}
const onReturn = (reqId) => {
  action.value = 'return'
  requestId.value = reqId
  data.value.status = 'returned'
  confirmMessage.value = 'Are you sure you want to return this Book?'
  confirmButton.value = 'Return'
  confirmClass.value = 'warning'
  showDialogue.value = true
}

const onRevoke = (reqId) => {
  action.value = 'revoke'
  requestId.value = reqId
  data.value.status = 'revoked'
  confirmMessage.value = 'Are you sure you want to revoke this request?'
  confirmButton.value = 'Revoke'
  confirmClass.value = 'warning'
  showDialogue.value = true
}

const onCancel = () => {
  showDialogue.value = false
}
const isAdmin = computed(() => authStore.userRole === 'admin')

const filteredRequests = computed(() => {
  if (!isAdmin.value) {
    return requests.value.filter((request) => request.user.id == authStore.user.id)
  }
  return requests.value
})

onBeforeMount(() => {
  fetchRequests()
})
</script>

<template>
  <h1>List of requests</h1>
  <div class="container-fluid">
    <div class="w-100 mt-3">
      <div
        class="row d-md-flex d-none justify-content-evenly rounded p-2 mx-1 border border-secondary"
      >
        <div class="col-md-3 text-center text-dark">Book Title</div>
        <div class="col-md-3 text-center text-dark">User Name</div>
        <div class="col-md-3 text-center text-dark">Request Status</div>
        <div class="col-md-3 text-center text-dark">Action</div>
      </div>
    </div>
    <RequestCard
      v-for="request in filteredRequests"
      :key="request.id"
      @accept="onAccept(request.id)"
      @reject="onReject(request.id)"
      @revoke="onRevoke(request.id)"
      @return="onReturn(request.id)"
      :request="request"
    ></RequestCard>
  </div>

  <ConfirmationDialogue
    :message="confirmMessage"
    :visible="showDialogue"
    @confirm="onConfirm"
    :confirm-button="confirmButton"
    :button-class="confirmClass"
    @cancel="onCancel"
  ></ConfirmationDialogue>
</template>

<style scoped></style>
