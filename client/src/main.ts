import { createApp } from 'vue'
import App from './App.vue'

// Styles
import '@/assets/scss/style.scss' // your SCSS from school project
import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'

// Axios service (already typed and ready)
import { api } from './services/AxiosService'

// Optional: router (uncomment when you add router.ts)
// import { router } from './router'

// Optional: register global components (uncomment when you add registerGlobalComponents.ts)
import { registerGlobalComponents } from './utils/registerGlobalComponents.ts'

const root = createApp(App)

async function init() {
  // Optional: register global components
  await registerGlobalComponents(root)

  // Optional: router
  // root.use(router)

  root.mount('#app')
}

init()

// Optional: expose Axios globally if you want
export { api }