import Contador from './Components/Contador'
import CorFavorita from './Components/PreferenciaCor'
import './App.css'

function App() {

  return (
    <>
        <section>
          <h1> Meu Aplicativo React </h1>
          <p> Este é um exemplo de estado no React.</p>

          {/* Chamamos o componente Contador */}
          <Contador />

          <CorFavorita />
        </section>
    </>
  )
}

export default App
