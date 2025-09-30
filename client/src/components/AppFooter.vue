<script setup lang="ts">
// Footer component
</script>

<template>
  <footer class="bg-dark mt-5 py-4 border-top">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h6 class="fw-bold text-light">Technologies</h6>
          <ul class="list-unstyled">
            <li class="mb-1">
              <a href="https://vuejs.org" target="_blank" class="text-decoration-none text-light">
                <i class="mdi mdi-vuejs me-1"></i>Vue.js
              </a>
            </li>
            <li class="mb-1">
              <a href="https://www.typescriptlang.org" target="_blank" class="text-decoration-none text-light">
                <i class="mdi mdi-language-typescript me-1"></i>TypeScript
              </a>
            </li>
            <li class="mb-1">
              <a href="https://vitejs.dev" target="_blank" class="text-decoration-none text-light">
                <i class="mdi mdi-lightning-bolt me-1"></i>Vite
              </a>
            </li>
            <li class="mb-1">
              <a href="https://docs.microsoft.com/en-us/dotnet/" target="_blank"
                class="text-decoration-none text-light">
                <i class="mdi mdi-microsoft me-1"></i>.NET Core
              </a>
            </li>
          </ul>
        </div>

        <div class="col-md-3">
          <h6 class="fw-bold text-light">Resources</h6>
          <ul class="list-unstyled">
            <li class="mb-1">
              <a href="#" class="text-decoration-none text-light">
                <i class="mdi mdi-book me-1"></i>Documentation
              </a>
            </li>
            <li class="mb-1">
              <a href="https://github.com/a-rossman0825" target="_blank" class="text-decoration-none text-light">
                <i class="mdi mdi-github me-1"></i>GitHub
              </a>
            </li>
            <li class="mb-1">
              <a href="https://github.com/a-rossman0825/fullstack-template/issues" target="_blank" class="text-decoration-none text-light">
                <i class="mdi mdi-bug me-1"></i>Issues
              </a>
            </li>
            <li class="mb-1">
              <a href="mailto:anthony.rossman0825@gmail.com" class="text-decoration-none text-light">
                <i class="mdi mdi-help-circle me-1"></i>Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr class="my-4" />

      <div class="row align-items-center">
        <div class="col-md-6">
          <p class="text-light mb-0 small">
            © {{ new Date().getFullYear() }} AJ's FullStack Template. All rights reserved.
          </p>
        </div>
        <div class="col-md-6 text-md-end">
          <div class="text-light small">
            Made with
            <i class="mdi mdi-heart text-danger mx-1"></i>
            for developers
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a:hover {
  color: var(--bs-success) !important;
  transition: color 0.2s ease-in-out;
}

.border-top {
  border-color: rgba(0, 0, 0, 0) !important;
}
</style>