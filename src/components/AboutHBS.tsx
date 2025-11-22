import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface AboutHBSProps {
  onNavigate?: (destination: PageKey) => void
}

const blogCategories = ['About LLCs', 'About Corporations', 'Entrepreneurs & Start-Ups', 'Business Strategies']

const AboutHBS: React.FC<AboutHBSProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onNavigate={onNavigate} />
      <main>
        {/* Hero section replicated from HBS Blog */}
        <section className="relative w-full flex items-start justify-center overflow-visible bg-[url('/HBS%20Blog/background.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.4),_rgba(0,0,0,0.4))]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(72,159,232,0.4)_70.51%,_#F2F2F2_94.58%)]" />
          <div className="relative max-w-[1440px] w-full h-[474px] mx-auto px-6 lg:px-12 flex items-center justify-center text-white">
            <div className="flex flex-col items-center text-center gap-6">
              <h1 className="text-[40px] sm:text-[48px] lg:text-[54px] font-bold leading-tight">
                About Harvard Business Services
              </h1>
              <p className="text-base sm:text-lg max-w-2xl">
                Discover the people, processes, and purpose that drive the premier Delaware filing partner
                trusted by more than 3,00,000 entrepreneurs worldwide.
              </p>
              <button
                className="inline-flex items-center gap-2 bg-white text-[#2d98ef] font-semibold text-sm sm:text-base px-5 py-2.5 rounded-md shadow-[0_10px_25px_rgba(15,23,42,0.25)] hover:bg-blue-50 transition-all duration-300"
                onClick={() => onNavigate?.('services')}
              >
                Explore Our Services
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#2d98ef]"
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
        </section>

        {/* Replicated Section 2 from HBS Blog */}
        <section className="w-full bg-[#F4F6F9] py-8">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col justify-start">
            <div className="flex flex-col lg:flex-row gap-10">
              <aside className="w-full lg:w-[280px] bg-[#2D89D8] rounded-[4px] px-6 py-8 shadow-[0px_12px_30px_rgba(15,23,42,0.16)]">
                <h3 className="text-white text-2xl font-bold mb-6">Blog Categories</h3>
                <div className="flex flex-col gap-3">
                  {blogCategories.map((category) => (
                    <button
                      key={category}
                      className="w-full text-left bg-white text-[#2D89D8] font-semibold rounded-full px-4 py-2 text-sm shadow-[0_6px_18px_rgba(15,23,42,0.12)] hover:bg-blue-50 transition"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </aside>

              <div className="flex-1 min-h-[2695px] relative overflow-visible">
                <div className="pointer-events-none absolute inset-0 bg-[url('/homepage/Section%204/background.png')] bg-cover bg-[position:center_top]" />
                <div className="pointer-events-none absolute inset-0 bg-[rgba(0,0,0,0.6)]" />

                <div className="pointer-events-none absolute inset-y-0 left-full w-[120vw] bg-[url('/homepage/Section%204/background.png')] bg-cover bg-[position:center_top]" />
                <div className="pointer-events-none absolute inset-y-0 left-full w-[120vw] bg-[rgba(0,0,0,0.6)]" />

                <div className="relative z-10 w-full h-full">
                  {/* Glass overlay strip */}
                  <div className="pointer-events-none absolute left-0 top-20 bottom-10 w-[200vw] bg-[rgba(132,132,132,0.3)] backdrop-blur-[25px] border border-white/20 border-l-transparent border-t-transparent border-b-transparent shadow-[0px_24px_48px_rgba(15,23,42,0.35)]" />

                  {/* Content on top of the glass panel */}
                  {/* Content is padded slightly below the start of the translucent blur strip */}
                  <div className="relative w-full h-full flex justify-center px-4 sm:px-6 lg:px-10 pt-28 pb-10">
                    <div className="w-full max-w-[980px] flex flex-col gap-10 text-white">
                      {/* Founding story */}
                      <div className="space-y-4 text-[18px] sm:text-[20px] leading-relaxed">
                        <p className="font-semibold">
                          Richard H. Bell, II (Rick) formed Harvard Business Services, Inc. on March 2, 1981.
                        </p>
                        <p>
                          Facing some well-established competitors, Rick conducted business with a philosophy that
                          allowed his company not just to survive but to thrive, emerging over time as a major player
                          in the business formation industry.
                        </p>
                        <p>
                          Rick focused on a highly personalized style of customer service. He understood that beyond
                          the mechanics of forming a Delaware LLC or corporation, there were dreams and aspirations at
                          stake. A customer's individual questions and concerns were important and unique, so they were
                          treated as such.
                        </p>
                        <p>
                          Rick also decided that a customer's business formation costs should be transparent and
                          affordable, making the process simple and accessible to everyday people. You'll find that our
                          costs for incorporating (starting at just $229) are extremely competitive, and our $50 per
                          year Delaware Registered Agent service is the best you'll find anywhere.
                        </p>
                      </div>

                      {/* Continuing Legacy section */}
                      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
                        <div className="flex-1 space-y-4 text-[18px] sm:text-[20px] leading-relaxed">
                          <button className="inline-flex items-center gap-2 bg-white text-[#1f7ac4] px-4 py-2 rounded-[6px] shadow-[0_10px_25px_rgba(15,23,42,0.35)] text-[18px] sm:text-[20px] font-semibold">
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1f7ac4]/10 text-[#1f7ac4]">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 10L8 13L15 6"
                                  stroke="currentColor"
                                  strokeWidth="1.6"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span>A Continuing Legacy…</span>
                          </button>
                          <p>
                            After over 40 years and hundreds of thousands of business formations, Rick Bell's legacy of
                            personal service remains a key aspect of Harvard's company culture.
                          </p>
                          <p>
                            Today, Rick's youngest son, Michael Bell, serves as President of the company. Michael has
                            been formally involved with the family business since 2009, but it has always been a part of
                            his life.
                          </p>
                          <p>
                            Michael retains the close-knit family aspect of the company while seeking to continue its
                            growth and help more entrepreneurs from all over the world start their companies.
                          </p>
                        </div>

                        {/* Image card 1 - positioned slightly lower so it sits below the heading and around middle of the first paragraph */}
                        <div className="w-full max-w-[320px] self-stretch mt-10 lg:mt-14">
                          <div className="relative w-[290px] h-[290px] rounded-[10px] overflow-hidden shadow-[0px_18px_40px_rgba(0,0,0,0.5)] border border-white/15">
                            <img
                              src="/About%20HBS/card1.png"
                              alt="Business consultation at desk"
                              className="h-full w-full object-cover"
                            />
                            {/* Blue gradient overlay to match design */}
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(72,159,232,0.8)_84.31%)]" />
                          </div>
                        </div>
                      </div>

                      {/* Client experience heading and full-width paragraph */}
                      <div className="space-y-4 text-[18px] sm:text-[20px] leading-relaxed">
                        <button className="inline-flex items-center gap-2 bg-white text-[#1f7ac4] px-4 py-2 rounded-[6px] shadow-[0_10px_25px_rgba(15,23,42,0.35)] text-[18px] sm:text-[20px] font-semibold">
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1f7ac4]/10 text-[#1f7ac4]">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 1.667L12.575 6.883L18.333 7.741L14.167 11.808L15.15 17.5L10 14.808L4.85 17.5L5.833 11.808L1.667 7.741L7.425 6.883L10 1.667Z"
                                stroke="currentColor"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span>The Client Experience</span>
                        </button>
                        <p>
                          Saying we're focused on customer service is a nice sentiment, but as the saying goes, actions
                          speak louder than words. Fortunately, the feedback we receive from clients is overwhelmingly
                          positive and encouraging.
                        </p>
                      </div>

                      {/* Reviews card with image - positioned near the middle of the paragraph */}
                      <div className="mt-6 flex justify-end">
                        <div className="w-full max-w-[420px]">
                          <div className="relative w-full rounded-[12px] shadow-[0px_26px_55px_rgba(0,0,0,0.6)] border border-white/20 bg-black/20 overflow-visible">
                            <div className="relative rounded-[12px] overflow-hidden">
                              <img
                                src="/About%20HBS/card2.png"
                                alt="Happy clients meeting with advisor"
                                className="w-full h-[230px] sm:h-[260px] object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                            </div>

                            {/* Lift reviews badge slightly and offset it left so it overhangs the card */}
                            <div className="absolute top-6 left-0 -translate-x-[60%] w-[525px]">
                              <div className="h-[155px] w-full rounded-[16px] bg-[linear-gradient(90deg,#0baa66,#047045)] px-6 sm:px-10 py-6 shadow-[0px_24px_55px_rgba(0,0,0,0.55)] text-white flex flex-col gap-5">
                                <span className="font-bold text-[42px] sm:text-[46px] leading-none tracking-tight">
                                  25,316 reviews
                                </span>
                                <div className="flex items-center gap-8">
                                  <span className="inline-flex items-center gap-2 justify-center min-w-[160px] bg-white text-[#00B67A] px-5 py-1.5 rounded-[6px] text-[24px] font-semibold leading-none shadow-[0px_6px_15px_rgba(0,0,0,0.25)]">
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-1"
                                    >
                                      <path
                                        d="M12 2.25L13.9443 9.27219H21.3137L15.3577 13.4556L17.302 20.4778L12 16.2944L6.69796 20.4778L8.64227 13.4556L2.68629 9.27219H10.0557L12 2.25Z"
                                        fill="#00B67A"
                                      />
                                    </svg>
                                    Trustpilot
                                  </span>
                                    <div className="flex items-center text-[#FACC15] text-[30px] gap-1.5">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                      <svg
                                        key={index}
                                          width="24"
                                          height="24"
                                        viewBox="0 0 22 22"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M11 1.833L13.8325 7.5715L20.1665 8.5085L15.5835 12.3885L16.6655 18.6665L11 15.4765L5.33452 18.6665L6.41652 12.3885L1.8335 8.5085L8.16751 7.5715L11 1.833Z" />
                                      </svg>
                                    ))}
                                  </div>
                                  <span className="text-[40px] font-semibold leading-none">4.8</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* We're here to help + resource buttons */}
                      <div className="space-y-5 text-[18px] sm:text-[20px] leading-relaxed">
                        <button className="inline-flex items-center gap-2 bg-white text-[#1f7ac4] px-4 py-2 rounded-[6px] shadow-[0_10px_25px_rgba(15,23,42,0.35)] text-[18px] sm:text-[20px] font-semibold">
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1f7ac4]/10 text-[#1f7ac4]">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 1.667L12.575 6.883L18.333 7.741L14.167 11.808L15.15 17.5L10 14.808L4.85 17.5L5.833 11.808L1.667 7.741L7.425 6.883L10 1.667Z"
                                stroke="currentColor"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span>We’re Here to Help!</span>
                        </button>
                        <p>
                          Both our website and our support staff are here to answer your questions and get you started.
                          Below, you will find links to some of our most popular content:
                        </p>

                         <div className="flex flex-col gap-3">
                          {[
                            'Formation Packages: U.S. | International',
                            'Delaware Registered Agent Service',
                            'Why Incorporate in Delaware?',
                            'About Delaware Franchise Tax',
                            'How to File a Corporation or LLC in Delaware',
                          ].map((label) => (
                              <button
                                key={label}
                               className="flex items-center justify-between rounded-[6px] bg-[#2d98ef] hover:bg-[#1f7ac4] text-white text-[18px] sm:text-[20px] font-semibold px-4 sm:px-5 py-3.5 shadow-[0px_14px_30px_rgba(15,23,42,0.6)] transition-colors duration-200"
                            >
                              <span>{label}</span>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-shrink-0"
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

                        <p className="pt-1">
                          If you don't find what you need on our site, our representatives can be reached through a
                          variety of channels on our Contact Us page. If you message while our office is closed, we'll
                          get back to you as soon as possible!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-[28px] bg-white" />
      </main>
      <Footer />
    </div>
  )
}

export default AboutHBS


