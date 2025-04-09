// Components
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Style
import './App.css'

// Pages
import Home from './Pages/Home'
import Exemplos from './Pages/Exemplos'
import Exercicios from './Pages/Exercicios'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exemplos' element={<Exemplos />} />
        <Route path='/exercicios' element={<Exercicios />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App