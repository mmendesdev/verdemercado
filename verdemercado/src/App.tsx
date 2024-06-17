import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages'
import Login from './pages/login'
import MercadoVerde from './pages/mercado'
import Pagamento from './pages/pagamento'
import Conta from './pages/minha_conta'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/pagamento' element={<Pagamento/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/mercado' element={<MercadoVerde/>}/>
          <Route path='/conta' element={<Conta/>}/>
      </Routes>
    </BrowserRouter>
    )
}

export default App
