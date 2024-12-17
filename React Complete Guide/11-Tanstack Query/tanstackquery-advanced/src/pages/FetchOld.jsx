import { useEffect, useState } from "react";
import { fetchPosts } from "../api/api";

const FetchOld = () => {

  const [posts, setPosts] = useState([]);

  const getPostsData = async () => {
    try
    {
      const response = await fetchPosts();
      console.log(response);
      if(response.status === 200){
        setPosts(response.data);
      }} 
  catch (error) {
    console.log(error);
  }}
  useEffect(()=>{
    getPostsData();
  },[])
  return (
    <>
    <div>
      <ul className="section-accordion">
        {posts?.map((data)=>{
          const { id, title, body } = data;
          return (
          <li key={id}>
            <p>{title}</p>
            <p>{body}</p>
          </li>
        )
        })}
      </ul>
    </div>
    </>
  );
}

export default FetchOld;


// const [posts, setPosts] = useState([]);

// const getPostsData = async () => {
//   try {
//     // const response = await fetchPosts("https://jsonplaceholder.typicode.com/posts");
//     const response = await fetchPosts();
//     console.log(response);
//     //if the response is 200 then set the posts to the data, otherwise set it to an empty array
//     response.status === 200 ? setPosts(response.data) : [];
//   } catch (error) {
//     console.log(error);
//   }
// };

// useEffect(() => {
//   getPostsData();
// }, []);


// <div>
//       <ul className="section-accordion">
//       {posts.map((data)=>{
//         const {id, title, body} = data;
//         return (
//           <li key={id}>
//             <p>{title}</p>
//             <p>{body}</p>
//           </li>
//         )
//       })}
//       </ul>
//       </div>
