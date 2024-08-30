<script setup>
import BarChart from '@/components/Charts/BarChart.vue'
import ScatterChart from '@/components/Charts/ScatterChart.vue'
import StatsPanel from '@/components/Panel/StatsPanel.vue'
import SectionChart from '@/components/Charts/SectionChart.vue'
import IssueTrendChart from '@/components/Charts/IssueTrendChart.vue'
import BookStatusChart from '@/components/Charts/BookStatusChart.vue'
import ApiService from '@/services/ApiService.js'

const router = useRouter()

const authStore = useAuthStore()

const isAdmin = computed(() => authStore.userRole === 'admin')

import { ref, onMounted, computed } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { useRoute, useRouter } from 'vue-router'

const totalUsers = ref(0)
const totalSections = ref(0)
const totalIssues = ref(0)
const totalBooks = ref(0)
const booksBySection = ref([])
const issuedVsAvailableBooks = ref({})
const booksIssuedOverTime = ref([])
const topRatedBooks = ref([])

async function fetchData() {
  totalUsers.value = (await ApiService.get('/total_users')).total_users
  totalSections.value = (await ApiService.get('/total_sections')).total_sections
  totalBooks.value = (await ApiService.get('/total_books')).total_books
  totalIssues.value = (await ApiService.get('/total_issues')).total_issues
  booksBySection.value = await ApiService.get('/books_by_section')
  issuedVsAvailableBooks.value = await ApiService.get('/issued_vs_available_books')
  booksIssuedOverTime.value = await ApiService.get('/books_issued_over_time')
  topRatedBooks.value = await ApiService.get('/top_rated_books')
}

onMounted(fetchData)
</script>

<template>
  <div class="row">
    <div class="col text-center"></div>
  </div>
  <main>
    <div class="mt-2 mx-2 px-2 text-center">
      <!-- <StatsPanel style="height: 200px" /> -->
      <StatsPanel
        :total_books="totalBooks"
        :total_issues="totalIssues"
        :total_sections="totalSections"
        :total_users="totalUsers"
        class="mt-2 mb-4"
      />
      <div class="row my-2 gap-2">
        <div class="col border border-success rounded-1">
          <BarChart aria-label="" ref="bar"></BarChart>
        </div>
        <div class="col">
          <ScatterChart></ScatterChart>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.row {
  margin: 0;
  padding: 0;
}
</style>
