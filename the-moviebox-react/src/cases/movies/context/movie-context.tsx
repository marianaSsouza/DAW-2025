import { createContext, useState, type ReactNode } from "react"
import type { MovieDTO } from "../services/movie.service"

type MovieContextProps = {
    selectedMovie: MovieDTO | null;
    setSelectedMovie: (movie: MovieDTO) => void;
}

const MovieContext = createContext<MovieContextProps | undefined> (undefined);


export function MovieContextProvider({
    children
}: {children: ReactNode}) {
    const[ selectedMovie,  setSelectedMovie] = useState<MovieDTO | null>(null);

   

    return (

        <MovieContext.Provider value={{selectedMovie, setSelectedMovie}}>
            {children}
        </MovieContext.Provider>

    )
}

export default MovieContext;

