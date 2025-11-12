import { Header } from "./components/layout/header"
import { Footer } from "./components/layout/footer"
import { Navbar } from "./components/layout/navbar"
import { MovieContent } from "./cases/movies/components/movie-content"
import Highlight from "./components/layout/highlight"




function App() {
 

  return (
    <> 
      <Header />
      
      <main>
        <Navbar />
        <Highlight />

        <MovieContent />

      </main>
      <Footer  />
    </>
  )
}

export default App
