import { useQuery } from "@tanstack/react-query";
import { Spacery } from "../types/spacery";

export const getSpacery = async (): Promise<Spacery[]> => {
    const response = await fetch(`http://localhost:3000/api/spacery`)
    return response.json()
}

export const useSpacery = () => {
    return useQuery<Spacery[], unknown>({queryKey: ['spacery'], queryFn: getSpacery})
}