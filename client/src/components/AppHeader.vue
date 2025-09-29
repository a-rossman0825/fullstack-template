<script setup lang="ts">
import { RouterLink } from "vue-router";

// You can add props here if needed
// const props = defineProps<{
//   title?: string;
// }>();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
    <div class="container">
      <RouterLink to="/" class="navbar-brand fw-bold">
        <i class="mdi mdi-cube-outline me-2"></i>
        Fullstack Template
      </RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" active-class="active">
              <i class="mdi mdi-home me-1"></i>
              Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/examples" class="nav-link" active-class="active">
              <i class="mdi mdi-code-tags me-1"></i>
              Examples
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link" active-class="active">
              <i class="mdi mdi-information me-1"></i>
              About
            </RouterLink>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/login" class="nav-link" active-class="active">
              <i class="mdi mdi-login me-1"></i>
              Login
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand {
  font-size: 1.5rem;
}

.nav-link {
  border-radius: 0.375rem;
  margin: 0 0.25rem;
  transition: all 0.2s ease-in-out;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: 500;
}

@media (max-width: 991.98px) {
  .nav-link {
    margin: 0.25rem 0;
  }
}
</style>