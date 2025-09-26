import type { App, Component } from 'vue'

export async function registerGlobalComponents(root: App<Element>) {
  const components: Record<string, () => Promise<{ default: Component }>> =
    import.meta.glob('../components/globals/*.vue', { eager: false }) as any

  for (const fileName in components) {
    const componentName = fileName
      .substring(fileName.lastIndexOf('/') + 1)
      .replace(/\.\w+$/, '')

    const loader = components[fileName]
    if (!loader) continue // <-- Type guard, skip if undefined

    const module = await loader()
    root.component(componentName, module.default)
  }
}