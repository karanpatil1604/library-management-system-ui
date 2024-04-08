<template>
  <div class="shadow rounded-1 p-4 mt-4 col-md-4 offset-md-4">
    <div class="mt-2">
      <div class="text-center fw-semibold fs-2">Login</div>
    </div>
    <hr />
    <form class="fs-6">
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="password" placeholder="secure$9418" />
        <label for="password">Password</label>
      </div>

      <div class="mb-3 form-check ms-2">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" checked />
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
      </div>
      <div class="mb-3 form-text">
        Don't have an account? <router-link to="/register">Register</router-link>
      </div>

      <div class="text-start d-flex flex-column gap-1 w-100">
        <button type="submit" class="btn btn-primary">Log In</button>
        <!-- <button type="submit" class="btn btn-subtle me-2">Cancel</button> -->
      </div>
    </form>
  </div>
</template>
