import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface FranchiseMultiPaymentProps {
  onNavigate?: (destination: PageKey) => void
}

const FranchiseMultiPayment: React.FC<FranchiseMultiPaymentProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    title: 'Title',
    firstName: '',
    lastName: '',
    suffix: 'Title',
    countryCode: '🇦🇺 +61',
    phoneNumber: '',
    email: '',
    verifyEmail: '',
    companyName: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (formData.email !== formData.verifyEmail) {
        alert("Emails do not match")
        return
    }

    setStatus('submitting')
    try {
      const response = await fetch('http://localhost:5000/api/submit-franchise-multi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('success')
      alert('Data saved successfully!')
      setFormData({
        title: 'Title',
        firstName: '',
        lastName: '',
        suffix: 'Title',
        countryCode: '🇦🇺 +61',
        phoneNumber: '',
        email: '',
        verifyEmail: '',
        companyName: ''
      })
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
              <header className="space-y-5 text-left">
                <br className="hidden lg:block"/><br className="hidden lg:block"/>
                <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold leading-tight text-white mt-16 lg:mt-0">
                  Pay Franchise Tax for Multiple LLCs & LPs
                </h1>
                <div className="space-y-4 text-base sm:text-lg text-white font-semibold leading-relaxed max-w-7xl">
                  <p>
                    To pay your Delaware Franchise Tax for multiple LLCs & LPs, simply enter your information below. Once the
                    filing for your franchise multiples has been completed, a confirmation will be sent to your email.
                  </p>
                  <p>
                    Please note: if you would like to pay Delaware Franchise Tax for a corporation, you will need to go to Pay
                    Your Delaware Franchise Tax page. Even if you own multiple corporations, you will still need to pay your
                    franchise taxes on the other page, separately for each business entity.
                  </p>
                  <p>
                    Harvard Business Services, Inc. offers a unique service, for a small filing fee, to assist both our clients
                    and non-clients in filing their annual Delaware LLC & LP Franchise Taxes. Please note Harvard Business
                    Services, Inc. is not affiliated with the State of Delaware.
                  </p>
                  <p>
                    If you have any questions about paying franchise taxes for multiple LLCs or LPs, due dates, or calculating
                    the amount due, feel free to check out our Delaware Franchise Tax FAQs or contact us today.
                  </p>
                </div>
               
              </header>

              <div className="mt-10 lg:mt-14 space-y-10">
                <div className="rounded-[24px] lg:rounded-[30px] border border-white/30 bg-white/95 text-slate-900 shadow-[0_25px_90px_rgba(7,33,64,0.35)] overflow-hidden">
                  <div className="bg-[#1772b6] text-white text-center px-6 py-6">
                    <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wide">Contact Information</h2>
                  </div>
                  <div className="px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
                    <form className="border border-slate-200 rounded-2xl divide-y divide-slate-200">
                      <div className="flex flex-col gap-4 px-4 sm:px-5 py-6 lg:flex-row lg:items-center">
                        <label className="w-full text-base font-semibold text-slate-700 lg:w-48">Full Name:</label>
                        <div className="flex flex-1 flex-col gap-3 lg:flex-row lg:items-center">
                          <select
                            aria-label="Title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full lg:w-28 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          >
                            <option>Title</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Mrs.">Mrs.</option>
                            <option value="Dr.">Dr.</option>
                          </select>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          />
                          <select
                            aria-label="Title or Suffix"
                            name="suffix"
                            value={formData.suffix}
                            onChange={handleChange}
                            className="w-full lg:w-28 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          >
                            <option>Title</option>
                            <option value="LLC">LLC</option>
                            <option value="LP">LP</option>
                            <option value="Inc.">Inc.</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 px-4 sm:px-5 py-6 lg:flex-row lg:items-center">
                        <label className="w-full text-base font-semibold text-slate-700 lg:w-48">Phone Number:</label>
                        <div className="flex flex-1 flex-col gap-3 lg:flex-row lg:items-center">
                          <select
                            aria-label="Country Code"
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className="w-full sm:w-32 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          >
                            <option value="🇦🇺 +61">🇦🇺 +61</option>
                            <option value="🇺🇸 +1">🇺🇸 +1</option>
                            <option value="🇬🇧 +44">🇬🇧 +44</option>
                            <option value="🇨🇦 +1">🇨🇦 +1</option>
                            <option value="🇩🇪 +49">🇩🇪 +49</option>
                            <option value="🇫🇷 +33">🇫🇷 +33</option>
                            <option value="🇯🇵 +81">🇯🇵 +81</option>
                            <option value="🇨🇳 +86">🇨🇳 +86</option>
                          </select>
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="321 567 889"
                            className="flex-1 rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 px-4 sm:px-5 py-6 lg:flex-row lg:items-center">
                        <label className="w-full text-base font-semibold text-slate-700 lg:w-48">Email Address:</label>
                        <div className="flex flex-1 flex-col gap-2">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Your Email Address"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          />
                          <p className="text-xs text-slate-500">
                            Final documents and your receipt will be sent to this email.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 px-4 sm:px-5 py-6 lg:flex-row lg:items-center">
                        <label className="w-full text-base font-semibold text-slate-700 lg:w-48">Verify Email Address:</label>
                        <div className="flex-1">
                          <input
                            type="email"
                            name="verifyEmail"
                            value={formData.verifyEmail}
                            onChange={handleChange}
                            placeholder="Enter Your Email Address"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="rounded-[24px] lg:rounded-[30px] border border-white/30 bg-white/95 text-slate-900 shadow-[0_25px_90px_rgba(7,33,64,0.35)] overflow-hidden">
                  <div className="bg-[#1772b6] text-white text-center px-6 py-6">
                    <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wide">Company Information</h2>
                  </div>
                  <div className="px-4 sm:px-6 lg:px-10 py-6 sm:py-10 space-y-5">
                    <p className="text-base text-slate-700 text-center">
                      To locate the exact company for which you want to pay Delaware Franchise Tax, enter the company name in
                      the field below and click the Search button.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder='Ex. "XYZ Sales LLC"'
                        className="w-full flex-1 rounded-lg border border-slate-300 px-4 py-3 text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1772b6]"
                      />
                      <button 
                        onClick={handleSubmit}
                        disabled={status === 'submitting'}
                        className="w-full sm:w-auto rounded-lg bg-[#1772b6] px-8 py-3 text-white text-base font-semibold shadow-lg shadow-[#1772b6]/50 hover:bg-[#14639f] transition disabled:opacity-50"
                      >
                        {status === 'submitting' ? 'Searching...' : 'Search'}
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

export default FranchiseMultiPayment
