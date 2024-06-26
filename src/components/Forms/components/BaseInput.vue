<script setup>
defineProps({
  floating: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})
</script>
<template>
  <label class="form-label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
