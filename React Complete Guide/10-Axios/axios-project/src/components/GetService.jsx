import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omdapi.com/',
})

export const getMovies = () => {
    return api.get('?i=tt');
}