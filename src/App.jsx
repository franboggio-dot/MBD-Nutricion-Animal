import { Routes, Route } from 'react-router-dom'
import PresetD from './pages/PresetD'
import LunaturalProducts from './pages/LunaturalProducts'
import './index.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PresetD />} />
      <Route path="/lunatural-productos" element={<LunaturalProducts />} />
    </Routes>
  )
}
