import { jwtDecode } from 'jwt-decode'

function isAuthenticated() {
  const token = localStorage.getItem('authToken')
  return !!token
}

function getUserRole(token) {
  try {
    const decodedToken = jwtDecode(token)
    return decodedToken.role
  } catch (error) {
    console.error('Failed to decode token', error)
    return null
  }
}

export { isAuthenticated, getUserRole }
