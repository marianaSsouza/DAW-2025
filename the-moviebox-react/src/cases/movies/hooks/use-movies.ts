import { useContext } from "react";
import MovieContext from "../context/movie-context";

export function useMovies(){

    const context = useContext(MovieContext)
    return context;

}