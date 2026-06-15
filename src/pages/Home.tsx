import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 animate-fade-in">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 text-primary">Water Pollution Experiment</h1>
        <p className="text-xl text-gray-600 mb-8">
          An interactive educational application to learn about water pollution, 
          its types, and methods of filtration. Explore virtual lab and test your knowledge!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Link 
            to="/pollution" 
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-4xl mb-4">💧</div>
            <h2 className="text-2xl font-bold mb-3 text-primary group-hover:text-blue-600">Pollution Types</h2>
            <p className="text-gray-600">Learn about different types of water pollutants including physical, chemical, and biological contaminants.</p>
          </Link>
          
          <Link 
            to="/filtration" 
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-4xl mb-4">🧪</div>
            <h2 className="text-2xl font-bold mb-3 text-primary group-hover:text-blue-600">Filtration Methods</h2>
            <p className="text-gray-600">Explore various water purification techniques from sedimentation to distillation.</p>
          </Link>
          
          <Link 
            to="/lab" 
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-4xl mb-4">🔬</div>
            <h2 className="text-2xl font-bold mb-3 text-primary group-hover:text-blue-600">Virtual Lab</h2>
            <p className="text-gray-600">Conduct virtual experiments and simulate water filtration processes.</p>
          </Link>
          
          <Link 
            to="/quiz" 
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-2xl font-bold mb-3 text-primary group-hover:text-blue-600">Knowledge Quiz</h2>
            <p className="text-gray-600">Test your understanding of water pollution and filtration with interactive questions.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
