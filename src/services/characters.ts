import { apiClient } from "./apiClient"

export const getAllCharacters = (page:number) => {
    return apiClient.get(`character?page=${page}`)
}

export const searchCharacters = (name: string) => {
    return apiClient.get(`character/?name=${name}`)
}