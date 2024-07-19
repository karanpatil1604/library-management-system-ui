<script setup>
import UserListTable from '@/components/Tables/UserListTable.vue'
import PaginationMenu from '@/components/Panel/PaginationMenu.vue'
</script>
<template>
  <div class="container-fluid mt-2 pt-2">
    <div class="row">
      <div class="col-md-2 d-none d-md-block border border-danger vh-100">Sidebar</div>
      <div class="col-md-10">
        <div class="row">
          <h1 class="fs-2 text-center">Users List</h1>
        </div>
        <UserListTable></UserListTable>
        <PaginationMenu />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
