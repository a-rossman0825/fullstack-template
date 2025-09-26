import Axios, { type AxiosInstance, type AxiosRequestConfig, type InternalAxiosRequestConfig, type AxiosResponse } from 'axios'
import { baseURL } from '../env'
import { logger } from '../utils/Logger'

class AxiosService {
  private axios: AxiosInstance

  constructor() {
    this.axios = Axios.create({
      baseURL,
      timeout: 8000
    })

    this.axios.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => config,
      this.handleAxiosError
    )

    this.axios.interceptors.response.use(
      (response: AxiosResponse) => response,
      this.handleAxiosError
    )
  }

  // Generic GET
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axios.get<T>(url, config)
    return response.data
  }

  // Generic POST
  async post<T, U = any>(url: string, data?: U, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axios.post<T>(url, data, config)
    return response.data
  }

  // Generic PUT
  async put<T, U = any>(url: string, data?: U, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axios.put<T>(url, data, config)
    return response.data
  }

  // Generic DELETE
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axios.delete<T>(url, config)
    return response.data
  }

  private handleAxiosError(error: any): Promise<never> {
    if (error.response) {
      logger.warn('[📡 AXIOS_ERROR_RESPONSE_DATA]', error.response.data)
    } else if (error.request) {
      logger.warn('[📡 AXIOS_ERROR_NO_RESPONSE]', error.request)
    } else {
      logger.warn('[📡 AXIOS_ERROR_INVALID_REQUEST]', error.message)
    }
    return Promise.reject(error)
  }
}

export const api = new AxiosService()