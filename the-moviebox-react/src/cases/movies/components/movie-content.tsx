import { useEffect, useState } from "react"
import { MovieService, type MovieDTO } from "../services/movie.service"
import { MovieCard } from "./movie-card";
import { useMovies } from "../hooks/use-movies";

export function MovieContent() {
    const {setSelectedMovie} = useMovies();
    const [movies, setMovies] = useState<MovieDTO[]>([]);
    const [isloading, setIsloading] = useState<boolean>(false);

    useEffect(() => {
        setIsloading(true);
        console.log('buuu')

        MovieService.list()
        .then((result) => {setMovies(result)
            //sorteia o indice
            const index = Math.floor(Math.random() * result.length);
            setSelectedMovie(result[index]);
        })
        .finally(() => {setIsloading(false)});
    }, []);

    return (
        isloading ? (
          <div className="bg-[#1c1c1c] flex justify-center items-center h-40">
            <p className="text-2xl text-center text-white"> Carregando... </p>
          </div>
        ) : (
          <section
              className="bg-[#1c1c1c] p-8 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] 
              gap-8 max-w-6xl mx-auto">
              {movies.map((movie, index)=>(<MovieCard key={index} movie={movie} />))}
          </section>
        )
    )
  }