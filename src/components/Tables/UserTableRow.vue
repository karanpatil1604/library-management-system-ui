<script setup>
defineProps(['serial_num'])

const randomNumber = () => {
  return 1 + Math.floor(Math.random() * 5)
}
</script>
<template>
  <tr>
    <th scope="row">{{ $props.serial_num }}</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
    <td>{{ randomNumber() }}</td>
    <td>{{ randomNumber() }}</td>
  </tr>
</template>
<style scoped></style>
