import { useEffect, useState } from 'react'
import FiltrationStep from '../components/FiltrationStep/FiltrationStep'
import filtrationData from '../data/filtrationMethods.json'

interface FiltrationMethod {
  id: number
  name: string
  description: string
  steps: string[]
  animation: string
}

function FiltrationMethods() {
  const [methods, setMethods] = useState<FiltrationMethod[]>([])
  const [selectedMethod, setSelectedMethod] = useState<FiltrationMethod | null>(null)

  useEffect(() => {
    setMethods(filtrationData.methods)
  }, [])

  return (
    <div className="p-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Water Filtration Methods</h1>
          <p className="text-xl text-gray-600">Explore different techniques used to purify water</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methods.map(method => (
            <FiltrationStep
              key={method.id}
              method={method}
              isActive={selectedMethod?.id === method.id}
              onClick={() => setSelectedMethod(method)}
            />
          ))}
        </div>

        {selectedMethod && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-8 max-w-2xl w-full animate-scale-in">
              <button
                onClick={() => setSelectedMethod(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {selectedMethod.animation === 'sedimentation' ? '沉淀' :
                   selectedMethod.animation === 'filtration' ? '过滤' :
                   selectedMethod.animation === 'disinfection' ? '消毒' :
                   selectedMethod.animation === 'distillation' ? '蒸馏' : '💧'}
                </div>
                <h2 className="text-3xl font-bold mb-4">{selectedMethod.name}</h2>
                <p className="text-gray-600 text-lg mb-6">{selectedMethod.description}</p>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Process Steps:</h3>
                  <div className="space-y-3">
                    {selectedMethod.steps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FiltrationMethods
