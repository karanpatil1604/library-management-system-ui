<script setup>
import UserTableRow from './UserTableRow.vue'
</script>
<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col"># Book Requests</th>
          <th scope="col"># Books Issued</th>
          <!-- <th scope="col"></th> -->
        </tr>
      </thead>
      <tbody>
        <UserTableRow
          v-for="i in Array(12)
            .fill()
            .map((_, idx) => idx + 1)"
          :key="i"
          :serial_num="i"
        ></UserTableRow>
      </tbody>
    </table>
  </div>
</template>
<style scoped></style>
