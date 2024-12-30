import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/

// URL DA API: /movie/now_playing?api_key=eb00225ca2c6171c7acb91185ff47566&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
