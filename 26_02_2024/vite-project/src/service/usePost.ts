import { useQuery } from "@tanstack/react-query";
import { Post } from "../types";

export const getPost = async(id: number): Promise<Post> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return await response.json() as Promise<Post>
}

export const usePost = (id: number)=>{
    return useQuery<Post, unknown>({queryKey: ['post'], queryFn: () => getPost(id)})
}