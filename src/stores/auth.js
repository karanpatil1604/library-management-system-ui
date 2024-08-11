import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(null)
  const user = ref({ id: null, username: null, email: null })
  const userRole = ref(null)

  const initializeUserRole = async (newToken) => {
    token.value = newToken
    userRole.value = await getUserRole(newToken)
    localStorage.setItem('authToken', newToken) // Store token in local storage
  }
  const logout = async () => {
    token.value = null
    userRole.value = null
    localStorage.removeItem('authToken')
  }
  const getUserRole = async (token) => {
    try {
      const decodedToken = jwtDecode(token)
      user.value.id = decodedToken.user_id
      user.value.username = decodedToken.username
      user.value.email = decodedToken.email
      return decodedToken.role // Assuming 'role' is the key in the token payload
    } catch (error) {
      console.error('Failed to decode token', error)
      return null
    }
  }
  const checkLoggedIn = async () => {
    const savedToken = localStorage.getItem('authToken')
    if (savedToken) {
      await initializeUserRole(savedToken)
    } else {
      await logout()
    }
  }
  return { user, userRole, checkLoggedIn, logout, initializeUserRole }
})
