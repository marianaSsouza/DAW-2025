import { useEffect, useState, type FC } from "react";
import { useMovies } from "../../cases/movies/hooks/use-movies";
import { MovieGenres } from "../../cases/movies/components/movie-genres";

export function Highlight()  {
  const { selectedMovie } = useMovies(); 

  const [isLoading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    setIsloading(!selectedMovie)
  }, [selectedMovie])
  return (

   isLoading ? (
    <div className="flex justify-center items-center h-screen">
      <p className="text-2xl text-center text-white">Carregando...</p>
    </div>
    ) : (
    <section 
        className="bg-position-[left_calc((50vw-170px)-340px)_top] relative flex bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url(${selectedMovie.highlight})`
        }}
        >

      <div
        className="absolute inset-0 w-full h-full z-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(17,17,17,1) calc((50vw - 70px) - 340px), rgba(17,17,17,0.7) 50%, rgba(17,17,17,0.7) 100%)',
        }}
      ></div>

      <div className="container flex flex-col md:flex-row gap-8 py-8 z-20 max-w-6xl mx-auto px-4 md:px-8">
        <img
          className="rounded-xl w-[360px] h-[500px] object-cover shadow-2xl z-20"
          src={selectedMovie.image}
          alt={`Capa do filme ${selectedMovie?.title || 'Filme'}`}
        />

        <div className="flex flex-col text-white z-20">
          {selectedMovie && selectedMovie.title} 
          <h2 className="text-4xl font-normal">{selectedMovie?.title || "Como Treinar o seu Dragão"}</h2>

        
        
          <MovieGenres movie={selectedMovie}> 
            <span className="pl-4 text-gray-300">
              {selectedMovie.duration.replace(':', 'h ')+'m'} 
              </span> 
            </MovieGenres>

          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-normal pt-12 pb-2">Sinopse</h4>
            <p className="text-[#a0a0a0] text-sm leading-relaxed max-w-xl">
              {selectedMovie.sinopse}
            </p>
          </div>

          <div className="flex gap-4 my-6">
            <button className="bg-[#e50914] hover:bg-[#b8070f] text-white px-6 py-3 rounded font-bold transition duration-300 ease-in-out cursor-pointer">
              Assistir
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 py-3 rounded transition duration-300 ease-in-out cursor-pointer">
              Detalhes
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 py-3 rounded transition duration-300 ease-in-out cursor-pointer">
              + Adicionar à Lista
            </button>
          </div>
        </div>
      </div>
    </section>
    )
  )
}