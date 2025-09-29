<script setup lang="ts">
import { ref, onMounted } from "vue";
import { api } from "../services/AxiosService";

interface Example {
  id: number;
  name: string;
  createdAt: string;
}

interface ApiResponse {
  message: string;
}

const examples = ref<Example[]>([]);
const loading = ref<boolean>(false);
const apiMessage = ref<string>("");

const fetchExamples = async () => {
  loading.value = true;
  try {
    // In a real app, you would have an endpoint that returns examples
    // For now, we'll create some mock data
    examples.value = [
      { id: 1, name: "Sample Item 1", createdAt: new Date().toISOString() },
      { id: 2, name: "Sample Item 2", createdAt: new Date().toISOString() },
      { id: 3, name: "Sample Item 3", createdAt: new Date().toISOString() },
    ];
  } catch (error) {
    console.error("Failed to fetch examples:", error);
  } finally {
    loading.value = false;
  }
};

const testApiConnection = async () => {
  try {
    const response = await api.get<ApiResponse>("/example");
    apiMessage.value = response.message;
  } catch (error) {
    console.error("API test failed:", error);
    apiMessage.value = "Failed to connect to API";
  }
};

onMounted(() => {
  fetchExamples();
});
</script>

<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h1 class="h2 fw-bold text-primary">Examples & API Testing</h1>
          <button @click="testApiConnection" class="btn btn-outline-primary">
            <i class="mdi mdi-api me-2"></i>Test API Connection
          </button>
        </div>

        <div v-if="apiMessage" class="alert alert-info mb-4">
          <strong>API Response:</strong> {{ apiMessage }}
        </div>

        <div class="row">
          <div class="col-lg-8">
            <div class="card shadow-sm">
              <div class="card-header bg-light">
                <h3 class="card-title h5 mb-0">
                  <i class="mdi mdi-table me-2"></i>Data Table Example
                </h3>
              </div>
              <div class="card-body">
                <div v-if="loading" class="text-center py-4">
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <p class="mt-2 text-muted">Loading examples...</p>
                </div>

                <div v-else>
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <thead class="table-light">
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Created At</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="example in examples" :key="example.id">
                          <td>{{ example.id }}</td>
                          <td>{{ example.name }}</td>
                          <td>{{ new Date(example.createdAt).toLocaleDateString() }}</td>
                          <td>
                            <button class="btn btn-sm btn-outline-primary me-2">
                              <i class="mdi mdi-pencil"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-danger">
                              <i class="mdi mdi-delete"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="d-flex justify-content-between align-items-center mt-3">
                    <small class="text-muted">
                      Showing {{ examples.length }} entries
                    </small>
                    <nav>
                      <ul class="pagination pagination-sm mb-0">
                        <li class="page-item disabled">
                          <span class="page-link">Previous</span>
                        </li>
                        <li class="page-item active">
                          <span class="page-link">1</span>
                        </li>
                        <li class="page-item disabled">
                          <span class="page-link">Next</span>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card shadow-sm">
              <div class="card-header bg-light">
                <h3 class="card-title h5 mb-0">
                  <i class="mdi mdi-cog me-2"></i>Quick Actions
                </h3>
              </div>
              <div class="card-body">
                <div class="d-grid gap-2">
                  <button class="btn btn-success">
                    <i class="mdi mdi-plus me-2"></i>Add New Item
                  </button>
                  <button class="btn btn-info">
                    <i class="mdi mdi-refresh me-2"></i>Refresh Data
                  </button>
                  <button class="btn btn-warning">
                    <i class="mdi mdi-export me-2"></i>Export Data
                  </button>
                </div>

                <hr />

                <h6 class="fw-bold">Statistics</h6>
                <div class="row text-center">
                  <div class="col-6">
                    <div class="border rounded p-2">
                      <div class="h4 text-primary mb-0">{{ examples.length }}</div>
                      <small class="text-muted">Total Items</small>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="border rounded p-2">
                      <div class="h4 text-success mb-0">100%</div>
                      <small class="text-muted">Success Rate</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card shadow-sm mt-3">
              <div class="card-body">
                <h6 class="card-title">
                  <i class="mdi mdi-information me-2"></i>Template Features
                </h6>
                <ul class="list-unstyled small">
                  <li class="mb-1">
                    <i class="mdi mdi-check text-success me-2"></i>TypeScript Support
                  </li>
                  <li class="mb-1">
                    <i class="mdi mdi-check text-success me-2"></i>Responsive Design
                  </li>
                  <li class="mb-1">
                    <i class="mdi mdi-check text-success me-2"></i>API Integration
                  </li>
                  <li class="mb-1">
                    <i class="mdi mdi-check text-success me-2"></i>Component Architecture
                  </li>
                  <li class="mb-1">
                    <i class="mdi mdi-check text-success me-2"></i>State Management Ready
                  </li>
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
.table th {
  border-top: none;
  font-weight: 600;
}

.card-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.btn-sm {
  padding: 0.25rem 0.5rem;
}
</style>