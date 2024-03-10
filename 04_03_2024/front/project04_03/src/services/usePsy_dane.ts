import { useQuery } from "@tanstack/react-query";
import { Psy_dane } from "../types/psy_dane";

export const getPsy_dane = async (): Promise<Psy_dane[]> => {
    const response = await fetch(`http://localhost:3000/api/psy_dane`)
    return response.json()
}

export const usePsy_dane = () => {
    return useQuery<Psy_dane[], unknown>({queryKey: ['psy_dane'], queryFn: getPsy_dane})
}