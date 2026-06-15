import { motion } from 'framer-motion'

interface PollutantCardProps {
  name: string
  category: string
  description: string
  image: string
  onClick?: () => void
}

function PollutantCard({ name, category, description, image, onClick }: PollutantCardProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'physical': return 'bg-blue-100 text-blue-800'
      case 'chemical': return 'bg-red-100 text-red-800'
      case 'biological': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-3xl">
          {image || '💧'}
        </div>
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <span className={`inline-block px-2 py-1 rounded-full text-sm mt-1 ${getCategoryColor(category)}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
      </div>
      <p className="mt-2 text-gray-600 text-sm">{description}</p>
    </motion.div>
  )
}

export default PollutantCard
