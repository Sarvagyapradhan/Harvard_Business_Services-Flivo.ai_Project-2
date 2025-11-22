import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface MakeAnnualPaymentsProps {
  onNavigate?: (destination: PageKey) => void
}

const paymentSections: {
  title: string
  ctas: { body: string; label: string; destination: PageKey }[]
}[] = [
  {
    title: 'Franchise Tax Payment',
    ctas: [
      {
        body: 'To pay your annual Delaware Franchise Tax online for one single company, click the button below:',
        label: 'Pay Your Delaware Franchise Tax Online',
        destination: 'franchiseSinglePayment'
      },
      {
        body: 'To pay your annual Delaware Franchise Tax online for multiple LLCs/LPs, click the button below:',
        label: 'Pay Franchise Tax for Multiple LLCs & LPs',
        destination: 'franchiseMultiPayment'
      }
    ]
  },
  {
    title: 'Registered Agent Payment',
    ctas: [
      {
        body: 'To pay your annual Registered Agent Fee for one single company, click the button below:',
        label: 'Pay registered agent fees for Single company',
        destination: 'agentSinglePayment'
      },
      {
        body: 'To pay your annual Registered Agent Fees for multiple companies/jurisdictions, click the button below:',
        label: 'Pay registered agent fees for multiple companies',
        destination: 'agentMultiPayment'
      }
    ]
  }
]

const MakeAnnualPayments: React.FC<MakeAnnualPaymentsProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onNavigate={onNavigate} />
      <main>
        <section className="relative w-full flex items-start justify-center overflow-visible bg-[url('/Make%20Annual%20Payments/background.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.4),_rgba(0,0,0,0.4))]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(72,159,232,0.4)_70.51%,_#F2F2F2_94.58%)]" />
          <div className="relative max-w-[1440px] w-full h-[360px] mx-auto px-6 lg:px-12 flex items-center justify-center text-white">
            <div className="flex flex-col items-center text-center gap-8 translate-y-6">
              <h1 className="text-[40px] sm:text-[48px] lg:text-[54px] font-bold leading-tight">
                Make Annual Payments
              </h1>
              <button
                className="inline-flex items-center gap-2 bg-white text-[#2d98ef] font-semibold text-sm sm:text-base px-5 py-2.5 rounded-md shadow-[0_10px_25px_rgba(15,23,42,0.25)] hover:bg-blue-50 transition-all duration-300"
                onClick={() => onNavigate?.('startCompany')}
              >
                Start My Company
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#2d98ef]"
                >
                  <path
                    d="M1 11L11 1M11 1H4M11 1V8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section className="relative w-full bg-[url('/Make%20Annual%20Payments/image2.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.2),_rgba(0,0,0,0.2))]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(19,19,19,0)_14.65%,_rgba(72,159,232,0.7)_82.17%)]" />
          <div className="relative w-full py-[120px] flex flex-col gap-[76px]">
            {paymentSections.map((section, index) => (
              <div key={section.title} className="relative left-1/2 w-screen -translate-x-1/2 px-6 lg:px-12">
                <div className="relative w-full max-w-[1440px] mx-auto">
                   <div className={`absolute ${index === 0 ? '-top-24' : '-top-20'} left-1/2 -translate-x-1/2 text-center`}>
                      <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight">{section.title}</h2>
                   </div>
                  <div className={`rounded-[40px] border border-white/30 bg-white/15 backdrop-blur-[32px] shadow-[0px_20px_80px_rgba(3,18,39,0.25)] px-6 sm:px-10 lg:px-16 pt-16 pb-10 text-white ${index === 0 ? 'mt-2' : 'mt-6'}`}>
                    <div className="space-y-10 text-[22px] sm:text-[24px] leading-relaxed">
                      {section.ctas.map((cta) => (
                        <div key={cta.label} className="space-y-4 text-left">
                          <p className="text-[22px] sm:text-[24px] text-white/90 leading-relaxed">{cta.body}</p>
                          <button
                            type="button"
                            className="inline-flex items-center gap-3 rounded-2xl border border-white/60 bg-white text-[rgba(72,159,232,1)] font-semibold text-xl sm:text-2xl px-6 py-5 shadow-[0_10px_35px_rgba(6,22,45,0.35)] hover:-translate-y-0.5 hover:bg-blue-50 hover:text-[#1457a5] transition-all duration-300"
                            onClick={() => onNavigate?.(cta.destination)}
                          >
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf3ff] text-[#2d98ef] shadow-inner">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 1.5L12.4721 6.60081L18 7.47214L13.75 11.6279L14.9443 17.25L10 14.4L5.05573 17.25L6.25 11.6279L2 7.47214L7.52786 6.60081L10 1.5Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="underline decoration-transparent hover:decoration-current transition-colors">
                              {cta.label}
                            </span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default MakeAnnualPayments

