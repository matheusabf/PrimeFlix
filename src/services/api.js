
import axios from 'axios';
// Base da URL https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/movie/now_playing?api_key=a4b5ebdabc4275e3701c15fce0f1f6c9&language=pt-BR


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;