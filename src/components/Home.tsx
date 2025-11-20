import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type PageKey =
  | 'home'
  | 'startCompany'
  | 'services'
  | 'learningCenter'
  | 'hbsBlog'
  | 'aboutHbs'
  | 'makeAnnualPayments'

interface HomeProps {
  onNavigate?: (destination: PageKey) => void
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar onNavigate={onNavigate} />
      
      {/* Hero Section - Section 1 - Total height: 646px (includes navbar 72px overlay) */}
      <section 
        className="w-full h-[646px] relative flex items-start justify-start overflow-visible mt-6 pt-[150px] bg-[url('/homepage/Background.png')] bg-cover bg-center bg-no-repeat"
      >
        {/* Vertical Gradient Overlay - Full Height */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(72,159,232,0.4)_70.51%,_#F2F2F2_94.58%)]"
        ></div>
        
        {/* Horizontal Gradient Overlay - Smooth Fade (Top 85%) */}
        <div 
          className="absolute top-0 left-0 right-0 pointer-events-none h-full bg-[linear-gradient(270deg,_rgba(0,0,0,0)_16.94%,_rgba(70,130,180,0.4)_59.65%)] mask-home-hero"
        ></div>
        
        {/* Blackish Effect - Top Left to Center */}
        <div 
          className="absolute top-0 left-0 pointer-events-none w-[70%] h-[90%] bg-[radial-gradient(ellipse_at_top_left,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0.15)_40%,_transparent_60%)]"
        ></div>
        
        {/* Whitish Aura/Glow Effect at Bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-[linear-gradient(to_top,_rgba(255,255,255,0.6)_0%,_rgba(255,255,255,0.3)_30%,_transparent_100%)] blur-[20px] translate-y-1/2"
        ></div>
        
        {/* Additional soft glow shadow */}
        <div 
          className="absolute -bottom-8 left-0 right-0 h-16 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.4)_0%,_transparent_70%)] blur-[30px]"
        ></div>
        
        {/* Content Container - Centered with max-width 1440px */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-8 lg:px-12 h-full flex items-center">
          <div className="max-w-2xl w-full">
            {/* Main Headline */}
            <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Start Your Delaware Company in Minutes
            </h1>

            {/* Supporting Text */}
            <p className="text-white text-lg lg:text-xl mb-8 opacity-90 font-normal">
              Fast, reliable, and trusted by 3,00,000+ entrepreneurs.
            </p>

            {/* CTA Button */}
            <button
              className="bg-white text-[#2d98ef] px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 text-lg shadow-md hover:shadow-lg transform hover:scale-[1.02]"
              onClick={() => onNavigate?.('startCompany')}
            >
              <span>Start My Company</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#2d98ef]"
              >
                <path
                  d="M1 11L11 1M11 1H1M11 1V11"
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

      {/* Section 2 - Why Incorporate with Us */}
      <section className="w-full h-[679px] relative bg-white flex items-center overflow-visible">
        <div className="max-w-[1440px] mx-auto w-full h-full relative overflow-visible">
          <div className="w-full h-full grid grid-cols-2 gap-0 relative z-[10]">
          {/* Left Section - Image with Stats Overlay */}
          <div className="relative h-full overflow-visible bg-white z-[10]">
            <div 
              className="absolute w-[376px] h-[376px] left-[90px] top-1/2 opacity-100 -translate-y-1/2"
            >
              <img 
                src="/homepage/Section 2/card image 1.png" 
                alt="Business partnership handshake" 
                className="w-full h-full object-cover rounded-[8px]"
              />
            
            {/* Stats Boxes Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 lg:p-6">
              {/* Top Row - Two Stats */}
              <div className="flex justify-between items-start gap-4">
                {/* States Served */}
                <div
                  className="bg-white rounded-lg px-4 py-3 relative h-[126px] shrink-0 -translate-x-[140px] shadow-[0px_16px_32px_rgba(15,23,42,0.25)]"
                >
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#2d98ef] rounded-full"></div>
                  <div className="text-[#2d98ef] text-4xl font-bold leading-tight mb-1">50+</div>
                  <div className="text-[#2d98ef] text-3xl font-medium leading-tight whitespace-nowrap">States Served</div>
                </div>
                
                {/* Years Experience */}
                <div
                  className="bg-white rounded-lg px-4 py-3 relative h-[126px] shrink-0 ml-[40px] shadow-[0px_16px_32px_rgba(15,23,42,0.25)]"
                >
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#2d98ef] rounded-full"></div>
                  <div className="text-[#2d98ef] text-4xl font-bold leading-tight mb-1">30+</div>
                  <div className="text-[#2d98ef] text-3xl font-medium leading-tight whitespace-nowrap">Years Experience</div>
                </div>
              </div>
              
              {/* Bottom Left - Businesses Formed */}
              <div className="self-start">
                <div
                  className="bg-white rounded-lg px-4 py-3 relative h-[126px] shrink-0 -translate-x-[90px] translate-y-[60px] shadow-[0px_16px_32px_rgba(15,23,42,0.25)]"
                >
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#2d98ef] rounded-full"></div>
                  <div className="text-[#2d98ef] text-4xl font-bold leading-tight mb-1 whitespace-nowrap">3,00,000+</div>
                  <div className="text-[#2d98ef] text-3xl font-medium leading-tight whitespace-nowrap">Businesses Formed</div>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Right Section - Blue Overlay with Content */}
          <div className="relative h-full overflow-visible bg-white z-[10]">
            {/* Background Image */}
            <div 
              className="absolute w-[470px] h-[583px] top-1/2 left-[75%] opacity-100 -translate-x-1/2 -translate-y-1/2 rounded-[8px] overflow-hidden z-[5] shadow-[0px_24px_48px_rgba(17,24,39,0.18)]"
            >
              <img 
                src="/homepage/Section 2/card image 2.png" 
                alt="Office workspace" 
                className="w-full h-full object-cover rounded-[8px] block relative"
                onError={(e) => {
                  console.error('Image 2 failed to load');
                  (e.target as HTMLImageElement).style.backgroundColor = 'yellow';
                }}
              />
            </div>

            {/* Blue Overlay */}
            <div 
              className="absolute flex flex-col justify-center items-start p-8 lg:p-12 z-10 w-[628px] h-[519px] top-[80px] left-0 bg-[#489fe8] rounded-[8px]"
            >
              {/* Main Title */}
              <h2 className="text-white text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Why Incorporate with Us?
              </h2>
              
              {/* Pricing Box and Guarantee */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-6 lg:mb-8 w-full items-start">
                {/* Pricing Box */}
                <div className="bg-white rounded-lg px-5 py-4 shadow-lg min-w-[240px] max-w-[280px]">
                  <div className="text-[#2d98ef] text-4xl lg:text-5xl font-bold mb-2 leading-tight">$50</div>
                  <div className="text-[#2d98ef] text-xs lg:text-sm font-medium leading-relaxed">
                    One of the LOWEST Registered Agent Fees in the Industry!
                  </div>
                </div>
                
                {/* Guarantee Statement */}
                <div className="flex-1 flex items-center pt-1">
                  <p className="text-white text-sm lg:text-base leading-relaxed">
                    We guarantee your annual Delaware Registered Agent Fee will remain fixed at $50 per company, per year, for the life of your company.
                  </p>
                </div>
              </div>
              
              {/* CTA Button */}
              <button className="bg-white text-[#2d98ef] px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 text-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] border border-[#2d98ef]">
                <span>Appoint Registered Agent</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#2d98ef]"
                >
                  <path
                    d="M1 6H11M11 6L7 2M11 6L7 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Compare Packages CTA */}
      <section
        className="relative w-full py-12 lg:py-16 flex justify-center items-start bg-section-three min-h-[1880px]"
      >
        <div className="relative w-full flex flex-col items-center gap-16">
          <div
            className="flex flex-col items-center justify-center text-center gap-3 text-white w-full max-w-[1320px] h-[240px] rounded-[8px] py-6 px-8 bg-white/30 shadow-[0px_6px_12px_rgba(0,0,0,0.25)] backdrop-blur-[32px]"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Compare Our LLC and Corporation Formation Packages
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl font-semibold text-white"
            >
              Our formation packages have everything you need to start your LLC or corporation. Choose from three value-packed options!
            </p>
            <button className="bg-[#2d98ef] text-white px-6 sm:px-8 py-3 rounded-md font-medium hover:bg-[#1f7ac4] transition-all duration-300 flex items-center gap-2 text-base sm:text-lg shadow-md hover:shadow-lg transform hover:scale-[1.02]">
              <span>Appoint Registered Agent</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
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

          {/* Why Choose Us Section */}
          <div
            className="w-full flex flex-col items-center min-h-[700px]"
          >
            <div className="flex flex-col gap-10 w-full">
              <div
                className="w-full h-[790px] flex flex-col items-center gap-10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.18)_0%,_rgba(255,255,255,0.08)_100%)] p-[60px] shadow-[0px_24px_48px_rgba(9,17,37,0.25)] backdrop-blur-[20px]"
              >
                
                <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
                  Why choose us?
                </h3>
              <div className="w-full flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-[520px] flex flex-col gap-6 items-center lg:items-start">
                  <div
                    className="rounded-2xl overflow-hidden shadow-2xl border border-white/40 flex items-center justify-center w-[600px] h-[600px]"
                  >
                    <img
                      src="/homepage/Section 3/card image.png"
                      alt="Business team collaborating around a table"
                      className="object-cover w-[600px] h-[600px]"
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-5 mt-10 lg:mt-8 lg:-ml-8 xl:-ml-12">
                  <div
                    className="rounded-xl shadow-[0px_12px_30px_rgba(15,23,42,0.18)] p-6 lg:p-8 max-w-[780px] w-full bg-white/95 border border-[rgba(45,152,239,0.25)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2d98ef] bg-[#2d98ef]/10 text-[#2d98ef]">
                        <svg
                          width="26"
                          height="26"
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
                      <div className="flex-1">
                        <h4 className="text-[rgba(72,159,232,1)] text-2xl lg:text-3xl font-semibold mb-3">
                          Top 5 Reasons to use Harvard Business Services, Inc.
                        </h4>
                        <p className="text-[rgba(72,159,232,1)] text-base lg:text-lg leading-relaxed">
                          Over 40 years of lightning-fast filings, unparalleled customer service and some of the lowest fees in the industry make us the smart choice for LLC formations. Learn more about why we're the best in the business
                          services to help you incorporate in Delaware.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {[
                      'Compare our BBB Record',
                      'How We Are Different',
                      'Avoid Hidden Fees',
                    ].map((item) => (
                      <button
                        key={item}
                        className="flex items-center justify-between rounded-lg px-6 py-4 text-left text-[#2d98ef] font-semibold transition-all duration-300 hover:bg-[#2d98ef]/10 bg-white/95 border border-[rgba(45,152,239,0.25)] shadow-[0px_10px_20px_rgba(15,23,42,0.12)] w-fit"
                      >
                        <span>{item}</span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[#2d98ef]"
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
                    ))}
                  </div>
                </div>
              </div>
              </div>

              <h4 className="text-white text-4xl lg:text-5xl font-semibold text-center">
                Learning & Resources
              </h4>

              <div
                className="w-full flex-1 flex flex-col items-center justify-center gap-10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.28)_0%,_rgba(255,255,255,0.12)_100%)] p-10 shadow-[0px_16px_32px_rgba(9,17,37,0.2)] backdrop-blur-[20px] min-h-[550px]"
              >
                <div className="max-w-[1200px] w-full flex flex-col lg:flex-row gap-10">
                  <div className="flex-1 flex flex-col gap-4 text-white/90">
                    <p className="text-white/90 text-2xl lg:text-3xl leading-relaxed">
                      Our Learning Center possesses dozens of informational articles to help you along the way as you form an LLC, incorporate in Delaware, and so much more. Find all the Delaware incorporation information you need to know before,
                      during, and after forming your company with us.
                    </p>
                  </div>

                  <div className="flex-1 flex flex-col gap-4">
                    {[
                      'Why Form a Delaware LLC?',
                      'Why Form a Delaware Corporation?',
                      'How to Incorporate in Delaware',
                      'What Is a Delaware Registered Agent?',
                    ].map((item) => (
                      <button
                        key={item}
                        className="flex items-center justify-between rounded-lg px-6 py-4 text-left text-[#2d98ef] font-semibold transition-all duration-300 hover:bg-white/90 hover:text-[#1f7ac4] bg-white/95 border border-[rgba(45,152,239,0.25)] shadow-[0px_12px_24px_rgba(15,23,42,0.2)]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2d98ef] bg-[#2d98ef]/10 text-[#2d98ef]">
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
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-xl lg:text-2xl">{item}</span>
                        </div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[#2d98ef]"
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
                    ))}
                  </div>
                </div>

                <button className="bg-[#1f7ac4] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#175f98] transition-all duration-300 flex items-center gap-2 text-lg shadow-lg hover:shadow-xl">
                  <span>Get Additional Information</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
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
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Background Feature */}
      <section className="relative w-full h-[812px] bg-white overflow-hidden flex justify-center">
        <div className="absolute top-[33px] bottom-[40px] left-0 right-0">
          <div
            className="w-full h-full bg-section-four"
          ></div>
        </div>

        <div
          className="absolute top-[156px] left-0 right-0 h-[529px] bg-[#69a6db]"
        ></div>
        <div
          className="absolute flex gap-4 left-1/2 -translate-x-1/2 top-[90px] w-[1325px] h-[335px]"
        >
          {[
            {
              name: 'Lorenzo Casto',
              location: 'Washington, USA',
              date: 'July 23, 2025',
            },
            {
              name: 'Lorenzo Casto',
              location: 'Washington, USA',
              date: 'July 23, 2025',
            },
            {
              name: 'Lorenzo Casto',
              location: 'Washington, USA',
              date: 'July 23, 2025',
            },
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
                    <span className="text-[#0b1524] text-lg font-semibold">
                      {review.name}
                    </span>
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
                <h5 className="text-[#0b1524] text-xl font-semibold">
                  Fantastic customer service
                </h5>
                <p className="text-[#223046] text-base leading-relaxed">
                  I recently had the pleasure of speaking with the ZenBusiness support team, and I couldn’t be happier with the experience. From the moment I got on the call, the representative was
                  knowledgeable, patient, and incredibly helpful.
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
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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

      <Footer />
    </div>
  )
}

export default Home