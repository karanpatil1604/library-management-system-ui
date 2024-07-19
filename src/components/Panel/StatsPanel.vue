<script setup>
import StatsCard from '@/components/Cards/StatsCard.vue'
import BaseIcon from '../icons/BaseIcon.vue'
</script>
<template>
  <div class="row mt-1 g-md-5 gy-1">
    <StatsCard title="Orders" stat="152" strong="24 new" tag="since last visit">
      <template #icon>
        <BaseIcon icon-name="pi-shopping-cart" icon-text="text-blue-500" icon-b-g="bg-blue-100" />
      </template>
    </StatsCard>
    <StatsCard title="Revenue" stat="$2.654" strong="%52+" tag="since last week">
      <template #icon>
        <BaseIcon icon-name="pi-map-marker" icon-text="text-burple-500" icon-b-g="bg-purple-100" />
      </template>
    </StatsCard>
    <StatsCard
      title="Customers"
      stat="152"
      icon="pi pi-shopping-cart text-primary text-xl"
      strong="24 new"
      tag="since last visit"
    >
      <template #icon>
        <BaseIcon
          icon-name="pi-shopping-cart"
          icon-text="text-orange-500"
          icon-b-g="bg-orange-100"
        />
      </template>
    </StatsCard>
    <StatsCard
      title="Orders"
      stat="152"
      icon="pi pi-shopping-cart text-primary text-xl"
      strong="24 new"
      tag="since last visit"
    >
      <template #icon>
        <BaseIcon icon-name="pi-shopping-cart" icon-text="text-cyan-500" icon-b-g="bg-cyan-100" />
      </template>
    </StatsCard>
  </div>
</template>
<style scoped></style>
