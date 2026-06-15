import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/pollution', label: 'Pollution' },
    { path: '/filtration', label: 'Filtration' },
    { path: '/lab', label: 'Lab' },
    { path: '/quiz', label: 'Quiz' },
  ]

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition">
            Water Pollution Experiment
          </Link>
          
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition ${
                  location.pathname === link.path
                    ? 'bg-blue-600 text-white'
                    : 'text-white hover:bg-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button className="text-white text-2xl">
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
