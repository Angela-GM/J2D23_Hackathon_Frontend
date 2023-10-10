import axios, { AxiosError } from 'axios'

const BASE_URL = 'https://rickandmortyapi.com/api/'

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})

apiClient.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response) {
        console.error('Error de respuesta:', error.response.status, error.response.data);
      } else if (error.request) {
        console.error('No se recibió respuesta del servidor');
      } else {
        console.error('Error de configuración de solicitud:', error.message);
      }
      return Promise.reject(error);
    }
  );