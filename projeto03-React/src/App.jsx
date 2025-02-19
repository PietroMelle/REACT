import Contador from './Components/Contador'
import Texto from './Components/CaixaDeTexto'
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

            <br />
            <hr />
            <br />

          <CorFavorita />
          
          <br />
          <hr />
          <br />

          <Texto />
        </section>
    </>
  )
}

export default App
