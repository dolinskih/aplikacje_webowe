import { useQuery } from "@tanstack/react-query";
import { Psy } from "../types/psy";

export const getPsy = async (): Promise<Psy[]> => {
    const response = await fetch(`http://localhost:3000/api/psy`)
    return response.json()
}

export const usePsy = () => {
    return useQuery<Psy[], unknown>({queryKey: ['psy'], queryFn: getPsy})
}