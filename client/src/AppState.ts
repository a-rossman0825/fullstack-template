import { reactive } from 'vue'

export interface IAppState {
  // Add your app-level reactive properties here, e.g.:
  // user?: User
  // todos?: Todo[]
}

export const AppState = reactive<IAppState>({

})