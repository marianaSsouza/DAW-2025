import type { FC } from "react";


const Highlight: FC = () => {
  return (
    <section
      className="flex bg-cover relative"
      style={{
        backgroundImage: "url('/img/etT14XfDEqhQZdD47ywpyihXPyW.jpg')",
        backgroundPosition: 'left calc((50vw - 170px) - 340px) top',
        backgroundSize: 'cover',
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
          src="/img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg"
          alt="Capa do filme Como Treinar o Seu Dragão"
        />

        <div className="flex flex-col text-white z-20">
          <h2 className="text-4xl font-normal">Como Treinar o seu Dragão</h2>

          <div className="text-sm my-3 flex flex-wrap items-center gap-2">
            <span className="bg-white/20 px-3 py-1 rounded-full">Fantasia</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Família</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Ação &amp; Aventura</span>
            <span className="pl-4 text-[#ccc]">2h 5m</span>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-normal pt-12 pb-2">Sinopse</h4>
            <p className="text-[#a0a0a0] text-sm leading-relaxed max-w-xl">
              Em um mundo onde dragões e humanos coexistem, um jovem viking chamado Soluço se torna
              amigo de um dragão ferido chamado Banguela. Juntos, eles desafiam as tradições
              de suas tribos e descobrem que dragões não são os monstros que todos acreditavam ser.
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
  );
};

export default Highlight;
