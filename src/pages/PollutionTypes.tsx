import { useEffect, useState } from 'react'
import PollutantCard from '../components/PollutantCard/PollutantCard'
import pollutantsData from '../data/pollutants.json'

interface Pollutant {
  id: number
  name: string
  category: string
  description: string
  image: string
}

function PollutionTypes() {
  const [pollutants, setPollutants] = useState<Pollutant[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedPollutant, setSelectedPollutant] = useState<Pollutant | null>(null)

  useEffect(() => {
    setPollutants(pollutantsData.pollutants)
  }, [])

  const categories = ['all', 'physical', 'chemical', 'biological']

  const filteredPollutants = selectedCategory === 'all' 
    ? pollutants 
    : pollutants.filter(p => p.category === selectedCategory)

  return (
    <div className="p-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Water Pollutants</h1>
          <p className="text-xl text-gray-600">Understand different types of contaminants that affect water quality</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPollutants.map(pollutant => (
            <PollutantCard
              key={pollutant.id}
              name={pollutant.name}
              category={pollutant.category}
              description={pollutant.description}
              image={pollutant.image}
              onClick={() => setSelectedPollutant(pollutant)}
            />
          ))}
        </div>

        {selectedPollutant && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-8 max-w-md w-full animate-scale-in">
              <button
                onClick={() => setSelectedPollutant(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {selectedPollutant.image || '💧'}
                </div>
                <h2 className="text-3xl font-bold mb-2">{selectedPollutant.name}</h2>
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                  selectedPollutant.category === 'physical' ? 'bg-blue-100 text-blue-800' :
                  selectedPollutant.category === 'chemical' ? 'bg-red-100 text-red-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {selectedPollutant.category.charAt(0).toUpperCase() + selectedPollutant.category.slice(1)}
                </span>
                <p className="text-gray-600 text-lg">{selectedPollutant.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PollutionTypes
