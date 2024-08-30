<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { ref } from 'vue'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js/auto'
import ApiService from '@/services/ApiService.js'
import { onMounted } from 'vue'

const booksBySection = ref([])
onMounted(async () => {
  booksBySection.value = await ApiService.get('/books_by_section')
})
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: booksBySection.value.map((section) => section.name),
        datasets: [{ data: booksBySection.value.map((section) => section.count) }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>
