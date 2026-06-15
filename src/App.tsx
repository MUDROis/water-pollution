import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import PollutionTypes from './pages/PollutionTypes'
import FiltrationMethods from './pages/FiltrationMethods'
import VirtualLab from './pages/VirtualLab'
import Quiz from './pages/Quiz'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pollution" element={<PollutionTypes />} />
          <Route path="/filtration" element={<FiltrationMethods />} />
          <Route path="/lab" element={<VirtualLab />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
