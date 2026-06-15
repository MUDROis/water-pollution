function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Water Pollution Experiment</p>
            <p className="text-sm text-gray-400 mt-1">
              Educational application for learning about water pollution and filtration
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="/" className="text-gray-400 hover:text-white transition">Home</a>
            <a href="/pollution" className="text-gray-400 hover:text-white transition">Pollution</a>
            <a href="/filtration" className="text-gray-400 hover:text-white transition">Filtration</a>
            <a href="/lab" className="text-gray-400 hover:text-white transition">Lab</a>
            <a href="/quiz" className="text-gray-400 hover:text-white transition">Quiz</a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Water Pollution Experiment. Educational use only.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Designed for students aged 12-14
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
