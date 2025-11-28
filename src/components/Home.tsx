import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface HomeProps {
  onNavigate?: (destination: PageKey) => void
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar onNavigate={onNavigate} />
      
      {/* Hero Section - Section 1 - Total height: 646px (includes navbar 72px overlay) */}
      <section 
        className="w-full h-auto min-h-[550px] lg:h-[646px] relative flex items-start justify-start overflow-visible mt-6 pt-[120px] lg:pt-[150px] pb-0 lg:pb-0 bg-[url('/homepage/Background.png')] bg-cover bg-center bg-no-repeat"
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
          className="absolute top-0 left-0 pointer-events-none w-full lg:w-[70%] h-full lg:h-[90%] bg-[radial-gradient(ellipse_at_top_left,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0.15)_40%,_transparent_60%)]"
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
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center">
          <div className="max-w-2xl w-full">
            {/* Main Headline */}
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Start Your Delaware Company in Minutes
            </h1>

            {/* Supporting Text */}
            <p className="text-white text-base sm:text-lg lg:text-xl mb-8 opacity-90 font-normal">
              Fast, reliable, and trusted by 3,00,000+ entrepreneurs.
            </p>

            {/* CTA Button */}
            <button
              className="bg-white text-[#2d98ef] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 text-base sm:text-lg shadow-md hover:shadow-lg transform hover:scale-[1.02]"
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

        {/* Mobile Stats - Staggered Layout Overlapping Bottom - REMOVED to avoid duplication with Section 2 */}
      </section>

      {/* Section 2 - Why Incorporate with Us */}
      <section className="w-full h-auto lg:h-[679px] relative bg-white flex items-center overflow-visible pt-0 pb-12 lg:py-0 lg:-mt-0 -mt-24 z-20">
        <div className="max-w-[1440px] mx-auto w-full h-full relative overflow-visible px-6 lg:px-0">
          <div className="w-full h-full flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-0 relative z-[10]">
          {/* Left Section - Image with Stats Overlay */}
          <div className="relative h-[340px] sm:h-[500px] lg:h-full overflow-visible bg-transparent z-[10] flex items-center justify-center lg:block mt-4 lg:mt-0">
            <div 
              className="relative lg:absolute w-[240px] sm:w-[376px] aspect-square h-[240px] sm:h-[376px] lg:left-[90px] lg:top-1/2 lg:opacity-100 lg:-translate-y-1/2"
            >
              <img 
                src="/homepage/Section 2/card image 1.png" 
                alt="Business partnership handshake" 
                className="w-full h-full object-cover rounded-[8px] shadow-2xl"
              />
            
              {/* Stats Boxes - Positioned Absolute relative to image container */}
              
              {/* Top Left - 50+ */}
              <div className="absolute -top-6 -left-4 bg-white rounded-lg p-3 shadow-[0px_10px_20px_rgba(0,0,0,0.15)] w-auto min-w-[110px] z-20">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-[#2d98ef] rounded-full"></div>
                  <div className="text-[#2d98ef] text-2xl font-bold leading-none mb-1">50+</div>
                  <div className="text-[#2d98ef] text-sm font-medium leading-tight whitespace-nowrap pr-4">States Served</div>
              </div>

              {/* Top Right - 30+ (Lower down) */}
              <div className="absolute top-8 -right-10 bg-white rounded-lg p-3 shadow-[0px_10px_20px_rgba(0,0,0,0.15)] w-auto min-w-[110px] z-20">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-[#2d98ef] rounded-full"></div>
                  <div className="text-[#2d98ef] text-2xl font-bold leading-none mb-1">30+</div>
                  <div className="text-[#2d98ef] text-sm font-medium leading-tight whitespace-nowrap pr-4">Years Experience</div>
              </div>

              {/* Bottom Left - 3,00,000+ */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-3 shadow-[0px_10px_20px_rgba(0,0,0,0.15)] w-auto min-w-[140px] z-20">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-[#2d98ef] rounded-full"></div>
                  <div className="text-[#2d98ef] text-2xl font-bold leading-none mb-1">3,00,000+</div>
                  <div className="text-[#2d98ef] text-sm font-medium leading-tight whitespace-nowrap pr-4">Businesses Formed</div>
              </div>
            </div>
          </div>

          {/* Right Section - Blue Overlay with Content */}
          <div className="relative h-auto lg:h-full overflow-visible bg-white z-[10] flex flex-col items-center lg:block w-full">
            {/* Background Image - Desktop Only */}
            <div 
              className="hidden lg:block relative lg:absolute w-full max-w-[470px] aspect-[470/583] lg:h-[583px] lg:top-1/2 lg:left-[75%] lg:opacity-100 lg:-translate-x-1/2 lg:-translate-y-1/2 rounded-[8px] overflow-hidden z-[5] shadow-[0px_24px_48px_rgba(17,24,39,0.18)] mb-8 lg:mb-0"
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

            {/* Blue Overlay - Full Width on Mobile */}
            <div 
              className="relative lg:absolute flex flex-col justify-center items-start p-8 lg:p-12 z-10 w-full lg:max-w-[628px] lg:h-[519px] lg:top-[80px] lg:left-0 bg-[#489fe8] rounded-[8px] shadow-xl lg:shadow-none"
            >
              {/* Main Title */}
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 leading-tight text-center lg:text-left w-full">
                Why Incorporate with Us?
              </h2>
              
              {/* Pricing Box and Guarantee */}
              <div className="flex flex-col gap-6 lg:gap-6 mb-8 lg:mb-8 w-full items-center lg:items-start">
                {/* Pricing Box */}
                <div className="bg-white rounded-lg px-6 py-6 shadow-lg w-full max-w-[320px] text-center lg:text-left">
                  <div className="text-[#2d98ef] text-5xl font-bold mb-2 leading-tight">$50</div>
                  <div className="text-[#2d98ef] text-base font-medium leading-relaxed">
                    One of the LOWEST Registered Agent Fees in the Industry!
                  </div>
                </div>
                
                {/* Guarantee Statement */}
                <div className="flex-1 flex items-center pt-1">
                  <p className="text-white text-base leading-relaxed text-center lg:text-left">
                    We guarantee your annual Delaware Registered Agent Fee will remain fixed at $50 per company, per year, for the life of your company.
                  </p>
                </div>
              </div>
              
              {/* CTA Button */}
              <button className="bg-white text-[#2d98ef] px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 text-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] border border-[#2d98ef] w-full sm:w-auto justify-center">
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
        className="relative w-full py-12 lg:py-16 flex justify-center items-start bg-section-three-mobile lg:bg-section-three min-h-screen lg:min-h-[1880px]"
      >
        <div className="relative w-full flex flex-col items-center gap-10 lg:gap-16">
          <div className="w-full bg-white/30 backdrop-blur-[32px] shadow-[0px_6px_12px_rgba(0,0,0,0.25)] py-8 lg:py-6 px-4">
            <div
              className="flex flex-col items-center justify-center text-center gap-3 text-white w-full max-w-[1320px] h-auto lg:h-[240px] rounded-[8px] lg:px-8 mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                Compare Our LLC and Corporation Formation Packages
              </h2>
              <p
                className="text-base sm:text-lg lg:text-xl font-semibold text-white"
              >
                Our formation packages have everything you need to start your LLC or corporation. Choose from three value-packed options!
              </p>
              <button className="bg-[#2d98ef] text-white px-6 sm:px-8 py-3 rounded-md font-medium hover:bg-[#1f7ac4] transition-all duration-300 flex items-center gap-2 text-base sm:text-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] mt-4 lg:mt-0">
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
          </div>

          {/* Why Choose Us Section */}
          <div
            className="w-full flex flex-col items-center min-h-[700px]"
          >
            <div className="flex flex-col gap-10 w-full">
              <div className="w-full bg-[linear-gradient(135deg,_rgba(0,0,0,0.6)_0%,_rgba(0,0,0,0.4)_100%)] lg:bg-[linear-gradient(135deg,_rgba(255,255,255,0.18)_0%,_rgba(255,255,255,0.08)_100%)] shadow-[0px_24px_48px_rgba(9,17,37,0.25)] backdrop-blur-[20px]">
                <div
                  className="w-full max-w-[1440px] mx-auto h-auto lg:h-[790px] flex flex-col items-center gap-10 p-6 lg:p-[60px]"
                >
                  <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
                    Why choose us?
                  </h3>
                  <div className="w-full flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-[520px] flex flex-col gap-6 items-center lg:items-start shrink-0">
                      <div
                        className="rounded-2xl overflow-hidden shadow-2xl border border-white/40 flex items-center justify-center w-full max-w-[600px] lg:w-[600px] aspect-square lg:h-[600px]"
                      >
                        <img
                          src="/homepage/Section 3/card image.png"
                          alt="Business team collaborating around a table"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-5 mt-0 lg:mt-8 lg:-ml-8 xl:-ml-12 w-full min-w-0">
                      <div
                        className="rounded-xl shadow-[0px_12px_30px_rgba(15,23,42,0.18)] p-6 lg:p-8 w-full bg-white/95 border border-[rgba(45,152,239,0.25)]"
                      >
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2d98ef] bg-[#2d98ef]/10 text-[#2d98ef] shrink-0">
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
                          <div className="flex-1 min-w-0">
                            <h4 className="text-[rgba(72,159,232,1)] text-2xl lg:text-3xl font-semibold mb-3">
                              Top 5 Reasons to use Harvard Business Services, Inc.
                            </h4>
                            <p className="text-[rgba(72,159,232,1)] text-base lg:text-lg leading-relaxed break-words">
                              Over 40 years of lightning-fast filings, unparalleled customer service and some of the lowest fees in the industry make us the smart choice for LLC formations. Learn more about why we're the best in the business
                              services to help you incorporate in Delaware.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 w-full">
                        {[
                          'Compare our BBB Record',
                          'How We Are Different',
                          'Avoid Hidden Fees',
                        ].map((item) => (
                          <button
                            key={item}
                            className="flex items-center justify-between rounded-lg px-6 py-4 text-left text-[#2d98ef] font-semibold transition-all duration-300 hover:bg-[#2d98ef]/10 bg-white/95 border border-[rgba(45,152,239,0.25)] shadow-[0px_10px_20px_rgba(15,23,42,0.12)] w-full lg:w-fit"
                          >
                            <div className="flex items-center gap-3">
                                <div className="flex h-6 w-6 lg:hidden items-center justify-center rounded border border-[#2d98ef] bg-[#2d98ef]/10 text-[#2d98ef] shrink-0">
                                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 1.667L12.575 6.883L18.333 7.741L14.167 11.808L15.15 17.5L10 14.808L4.85 17.5L5.833 11.808L1.667 7.741L7.425 6.883L10 1.667Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <span>{item}</span>
                            </div>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-[#2d98ef] hidden lg:block"
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
              </div>

              <h4 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold text-center px-4">
                Learning & Resources
              </h4>

              <div
                className="w-full flex-1 flex flex-col items-center justify-center gap-10 bg-[linear-gradient(180deg,_rgba(72,159,232,0.9)_0%,_rgba(45,152,239,0.8)_100%)] lg:bg-[linear-gradient(135deg,_rgba(255,255,255,0.28)_0%,_rgba(255,255,255,0.12)_100%)] p-6 lg:p-10 shadow-[0px_16px_32px_rgba(9,17,37,0.2)] backdrop-blur-[20px] min-h-[550px] rounded-xl"
              >
                <div className="max-w-[1200px] w-full flex flex-col lg:flex-row gap-10">
                  <div className="flex-1 flex flex-col gap-4 text-white/90">
                    <p className="text-white text-lg lg:text-3xl leading-relaxed">
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
                        className="flex items-center justify-between rounded-lg px-6 py-4 text-left text-[#2d98ef] font-semibold transition-all duration-300 hover:bg-white/90 hover:text-[#1f7ac4] bg-white shadow-[0px_12px_24px_rgba(15,23,42,0.2)]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2d98ef] bg-[#2d98ef]/10 text-[#2d98ef] shrink-0">
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
                          <span className="text-base sm:text-lg lg:text-2xl text-[#2d98ef]">{item}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button className="bg-[#1f7ac4] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#175f98] transition-all duration-300 flex items-center gap-2 text-lg shadow-lg hover:shadow-xl w-full sm:w-auto justify-center">
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
      <section className="relative w-full h-auto lg:h-[812px] bg-white overflow-visible lg:overflow-hidden flex flex-col lg:block justify-center">
        <div className="absolute top-[33px] bottom-[40px] left-0 right-0 hidden lg:block">
          <div
            className="w-full h-full bg-section-four"
          ></div>
        </div>
        
        {/* Mobile Background - Blue Gradient Overlay with Image */}
        <div className="absolute inset-0 bg-section-four-mobile lg:hidden z-0"></div>

        <div
          className="absolute top-[156px] left-0 right-0 h-[529px] bg-[#69a6db] hidden lg:block"
        ></div>

        <div className="relative z-10 flex flex-col items-center w-full py-12 lg:py-0 lg:px-6">
            {/* Mobile Layout: Title -> Reviews Count -> Trustpilot -> Cards Carousel */}
            <div className="flex flex-col items-center gap-6 lg:hidden w-full mb-8">
                <p className="text-white text-2xl sm:text-3xl font-semibold text-center px-6">
                    Our goal is to make business easy.
                </p>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-white text-4xl font-bold text-center">25,316 reviews</span>
                    <div className="flex items-center gap-2 text-[#FACC15]">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                        <svg
                            key={starIndex}
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 1.667L12.575 6.883L18.333 7.741L14.167 11.808L15.15 17.5L10 14.808L4.85 17.5L5.833 11.808L1.667 7.741L7.425 6.883L10 1.667Z" />
                        </svg>
                        ))}
                    </div>
                </div>
                
                <div className="bg-white text-[#2d98ef] px-6 py-3 rounded-md shadow-md text-lg font-semibold flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.25L13.9443 9.27219H21.3137L15.3577 13.4556L17.302 20.4778L12 16.2944L6.69796 20.4778L8.64227 13.4556L2.68629 9.27219H10.0557L12 2.25Z" fill="#00B67A"/>
                    </svg>
                    <span>Trustpilot</span>
                    <span className="text-gray-600 ml-2 font-normal">4.8</span>
                </div>
            </div>

            {/* Mobile Reviews Carousel */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full px-6 pb-8 lg:hidden [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
                    key={`mobile-${index}`}
                    className="bg-white rounded-2xl flex flex-col gap-4 p-6 min-w-[85vw] sm:min-w-[380px] snap-center shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                         <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                            <div className="h-full w-full bg-gradient-to-br from-[#2d98ef] to-[#1f7ac4] text-white flex items-center justify-center text-xl font-semibold">LC</div>
                         </div>
                        <div className="flex flex-col">
                            <span className="text-[#0b1524] text-xl font-bold">
                                {review.name}
                            </span>
                            <span className="text-[#374151] text-sm">{review.location}</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-[#FACC15]">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                            <svg key={starIndex} width="18" height="18" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 1.667L12.575 6.883L18.333 7.741L14.167 11.808L15.15 17.5L10 14.808L4.85 17.5L5.833 11.808L1.667 7.741L7.425 6.883L10 1.667Z" />
                            </svg>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2">
                        <h5 className="text-[#0b1524] text-xl font-bold">
                            Fantastic customer service
                        </h5>
                        <p className="text-[#223046] text-base leading-relaxed">
                            I recently had the pleasure of speaking with the ZenBusiness support team, and I couldn’t be happier with the experience. From the moment I got on the call, the representative was
                            knowledgeable, patient, and incredibly helpful.
                        </p>
                    </div>
                    <div className="text-[#0b1524] text-sm font-semibold mt-2">
                        Date of experience: <span className="font-normal text-[#223046]">{review.date}</span>
                    </div>
                  </div>
                ))}
            </div>
        </div>

        {/* Desktop Reviews Layout (Hidden on Mobile) */}
        <div
          className="relative lg:absolute lg:flex flex-col lg:flex-row gap-6 lg:gap-4 left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 lg:top-[90px] w-full lg:w-[1325px] h-auto lg:h-[335px] px-6 lg:px-0 pt-10 lg:pt-0 z-10 hidden"
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
              className="flex-1 bg-white rounded-2xl flex flex-col gap-4 p-6 min-w-0 h-auto lg:h-full shadow-[0px_18px_36px_rgba(15,23,42,0.2)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#2d98ef] to-[#1f7ac4] text-white flex items-center justify-center text-lg font-semibold shrink-0">
                    LC
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#0b1524] text-lg font-semibold">
                      {review.name}
                    </span>
                    <span className="text-[#374151] text-sm">{review.location}</span>
                  </div>
                </div>
                <span className="text-[#1f2937] text-sm font-medium whitespace-nowrap ml-2">{review.date}</span>
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
              <div className="text-[#0b1524] text-sm font-semibold mt-auto">
                Date of experience: <span className="font-normal text-[#223046]">07/23/25</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Trustpilot Section (Hidden on Mobile) */}
        <div className="relative lg:absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 lg:top-[450px] lg:flex flex-col items-center gap-6 w-full px-6 mt-12 lg:mt-0 z-10 hidden">
          <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
            Our goal is to make business easy.
          </p>
            <div className="flex flex-col items-center gap-3">
            <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold text-center">25,316 reviews</span>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="bg-white text-[#2d98ef] px-6 py-3 rounded-md shadow-md text-lg font-semibold flex items-center gap-2 sm:-ml-2 w-full sm:w-auto justify-center">
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
              <div className="flex items-center gap-2">
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
        </div>
        
        {/* Spacer for desktop layout adherence */}
        <div className="w-full max-w-[1440px] h-full hidden lg:flex flex-col mx-auto">
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