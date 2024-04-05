<script setup>
import BarChart from '@/components/Charts/BarChart.vue'
import ScatterChart from '@/components/Charts/ScatterChart.vue'
</script>

<template>
  <main>
    <div class="mt-2 mx-2 px-2 text-center">
      <div class="row my-2" style="height: 200px">
        <div class="col-sm-12 col-md-3 bg-warning rounded-0">One</div>
        <div class="col-sm-12 col-md-3 bg-success rounded-0">Two</div>
        <div class="col-sm-12 col-md-3 bg-danger rounded-0">Three</div>
        <div class="col-sm-12 col-md-3 bg-primary rounded-0">Four</div>
      </div>
      <div class="row my-2 gap-2" style="height: 400px">
        <div class="col border border-success rounded-1">
          <BarChart
            aria-label="Sales figures for the years 2022 to 2024. Sales in 2022: 987, Sales in 2023: 1209, Sales in 2024: 825."
            ref="bar"
          ></BarChart>
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
