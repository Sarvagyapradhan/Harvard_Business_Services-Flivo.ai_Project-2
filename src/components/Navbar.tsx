import React, { useState, useEffect } from 'react'
import type { PageKey } from '../types/navigation'

interface NavbarProps {
  onNavigate?: (destination: PageKey) => void
}

interface NavLink {
  label: string
  href?: string
  onClick?: (event?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigate = (
    destination: PageKey,
    event?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    if (!onNavigate) return
    event?.preventDefault()
    onNavigate(destination)
    setIsMenuOpen(false)
  }

  const handleStartCompanyClick = (event?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) =>
    handleNavigate('startCompany', event)

  const handleServicesClick = (event?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) =>
    handleNavigate('services', event)

  const handleLearningCenterClick = (event?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) =>
    handleNavigate('learningCenter', event)

  const handleHbsBlogClick = (event?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) =>
    handleNavigate('hbsBlog', event)

  const handleAboutHbsClick = (event?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) =>
    handleNavigate('aboutHbs', event)

  const handleAnnualPaymentsClick = (event?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) =>
    handleNavigate('makeAnnualPayments', event)

  const handleLogoClick = () => {
    handleNavigate('home')
  }

  const navLinks: NavLink[] = [
    { label: 'Start a Company', onClick: handleStartCompanyClick },
    { label: 'Services', onClick: handleServicesClick },
    { label: 'Learning Center', onClick: handleLearningCenterClick },
    { label: 'HBS Blog', onClick: handleHbsBlogClick },
    { label: 'About HBS', onClick: handleAboutHbsClick },
    { label: 'Make Annual Payments', onClick: handleAnnualPaymentsClick }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 h-[95px] flex items-center transition-all duration-300 backdrop-blur-sm bg-gradient-to-r from-[#1b6cb3]/85 via-[#2e8cd8]/70 to-[#48b0ff]/70 border-b border-white/10 ${isScrolled ? 'shadow-[0_4px_24px_rgba(15,23,42,0.25)]' : ''}`}
    >
      <nav className="max-w-[1440px] w-full mx-auto px-6 lg:px-10 grid grid-cols-[auto_1fr_auto] items-center h-full gap-4">
        {/* Logo and Company Name */}
        <button
          className="flex items-center flex-shrink-0 min-w-0 text-left"
          onClick={handleLogoClick}
          type="button"
        >
          <img
            src="/logo.svg"
            alt="Harvard Business Services logo"
            className="h-10 w-auto sm:h-12 lg:h-14 xl:h-16 object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 2xl:gap-10 min-w-0 pt-10 text-lg xl:text-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href ?? '#'}
              className="text-white hover:text-blue-200 transition-colors duration-300 text-sm xl:text-base font-medium whitespace-nowrap"
              onClick={link.onClick}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <button
          className="hidden lg:flex items-center gap-2 bg-white text-[#2d98ef] px-5 py-2.5 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-sm text-xs xl:text-sm whitespace-nowrap mt-4"
          onClick={handleStartCompanyClick}
        >
          <span className="pl-1">Start My Company</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#2d98ef]"
          >
            <path
              d="M1 11L11 1M11 1H1M11 1V11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-blue-400 pt-4">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href ?? '#'}
                  className="text-white hover:text-blue-200 transition-colors duration-300 text-sm font-medium py-2"
                  onClick={(event) => {
                    if (link.onClick) {
                      link.onClick(event)
                    } else {
                      setIsMenuOpen(false)
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
              <button
                className="flex items-center justify-center gap-2 bg-white text-[#2d98ef] px-6 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 shadow-sm mt-2"
                onClick={handleStartCompanyClick}
              >
                <span>Start My Company</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#2d98ef]"
                >
                  <path
                    d="M1 11L11 1M11 1H1M11 1V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
