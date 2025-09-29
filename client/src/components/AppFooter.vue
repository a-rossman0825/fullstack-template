<script setup lang="ts">
// Footer component
</script>

<template>
  <footer class="bg-light mt-5 py-4 border-top">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5 class="fw-bold text-primary">Fullstack Template</h5>
          <p class="text-muted mb-2">
            A modern Vue.js + TypeScript frontend with C# + EF Core backend template
            for rapid development.
          </p>
          <p class="text-muted small">
            Built with ❤️ using modern web technologies.
          </p>
        </div>

        <div class="col-md-3">
          <h6 class="fw-bold">Technologies</h6>
          <ul class="list-unstyled">
            <li class="mb-1">
              <a href="https://vuejs.org" target="_blank" class="text-decoration-none text-muted">
                <i class="mdi mdi-vuejs me-1"></i>Vue.js
              </a>
            </li>
            <li class="mb-1">
              <a href="https://www.typescriptlang.org" target="_blank" class="text-decoration-none text-muted">
                <i class="mdi mdi-language-typescript me-1"></i>TypeScript
              </a>
            </li>
            <li class="mb-1">
              <a href="https://vitejs.dev" target="_blank" class="text-decoration-none text-muted">
                <i class="mdi mdi-lightning-bolt me-1"></i>Vite
              </a>
            </li>
            <li class="mb-1">
              <a href="https://docs.microsoft.com/en-us/dotnet/" target="_blank"
                class="text-decoration-none text-muted">
                <i class="mdi mdi-microsoft me-1"></i>.NET Core
              </a>
            </li>
          </ul>
        </div>

        <div class="col-md-3">
          <h6 class="fw-bold">Resources</h6>
          <ul class="list-unstyled">
            <li class="mb-1">
              <a href="#" class="text-decoration-none text-muted">
                <i class="mdi mdi-book me-1"></i>Documentation
              </a>
            </li>
            <li class="mb-1">
              <a href="#" class="text-decoration-none text-muted">
                <i class="mdi mdi-github me-1"></i>GitHub
              </a>
            </li>
            <li class="mb-1">
              <a href="#" class="text-decoration-none text-muted">
                <i class="mdi mdi-bug me-1"></i>Issues
              </a>
            </li>
            <li class="mb-1">
              <a href="#" class="text-decoration-none text-muted">
                <i class="mdi mdi-help-circle me-1"></i>Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr class="my-4" />

      <div class="row align-items-center">
        <div class="col-md-6">
          <p class="text-muted mb-0 small">
            © {{ new Date().getFullYear() }} Fullstack Template. All rights reserved.
          </p>
        </div>
        <div class="col-md-6 text-md-end">
          <div class="text-muted small">
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
footer a:hover {
  color: var(--bs-primary) !important;
  transition: color 0.2s ease-in-out;
}

.border-top {
  border-color: rgba(0, 0, 0, 0.1) !important;
}
</style>