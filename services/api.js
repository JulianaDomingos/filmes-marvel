import axios from 'axios';

export const http = axios.create({
    baseURL:'https://api.themoviedb.org/3/discover/movie?api_key=b8a2f74cdecf0bf83b35203a78515973&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=420&with_watch_monetization_types=flatrate'
});
