import React, { useState, FormEvent, ChangeEvent } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface StartCompanyProps {
  onNavigate?: (destination: PageKey) => void
}

interface FormData {
  titlePrefix: string
  firstName: string
  lastName: string
  titleSuffix: string
  email: string
  verifyEmail: string
  phoneNumber: string
  companyType: string
  companyName: string
}

const StartCompany: React.FC<StartCompanyProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<FormData>({
    titlePrefix: 'Title',
    firstName: '',
    lastName: '',
    titleSuffix: 'Title',
    email: '',
    verifyEmail: '',
    phoneNumber: '',
    companyType: 'Delaware Limited Liability Company (LLC)',
    companyName: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (formData.email !== formData.verifyEmail) {
        setErrorMessage("Emails do not match")
        setStatus('error')
        return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('http://localhost:5000/api/submit-company', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setStatus('success')
      // clear form or redirect
      alert('Company formation request submitted successfully!')
      setFormData({
        titlePrefix: 'Title',
        firstName: '',
        lastName: '',
        titleSuffix: 'Title',
        email: '',
        verifyEmail: '',
        phoneNumber: '',
        companyType: 'Delaware Limited Liability Company (LLC)',
        companyName: ''
      })
    } catch (error) {
      console.error(error)
      setStatus('error')
      setErrorMessage('Failed to submit form. Please try again.')
    } finally {
        setStatus('idle')
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onNavigate={onNavigate} />
      <main className="pt-[72px]">
        <section
          className="relative w-full overflow-hidden bg-start-company min-h-screen h-auto pb-20"
        >
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 flex flex-col items-center">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-[40px] font-bold text-center mt-16">
                Form a Delaware LLC or Corporation!
              </h1>
              <div className="w-full max-w-[920px] mt-8 mb-20">
                <div className="bg-white/98 backdrop-blur-sm rounded-[30px] shadow-[0_28px_60px_rgba(15,23,42,0.28)] border border-white/50 overflow-hidden">
                  <div className="bg-gradient-to-b from-[#1E74C7] to-[#2D98EF] px-8 sm:px-10 py-6">
                    <h2 className="text-white text-[28px] sm:text-[32px] font-semibold text-center">
                      Let's get started
                    </h2>
                  </div>
                  <div className="px-8 sm:px-10 py-9 bg-white">
                    <p className="text-[#0b1524] font-semibold text-sm sm:text-[15px] leading-7 text-center mb-7">
                      Get ready to take the first step to being your own boss, we are ready to assist! After submitting
                      this form and payment, we'll email a summary for your review and electronic signature. You must
                      confirm the details before we file with Delaware.
                    </p>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-[210px_minmax(0,1fr)] gap-4 items-center border-t border-[#E2E8F0] pt-5">
                          <label className="text-[#0b1524] font-semibold text-[15px]">
                            Full Name:
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-[120px_minmax(0,1fr)_minmax(0,1fr)_120px] gap-3">
                            <select 
                              aria-label="Title prefix"
                              name="titlePrefix"
                              value={formData.titlePrefix}
                              onChange={handleChange}
                              className="w-full border border-[#CBD5E1] rounded-[14px] px-4 py-3 text-sm text-[#0b1524] font-semibold focus:outline-none focus:ring-2 focus:ring-[#2d98ef]/40 focus:border-[#2d98ef] bg-white"
                            >
                              <option>Title</option>
                              <option value="Mr.">Mr.</option>
                              <option value="Mrs.">Mrs.</option>
                              <option value="Ms.">Ms.</option>
                              <option value="Dr.">Dr.</option>
                            </select>
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="First Name"
                              required
                              className="w-full border border-[#CBD5E1] rounded-[14px] px-4 py-3 text-sm text-[#0b1524] font-semibold placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2d98ef]/40 focus:border-[#2d98ef] bg-white"
                            />
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Last Name"
                              required
                              className="w-full border border-[#CBD5E1] rounded-[14px] px-4 py-3 text-sm text-[#0b1524] font-semibold placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2d98ef]/40 focus:border-[#2d98ef] bg-white"
                            />
                            <select 
                              aria-label="Title suffix"
                              name="titleSuffix"
                              value={formData.titleSuffix}
                              onChange={handleChange}
                              className="w-full border border-[#CBD5E1] rounded-[14px] px-4 py-3 text-sm text-[#0b1524] font-semibold focus:outline-none focus:ring-2 focus:ring-[#2d98ef]/40 focus:border-[#2d98ef] bg-white"
                            >
                              <option>Title</option>
                              <option value="Jr.">Jr.</option>
                              <option value="Sr.">Sr.</option>
                              <option value="II">II</option>
                              <option value="III">III</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[210px_minmax(0,1fr)] gap-4 items-start border-t border-[#E2E8F0] pt-5">
                          <label className="text-[#0b1524] font-semibold text-[15px] pt-[14px] md:pt-0">
                            Email Address:
                          </label>
                          <div className="space-y-2">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="Enter Your Email Address"
                              className="w-full border border-[#CBD5E1] rounded-[14px] px-4 py-3 text-sm text-[#0b1524] font-semibold placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2d98ef]/40 focus:border-[#2d98ef] bg-white"
                            />
                            <p className="text-sm text-[#475569]">
                              Final documents and your receipt will be sent to this email.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[210px_minmax(0,1fr)] gap-4 items-center border-t border-[#E2E8F0] pt-5">
                          <label className="text-[#0b1524] font-semibold text-[15px]">
                            Verify Email Address:
                          </label>
                          <input
                            type="email"
                            name="verifyEmail"
                            value={formData.verifyEmail}
                            onChange={handleChange}
                            required
                            placeholder="Enter Your Email Address"
                            className="w-full border border-[#CBD5E1] rounded-[14px] px-4 py-3 text-sm text-[#0b1524] font-semibold placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2d98ef]/40 focus:border-[#2d98ef] bg-white"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[210px_minmax(0,1fr)] gap-4 items-center border-t border-[#E2E8F0] pt-5">
                          <label className="text-[#0b1524] font-semibold text-[15px]">
                            Phone Number:
                          </label>
                          <div className="flex items-center">
                            <div className="flex items-center gap-2 bg-white border border-[#CBD5E1] rounded-l-[14px] px-4 py-3 text-[#0b1524]">
                              <span role="img" aria-label="Australia flag">
                                🇦🇺
                              </span>
                              <span className="text-sm font-medium text-[#475569]">+61</span>
                            </div>
                            <input
                              type="tel"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleChange}
                              required
                              placeholder="321 567 889"
                              className="w-full border border-[#CBD5E1] rounded-none rounded-r-[14px] px-4 py-3 text-sm text-[#0b1524] font-semibold placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2d98ef]/40 focus:border-[#2d98ef] border-l-0 bg-white"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-[#E2E8F0] pt-5">
                        <div className="grid grid-cols-1 md:grid-cols-[210px_minmax(0,1fr)] gap-4 items-start">
                          <label className="text-[#0b1524] font-semibold text-[15px]">
                            Company Type:
                          </label>
                          <div className="border border-[#CBD5E1] rounded-2xl divide-y divide-[#E2E8F0] overflow-hidden bg-white">
                            {[
                              'Delaware Limited Liability Company (LLC)',
                              'Delaware General Corporation (C-Corp or S-Corp)',
                              'Delaware Close Corporation (C-Corp or S-Corp)',
                              'Delaware Public Benefit Corporation (C-Corp or S-Corp)',
                              'Delaware Non-Profit Corporation (501c3)',
                              'Delaware Series Limited Liability Company (Series LLC)',
                              'Delaware Limited Partnership (LP)'
                            ].map((option) => (
                              <label
                                key={option}
                                className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 hover:bg-[#F8FAFC] cursor-pointer"
                              >
                                <span className="flex items-center gap-3">
                                  <input
                                    type="radio"
                                    name="companyType"
                                    value={option}
                                    checked={formData.companyType === option}
                                    onChange={handleChange}
                                    className="h-5 w-5 accent-[#2d98ef] focus:ring-[#2d98ef]"
                                  />
                                  <span className="text-[#0b1524] font-semibold text-sm sm:text-[15px]">{option}</span>
                                </span>
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="text-[#2d98ef]"
                                >
                                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" />
                                  <text
                                    x="10"
                                    y="11.8"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fontSize="10"
                                    fontWeight="bold"
                                    fill="currentColor"
                                    fontFamily="Arial, sans-serif"
                                  >
                                    i
                                  </text>
                                </svg>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-[#E2E8F0] pt-5">
                        <div className="grid grid-cols-1 md:grid-cols-[210px_minmax(0,1fr)] gap-4">
                          <label className="text-[#0b1524] font-semibold text-[15px]">
                            Company Name:
                          </label>
                          <div className="space-y-2">
                            <input
                              type="text"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleChange}
                              required
                              placeholder="Enter Your Company Name"
                              className="w-full border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0b1524] font-semibold placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2d98ef]/40 focus:border-[#2d98ef] bg-white"
                            />
                            <p className="text-sm text-[#475569]">
                              Enter the exact corporation name, including letter casing, spaces, and punctuation. If you do not
                              provide an appropriate ending (Inc., Incorporated, etc.), we will automatically add &ldquo;Inc.&rdquo; to
                              the end of your corporation’s name.
                            </p>
                          </div>
                        </div>
                      </div>

                      {errorMessage && (
                          <div className="text-red-500 text-center font-semibold">
                              {errorMessage}
                          </div>
                      )}

                      <div className="flex justify-center pt-2">
                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="bg-[#2d98ef] hover:bg-[#1f7ac4] text-white font-semibold px-10 py-3 rounded-full shadow-lg flex items-center gap-2 transition-transform duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {status === 'submitting' ? 'Submitting...' : 'Continue'}
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 2L8 6L4 10"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
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

export default StartCompany

