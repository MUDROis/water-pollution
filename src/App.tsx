import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import PollutionTypes from './pages/PollutionTypes'
import FiltrationMethods from './pages/FiltrationMethods'
import VirtualLab from './pages/VirtualLab'
import Quiz from './pages/Quiz'

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pollution" element={<PollutionTypes />} />
        <Route path="/filtration" element={<FiltrationMethods />} />
        <Route path="/lab" element={<VirtualLab />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
