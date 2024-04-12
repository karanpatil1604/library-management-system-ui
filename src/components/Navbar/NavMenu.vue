<template>
  <button
    class="navbar-toggler col-2"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarScroll"
    aria-controls="navbarScroll"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div
    class="collapse navbar-collapse p-md-0 w-md-100 col-md-5 d-md-flex justify-content-md-end"
    id="navbarScroll"
  >
    <ul
      class="navbar-nav my-md-2 my-lg-0 navbar-nav-scroll z-100"
      style="--bs-scroll-height: 100px"
    >
      <li class="nav-item">
        <RouterLink to="/" class="nav-link" active-class="active">Dashboard</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/sections" class="nav-link" active-class="active">Sections</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/books" class="nav-link" active-class="active">Books</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/users" class="nav-link" active-class="active">Users</RouterLink>
      </li>

      <li class="nav-item dropdown">
        <div
          class="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Account
        </div>
        <ul class="dropdown-menu">
          <li><RouterLink to="/register" class="dropdown-item">Register</RouterLink></li>
          <li><RouterLink to="/login" class="dropdown-item">Login</RouterLink></li>
          <li><div class="dropdown-item">Profile</div></li>
          <li><hr class="dropdown-divider" /></li>
          <li><div class="dropdown-item">Logout</div></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
