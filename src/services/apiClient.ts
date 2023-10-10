import axios from 'axios'

const BASE_URL = 'https://rickandmortyapi.com/api/character'

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})