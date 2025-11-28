import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface HBSBlogProps {
  onNavigate?: (destination: PageKey) => void
}

const blogCategories = ['About LLCs', 'About Corporations', 'Entrepreneurs & Start-Ups', 'Business Strategies']

const blogPosts = [
  {
    id: 1,
    date: 'Tuesday, November 11, 2025',
    title: 'When Is the Best Time to Form Your Delaware Company?',
  },
  {
    id: 2,
    date: 'Tuesday, November 11, 2025',
    title: "The Challenge to Delaware's Preeminence in Business Formation and Domicile",
  },
  {
    id: 3,
    date: 'Tuesday, November 11, 2025',
    title: "The Challenge to Delaware's Preeminence in Business Formation and Domicile",
  },
  {
    id: 4,
    date: 'Tuesday, November 11, 2025',
    title: 'When Is the Best Time to Form Your Delaware Company?',
  },
  {
    id: 5,
    date: 'Tuesday, November 11, 2025',
    title: "The Challenge to Delaware's Preeminence in Business Formation and Domicile",
  },
  {
    id: 6,
    date: 'Tuesday, November 11, 2025',
    title: "The Challenge to Delaware's Preeminence in Business Formation and Domicile",
  },
]

const HBSBlog: React.FC<HBSBlogProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onNavigate={onNavigate} />
      <main>
        <section className="relative w-full flex items-start justify-center overflow-visible bg-[url('/HBS%20Blog/background.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.4),_rgba(0,0,0,0.4))]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(72,159,232,0.4)_70.51%,_#F2F2F2_94.58%)]" />
          <div className="relative max-w-[1440px] w-full min-h-[474px] h-auto py-20 mx-auto px-6 lg:px-12 flex items-center justify-center text-white">
            <div className="flex flex-col items-center text-center gap-6">
              <h1 className="text-[40px] sm:text-[48px] lg:text-[54px] font-bold leading-tight animate-fade-in-up">
                The HBS Blog
              </h1>
              <button
                className="inline-flex items-center gap-2 bg-white text-[#2d98ef] font-semibold text-sm sm:text-base px-5 py-2.5 rounded-md shadow-[0_10px_25px_rgba(15,23,42,0.25)] hover:bg-blue-50 transition-all duration-300 hover:scale-105 animate-fade-in-up delay-100"
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
        </section>

        <section className="w-full bg-[#F4F6F9]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 min-h-screen h-auto flex flex-col justify-start pt-8 pb-20">
            <div className="flex flex-col lg:flex-row gap-10 h-full items-stretch">
              <aside className="w-full lg:w-[280px] min-h-full bg-[#2D89D8] rounded-[4px] px-6 py-8 shadow-[0px_12px_30px_rgba(15,23,42,0.16)] flex flex-col animate-slide-in-left">
                <h3 className="text-white text-2xl font-bold mb-6">Blog Categories</h3>
                <div className="flex flex-col gap-3">
                  {blogCategories.map((category, index) => (
                    <button
                      key={category}
                      style={{ animationDelay: `${index * 50}ms` }}
                      className="w-full text-left bg-white text-[#2D89D8] font-semibold rounded-full px-4 py-2 text-sm shadow-[0_6px_18px_rgba(15,23,42,0.12)] hover:bg-blue-50 transition-all duration-300 hover:translate-x-1 animate-fade-in-left fill-mode-backwards"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </aside>

              <div className="flex-1 flex flex-col animate-fade-in-up delay-200">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
                  <h3 className="text-[28px] lg:text-[32px] font-semibold text-slate-900">Latest Insights</h3>
                  <div className="relative w-full sm:w-[300px] group">
                    <input
                      type="text"
                      placeholder='Search "About LLCs"'
                      className="w-full rounded-full border border-[#D6D9E0] bg-white py-2.5 pl-10 pr-4 text-sm text-slate-600 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#2d98ef]/40 transition-shadow duration-300"
                    />
                    <svg
                      className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2d98ef] transition-colors duration-300"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 21L16.65 16.65M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-8 lg:gap-y-14">
                  {blogPosts.map((post, index) => (
                    <article
                      key={post.id}
                      style={{ animationDelay: `${index * 100}ms` }}
                      className="group relative w-full aspect-[302/278] rounded-[8px] overflow-hidden border border-[rgba(0,0,0,0.16)] shadow-[0px_12px_30px_rgba(15,23,42,0.12)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in-up fill-mode-backwards"
                    >
                      <div className="absolute inset-0 bg-cover bg-center bg-[url('/HBS%20Blog/cardimage.png')] transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(21,45,75,0)_0%,_rgba(21,45,75,0.75)_100%)] opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
                      <div className="relative h-full w-full flex flex-col justify-end p-4 text-white gap-1">
                        <p className="text-xs font-medium uppercase tracking-wider opacity-80 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{post.date}</p>
                        <h4 className="text-base font-semibold leading-snug translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">{post.title}</h4>
                      </div>
                    </article>
                  ))}
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

export default HBSBlog

