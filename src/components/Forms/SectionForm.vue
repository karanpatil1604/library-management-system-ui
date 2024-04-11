<script setup></script>
<template>
  <div>
    <div class="container-fluid">
      <div class="row mt-2">
        <div class="col-md-4 shadow text-center offset-md-4 p-5 rounded">
          <form class="fs-6">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Section name</label>
            </div>

            <div class="text-start d-flex flex-column gap-1 w-100">
              <button type="submit" class="btn btn-primary">Add Section</button>
              <!-- <button type="submit" class="btn btn-subtle me-2">Cancel</button> -->
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
