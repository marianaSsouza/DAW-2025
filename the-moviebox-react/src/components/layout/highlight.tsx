import React from 'react';

const Highlight: React.FC = () => {
  return (
    <section 
      className="flex bg-cover relative highlight"
      style={{
        backgroundImage: "url('./public/img/etT14XfDEqhQZdD47ywpyihXPyW.jpg')",
        backgroundPosition: 'left calc((50vw - 170px) - 340px) top',
      }}
    >
      <div 
        className="absolute top-0 left-0 w-full h-full z-10 highlight-overlay"
        style={{
          backgroundImage: 
            'linear-gradient(to right, rgba(17,17,17,1) calc((50vw - 70px) - 340px), rgba(17,17,17,0.7) 50%, rgba(17,17,17,0.7) 100%)',
        }}
      ></div>

      <div className="highlight-content container flex gap-8 py-8 z-20">
        <img
          className="highlight-poster rounded-lg"
          src="./public/img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg"
          alt="Capa do filme"
          style={{ width: '340px', height: 'auto' }}
        />

        <div className="highlight-details flex flex-col">
          <h2 className="text-4xl font-normal">Como Treinar o seu Dragão</h2>

          <div className="highlight-meta text-sm my-2.5">
            <span className="genre bg-white/20 px-3 py-1 rounded-full">Fantasia</span>
            <span className="genre bg-white/20 px-3 py-1 rounded-full ml-2">Família</span>
            <span className="genre bg-white/20 px-3 py-1 rounded-full ml-2">Ação & Aventura</span>
            <span className="duration pl-4 text-[#ccc]">2h 5m</span>
          </div>

          <div className="highlight-sinopse flex flex-col gap-2">
            <h4 className="text-2xl font-normal pt-12 pb-2">Sinopse</h4>
            <p className="text-[#a0a0a0] text-sm">
              Em um mundo onde dragões e humanos coexistem, um jovem viking chamado Soluço se
              torna amigo de um dragão ferido chamado Banguela. Juntos, eles desafiam as tradições
              de suas tribos e descobrem que dragões não são os monstros que todos acreditavam ser.
            </p>
          </div>

          <div className="highlight-actions flex gap-4 my-6">
            <button 
              className="
                btn-primary 
                bg-[#e50914] hover:bg-[#b8070f] 
                text-white 
                px-6 py-3 
                rounded-md 
                font-bold 
                transition duration-300 ease-in-out 
                cursor-pointer
              "
            >
              Assistir
            </button>
            
            <button 
              className="
                btn-secundary 
                bg-white/20 hover:bg-white/30 
                text-white 
                border border-white/30 
                px-6 py-3 
                rounded-md 
                transition duration-300 ease-in-out 
                cursor-pointer
              "
            >
              Detalhes
            </button>

            <button 
              className="
                btn-secundary 
                bg-white/20 hover:bg-white/30 
                text-white 
                border border-white/30 
                px-6 py-3 
                rounded-md
                transition duration-300 ease-in-out 
                cursor-pointer
              "
            >
              + Adicionar à Lista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;