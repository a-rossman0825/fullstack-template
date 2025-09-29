<script setup lang="ts">
import { ref } from "vue";
import { api } from "../services/AxiosService";

interface ApiResponse {
  message: string;
}

const message = ref<string>("");
const loading = ref<boolean>(false);

const fetchExample = async () => {
  loading.value = true;
  try {
    const response = await api.get<ApiResponse>("/example");
    message.value = response.message;
  } catch (error) {
    console.error("Failed to fetch example:", error);
    message.value = "Failed to connect to API";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="text-center mb-5">
          <h1 class="display-4 fw-bold text-primary">Welcome to Your Fullstack Template</h1>
          <p class="lead text-muted">
            A modern Vue.js + TypeScript frontend with C# + EF Core backend
          </p>
        </div>

        <div class="card shadow-sm">
          <div class="card-body">
            <h2 class="card-title h4">API Connection Test</h2>
            <p class="card-text">
              Test the connection between your Vue.js frontend and C# backend:
            </p>
            <button @click="fetchExample" :disabled="loading" class="btn btn-primary me-3">
              <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
              {{ loading ? "Loading..." : "Test API" }}
            </button>
            <div v-if="message" class="mt-3">
              <div class="alert alert-success">
                <strong>API Response:</strong> {{ message }}
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-4 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">
                  <i class="mdi mdi-vuejs text-success me-2"></i>Vue.js 3
                </h5>
                <p class="card-text">Modern reactive frontend framework with Composition API</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">
                  <i class="mdi mdi-language-typescript text-primary me-2"></i>TypeScript
                </h5>
                <p class="card-text">Type-safe development with excellent IDE support</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">
                  <i class="mdi mdi-microsoft text-info me-2"></i>C# + EF Core
                </h5>
                <p class="card-text">Powerful backend with Entity Framework for data access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: none;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-2px);
}
</style>