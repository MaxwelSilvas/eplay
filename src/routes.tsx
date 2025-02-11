import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Index'
import Categories from './pages/Categories/Index'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Rotas
