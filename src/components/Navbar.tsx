import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Shield } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-cyber-dark/95 backdrop-blur-sm border-b border-cyber-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <Shield className="h-8 w-8 text-cyber-red" />
              <span className="text-white">PENTESTX</span>
              <span className="text-cyber-red">SECURITY</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-cyber-red relative ${
                    location.pathname === link.path
                      ? 'text-cyber-red after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-cyber-red'
                      : 'text-cyber-gray'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link to="/quote" className="btn-primary text-sm px-5 py-2.5">
                Get a Free Quote ↗
              </Link>
            </div>

            {/* Mobile toggle */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-20 bg-cyber-dark/95 backdrop-blur-sm border-b border-cyber-border z-40 transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-lg font-medium text-cyber-gray hover:text-cyber-red transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/quote" className="btn-primary block text-center mt-4">
            Get a Free Quote ↗
          </Link>
        </div>
      </div>
    </>
  )
}
