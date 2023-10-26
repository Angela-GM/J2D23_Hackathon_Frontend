import { apiClient } from "./apiClient"

export const getAllCharacters = async (page:number) => {
    return apiClient.get(`character?page=${page}`)
}

export const searchCharacters = async (name: string) => {
    return apiClient.get(`character/?name=${name}`)
}