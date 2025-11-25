import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import StartCompany from './components/StartCompany'
import Services from './components/Services'
import LearningCenter from './components/LearningCenter'
import HBSBlog from './components/HBSBlog'
import AboutHBS from './components/AboutHBS'
import MakeAnnualPayments from './components/MakeAnnualPayments'
import FranchiseSinglePayment from './components/FranchiseSinglePayment'
import FranchiseMultiPayment from './components/FranchiseMultiPayment'
import AgentSinglePayment from './components/AgentSinglePayment'
import AgentMultiPayment from './components/AgentMultiPayment'
import NonResidentFormations from './components/NonResidentFormations'
import TermsAndConditions from './components/TermsAndConditions'
import PrivacyPolicy from './components/PrivacyPolicy'
import GeneralDisclaimer from './components/GeneralDisclaimer'
import type { PageKey } from './types/navigation'
import { PAGE_PATHS } from './types/navigation'

function App() {
  const navigate = useNavigate()

  const handleNavigate = (destination: PageKey) => {
    const targetPath = PAGE_PATHS[destination] ?? PAGE_PATHS.home
    navigate(targetPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Routes>
      <Route path={PAGE_PATHS.home} element={<Home onNavigate={handleNavigate} />} />
      <Route path={PAGE_PATHS.startCompany} element={<StartCompany onNavigate={handleNavigate} />} />
      <Route path={PAGE_PATHS.services} element={<Services onNavigate={handleNavigate} />} />
      <Route path={PAGE_PATHS.learningCenter} element={<LearningCenter onNavigate={handleNavigate} />} />
      <Route path={PAGE_PATHS.hbsBlog} element={<HBSBlog onNavigate={handleNavigate} />} />
      <Route path={PAGE_PATHS.aboutHbs} element={<AboutHBS onNavigate={handleNavigate} />} />
      <Route
        path={PAGE_PATHS.makeAnnualPayments}
        element={<MakeAnnualPayments onNavigate={handleNavigate} />}
      />
      <Route
        path={PAGE_PATHS.franchiseSinglePayment}
        element={<FranchiseSinglePayment onNavigate={handleNavigate} />}
      />
      <Route
        path={PAGE_PATHS.franchiseMultiPayment}
        element={<FranchiseMultiPayment onNavigate={handleNavigate} />}
      />
      <Route
        path={PAGE_PATHS.agentSinglePayment}
        element={<AgentSinglePayment onNavigate={handleNavigate} />}
      />
      <Route path={PAGE_PATHS.agentMultiPayment} element={<AgentMultiPayment onNavigate={handleNavigate} />} />
      <Route
        path={PAGE_PATHS.nonResidentFormations}
        element={<NonResidentFormations onNavigate={handleNavigate} />}
      />
      <Route path={PAGE_PATHS.termsAndConditions} element={<TermsAndConditions onNavigate={handleNavigate} />} />
      <Route path={PAGE_PATHS.privacyPolicy} element={<PrivacyPolicy onNavigate={handleNavigate} />} />
      <Route path={PAGE_PATHS.generalDisclaimer} element={<GeneralDisclaimer onNavigate={handleNavigate} />} />
      <Route path="/home" element={<Navigate to={PAGE_PATHS.home} replace />} />
      <Route path="*" element={<Navigate to={PAGE_PATHS.home} replace />} />
    </Routes>
  )
}

export default App
