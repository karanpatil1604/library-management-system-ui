<template>
  <div>
    <h3>Books Issued Over Time</h3>
    <canvas ref="trendChart"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js'

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip)

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const trendChart = ref(null)

onMounted(() => {
  const ctx = trendChart.value.getContext('2d')
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: props.data.map((item) => item.date),
      datasets: [
        {
          label: 'Books Issued',
          data: props.data.map((item) => item.count),
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1
        }
      ]
    },
    options: {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day'
          }
        },
        y: {
          beginAtZero: true
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
