<template>
  <div>
    <h3>Issued vs Available Books</h3>
    <canvas ref="statusChart"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(PieController, ArcElement, Tooltip, Legend)

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const statusChart = ref(null)

onMounted(() => {
  const ctx = statusChart.value.getContext('2d')
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Issued Books', 'Available Books'],
      datasets: [
        {
          data: [props.data.issued_books, props.data.available_books],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        tooltip: {
          callbacks: {
            label: (context) => `${context.label}: ${context.raw}`
          }
        }
      }
    }
  })
})
</script>

<style scoped>
canvas {
  max-width: 100%;
  height: auto;
}
</style>
