import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface AgentSinglePaymentProps {
  onNavigate?: (destination: PageKey) => void
}

const AgentSinglePayment: React.FC<AgentSinglePaymentProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    stateFileNumber: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await fetch('http://localhost:5000/api/submit-agent-single', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('success')
      alert('Data saved successfully!')
      setFormData({ companyName: '', stateFileNumber: '' })
    } catch (error) {
      console.error(error)
      setStatus('error')
      alert('Failed to save data')
    } finally {
      setStatus('idle')
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onNavigate={onNavigate} />
      <main>
        <section className="relative w-full min-h-screen overflow-hidden bg-[url('/homepage/Background.png')] bg-cover bg-center bg-no-repeat pb-20">
          <div className="absolute inset-0 bg-[linear-gradient(270deg,_rgba(0,0,0,0)_16.94%,_rgba(0,0,0,0.7)_59.65%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(72,159,232,0.56),_rgba(72,159,232,0.56))]" />

          <div className="relative z-10 w-full">
            <div className="max-w-[1380px] mx-auto px-6 lg:px-12 py-24 lg:py-24 text-white">
              <header className="space-y-5 text-center">
                <br className="hidden lg:block"/><br className="hidden lg:block"/>
                <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold leading-tight text-white mt-16 lg:mt-0">
                  Pay Your Registered Agent Fee
                </h1>
                <div className="space-y-4 text-base sm:text-lg text-white font-semibold leading-relaxed max-w-7xl mx-auto">
                  <p>
                    Since 1981, Harvard Business Services, Inc. has been offering the incorporation industry's lowest Registered
                    Agent Fee. You can renew your Registered Agent service in just a few minutes, online, now. If you need help,
                    our expert team is available to assist you via phone at 800-345-2677, Ext. 6910, by email or by live chat.
                  </p>
                </div>
               
              </header>

              <div className="mt-10 lg:mt-14">
                <div className="max-w-6xl mx-auto rounded-[24px] lg:rounded-[30px] border border-white/30 bg-white/95 text-slate-900 shadow-[0_25px_90px_rgba(7,33,64,0.35)] overflow-hidden">
                  <div className="bg-[#1772b6] text-white text-center px-6 py-6">
                    <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wide">Contact Information</h2>
                  </div>
                  <div className="px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
                    <form className="border border-slate-200 rounded-2xl divide-y divide-slate-200" onSubmit={handleSubmit}>
                      <div className="flex flex-col gap-4 px-4 sm:px-5 py-6 lg:flex-row lg:items-start">
                        <label className="w-full text-base font-semibold text-slate-700 lg:w-48 lg:pt-2">Company Name:</label>
                        <div className="flex flex-1 flex-col gap-2">
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Enter Your Company Name"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          />
                          <p className="text-xs text-slate-500 text-center">
                            Please type the exact name of the entity that corresponds with the File Number below.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 px-4 sm:px-5 py-6 lg:flex-row lg:items-start">
                        <label className="w-full text-base font-semibold text-slate-700 lg:w-48 lg:pt-2">State File Number:</label>
                        <div className="flex flex-1 flex-col gap-2">
                          <input
                            type="text"
                            name="stateFileNumber"
                            value={formData.stateFileNumber}
                            onChange={handleChange}
                            placeholder="Enter Your File Number"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          />
                          <p className="text-xs text-slate-500 text-center">
                            The State File Number is located on your invoice. If you cannot locate it, please use our lookup tool
                            to find it.
                          </p>
                        </div>
                      </div>

                      <div className="px-5 py-6">
                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="w-full rounded-lg bg-[#1772b6] px-8 py-3 text-white text-base font-semibold shadow-lg shadow-[#1772b6]/50 hover:bg-[#14639f] transition flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          {status === 'submitting' ? 'Saving...' : 'Continue →'}
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

export default AgentSinglePayment
