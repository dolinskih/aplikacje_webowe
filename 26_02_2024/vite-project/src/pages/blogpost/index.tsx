import { useParams } from "react-router-dom"
import { usePost } from "../../service/usePost"

export default function BlogPost(){
    const {id} = useParams<{id: string}>()

    const {data: post, isLoading: loading, error: error} = usePost(Number(id))

    return (
        <div>
            {loading 
                ? <p>Loading...</p>
                : (error
                    ? <p>Błąd</p>
                    : post
                    ? (
                        <div>
                            <h1>{post?.title}</h1>
                            <p>{post?.body}</p>
                        </div>
                    )
                    : <p>Post not found</p>  
                )
            }
        </div>
    )
}