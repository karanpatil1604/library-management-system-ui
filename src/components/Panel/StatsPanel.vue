<script setup>
import StatsCard from '@/components/Cards/StatsCard.vue'
import BaseIcon from '../icons/BaseIcon.vue'

const props = defineProps(['total_books', 'total_users', 'total_sections', 'total_issues'])
</script>
<template>
  <div class="row mt-1 g-md-5 gy-1">
    <StatsCard title="Total Books" :stat="props.total_books" strong="24 new" tag="since last visit">
      <template #icon>
        <BaseIcon icon-name="pi-book" icon-text="text-blue-500" icon-b-g="bg-blue-100" />
      </template>
    </StatsCard>
    <StatsCard
      title="Total Sections"
      :stat="props.total_sections"
      strong="%52+"
      tag="since last week"
    >
      <template #icon>
        <BaseIcon icon-name="pi-list" icon-text="text-burple-500" icon-b-g="bg-purple-100" />
      </template>
    </StatsCard>
    <StatsCard
      title="Total Users"
      :stat="props.total_users"
      icon="pi pi-users text-primary text-xl"
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
      title="Total Issues"
      :stat="props.total_issues"
      icon="pi pi-wave-pulse text-primary text-xl"
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
