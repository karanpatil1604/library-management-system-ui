<script setup>
const props = defineProps(['title', 'stat', 'icon', 'tag', 'strong', 'iconBg'])
</script>
<template>
  <div class="col-12 col-md-6 col-lg-3">
    <div class="p-4 shadow-sm rounded mb-0 border">
      <div class="d-flex justify-content-between mb-3">
        <div>
          <span class="fw-medium mb-3">{{ props.title }}</span>
          <div class="fw-medium">{{ props.stat }}</div>
        </div>
        <slot name="icon"></slot>
      </div>
      <span class="text-success fw-medium">{{ props.strong }} </span>
      <span class="text-secondary"> {{ ' ' + props.tag }}</span>
    </div>
  </div>
</template>
