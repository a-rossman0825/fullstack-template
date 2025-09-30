<script setup lang="ts">
import { ref } from "vue";

interface LoginForm {
  email: string;
  password: string;
}

const form = ref<LoginForm>({
  email: "",
  password: "",
});

const loading = ref<boolean>(false);
const error = ref<string>("");

const handleSubmit = async () => {
  loading.value = true;
  error.value = "";

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, you would call your authentication API here
    console.log("Login attempt:", form.value);

    // For demo purposes, just show success
    alert("Login successful! (This is just a demo)");
  } catch (err: unknown) {
    console.error("Login error:", err);
    error.value = "Login failed. Please try again.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div class="card shadow">
          <div class="card-body p-4">
            <div class="text-center mb-4">
              <h1 class="h3 fw-bold text-primary">Sign In</h1>
              <p class="text-muted">Welcome back! Please sign in to your account.</p>
            </div>

            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input id="email" v-model="form.email" type="email" class="form-control" placeholder="Enter your email"
                  required />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input id="password" v-model="form.password" type="password" class="form-control"
                  placeholder="Enter your password" required />
              </div>

              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="remember" />
                <label class="form-check-label" for="remember">
                  Remember me
                </label>
              </div>

              <div v-if="error" class="alert alert-danger">
                {{ error }}
              </div>

              <button type="submit" :disabled="loading" class="btn btn-success w-100 mb-3">
                <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                {{ loading ? "Signing in..." : "Sign In" }}
              </button>
            </form>

            <div class="text-center">
              <a href="#" class="text-decoration-none">Forgot your password?</a>
            </div>

            <hr class="my-4" />

            <div class="text-center">
              <p class="text-muted mb-0">
                Don't have an account?
                <a href="#" class="text-decoration-none">Sign up</a>
              </p>
            </div>
          </div>
        </div>

        <div class="mt-4 text-center mb-3">
          <small class="text-light">
            This is a demo login form. In a real application, you would integrate
            with your authentication system.
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: none;
}

.form-control:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
}
</style>