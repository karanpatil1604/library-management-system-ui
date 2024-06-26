<script setup>
defineProps({
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
  <div class="form-floating">
    <input
      class="form-control"
      v-bind="$attrs"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label :for="$attrs.id">{{ label }}</label>
  </div>
</template>
