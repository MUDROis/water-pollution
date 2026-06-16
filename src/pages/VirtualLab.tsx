import { useState } from 'react'
import { motion } from 'framer-motion'


interface WaterContainerProps {
  waterLevel: number
  isFiltered: boolean
}

function WaterContainer({ waterLevel, isFiltered }: WaterContainerProps) {
  return (
    <div className="relative w-64 h-80 border-4 border-gray-300 rounded-b-xl bg-gray-100 overflow-hidden mx-auto">
      <div 
        className={`absolute bottom-0 left-0 right-0 transition-all duration-500 ${
          isFiltered ? 'bg-blue-200' : 'bg-blue-500'
        }`}
        style={{ height: `${waterLevel}%` }}
      >
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{ y: -100, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full bg-gradient-to-t from-blue-300 to-transparent" />
        </motion.div>
      </div>
      
      <div className="absolute top-0 left-0 right-0 h-12 bg-gray-200 border-b-4 border-gray-300 flex items-center justify-center">
        <span className="text-gray-600 font-semibold">Container</span>
      </div>
    </div>
  )
}

function VirtualLab() {
  const [waterLevel, setWaterLevel] = useState(80)
  const [isFiltered, setIsFiltered] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  const [simulationStep, setSimulationStep] = useState(0)

  const methods = [
    { id: 'sedimentation', name: 'Sedimentation', description: 'Let particles settle naturally' },
    { id: 'filtration', name: 'Filtration', description: 'Use sand filter to remove particles' },
    { id: 'disinfection', name: 'Disinfection', description: 'Kill bacteria with chlorine' },
    { id: 'distillation', name: 'Distillation', description: 'Boil and condense steam' }
  ]

  const handleMethodSelect = (methodId: string) => {
    setSelectedMethod(methodId)
    setSimulationStep(1)
    setIsFiltered(false)
  }

  const runSimulation = () => {
    if (!selectedMethod) return

    let step = 1
    const interval = setInterval(() => {
      step++
      setSimulationStep(step)

      if (step >= 4) {
        clearInterval(interval)
        setIsFiltered(true)
      }
    }, 1500)
  }

  const resetSimulation = () => {
    setSelectedMethod(null)
    setSimulationStep(0)
    setIsFiltered(false)
    setWaterLevel(80)
  }

  return (
    <div className="p-8 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Virtual Lab</h1>
          <p className="text-xl text-gray-600">Conduct water filtration experiments virtually</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">Water Purification Experiment</h2>
              
              <div className="flex flex-col items-center space-y-8">
                <WaterContainer waterLevel={waterLevel} isFiltered={isFiltered} />
                
                <div className="text-center">
                  <p className="text-lg mb-4">
                    {isFiltered 
                      ? "✅ Water has been successfully purified!" 
                      : selectedMethod 
                        ? `Step ${simulationStep}: ${simulationStep === 1 ? 'Starting process...' : simulationStep === 2 ? 'Processing...' : 'Finalizing purification...'}` 
                        : "Select a filtration method to begin"}
                  </p>
                  
                  <div className="flex gap-4 justify-center">
                    {selectedMethod && (
                      <button
                        onClick={runSimulation}
                        className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                      >
                        Run Simulation
                      </button>
                    )}
                    <button
                      onClick={resetSimulation}
                      className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-primary">Select Filtration Method</h3>
              <div className="space-y-3">
                {methods.map(method => (
                  <button
                    key={method.id}
                    onClick={() => handleMethodSelect(method.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      selectedMethod === method.id
                        ? 'bg-primary text-white ring-2 ring-primary'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <h4 className="font-bold">{method.name}</h4>
                    <p className="text-sm opacity-90 mt-1">{method.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-primary">Tips:</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Sedimentation removes heavy particles</li>
                <li>• Filtration traps smaller impurities</li>
                <li>• Disinfection kills harmful bacteria</li>
                <li>• Distillation produces pure water</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VirtualLab
