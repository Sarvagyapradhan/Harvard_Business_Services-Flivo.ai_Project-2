import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface ContactUsProps {
  onNavigate?: (destination: PageKey) => void
}

const ContactUs: React.FC<ContactUsProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F2F2F2]">
      <Navbar onNavigate={onNavigate} />
      <main>
        {/* Section 1 - Hero */}
        <section className="relative left-1/2 w-screen -translate-x-1/2 h-[302px] overflow-hidden bg-[url('/Footer%20Pages/bsckground_tc_pp.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.5),_rgba(0,0,0,0.5))]" />
          <div className="absolute inset-0 bg-[linear-gradient(178.09deg,_rgba(72,159,232,0)_23.19%,_#489FE8_91.93%)]" />
          <div className="relative max-w-[1440px] h-full mx-auto px-6 lg:px-12 flex flex-col justify-end pb-12 text-white">
            <h1 className="text-[36px] sm:text-[44px] lg:text-[52px] font-semibold leading-tight mb-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl font-medium">
              Hours: Monday - Thursday: 9 AM - 5 PM EDT (GMT-5)<br />
              Friday: 9 AM - 4 PM EDT (GMT-5)
            </p>
          </div>
        </section>

        {/* Section 2 - Cards */}
        <section className="relative left-1/2 w-screen -translate-x-1/2 py-16 sm:py-20 bg-gray-50">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              
              {/* Card 1 - Telephone & Fax */}
              <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-xl overflow-hidden flex flex-col h-full">
                <div className="h-[180px] relative">
                    <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(90.28deg, rgba(0, 0, 0, 0.8) 44.04%, rgba(0, 0, 0, 0) 99.76%)' }} />
                    <img src="/Footer Pages/card1.png" alt="Telephone & Fax" className="w-full h-full object-cover" />
                    <h3 className="absolute bottom-1/2 translate-y-1/2 left-6 text-2xl font-bold text-white z-20">Telephone & Fax</h3>
                </div>
                <div className="flex-grow flex flex-col">
                  <div>
                    <div className="bg-[#489FE8] text-white font-bold py-3 px-6 w-full text-lg">
                      From USA:
                    </div>
                    <div className="p-6 space-y-3">
                      <p className="flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#489FE8] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <div>
                              <span className="text-[#489FE8] font-medium">Toll Free: 1-800-345-CORP (2677)</span>
                          </div>
                      </p>
                      <p className="flex items-start gap-3 pl-8">
                          <span className="text-[#489FE8] font-medium">Direct: 1-302-645-7400</span>
                      </p>
                      <p className="flex items-start gap-3 pl-8">
                          <span className="text-[#489FE8] font-medium">Fax: 1-302-645-1280</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="bg-[#489FE8] text-white font-bold py-3 px-6 w-full text-lg">
                      From Outside the USA:
                    </div>
                    <div className="p-6 space-y-3">
                      <p className="flex items-start gap-3">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#489FE8] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <div>
                            <span className="text-[#489FE8] font-medium">Telephone: + 001 302 645 7400</span>
                          </div>
                      </p>
                      <p className="flex items-start gap-3 pl-8">
                          <span className="text-[#489FE8] font-medium">Fax: + 001 302 645 1280</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Email */}
              <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-xl overflow-hidden flex flex-col h-full">
                <div className="h-[180px] relative">
                    <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(90.28deg, rgba(0, 0, 0, 0.8) 44.04%, rgba(0, 0, 0, 0) 99.76%)' }} />
                    <img src="/Footer Pages/card2.png" alt="Email" className="w-full h-full object-cover" />
                    <h3 className="absolute bottom-1/2 translate-y-1/2 left-6 text-2xl font-bold text-white z-20">Email</h3>
                </div>
                <div className="flex-grow flex flex-col">
                  <div>
                    <div className="bg-[#489FE8] text-white font-bold py-3 px-6 w-full text-lg">
                      General Information:
                    </div>
                    <div className="p-6">
                      <a href="mailto:info@delawareinc.com" className="flex items-start gap-3 text-[#489FE8] hover:underline font-medium text-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#489FE8] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          info@delawareinc.com
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="bg-[#489FE8] text-white font-bold py-3 px-6 w-full text-lg">
                      Franchise Tax:
                    </div>
                    <div className="p-6">
                       <a href="mailto:payments@delawareinc.com" className="flex items-start gap-3 text-[#489FE8] hover:underline font-medium text-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#489FE8] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          payments@delawareinc.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Address */}
              <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-xl overflow-hidden flex flex-col h-full">
                <div className="h-[180px] relative">
                    <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(90.28deg, rgba(0, 0, 0, 0.8) 44.04%, rgba(0, 0, 0, 0) 99.76%)' }} />
                    <img src="/Footer Pages/card3.png" alt="Address" className="w-full h-full object-cover" />
                    <h3 className="absolute bottom-1/2 translate-y-1/2 left-6 text-2xl font-bold text-white z-20">Address</h3>
                </div>
                <div className="flex-grow flex flex-col">
                  <div>
                    <div className="bg-[#489FE8] text-white font-bold py-3 px-6 w-full text-lg">
                      Mailing and Office Address:
                    </div>
                    <div className="p-6 flex items-start gap-3">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#489FE8] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      <div className="space-y-1 text-base text-[#489FE8] font-medium">
                        <p>Harvard Business Services, Inc.</p>
                        <p>16192 Coastal Highway</p>
                        <p>Lewes, Delaware 19958</p>
                        <p>USA</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-[#489FE8] text-white font-bold py-3 px-6 w-full text-lg">
                      Registered Agent Address:
                    </div>
                    <div className="p-6 flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#489FE8] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      <div className="space-y-1 text-base text-[#489FE8] font-medium">
                        <p>16192 Coastal Highway</p>
                        <p>Lewes, Delaware 19958</p>
                        <p>USA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Order Status */}
              <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-xl overflow-hidden flex flex-col h-full">
                <div className="h-[180px] relative">
                    <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(90.28deg, rgba(0, 0, 0, 0.8) 44.04%, rgba(0, 0, 0, 0) 99.76%)' }} />
                    <img src="/Footer Pages/card4.png" alt="Order Status" className="w-full h-full object-cover" />
                    <h3 className="absolute bottom-1/2 translate-y-1/2 left-6 text-2xl font-bold text-white z-20">Order Status</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col gap-6">
                  <div className="space-y-6 text-gray-900">
                    <div>
                        <div className="flex items-start gap-3 mb-4">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#489FE8] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                             </svg>
                            <div>
                                <p className="font-bold text-[#489FE8] text-lg">Email:</p>
                                <a href="mailto:info@delawareinc.com" className="text-[#489FE8] hover:underline font-medium break-all text-lg">info@delawareinc.com</a>
                            </div>
                        </div>
                        <p className="text-sm font-bold text-black leading-relaxed mb-1">
                            Please include your name, company name, and order number in your email or call:
                        </p>
                        <a href="tel:1-800-345-2677" className="text-lg font-medium text-[#489FE8] hover:underline">1-800-345-CORP</a>
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

export default ContactUs

