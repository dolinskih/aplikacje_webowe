import { useQuery } from "@tanstack/react-query"
import { Post } from "../types"

export const getPosts = async (): Promise<Post[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json()
}

export const usePosts = () => {
    return useQuery<Post[], unknown>({queryKey: ['posts'], queryFn: getPosts})
}