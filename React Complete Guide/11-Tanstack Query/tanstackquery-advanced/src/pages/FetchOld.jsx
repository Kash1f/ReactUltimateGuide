import { useEffect, useState } from "react"
import { fetchPosts } from "../api/api"


const FetchOld = () => {

  const [posts, setPosts] = useState([])

  const getPostsData = async () => {
   try{
    // const response = await fetchPosts("https://jsonplaceholder.typicode.com/posts");
    const response = await fetchPosts();

   }catch(error){
     console.log(error)
   }
  }

  useEffect(()=>{
    getPostsData();
  },[])

  return (
    <>
<h1>Hello</h1>
 
    </>
  )
}

export default FetchOld;
