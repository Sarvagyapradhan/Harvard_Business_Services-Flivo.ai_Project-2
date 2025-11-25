import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface GeneralDisclaimerProps {
  onNavigate?: (destination: PageKey) => void
}

const mainDisclaimerText =
  'Harvard Business Services, Inc. (Harvard) is a professional document filing service specializing in forming Delaware entities. Harvard and its employees are not attorneys or accountants, and we do not provide legal or financial advice. Harvard is not acting as your attorney and no attorney-client relationship is being created by your use of our services. You are making independent decisions based on general information we are providing to you throughout our website and printed materials. Harvard cannot guarantee the accuracy of the legal information, pricing and related materials provided to you on this website as well as on other related materials. Harvard will review your application for accuracy, spelling, grammar and consistency but at no time will Harvard review your application for its legal sufficiency nor apply the law to the facts of your specific situation.'

const specificDisclaimerText =
  'These descriptions are merely summaries of some of the principal features of the typical forms of Delaware entities. They are not complete descriptions of all material aspects of all available Delaware entities. They are provided for informational purposes only and are not and should not be construed as legal advice. If you wish to ask for legal advice about how Delaware law may apply to your specific situation, you should consult your attorney.'

const GeneralDisclaimer: React.FC<GeneralDisclaimerProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onNavigate={onNavigate} />
      <main>
        <section className="relative left-1/2 w-screen -translate-x-1/2 h-[302px] overflow-hidden bg-[url('/Footer%20Pages/bsckground_tc_pp.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.5),_rgba(0,0,0,0.5))]" />
          <div className="absolute inset-0 bg-[linear-gradient(178.09deg,_rgba(72,159,232,0)_23.19%,_#489FE8_91.93%)]" />
          <div className="relative max-w-[1440px] h-full mx-auto px-6 lg:px-12 flex flex-col justify-end pb-12 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Legal</p>
            <h1 className="text-[36px] sm:text-[44px] lg:text-[52px] font-semibold leading-tight">
              General Disclaimer
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl">
              Review the statements below to understand the limits of our services and the informational materials we provide.
            </p>
          </div>
        </section>

        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#F2F2F2] py-16 sm:py-20">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 space-y-12">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500 font-medium">Last Updated: May 24, 2025</p>
            </div>

            <div className="space-y-6 text-black leading-relaxed text-xl">
              <p className="whitespace-pre-line">{mainDisclaimerText}</p>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold uppercase tracking-wide">SPECIFIC DISCLAIMER (for Help pages)</h3>
                <p className="whitespace-pre-line">{specificDisclaimerText}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default GeneralDisclaimer

