import { useEffect, useState, type ReactNode } from "react"
import type { MovieDTO } from "../services/movie.service"

type MovieGenresProps = {
    movie: MovieDTO;
    children: ReactNode;
}

export function MovieGenres ({
    movie,
    children
}: MovieGenresProps){
    const [genres, setGenres] = useState<string[]>([]);
    useEffect(() => {
        if (movie) {
            setGenres(movie.genres.split('|'))
        }
    }, [movie]); {}
    return (
        <div className="flex text-sm my-5 mx-0 gap-2">
            {genres.map((genre, index) => (
                <span key={index} className="bg-white/20 rounded-2xl px-3 py-1">{genre}</span>
            ))}
        {children}
        </div>
    )

}