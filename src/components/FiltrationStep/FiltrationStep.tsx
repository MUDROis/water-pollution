import { motion } from 'framer-motion'

interface FiltrationStepProps {
  method: {
    name: string
    description: string
    steps: string[]
    animation: string
  }
  isActive?: boolean
  onClick?: () => void
}

function FiltrationStep({ method, isActive, onClick }: FiltrationStepProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`p-6 rounded-lg cursor-pointer transition-all ${
        isActive ? 'bg-primary text-white ring-4 ring-primary/30' : 'bg-white text-gray-800 hover:bg-gray-50'
      }`}
      onClick={onClick}
    >
      <h3 className="text-xl font-bold mb-2">{method.name}</h3>
      <p className="mb-4 opacity-90">{method.description}</p>
      <div className="space-y-2">
        {method.steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-2">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm">
              {index + 1}
            </span>
            <span className="text-sm opacity-90">{step}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default FiltrationStep
