import Heading from "../../components/heading"
import { Link } from "react-router-dom"
import { usePosts } from "../../service/usePosts"

function Blog(){
    // const [posts, setPosts] = useState<Post[]>([])
    // const [loading, setLoading] = useState<boolean>(false)
    // const [error, setError] = useState<string | null>(null)

    // useEffect(()=>{
    //     setLoading(true)
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json() as Promise<Post[]>)
    //     .then(data => {
    //         setPosts(data)
    //     })
    //     .catch(error => {
    //         setError(error.message)
    //     })
    //     .finally(()=>{
    //         setLoading(false)
    //     })
    // }, [])

    const {data: posts, isLoading: loading, error: error} = usePosts()

    return (
        <div>
            <Heading title={'Blog'} />
            {loading 
                ? <p>Loading...</p>
                : (error
                    ? <p>Błąd</p>
                    : posts?.map(post => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <Link to={`/blog/${post.id}`}>Read more</Link>
                        </div>
                    ))
                    )    
            }
        </div>
    )
}

export default Blog