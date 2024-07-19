<script setup>
const props = defineProps(['iconName', 'iconText', 'iconBG'])
</script>
<template>
  <div
    :class="props.iconBG"
    class="d-flex align-items-center justify-content-center rounded"
    style="width: 2.5rem; height: 2.5rem"
  >
    <i :class="props.iconName + ' ' + props.iconText" class="pi"></i>
  </div>
</template>
<style scoped></style>
