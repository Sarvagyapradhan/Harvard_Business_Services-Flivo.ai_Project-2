import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface ServicesProps {
  onNavigate?: (destination: PageKey) => void
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const additionalServices = [
    {
      title: 'Order a Delaware Certificate of Good Standing',
      description:
        'Obtain proof that your Delaware company is in good standing with the state of Delaware.'
    },
    {
      title: 'Order a Certified Copy',
      description:
        'Get proof that your Certificate of Formation/Incorporation is the true and correct copy.'
    },
    {
      title: 'Our Delaware Mail Forwarding Services',
      description: 'Ensure official state mail reaches you quickly with secure Delaware forwarding.'
    },
    {
      title: 'Order Apostille Service',
      description:
        'For our international clients, we can provide certifications by Apostille for Delaware documents.'
    },
    {
      title: 'Delaware LLC Operating Agreement Template',
      description:
        'Keep your LLC in compliance with a strong legal shield created from our attorney-reviewed template.'
    },
    {
      title: 'File Foreign Qualification',
      description:
        'If your company operates in other states, we’ll help it foreign qualify everywhere you need.'
    },
    {
      title: 'Apply for a New Federal Tax ID Number (EIN)',
      description:
        'Secure the Federal Tax ID your LLC or corporation needs to lawfully conduct business in the U.S.'
    },
    {
      title: 'Make a Stock Amendment',
      description:
        'Need to adjust the number or class of authorized shares? We’ll prepare and file the amendment.'
    },
    {
      title: 'What Is a DUNS Number?',
      description:
        'Separate business credit from personal credit and unlock government contracting opportunities.'
    },
    {
      title: 'Cancel an LLC',
      description:
        'Close your Delaware LLC in good standing with complete dissolution paperwork and state filings.'
    }
  ]

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onNavigate={onNavigate} />
      <main>
        {/* Section 1 - Total height: 2693px (includes navbar 72px overlay) */}
        <section 
          className="w-full h-[2693px] relative flex items-start justify-center overflow-hidden mt-[72px] bg-why-delaware"
        >
          {/* Hero Content Div - Full width like section, Height: 320px */}
          <div className="absolute top-0 left-0 right-0 w-full h-[320px] flex flex-col justify-start items-center pt-4 bg-[rgba(72,159,232,0.56)] z-10">
            {/* Content Container - Centered with max-width 1440px for text content */}
            <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 pt-4">
              {/* Main Heading */}
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-left mb-8">
                Delaware Incorporation & Corporate Services
              </h1>
              
              {/* Content Text */}
              <div className="w-full mt-2">
                {/* First Paragraph */}
                <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed mb-6 text-left font-semibold">
                  Harvard Business Services, Inc. offers Delaware business formation services for corporations and LLCs for people all across the country and around the world. Our company formation services include; a free business name search, paying the Delaware filing fee, 1 year of Delaware Registered Agent Service, a digital seal and free lifetime customer support. In addition we offer other services that include; obtaining additional documents, foreign qualification, amendments, cancellations & dissolutions.
                </p>
                
                {/* Second Paragraph */}
                <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed text-left font-semibold">
                  Harvard Business Services, Inc. is here to help you get your business formation and is ready to assist you throughout the life of your company.
                </p>
              </div>
            </div>
          </div>

          {/* Second Content Div - Full width like section, Height: 430px */}
          <div className="absolute top-[320px] left-0 right-0 w-full h-[430px] flex flex-col justify-start items-center pt-8 bg-why-delaware-second z-10">
            {/* Content Container - Centered with max-width 1440px for text content */}
            <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12">
              {/* Title */}
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 mt-0">
                Delaware Company Formation
              </h2>
            </div>

            {/* Main Content Overlay - Bleeds full width */}
            <div className="why-delaware-bleed why-delaware-bleed-full">
              <div className="w-full bg-white/30 backdrop-blur-[32px] px-4 sm:px-6 lg:px-10 py-8 lg:py-10">
                <div className="max-w-[1440px] w-full mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
                  {/* Left Text Block */}
                  <div className="flex-1 text-white text-left lg:max-w-[500px] lg:flex-shrink-0 lg:pl-12">
                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
                      With one of the highest-rated customer satisfaction scores in the industry, it's little wonder why more than 400,000 companies have chosen Harvard Business Services, Inc. to register and manage their company formations since 1981.
                    </p>
                  </div>

                  {/* Right Buttons */}
                  <div className="flex flex-col gap-4 w-full lg:w-[640px] lg:flex-shrink-0 lg:ml-14">
                    {/* Domestic Formation Packages Button */}
                    <button className="bg-white rounded-lg px-6 py-4 text-left text-[#2d98ef] font-semibold shadow-lg transition-all duration-300 hover:bg-blue-50 hover:text-[#1f7ac4] flex items-center gap-3 border border-[rgba(45,152,239,0.25)]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2d98ef] bg-[#2d98ef]/10 text-[#2d98ef] flex-shrink-0">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 1.667L12.575 6.883L18.333 7.741L14.167 11.808L15.15 17.5L10 14.808L4.85 17.5L5.833 11.808L1.667 7.741L7.425 6.883L10 1.667Z"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-base lg:text-lg underline">Domestic Formation Packages</span>
                    </button>

                    {/* International Formation Packages Button */}
                    <button className="bg-white rounded-lg px-6 py-4 text-left text-[#2d98ef] font-semibold shadow-lg transition-all duration-300 hover:bg-blue-50 hover:text-[#1f7ac4] flex items-center gap-3 border border-[rgba(45,152,239,0.25)]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2d98ef] bg-[#2d98ef]/10 text-[#2d98ef] flex-shrink-0">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 1.667L12.575 6.883L18.333 7.741L14.167 11.808L15.15 17.5L10 14.808L4.85 17.5L5.833 11.808L1.667 7.741L7.425 6.883L10 1.667Z"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-base lg:text-lg underline">International Formation Packages</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Content Div - Full width like section, Height: 583px, 26px gap after div 2 */}
          <div className="absolute top-[776px] left-0 right-0 w-full h-[583px] flex flex-col justify-start items-center pt-8 bg-why-delaware-image1 z-10">
            {/* Content Container - Centered with max-width 1440px for text content */}
            <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12">
              {/* Title */}
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 mt-0">
                Delaware Registered Agent Service
              </h2>
            </div>

            {/* Main Content Overlay - Bleeds full width */}
            <div className="why-delaware-bleed why-delaware-bleed-image1 why-delaware-bleed-full">
              <div className="w-full bg-white/30 backdrop-blur-[32px] px-4 sm:px-6 lg:px-10 py-8 lg:py-10">
                <div className="max-w-[1440px] w-full mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
                  {/* Left Text Block */}
                  <div className="flex-1 text-white text-left lg:max-w-[500px] lg:flex-shrink-0 lg:pl-12">
                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
                      Harvard Business Services, Inc. guarantees your annual Registered Agent Fee will remain fixed at $50 per company, per year, for the life of your company. Our Registered Agent Fee has remained the same since 1981.
                    </p>
                  </div>

                  {/* Right Buttons */}
                  <div className="flex flex-col gap-4 w-full lg:w-[800px] lg:flex-shrink-0 lg:ml-14">
                    {/* Domestic Formation Packages Button */}
                    <button className="bg-white rounded-lg px-6 py-4 text-left text-[#2d98ef] font-semibold shadow-lg transition-all duration-300 hover:bg-blue-50 hover:text-[#1f7ac4] flex items-center gap-3 border border-[rgba(45,152,239,0.25)]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2d98ef] bg-[#2d98ef]/10 text-[#2d98ef] flex-shrink-0">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 1.667L12.575 6.883L18.333 7.741L14.167 11.808L15.15 17.5L10 14.808L4.85 17.5L5.833 11.808L1.667 7.741L7.425 6.883L10 1.667Z"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-base lg:text-lg underline">Appoint Us As Your Delaware Registered Agent</span>
                    </button>

                    {/* International Formation Packages Button */}
                    <button className="bg-white rounded-lg px-6 py-4 text-left text-[#2d98ef] font-semibold shadow-lg transition-all duration-300 hover:bg-blue-50 hover:text-[#1f7ac4] flex items-center gap-3 border border-[rgba(45,152,239,0.25)]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2d98ef] bg-[#2d98ef]/10 text-[#2d98ef] flex-shrink-0">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 1.667L12.575 6.883L18.333 7.741L14.167 11.808L15.15 17.5L10 14.808L4.85 17.5L5.833 11.808L1.667 7.741L7.425 6.883L10 1.667Z"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-base lg:text-lg underline">Change Your Registered Agent</span>
                    </button>

                    {/* Additional Button */}
                    <button className="bg-white rounded-lg px-6 py-4 text-left text-[#2d98ef] font-semibold shadow-lg transition-all duration-300 hover:bg-blue-50 hover:text-[#1f7ac4] flex items-center gap-3 border border-[rgba(45,152,239,0.25)]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2d98ef] bg-[#2d98ef]/10 text-[#2d98ef] flex-shrink-0">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 1.667L12.575 6.883L18.333 7.741L14.167 11.808L15.15 17.5L10 14.808L4.85 17.5L5.833 11.808L1.667 7.741L7.425 6.883L10 1.667Z"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-base lg:text-lg underline">Appoint Us As Your Registered Agent in Another State</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Content Div - Additional Services */}
          <div className="absolute top-[1389px] left-0 right-0 w-full min-h-[1276px] flex flex-col items-center pt-14 pb-16 bg-additional-services z-10">
            <div className="max-w-[1000px] w-full mx-auto px-6 text-center">
              <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4">Additional Services</h2>
              <p className="text-white text-base sm:text-lg leading-relaxed font-medium">
                We can provide assistance throughout the life of your company. These Delaware
                corporate services are the most popular with our clients:
              </p>
            </div>

            <div className="why-delaware-bleed why-delaware-bleed-full mt-10 w-full">
              <div className="w-full min-h-[720px] bg-white/20 backdrop-blur-[32px] px-4 sm:px-6 lg:px-12 py-10 lg:py-12">
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                  {additionalServices.map((service) => (
                    <button
                      key={service.title}
                      className="group flex items-start gap-4 rounded-xl border border-white/60 bg-white shadow-[0_6px_18px_rgba(15,23,42,0.15)] px-5 sm:px-6 py-5 text-left transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2d98ef]/30 bg-[#e0f2ff] text-[#2d98ef]">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 1.667L12.575 6.883L18.333 7.741L14.167 11.808L15.15 17.5L10 14.808L4.85 17.5L5.833 11.808L1.667 7.741L7.425 6.883L10 1.667Z"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base sm:text-lg font-semibold text-[#1f2a44] group-hover:text-[#2d98ef] transition-colors underline decoration-transparent group-hover:decoration-[#2d98ef]">
                          {service.title}
                        </p>
                        <p className="text-sm sm:text-base text-[#1e293b] mt-2 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </button>
                  ))}
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

export default Services

