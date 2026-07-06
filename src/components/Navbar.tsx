import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function LeafIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.75 3.25C14.5 3.25 11.75 5 10.25 7.5C8.75 5 6 3.25 2.75 3.25C2.75 10 6.5 16.5 12 20.75C17.5 16.5 21.25 10 21.25 3.25C18 3.25 15.25 5 13.75 7.5C12.25 5 9.5 3.25 6.25 3.25H17.75Z" />
    </svg>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-forest-800 transition-colors hover:text-forest-600"
        >
          <LeafIcon className="h-8 w-8 text-forest-500" />
          <span className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            City Plants and Gardening Work
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-forest-500 ETB {
                    isActive
                      ? 'text-forest-600 border-b-2 border-forest-500 pb-0.5'
                      : 'text-forest-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/products"
          className="hidden rounded-full bg-forest-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-forest-700 hover:shadow-md md:inline-flex"
        >
          Browse Plants
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-forest-700 hover:bg-forest-50 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-forest-100 bg-white px-4 py-4 md:hidden animate-fade-in">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2 text-base font-medium transition-colors ETB {
                      isActive
                        ? 'bg-forest-50 text-forest-600'
                        : 'text-forest-700 hover:bg-forest-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="block rounded-full bg-forest-600 px-4 py-2.5 text-center text-base font-medium text-white"
              >
                Browse Plants
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
