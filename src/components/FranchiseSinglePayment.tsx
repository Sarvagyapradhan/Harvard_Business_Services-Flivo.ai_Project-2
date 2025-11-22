import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface FranchiseSinglePaymentProps {
  onNavigate?: (destination: PageKey) => void
}

const FranchiseSinglePayment: React.FC<FranchiseSinglePaymentProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onNavigate={onNavigate} />
      <main>
        <section className="relative w-full min-h-screen overflow-hidden bg-[url('/homepage/Background.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[linear-gradient(270deg,_rgba(0,0,0,0)_16.94%,_rgba(0,0,0,0.7)_59.65%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(72,159,232,0.56),_rgba(72,159,232,0.56))]" />

          <div className="relative z-10 w-full">
            <div className="max-w-[1380px] mx-auto px-6 lg:px-12 py-16 lg:py-24 text-white">
              <header className="space-y-5 text-left">
                <br /><br />
                <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-semibold leading-tight text-white">
                  Pay Your Delaware Franchise Tax Online
                </h1>
                <div className="space-y-4 text-base sm:text-lg text-white font-semibold leading-relaxed max-w-7xl">
                  <p>
                    Pay your Delaware franchise tax online in a matter of minutes with Harvard Business Services, Inc. The
                    Delaware Franchise Tax is a mandatory annual expense for all Delaware companies. LLCs, LPs, and
                    corporations, both foreign and domestic, will need to submit their payments to the state of Delaware each
                    year to remain compliant and in good standing. Corporations will need to submit their Delaware franchise
                    tax payments online, as physical reports are no longer accepted, but for other businesses that need to
                    submit their payment, online payment is often the quickest solution.
                  </p>
                  <p>
                    To pay Delaware Franchise Tax online for your single LLC, LP, or corporation, simply enter your information
                    below. You can also pay Delaware annual Franchise Taxes for multiple LLCs or LPs on the "Pay Franchise Tax
                    for Multiple LLCs" page. Once you complete your Delaware Franchise Tax filing, we'll email you a
                    confirmation for your records.
                  </p>
                  <p>
                    For general Delaware LLC tax or corporation tax information, please visit our "What is Delaware Franchise
                    Tax?" page. In addition, our expert team is available to help over the phone at 1-800-345-2677, ext. 6910,
                    via email, or via Live Chat.
                  </p>
                </div>
               
              </header>

              <div className="mt-14 space-y-10">
                <div className="rounded-[30px] border border-white/30 bg-white/95 text-slate-900 shadow-[0_25px_90px_rgba(7,33,64,0.35)] overflow-hidden">
                  <div className="bg-[#1772b6] text-white text-center px-6 py-6">
                    <h2 className="text-2xl font-semibold uppercase tracking-wide">
                      In Case we need to Contact You About Your tax payment
                    </h2>
                  </div>
                  <div className="px-6 sm:px-10 py-10">
                    <form className="border border-slate-200 rounded-2xl divide-y divide-slate-200">
                      <div className="flex flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center">
                        <label className="w-full text-base font-semibold text-slate-700 sm:w-48">Full Name:</label>
                        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
                          <select
                            aria-label="Title"
                            className="w-full sm:w-28 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          >
                            <option>Title</option>
                            <option>Mr.</option>
                            <option>Ms.</option>
                            <option>Mrs.</option>
                            <option>Dr.</option>
                          </select>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          />
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          />
                          <select
                            aria-label="Title or Suffix"
                            className="w-full sm:w-28 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          >
                            <option>Title</option>
                            <option>LLC</option>
                            <option>LP</option>
                            <option>Inc.</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center">
                        <label className="w-full text-base font-semibold text-slate-700 sm:w-48">Email Address:</label>
                        <div className="flex flex-1 flex-col gap-2">
                          <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          />
                          <p className="text-xs text-slate-500">
                            Final documents and your receipt will be sent to this email.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center">
                        <label className="w-full text-base font-semibold text-slate-700 sm:w-48">Verify Email Address:</label>
                        <div className="flex-1">
                          <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="rounded-[30px] border border-white/30 bg-white/95 text-slate-900 shadow-[0_25px_90px_rgba(7,33,64,0.35)] overflow-hidden">
                  <div className="bg-[#1772b6] text-white text-center px-6 py-6">
                    <h2 className="text-2xl font-semibold uppercase tracking-wide">Company Information</h2>
                  </div>
                  <div className="px-6 sm:px-10 py-10 space-y-5">
                    <p className="text-base text-slate-700 text-center">
                      To locate the exact company for which you want to pay Delaware Franchise Tax, enter the company name
                      in the field below and click the Search button.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <input
                        type="text"
                        placeholder='Ex. "XYZ Sales LLC"'
                        className="w-full flex-1 rounded-lg border border-slate-300 px-4 py-3 text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                      />
                      <button className="w-full sm:w-auto rounded-lg bg-[#1772b6] px-8 py-3 text-white text-base font-semibold shadow-lg shadow-[#1772b6]/50 hover:bg-[#14639f] transition">
                        Search
                      </button>
                    </div>
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

export default FranchiseSinglePayment


