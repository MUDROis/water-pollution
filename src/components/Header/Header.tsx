function Header() {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Water Pollution Experiment</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-200 transition">Home</a>
          <a href="/pollution" className="hover:text-blue-200 transition">Pollution</a>
          <a href="/filtration" className="hover:text-blue-200 transition">Filtration</a>
          <a href="/lab" className="hover:text-blue-200 transition">Lab</a>
          <a href="/quiz" className="hover:text-blue-200 transition">Quiz</a>
        </nav>
        <div className="md:hidden">
          <button className="text-white">☰</button>
        </div>
      </div>
    </header>
  )
}

export default Header
