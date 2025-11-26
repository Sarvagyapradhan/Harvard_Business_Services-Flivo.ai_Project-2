import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface DomesticFormationPackagesProps {
  onNavigate?: (destination: PageKey) => void
}

const DomesticFormationPackages: React.FC<DomesticFormationPackagesProps> = ({ onNavigate }) => {
  const includedFeatures = [
    'Name Check & Clearance',
    'Certificate of Incorporation/Formation',
    'Preparation of Documents',
    'All Delaware Filing Fees',
    'Same Day Electronic Filing',
    'Registered Agent Fee - 12 Months',
    'Email of Approved Documents',
    'Free Shipping & Handling',
    'FREE Lifetime Customer Support',
    'And much more!'
  ]

  const packages = [
    {
      name: 'Green',
      price: 229,
      headerColor: 'bg-[linear-gradient(90.28deg,#00B67A_28.93%,#005036_99.76%)]',
      description: 'The most economical and environmentally-friendly way to form an LLC or corporation.',
      descriptionBg: 'bg-[#00B67A] bg-opacity-20',
      includesHeaderColor: 'bg-[#4a90e2]',
      features: [
        'All Delaware Fees',
        'Registered Agent Fee',
        'Name Check & Clearance',
        'Preparation of Documents',
        'Same-day Electronic Filing',
        'Certificate of Formation / Incorporation',
        'Statement of Authorized Person / Incorporator',
        'Digital Copy of Documents',
        'Digital Corporate Seal',
        'One Year of Delaware Registered Agent Service',
        'Guaranteed $50 Annual Delaware Agent Fee',
        'Lifetime Customer Support',
        'FREE Compliance Coaching'
      ]
    },
    {
      name: 'Basic',
      price: 229,
      headerColor: 'bg-[linear-gradient(180deg,#FFE604_0%,#D1BC00_100%)]',
      headerTextColor: 'text-black',
      description:
        'Everything you need to get started, plus digital document templates with all the essentials.',
      descriptionBg: 'bg-[#FFE604] bg-opacity-20',
      includesHeaderColor: 'bg-[#4a90e2]',
      includesText: (
        <>
          Everything you see listed in the <strong>Green Package</strong>, plus...
        </>
      ),
      features: [
        'Hard Copy of Documents',
        'All Shipping Fees (Priority Mailing)',
        'Operating Agreements/Bylaws',
        'LLC/Corporation Essential Documents',
        'Digital Membership/Stock Certificates',
        'Bank Resolution Form'
      ]
    },
    {
      name: 'Standard',
      price: 379,
      headerColor: 'bg-[linear-gradient(180deg,#FFA600_0%,#D28800_100%)]',
      headerTextColor: 'text-black',
      description: 'The Basic package, plus a deluxe LLC/corporate kit and corporate seal.',
      descriptionBg: 'bg-[#FFA600] bg-opacity-20',
      includesHeaderColor: 'bg-[#4a90e2]',
      includesText: (
        <>
          Everything in the <strong>Green</strong> and <strong>Basic packages</strong>, plus...
        </>
      ),
      deluxeKitText: 'Deluxe Kit with:',
      features: [
        'Silver Embossed Binder',
        'Company Guidebook',
        'Operating Agreement/Bylaws',
        'Meeting Minute Book',
        'Organizational Resolutions',
        '20 Membership/Stock Certificates',
        'Membership/Stock Ledger',
        'Corporate Seal'
      ],
      sealDescription: 'Fold-up style embosser with lead-cast lettering.'
    }
  ]

  const addOns = [
    {
      title: 'EXPRESS FORMATION DOCUMENTS',
      description:
        'Once your corporate documents are signed, our Same Day and Next Day expedited filing options get your documents processed and approved by Delaware faster.',
      price: 75
    },
    {
      title: 'EMPLOYER IDENTIFICATION NUMBER (EIN)',
      description:
        'Every entity must obtain a Federal Tax Identification Number before it can open a U.S. bank account, hire U.S. employees, or pay U.S. taxes. Think of the EIN as the social security number for your company. HBS can obtain your Federal Tax Identification Number for you.',
      price: 95
    },
    {
      title: 'Delaware Mail Forwarding and Premium Mail Forwarding',
      description:
        "We provide a wide variety of Delaware mail forwarding services to suit your company's needs. Many clients do not have a physical address other than their home offices; others want to establish a U.S. presence.",
      price: 29
    }
  ]

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onNavigate={onNavigate} />
      <main>
        {/* Section 1 - Total height: 2693px (includes navbar 72px overlay) */}
        <section className="w-full h-[3650px] relative flex items-start justify-center overflow-hidden mt-[72px] bg-why-delaware">
          {/* Hero Content Div - Full width like section, Height: 320px */}
          <div className="absolute top-0 left-0 right-0 w-full h-[320px] flex flex-col justify-start items-center pt-4 bg-[rgba(72,159,232,0.56)] z-10">
            <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 pt-4" aria-hidden="true">
              <div className="h-[200px]" />
            </div>
          </div>

          {/* Second Content Div - Full width like section, Height: 430px */}
          <div className="absolute top-[100px] left-0 right-0 w-full h-[2310px] flex flex-col justify-start items-center pt-10 z-10 bg-[url('/Payments/image.png')] bg-cover bg-center bg-[rgba(19,19,19,0.7)] bg-blend-multiply">
            <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 mb-12">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
                Compare Domestic Delaware LLC or <br className="hidden sm:block" />
                Corporation Formation Packages
              </h1>
            </div>
            {/* Main Content Overlay - Bleeds full width */}
            <div className="why-delaware-bleed-full">
              <div className="w-full bg-white/30 backdrop-blur-[32px] px-4 sm:px-6 lg:px-10 py-8 lg:py-10 mt-0">
                <div className="max-w-[1440px] w-full mx-auto min-h-[710px] flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Left Column: Text Content */}
                  <div className="flex-1 text-white space-y-8">
                    <p className="text-xl sm:text-2xl font-medium leading-relaxed">
                      The state of Delaware is known globally as the destination for businesses looking to incorporate,
                      and Harvard Business Services Inc. helps clients around the world form Delaware LLCs and
                      corporations. If you are located outside the United States and want to form a Delaware LLC or
                      corporation, we can help. Please view our international incorporation packages below. If you have
                      any questions, please contact our helpful and experienced staff by phone (1-302-645-7400) or
                      live chat.
                    </p>
                    <p className="text-xl sm:text-2xl font-medium leading-relaxed">
                      If you're planning to incorporate a company within the U.S., our business formation packages will
                      have a slightly different price. Compare Domestic Formation Packages for your new corporation or
                      LLC today.
                    </p>
                    <p className="text-xl sm:text-2xl font-medium leading-relaxed">
                      Harvard Business Services, Inc. is here to help you get your business formation and is ready to
                      assist you throughout the life of your company.
                    </p>
                  </div>

                  {/* Right Column: Included Features List */}
                  <div className="w-full lg:w-[450px] flex-shrink-0">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      {/* Header */}
                      <div className="bg-[#3ea3f2] px-6 py-5">
                        <h3 className="text-white text-2xl font-bold text-left">Included in all packages</h3>
                      </div>
                      {/* List Items */}
                      <div className="divide-y divide-gray-200">
                        {includedFeatures.map((feature, index) => (
                          <div key={index} className="px-6 py-4 flex items-center gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#3ea3f2] flex items-center justify-center">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 5L4.5 8.5L13 1"
                                  stroke="#3ea3f2"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <span className="text-[#3ea3f2] font-semibold text-lg sm:text-xl">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Content Overlay - Pricing Options */}
          <div className="absolute top-[1190px] left-0 right-0 z-10 why-delaware-bleed-image1 why-delaware-bleed-full">
            <div className="w-full bg-white/30 backdrop-blur-[32px] px-4 sm:px-6 lg:px-10 py-8 lg:py-10">
              <div className="max-w-[1440px] w-full mx-auto">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8">
                  WE OFFER 3 VALUE-PACKED OPTIONS!
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  {packages.map((pkg) => (
                    <div key={pkg.name} className="flex flex-col relative">
                      <div className="flex-1 bg-white rounded-lg overflow-hidden shadow-xl flex flex-col">
                        {/* Card Header & Description Combined */}
                        <div className={`${pkg.headerColor} px-5 py-5 flex flex-col h-[210px]`}>
                          <div className="flex justify-between items-start mb-5">
                            <h3 className={`text-3xl font-bold ${pkg.headerTextColor || 'text-white'}`}>{pkg.name}</h3>
                            <div className="bg-white px-3 py-1.5 rounded text-black font-bold text-2xl flex items-start shadow-sm">
                              <span className="text-sm mt-1 mr-1">$</span>
                              {pkg.price}
                            </div>
                          </div>
                          <p className={`text-base font-medium leading-relaxed ${pkg.headerTextColor || 'text-white'}`}>
                            {pkg.description}
                          </p>
                        </div>

                        {/* Includes Section */}
                        <div className="px-5 py-3 bg-[#4a90e2] text-white h-[90px] flex flex-col justify-center">
                          <h4 className="font-bold text-base mb-1">Includes</h4>
                          {pkg.includesText && <p className="text-xs leading-snug">{pkg.includesText}</p>}
                          {pkg.deluxeKitText && <p className="text-xs font-bold mt-1">{pkg.deluxeKitText}</p>}
                        </div>

                        {/* Features List */}
                        <div className="flex-1 bg-white">
                          {pkg.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 px-5 py-3 border-b border-gray-100 last:border-b-0 min-h-[50px]"
                            >
                              <div className="flex-shrink-0 mt-0.5">
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle cx="10" cy="10" r="9" stroke="#4a90e2" strokeWidth="1.5" />
                                  <path
                                    d="M6 10L8.5 12.5L14 7.5"
                                    stroke="#4a90e2"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="flex flex-col justify-center">
                                <span className="text-[#4a90e2] font-semibold text-sm leading-tight">{feature}</span>
                                {pkg.sealDescription && feature === 'Corporate Seal' && (
                                  <p className="text-[#4a90e2] text-xs mt-1 opacity-80 leading-tight">
                                    {pkg.sealDescription}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Learn More Button (Inside Card) */}
                        <button className="w-full bg-[#4a90e2] text-white font-bold py-4 hover:bg-blue-500 transition-colors text-center uppercase tracking-wide text-sm">
                          LEARN MORE
                        </button>
                      </div>

                      {/* Order Now Button (Outside Card) */}
                      <div className="flex justify-center mt-4">
                        <button className="bg-[#4a90e2] text-white font-bold py-3 px-8 rounded-[4px] hover:bg-blue-500 transition-colors flex items-center gap-2 shadow-md text-sm uppercase tracking-wide">
                          <span>Order Now</span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 8H15M15 8L8 1M15 8L8 15"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Content Div - Additional Services */}
          <div className="absolute top-[2500px] left-0 right-0 w-full min-h-[1000px] flex flex-col items-center pt-14 pb-16 z-10 bg-[url('/Payments/image2.png')] bg-cover bg-center bg-[rgba(0,0,0,0.6)] bg-blend-multiply">
            <div className="w-full max-w-[1440px] px-6 lg:px-12">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12">
                Available Add-Ons
              </h2>

              <div className="why-delaware-bleed-full w-full">
                <div className="w-full min-h-[720px] bg-white/30 backdrop-blur-[32px] px-4 sm:px-6 lg:px-10 py-10 lg:py-12">
                  <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
                    {addOns.map((addon, index) => (
                      <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg min-h-[160px]">
                        {/* Left Content */}
                        <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                          <h3 className="text-[#3ea3f2] text-2xl sm:text-3xl font-bold mb-4 uppercase">{addon.title}</h3>
                          <p className="text-[#4a90e2] text-lg sm:text-xl leading-relaxed">{addon.description}</p>
                        </div>

                        {/* Right Price */}
                        <div className="w-full md:w-[220px] bg-white border-t md:border-t-0 md:border-l border-gray-100 p-8 flex flex-col justify-center items-center">
                          <span className="text-[#3ea3f2] text-base font-bold mb-2">Starting at</span>
                          <div className="text-[#3ea3f2] text-6xl font-bold flex items-start">
                            <span className="text-3xl mt-2 mr-1">$</span>
                            {addon.price}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Start Order Button */}
                    <div className="flex justify-center mt-8">
                      <button className="bg-[#4a90e2] text-white font-bold py-4 px-10 rounded-[4px] hover:bg-blue-500 transition-colors flex items-center gap-2 shadow-lg text-lg">
                        <span>Start your order now</span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 8H15M15 8L8 1M15 8L8 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Background Feature (Copied from Home) */}
        <section className="relative w-full h-[812px] bg-white overflow-hidden flex justify-center">
          <div className="absolute top-[33px] bottom-[40px] left-0 right-0">
            <div className="w-full h-full bg-section-four"></div>
          </div>

          <div className="absolute top-[156px] left-0 right-0 h-[529px] bg-[#69a6db]"></div>
          <div className="absolute flex gap-4 left-1/2 -translate-x-1/2 top-[90px] w-[1325px] h-[335px]">
            {[
              {
                name: 'Lorenzo Casto',
                location: 'Washington, USA',
                date: 'July 23, 2025'
              },
              {
                name: 'Lorenzo Casto',
                location: 'Washington, USA',
                date: 'July 23, 2025'
              },
              {
                name: 'Lorenzo Casto',
                location: 'Washington, USA',
                date: 'July 23, 2025'
              }
            ].map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="flex-1 bg-white rounded-2xl flex flex-col gap-4 p-6 min-w-0 h-full shadow-[0px_18px_36px_rgba(15,23,42,0.2)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#2d98ef] to-[#1f7ac4] text-white flex items-center justify-center text-lg font-semibold">
                      LC
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#0b1524] text-lg font-semibold">{review.name}</span>
                      <span className="text-[#374151] text-sm">{review.location}</span>
                    </div>
                  </div>
                  <span className="text-[#1f2937] text-sm font-medium">{review.date}</span>
                </div>
                <div className="flex items-center gap-1 text-[#FACC15]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 1.667L12.575 6.883L18.333 7.741L14.167 11.808L15.15 17.5L10 14.808L4.85 17.5L5.833 11.808L1.667 7.741L7.425 6.883L10 1.667Z" />
                    </svg>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="text-[#0b1524] text-xl font-semibold">Fantastic customer service</h5>
                  <p className="text-[#223046] text-base leading-relaxed">
                    I recently had the pleasure of speaking with the ZenBusiness support team, and I couldn’t be happier
                    with the experience. From the moment I got on the call, the representative was knowledgeable,
                    patient, and incredibly helpful.
                  </p>
                </div>
                <div className="text-[#0b1524] text-sm font-semibold">
                  Date of experience: <span className="font-normal text-[#223046]">07/23/25</span>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[450px] flex flex-col items-center gap-6 w-full px-6">
            <p className="text-white text-3xl lg:text-4xl font-semibold text-center">
              Our goal is to make business easy.
            </p>
            <div className="flex flex-col items-center gap-3">
              <span className="text-white text-5xl lg:text-6xl font-bold">25,316 reviews</span>
              <div className="flex items-center gap-4">
                <div className="bg-white text-[#2d98ef] px-6 py-3 rounded-md shadow-md text-lg font-semibold flex items-center gap-2 -ml-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2.25L13.9443 9.27219H21.3137L15.3577 13.4556L17.302 20.4778L12 16.2944L6.69796 20.4778L8.64227 13.4556L2.68629 9.27219H10.0557L12 2.25Z"
                      fill="#00B67A"
                    />
                  </svg>
                  <span>Trustpilot</span>
                </div>
                <div className="flex items-center gap-1 text-[#FACC15]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 1.667L12.575 6.883L18.333 7.741L14.167 11.808L15.15 17.5L10 14.808L4.85 17.5L5.833 11.808L1.667 7.741L7.425 6.883L10 1.667Z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white text-3xl font-semibold">4.8</span>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1440px] h-full flex flex-col">
            <div className="h-[33px] bg-white"></div>
            <div className="flex-1"></div>
            <div className="h-[40px] bg-white"></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default DomesticFormationPackages
