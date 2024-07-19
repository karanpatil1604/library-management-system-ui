<script setup>
const props = defineProps(['label', 'buttonClass'])
</script>
<template>
  <button
    type="button"
    :class="props.buttonClass ? props.buttonClass : 'border border-none bg-white'"
  >
    <slot>
      <span><slot name="icon"></slot></span>

      <span>{{ label }}</span>
    </slot>
  </button>
</template>
