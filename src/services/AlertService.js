import { reactive } from 'vue'

const state = reactive({
  messages: []
})

const showAlert = (message, type = 'info', duration = 5000) => {
  state.messages.push({ message, type, duration })
  setTimeout(() => {
    state.messages.shift()
  }, duration)
}

const clearAlerts = () => {
  state.messages = []
}

export default {
  state,
  showAlert,
  clearAlerts
}
