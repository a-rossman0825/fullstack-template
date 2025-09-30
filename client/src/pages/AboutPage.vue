<script setup lang="ts">
// About page component
</script>

<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="text-center mb-5">
          <h1 class="display-4 fw-bold text-light">About This Template</h1>
          <p class="lead text-light">
            Learn more about the technologies and architecture used in this fullstack template
          </p>
        </div>

        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="card shadow-sm h-100">
              <div class="card-header bg-warning text-dark">
                <h5 class="card-title mb-0">
                  <i class="mdi mdi-monitor me-2"></i>Frontend Technologies
                </h5>
              </div>
              <div class="card-body">
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <i class="mdi mdi-vuejs text-success me-2"></i>
                    <strong>Vue.js 3:</strong> Progressive JavaScript framework
                  </li>
                  <li class="mb-2">
                    <i class="mdi mdi-language-typescript text-secondary me-2"></i>
                    <strong>TypeScript:</strong> Static type checking
                  </li>
                  <li class="mb-2">
                    <i class="mdi mdi-lightning-bolt text-warning me-2"></i>
                    <strong>Vite:</strong> Fast build tool and dev server
                  </li>
                  <li class="mb-2">
                    <i class="mdi mdi-bootstrap text-purple me-2"></i>
                    <strong>Bootstrap 5:</strong> CSS framework
                  </li>
                  <li class="mb-2">
                    <i class="mdi mdi-sass text-pink me-2"></i>
                    <strong>SASS:</strong> CSS preprocessing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <div class="card shadow-sm h-100">
              <div class="card-header bg-success text-light">
                <h5 class="card-title mb-0">
                  <i class="mdi mdi-server me-2"></i>Backend Technologies
                </h5>
              </div>
              <div class="card-body">
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <i class="mdi mdi-microsoft text-info me-2"></i>
                    <strong>C# .NET 9:</strong> Modern web API framework
                  </li>
                  <li class="mb-2">
                    <i class="mdi mdi-database text-success me-2"></i>
                    <strong>Entity Framework Core:</strong> ORM for data access
                  </li>
                  <li class="mb-2">
                    <i class="mdi mdi-dolphin text-blue me-2"></i>
                    <strong>MySQL:</strong> Relational database
                  </li>
                  <li class="mb-2">
                    <i class="mdi mdi-api text-orange me-2"></i>
                    <strong>Swagger:</strong> API documentation
                  </li>
                  <li class="mb-2">
                    <i class="mdi mdi-auto-fix text-secondary me-2"></i>
                    <strong>AutoMapper:</strong> Object mapping
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 class="card-title h4">Architecture Overview</h3>
            <p class="card-text">
              This template follows modern fullstack development practices with clear separation of concerns:
            </p>
            <div class="row">
              <div class="col-md-6">
                <h5>Frontend Structure</h5>
                <ul>
                  <li><strong>Components:</strong> Reusable Vue components</li>
                  <li><strong>Pages:</strong> Route-level components</li>
                  <li><strong>Services:</strong> API communication layer</li>
                  <li><strong>Utils:</strong> Helper functions and utilities</li>
                  <li><strong>Router:</strong> Client-side routing</li>
                </ul>
              </div>
              <div class="col-md-6">
                <h5>Backend Structure</h5>
                <ul>
                  <li><strong>Controllers:</strong> API endpoints</li>
                  <li><strong>Models:</strong> Data entities</li>
                  <li><strong>Services:</strong> Business logic</li>
                  <li><strong>Repositories:</strong> Data access layer</li>
                  <li><strong>Migrations:</strong> Database schema management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-purple {
  color: #6f42c1 !important;
}

.text-pink {
  color: #e91e63 !important;
}

.text-blue {
  color: #0066cc !important;
}

.text-orange {
  color: #ff9800 !important;
}

.card-header {
  border-bottom: none;
}
</style>