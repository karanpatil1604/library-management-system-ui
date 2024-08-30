<template>
  <div>
    <canvas ref="sectionChart"></canvas>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Chart } from 'chart.js'

const props = defineProps({
  data: Array
})

const sectionChart = ref(null)

watch(props.data, (newData) => {
  if (sectionChart.value) {
    const ctx = sectionChart.value.getContext('2d')
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: newData.map((item) => item.section),
        datasets: [
          {
            label: 'Number of Books',
            data: newData.map((item) => item.count),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      }
    })
  }
})
</script>

<style scoped>
canvas {
  max-width: 100%;
  height: auto;
}
</style>
