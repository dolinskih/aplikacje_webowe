import { useQuery } from "@tanstack/react-query";
import { Karmienie } from "../types/karmienie";

export const getKarmienie = async (): Promise<Karmienie[]> => {
    const response = await fetch(`http://localhost:3000/api/karmienie`)
    return response.json()
}

export const useKarmienie = () => {
    return useQuery<Karmienie[], unknown>({queryKey: ['karmienie'], queryFn: getKarmienie})
}