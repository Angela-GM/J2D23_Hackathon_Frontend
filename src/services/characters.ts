import { apiClient } from "./apiClient"

export const getAllCharacters = async (page:number) => {
    return apiClient.get(`character?page=${page}`)
}


export const searchCharacters = async (name: string, page: string) => {
    parseInt(page)
    return apiClient.get(`character/?page=${page}&name=${name}`)
}

export const getAllCharacterDetailsById = async (id: string | undefined) => {
    return apiClient.get(`character/${id}`)
}


