# Client - Vue.js Frontend

A modern Vue.js 3 frontend application with TypeScript, Vite, and Bootstrap 5.

## 🚀 Technologies Used

- **Vue.js 3** - Progressive JavaScript framework with Composition API
- **TypeScript** - Static type checking for better development experience
- **Vite** - Fast build tool and development server
- **Vue Router** - Client-side routing
- **Pinia** - State management (ready to use)
- **Bootstrap 5** - CSS framework for responsive design
- **SASS** - CSS preprocessing
- **Axios** - HTTP client with TypeScript support
- **ESLint + Prettier** - Code formatting and linting

## 📁 Project Structure

```
src/
├── assets/           # Static assets (images, styles)
│   ├── img/         # Images
│   └── scss/        # SASS stylesheets
├── components/       # Reusable Vue components
├── pages/           # Route-level components
├── router/          # Vue Router configuration
├── services/        # API and external service integrations
├── utils/           # Helper functions and utilities
├── models/          # TypeScript interfaces and types
├── App.vue          # Root component
└── main.ts          # Application entry point
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ and npm/yarn
- Running backend server (see ../server/README.md)

### Installation Steps

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Environment Setup:**

   ```bash
   # Copy environment template
   cp .env.example .env.local

   # Edit .env.local with your configuration
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:5173`
   - The app will hot-reload as you make changes

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:5000

# Authentication (if using)
VITE_AUTH_DOMAIN=your-domain.auth0.com
VITE_AUTH_CLIENT_ID=your-client-id
```

### Proxy Configuration

The Vite development server is configured to proxy API calls to the backend:

- Frontend: `http://localhost:5173`
- API calls to `/api/*` are proxied to `http://localhost:5000`

## 🏗️ Architecture

### Component Architecture

- **Pages**: Route-level components in `src/pages/`
- **Components**: Reusable UI components in `src/components/`
- **Global Components**: Auto-registered from `src/components/globals/`

### State Management

Pinia is included for state management:

```typescript
// src/stores/example.ts
import { defineStore } from "pinia";

export const useExampleStore = defineStore("example", () => {
  // Your store logic here
});
```

### API Integration

The Axios service provides type-safe HTTP client:

```typescript
import { api } from "@/services/AxiosService";

// GET request
const data = await api.get<ResponseType>("/endpoint");

// POST request
const result = await api.post<ResponseType>("/endpoint", payload);
```

## 🎨 Styling

### Bootstrap 5

Bootstrap is included for responsive design and utility classes.

### SASS

Custom styles are organized in `src/assets/scss/`:

- `style.scss` - Main stylesheet
- `_variables.scss` - SASS variables
- `_main.scss` - Custom styles

### Icons

Material Design Icons are included via `@mdi/font`.

## 🧪 Adding New Features

### 1. Create a New Page

```bash
# Create page component
touch src/pages/NewPage.vue

# Add route in src/router/index.ts
{
  path: '/new-page',
  name: 'new-page',
  component: () => import('../pages/NewPage.vue')
}
```

### 2. Create a Reusable Component

```bash
# Create component
touch src/components/MyComponent.vue

# Use in any page/component
<script setup lang="ts">
import MyComponent from '@/components/MyComponent.vue'
</script>
```

### 3. Add API Service

```typescript
// src/services/MyService.ts
import { api } from "./AxiosService";

export class MyService {
  static async getData() {
    return api.get<MyDataType>("/my-endpoint");
  }
}
```

## 🚨 Common Issues

### CORS Errors

- Ensure the backend server is running on port 5000
- Check that CORS is configured in the backend
- Verify proxy configuration in `vite.config.ts`

### TypeScript Errors

- Ensure all components have proper TypeScript definitions
- Check that API response types match your interfaces
- Run `npm run build` to catch type errors

### Build Issues

- Clear node_modules and reinstall if needed
- Check for conflicting dependencies
- Ensure all environment variables are set

## 📚 Additional Resources

- [Vue.js Documentation](https://vuejs.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
