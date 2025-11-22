import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface AgentMultiPaymentProps {
  onNavigate?: (destination: PageKey) => void
}

const AgentMultiPayment: React.FC<AgentMultiPaymentProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onNavigate={onNavigate} />
      <main>
        <section className="relative w-full min-h-screen overflow-hidden bg-[url('/homepage/Background.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[linear-gradient(270deg,_rgba(0,0,0,0)_16.94%,_rgba(0,0,0,0.7)_59.65%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(72,159,232,0.56),_rgba(72,159,232,0.56))]" />

          <div className="relative z-10 w-full">
            <div className="max-w-[1380px] mx-auto px-6 lg:px-12 py-16 lg:py-24 text-white">
              <header className="space-y-5 text-center">
                <br /><br />
                <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-semibold leading-tight text-white">
                  Pay Your Registered Agent Fees
                </h1>
                <div className="space-y-4 text-base sm:text-lg text-white font-semibold leading-relaxed max-w-7xl">
                  <p>
                    Since 1981, Harvard Business Services, Inc. has been offering the incorporation industry's lowest Registered
                    Agent Fee. You can renew your Registered Agent service in just a few minutes, online, now. If you need help,
                    our expert team is available to assist you via phone at 800-345-2677, Ext. 6910, by email or by live chat.
                  </p>
                </div>
               
              </header>

              <div className="mt-14">
                <div className="max-w-6xl mx-auto rounded-[30px] border border-white/30 bg-white/95 text-slate-900 shadow-[0_25px_90px_rgba(7,33,64,0.35)] overflow-hidden">
                  <div className="bg-[#1772b6] text-white text-center px-6 py-6 flex items-center justify-center gap-2">
                    <h2 className="text-2xl font-semibold uppercase tracking-wide">Account Number</h2>
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">i</span>
                    </div>
                  </div>
                  <div className="px-6 sm:px-10 py-10">
                    <form className="border border-slate-200 rounded-2xl">
                      <div className="flex flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center">
                        <label className="w-full text-base font-semibold text-slate-700 sm:w-48">Account Number:</label>
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder="Enter Your Account Number"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          />
                        </div>
                      </div>

                      <div className="px-5 py-6">
                        <button
                          type="button"
                          className="w-full rounded-lg bg-[#1772b6] px-8 py-3 text-white text-base font-semibold shadow-lg shadow-[#1772b6]/50 hover:bg-[#14639f] transition flex items-center justify-center gap-2"
                        >
                          Continue →
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AgentMultiPayment
