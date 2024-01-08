import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Post } from "../../types"

export default function BlogPost(){
    const {id} = useParams<{id: string}>()

    const [post, setPost] = useState<Post | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(()=>{
        if(!id){
            setPost(null)
        } else if (isNaN(Number(id))){
            setPost(null)
        } else {
            setLoading(true)
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json() as Promise<Post | null>)
            .then(data => {
                setPost(data)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(()=>{
                setLoading(false)
            })
        }
    }, [id])

    return (
        <div>
            {loading 
                ? <p>Loading...</p>
                : (error
                    ? <p>{error}</p>
                    : post
                    ? (
                        <div>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    )
                    : <p>Post not found</p>  
                )
            }
        </div>
    )
}