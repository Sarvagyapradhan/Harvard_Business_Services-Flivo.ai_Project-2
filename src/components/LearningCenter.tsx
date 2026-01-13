import React, { useState, useRef, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface LearningCenterProps {
  onNavigate?: (destination: PageKey) => void
}

const defaultPrimaryTopics = [
  'Avoiding Hidden Incorporation Fees',
  'Why Incorporate in Delaware?',
  'How to Choose a Company Name',
  "Understanding Your Company's Stock",
  'What Is a Delaware Registered Agent?',
]

const defaultSecondaryTopics = [
  'Delaware Company Formation Packages',
  '3-Step Business Formation Checklist (PDF)',
  'How to File a Corporation or LLC in Delaware',
  'Delaware Company Formations for Non-Residents',
]

type LearningSection = {
  id: number
  cardTitle: string
  cardImage: string
  panelImage: string
  primaryTopics?: string[]
  secondaryTopics?: string[]
}

const learningSections: LearningSection[] = [
  {
    id: 1,
    cardTitle: 'Before Forming Your Company',
    cardImage: '/Learning%20Center/card%201.png',
    panelImage: '/Learning%20Center/image.png',
    primaryTopics: [
      'Avoiding Hidden Incorporation Fees',
      'Why Incorporate in Delaware?',
      'How to Choose a Company Name',
    ],
    secondaryTopics: [
      "Understanding Your Company's Stock",
      'What Is a Delaware Registered Agent?',
      'Delaware Company Formation Packages',
      '3-Step Business Formation Checklist (PDF)',
      'How to File a Corporation or LLC in Delaware',
      'Delaware Company Formations for Non-Residents',
    ],
  },
  {
    id: 2,
    cardTitle: 'After Forming Your Company',
    cardImage: '/Learning%20Center/card%202.png',
    panelImage: '/Learning%20Center/image.png',
    primaryTopics: [
      'Corporate Compliance & Annual Maintenance',
      'Delaware Franchise Tax',
      'Delaware Franchise Tax Calculator',
    ],
    secondaryTopics: [
      'Pay Annual Franchise Tax Online',
      'Pay Registered Agent Fee Online',
      'Create Your Online Stock Ledger',
      'Tax Status for Delaware LLCs',
      'The Corporate Transparency Act',
      'Delaware Company Formations for Non-Residents',
    ],
  },
  {
    id: 3,
    cardTitle: 'Business Entities',
    cardImage: '/Learning%20Center/card%203.png',
    panelImage: '/Learning%20Center/image.png',
    primaryTopics: [
      'What Is a Delaware LLC?',
      'What Is a General Corporation?',
      'Why Form a Delaware Corporation?',
      'What Is a Close Corporation?',
      'What Is a C Corporation?',
      'What Is a Delaware S Corporation?',
      'What Is a Non-Profit Corporation?',
    ],
    secondaryTopics: [
      'Compare Business Entities',
      'What Is a Public Benefit Corporation?',
      'Corporation vs LLC',
      'What Is a Limited Partnership?',
      'The Delaware Series LLC',
      'S Corporation Tax Status for Your LLC',
    ],
  },
  {
    id: 4,
    cardTitle: 'Asset Protection Planning',
    cardImage: '/Learning%20Center/card%204.png',
    panelImage: '/Learning%20Center/image.png',
    primaryTopics: [
      'Asset Protection for Real Estate Investors',
      'Asset Protection for Consultants',
      'Asset Protection for Airplane Owners',
    ],
    secondaryTopics: [
      'Why Student Entrepreneurs Incorporate',
      'Asset Protection for General Contractors',
      'Complete List of Asset Protection Planning',
    ],
  },
  {
    id: 5,
    cardTitle: 'Harvard and You',
    cardImage: '/Learning%20Center/card%205.png',
    panelImage: '/Learning%20Center/image.png',
    primaryTopics: [
      'About Us',
      'Why Use Harvard to Form Your Company?',
      'How Much Does It Cost to File with Harvard?',
      'Contact Us',
    ],
    secondaryTopics: [
      'How To Register a Business Online',
      'Filing with the State vs. Filing with Harvard',
      'Compare Registered Agent Fees',
    ],
  },
  {
    id: 6,
    cardTitle: 'Additional Services',
    cardImage: '/Learning%20Center/card%206.png',
    panelImage: '/Learning%20Center/image.png',
    primaryTopics: [
      'Appoint a new Delaware Registered Agent',
      'Order a Delaware Certificate of Good Standing',
      'What is a Federal Tax ID (EIN) for a Delaware Company',
      'File Foreign Qualification for Another State',
    ],
    secondaryTopics: [
      'Order a Certified Copy',
      'Delaware Mail Forwarding Services',
      'Complete List of Our Services',
    ],
  },
  {
    id: 7,
    cardTitle: 'Resources',
    cardImage: '/Learning%20Center/card%207.png',
    panelImage: '/Learning%20Center/image.png',
    primaryTopics: [
      'Small Business Finance Resources',
      'Business Ownership Guide for Female Entrepreneurs',
      'Entrepreneurship Guide for Immigrants & Refugees',
      'Cannabis Industry Business Guide',
    ],
    secondaryTopics: [
      'See All Resources',
      'LLC and Corporation FAQs',
      'Glossary',
      'Download Center',
    ],
  },
]

const LearningCenter: React.FC<LearningCenterProps> = ({ onNavigate }) => {
  const [visibleSections, setVisibleSections] = useState<number[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'))
            setVisibleSections((prev) => (prev.includes(id) ? prev : [...prev, id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('.learning-section')
    sections.forEach((section) => observerRef.current?.observe(section))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onNavigate={onNavigate} />
      <main className="pt-[72px]">
        <section className="relative w-full flex items-center justify-center overflow-hidden bg-[url('/Learning%20Center/background.png')] bg-cover bg-center bg-no-repeat py-16 md:py-24 lg:h-[474px]">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.4),_rgba(0,0,0,0.4))]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(72,159,232,0.4)_70.51%,_#F2F2F2_94.58%)]" />
          <div className="relative max-w-[1440px] w-full mx-auto px-6 lg:px-12 flex items-center text-white">
            <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-start gap-10">
              <h1 className="text-[40px] sm:text-[48px] lg:text-[54px] font-bold leading-tight text-left animate-fade-in-up">
                Learning Center
              </h1>
              <div className="max-w-[620px] text-left lg:-ml-10 animate-fade-in-up delay-100">
                <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed mb-5">
                  Find all the answers to your questions about Delaware LLCs, series LLCs, corporations, S corporations,
                  non-profit corporations, public benefit corporations and limited partnerships.
                </p>
                <button
                  className="inline-flex items-center gap-2 bg-white text-[#2d98ef] font-medium text-sm sm:text-base px-5 py-2.5 rounded-md shadow-[0_10px_25px_rgba(15,23,42,0.25)] hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                  onClick={() => onNavigate?.('services')}
                >
                  Get Instant Updates
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
          </div>
        </section>

        {learningSections.map((section) => (
          <section
            key={section.id}
            data-id={section.id}
            className={`learning-section w-full border-y border-[#DDE8F2] bg-white transition-all duration-700 transform ${
              visibleSections.includes(section.id)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 min-h-[500px] flex flex-col lg:flex-row items-center gap-10 py-10 lg:py-14">
              {/* Card Image */}
              <div className="relative w-full max-w-[376px] aspect-square rounded-[8px] overflow-hidden shadow-[0px_20px_60px_rgba(15,23,42,0.18)] transition-transform duration-500 hover:scale-[1.02] group">
                <img
                  src={section.cardImage}
                  alt={`${section.cardTitle} card ${section.id}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0)_16.36%,_#489FE8_100%)] opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute top-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-[18px] shadow-[0px_12px_30px_rgba(15,23,42,0.16)] px-6 py-3 inline-block">
                    <p className="text-[#3787CB] text-lg sm:text-xl font-semibold leading-tight">
                      {section.cardTitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Panel Content */}
              <div className="relative w-full lg:w-[859px] lg:flex-none rounded-[20px] lg:rounded-l-[40px] lg:rounded-r-none overflow-hidden shadow-lg lg:shadow-none lg:ml-auto lg:translate-x-[88px]">
                 {/* Background Image for Panel */}
                <div className="absolute inset-0">
                     <img 
                        src={section.panelImage} 
                        alt={`Startup team ${section.id}`} 
                        className="w-full h-full object-cover" 
                     />
                     <div className="absolute inset-0 bg-[rgba(72,159,232,0.93)]" />
                </div>

                <div className="relative h-full w-full flex flex-col md:flex-row gap-8 items-stretch px-6 py-8 sm:px-8 sm:py-10 text-white">
                  <div
                    className={`flex flex-col w-full md:w-1/2 ${
                      section.id === 1 ? 'gap-3 justify-start' : 'gap-5'
                    }`}
                  >
                    {(section.primaryTopics ?? defaultPrimaryTopics).map((item, idx) => (
                      <button
                        key={`${section.id}-primary-${idx}`}
                        className={`flex items-center justify-between text-left text-base sm:text-lg font-medium border-b border-white/30 group transition-all duration-300 hover:pl-2 hover:bg-white/10 rounded-lg px-2 py-2 ${
                          section.id === 1 ? 'mb-1' : 'mb-2'
                        }`}
                      >
                        <span className="group-hover:text-white transition">{item}</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-white transform group-hover:translate-x-1 transition-transform"
                        >
                          <path
                            d="M1 11L11 1M11 1H4M11 1V8"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    ))}
                  </div>
                  <div
                    className={`flex flex-col w-full md:w-1/2 ${
                      section.id === 1 ? 'gap-3 justify-end' : 'gap-5'
                    }`}
                  >
                    {(section.secondaryTopics ?? defaultSecondaryTopics).map((item, idx) => (
                      <button
                        key={`${section.id}-secondary-${idx}`}
                        onClick={() => {
                          if (item === 'Delaware Company Formations for Non-Residents') {
                            onNavigate?.('nonResidentFormations')
                          }
                        }}
                        className={`flex items-center justify-between text-left text-base sm:text-lg font-medium border-b border-white/30 group transition-all duration-300 hover:pl-2 hover:bg-white/10 rounded-lg px-2 py-2 ${
                          section.id === 1 ? 'mb-1' : 'mb-2'
                        }`}
                      >
                        <span className="group-hover:text-white transition">{item}</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-white transform group-hover:translate-x-1 transition-transform"
                        >
                          <path
                            d="M1 11L11 1M11 1H4M11 1V8"
                            stroke="currentColor"
                            strokeWidth="1.4"
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
          </section>
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default LearningCenter


