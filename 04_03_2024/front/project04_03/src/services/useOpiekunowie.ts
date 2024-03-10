import { useQuery } from "@tanstack/react-query";
import { Opiekunowie } from "../types/opiekunowie";

export const getOpiekunowie = async (): Promise<Opiekunowie[]> => {
    const response = await fetch(`http://localhost:3000/api/opiekunowie`)
    return response.json()
}

export const useOpiekunowie = () => {
    return useQuery<Opiekunowie[], unknown>({queryKey: ['opiekunowie'], queryFn: getOpiekunowie})
}