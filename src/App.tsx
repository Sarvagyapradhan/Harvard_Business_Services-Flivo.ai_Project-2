import React, { useState } from 'react'
import Home from './components/Home'
import StartCompany from './components/StartCompany'
import Services from './components/Services'
import LearningCenter from './components/LearningCenter'
import HBSBlog from './components/HBSBlog'
import AboutHBS from './components/AboutHBS'
import MakeAnnualPayments from './components/MakeAnnualPayments'

type PageKey =
  | 'home'
  | 'startCompany'
  | 'services'
  | 'learningCenter'
  | 'hbsBlog'
  | 'aboutHbs'
  | 'makeAnnualPayments'

function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('home')

  const handleNavigate = (destination: PageKey) => {
    setCurrentPage(destination)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (currentPage === 'startCompany') {
    return <StartCompany onNavigate={handleNavigate} />
  }

  if (currentPage === 'services') {
    return <Services onNavigate={handleNavigate} />
  }

  if (currentPage === 'learningCenter') {
    return <LearningCenter onNavigate={handleNavigate} />
  }

  if (currentPage === 'hbsBlog') {
    return <HBSBlog onNavigate={handleNavigate} />
  }

  if (currentPage === 'aboutHbs') {
    return <AboutHBS onNavigate={handleNavigate} />
  }

  if (currentPage === 'makeAnnualPayments') {
    return <MakeAnnualPayments onNavigate={handleNavigate} />
  }

  return <Home onNavigate={handleNavigate} />
}

export default App
