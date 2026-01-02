import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        // api_key: '6c06adb9114387f2366eec134782991b',
        api_key: THE_MOVIE_DB_KEY ?? 'no-key',
        language: 'en'
    }
})