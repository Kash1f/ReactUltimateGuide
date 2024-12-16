import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});


//to fetch the data

export const fetchPosts = async () => {
  return api.get("/posts");
};

