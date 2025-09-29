<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <AppHeader />

    <main class="flex-grow-1">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

main {
  background-color: #f8f9fa;
}
</style>
