import axios from "axios"

const api = axios.create({
  baseURL: "https://omdapi.com/",
})

export default getMovies = async () => {
 return api.get("?i=tt")
}

