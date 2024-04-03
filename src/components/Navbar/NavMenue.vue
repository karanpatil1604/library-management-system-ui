<template>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarScroll"
    aria-controls="navbarScroll"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarScroll">
    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px">
      <li class="nav-item">
        <RouterLink to="/" class="nav-link active">Dashboard</RouterLink>
      </li>
      <li class="nav-item"><RouterLink to="/sections" class="nav-link">Sections</RouterLink></li>
      <li class="nav-item">
        <div class="nav-link">Books</div>
      </li>
      <li class="nav-item">
        <div class="nav-link">Users</div>
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
          <li><div class="dropdown-item">Register</div></li>
          <li><div class="dropdown-item">Login</div></li>
          <li><div class="dropdown-item">Profile</div></li>
          <li><hr class="dropdown-divider" /></li>
          <li><div class="dropdown-item">Logout</div></li>
        </ul>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
