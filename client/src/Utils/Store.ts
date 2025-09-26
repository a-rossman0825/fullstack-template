import { logger } from "./Logger"

type Constructor<T> = new (data?: any) => T

export class AppStore {
  private appName: string

  constructor(appName: string) {
    this.appName = appName
  }

  private keyName(key: string): string {
    return `${this.appName}_${key}`
  }

  save(key: string, value: unknown): void {
    try {
      const keyName = this.keyName(key)
      let data: string | undefined = typeof value !== "string" ? JSON.stringify(value) : (value as string)

      if (value === undefined || value === null) {
        window.localStorage.removeItem(keyName)
      } else {
        window.localStorage.setItem(keyName, data)
      }
    } catch (error) {
      logger.error("[SAVING_STATE]", { key, value })
    }
  }

  load<T>(key: string, instanceType?: Constructor<T> | [Constructor<T>]): T | T[] | string | null {
    try {
      const keyName = this.keyName(key)
      const stored = window.localStorage.getItem(keyName)
      if (!instanceType) return stored

      const isArrayType = Array.isArray(instanceType)
      const type = isArrayType ? instanceType[0] : instanceType
      const data = stored ? JSON.parse(stored) : isArrayType ? [] : {}

      if (isArrayType && Array.isArray(data) && type) {
        return data.map((i: any) => new type(i))
      }

      if (!isArrayType && type && data) {
        return new type(data)
      }

      if (!isArrayType && typeof data === "object" && !Object.keys(data).length) {
        return null
      }

      return data
    } catch (error) {
      logger.error("[ATTEMPTING_TO_LOAD_STATE]", { key, instanceType })
      return null
    }
  }
}