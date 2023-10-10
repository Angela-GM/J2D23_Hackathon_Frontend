import { apiClient } from "./apiClient"

export const getAllCharacters = (page:number) => {
    return apiClient.get(`character?page=${page}`)
}