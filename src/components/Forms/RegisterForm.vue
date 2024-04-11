<template>
  <div class="shadow rounded-1 p-4 mt-4 col-md-6 offset-md-3">
    <div class="mt-2 gy-2">
      <div class="text-center fw-semibold fs-2">New User</div>
    </div>
    <hr />
    <form class="mt-1 fs-6">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="firstName"
              aria-describedby="fnameHelp"
              placeholder="john"
            />
            <label for="firstName">First Name</label>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="lastName"
              aria-describedby="lnameHelp"
              placeholder="doe"
            />
            <label for="lastName">Last Name</label>
          </div>
        </div>
      </div>

      <!-- <div class="input-group mb-3">
        <span class="input-group-text">@</span>
        <div class="form-floating">
          <input
            type="text"
            class="form-control fs-6"
            id="floatingInputGroup1"
            placeholder="Username"
          />
          <label for="floatingInputGroup1">Username</label>
        </div>
      </div> -->
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="user@mail.com"
        />
        <label for="email">Email address</label>
        <div id="emailHelp" class="form-text ms-1">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="passwork1" placeholder="kolha#pur09" />
            <label for="passwork1" class="form-label">Password</label>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="password2" placeholder="kolha#pur09" />
            <label for="password2" class="form-label">Confirm Password</label>
          </div>
        </div>
      </div>

      <div class="mb-3 form-text">
        Already Have account? <router-link to="/login">Login</router-link>
      </div>
      <div class="text-start d-flex flex-column gap-1 w-100">
        <button type="submit" class="btn btn-primary">Sign Up</button>
        <!-- <button type="submit" class="btn btn-subtle me-2">Cancel</button> -->
      </div>
    </form>
  </div>
</template>
