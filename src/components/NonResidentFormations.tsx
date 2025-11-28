import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface NonResidentFormationsProps {
  onNavigate?: (destination: PageKey) => void
}

const NonResidentFormations: React.FC<NonResidentFormationsProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onNavigate={onNavigate} />
      <main>
        {/* Hero section replicated from AboutHBS */}
        <section className="relative w-full flex flex-col items-center justify-start overflow-visible bg-[url('/HBS%20Blog/background.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.4),_rgba(0,0,0,0.4))]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(72,159,232,0.4)_70.51%,_#F2F2F2_94.58%)]" />
          
          {/* Hero Content */}
          <div className="relative max-w-[1440px] w-full min-h-[400px] mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-white pt-20 pb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 max-w-4xl drop-shadow-lg animate-fade-in-up">
              Delaware Company Formations for Non-Residents
            </h1>
            <button className="bg-white text-[#2D89D8] hover:bg-blue-50 px-8 py-3 rounded-[4px] font-bold text-lg shadow-lg transition flex items-center gap-2 group animate-fade-in-up delay-100">
              Get Instant Updates
              <span className="text-xl group-hover:translate-x-1 transition-transform">↗</span>
            </button>
          </div>

          {/* Breadcrumb Strip */}
          <div className="relative z-10 w-full bg-gradient-to-b from-transparent to-white/90 backdrop-blur-sm border-b border-white/20">
             <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4">
              <div className="flex items-center text-sm font-medium">
                 <span 
                   className="text-[#2D89D8] font-bold hover:underline cursor-pointer"
                   onClick={() => onNavigate?.('learningCenter')}
                 >
                   Learning Center
                 </span>
                 <span className="mx-2 text-[#2D89D8]">{'>'}</span>
                 <span className="text-[#64748B]">Delaware Company Formations for Non-Residents</span>
              </div>
             </div>
          </div>
        </section>

        {/* Replicated Section 2 from AboutHBS */}
        <section className="w-full bg-[#F4F6F9] py-8">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col justify-start min-h-screen h-auto">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <aside className="w-full lg:w-[280px] bg-[#2D89D8] rounded-[4px] px-6 pt-8 pb-[350px] shadow-[0px_12px_30px_rgba(15,23,42,0.16)] flex-shrink-0 animate-slide-in-left h-fit">
                {/* Section 1: Delaware Company Formation */}
                <div className="mb-8">
                  <h3 className="text-white text-2xl font-bold mb-6">Delaware Company Formation</h3>
                  <div className="flex flex-col gap-3">
                    {['Form a Delaware Company', 'Form a Delaware LLC', 'Free Company Name Check'].map((item, idx) => (
                      <button
                        key={item}
                        style={{ animationDelay: `${idx * 50}ms` }}
                        className="w-full text-left bg-white text-[#2D89D8] font-semibold rounded-full px-4 py-2 text-sm shadow-[0_6px_18px_rgba(15,23,42,0.12)] hover:bg-blue-50 transition-all duration-300 hover:translate-x-1 animate-fade-in-left fill-mode-backwards"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section 2: Registered Agent Service */}
                <div className="mb-8">
                  <h3 className="text-white text-2xl font-bold mb-6">Registered Agent Service</h3>
                  <div className="flex flex-col gap-3">
                    {['Change Your Registered Agent', 'Appoint Registered Agent'].map((item, idx) => (
                      <button
                        key={item}
                        style={{ animationDelay: `${(idx + 3) * 50}ms` }}
                        className="w-full text-left bg-white text-[#2D89D8] font-semibold rounded-full px-4 py-2 text-sm shadow-[0_6px_18px_rgba(15,23,42,0.12)] hover:bg-blue-50 transition-all duration-300 hover:translate-x-1 animate-fade-in-left fill-mode-backwards"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section 3: Our Services */}
                <div>
                  <h3 className="text-white text-2xl font-bold mb-6">Our Services</h3>
                  <div className="flex flex-col gap-3">
                    {[
                      'Order a Delaware Certificate of Good Standing',
                      'Order a Certified Copy',
                      'File Foreign Qualification',
                      'Our Delaware Mail Forwarding Services',
                      'Order Apostille Service',
                      'Delaware LLC Operating Agreement Template',
                      'Pay Annual Franchise Tax',
                      'Pay Registered Agent Fee',
                    ].map((item, idx) => (
                      <button
                        key={item}
                        style={{ animationDelay: `${(idx + 5) * 50}ms` }}
                        className="w-full text-left bg-white text-[#2D89D8] font-semibold rounded-full px-4 py-2 text-sm shadow-[0_6px_18px_rgba(15,23,42,0.12)] hover:bg-blue-50 transition-all duration-300 hover:translate-x-1 animate-fade-in-left fill-mode-backwards"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="flex-1 relative overflow-visible animate-fade-in-up delay-200">
                <div className="pointer-events-none absolute inset-0 bg-[url('/homepage/Section%204/background.png')] bg-cover bg-[position:center_top] hidden lg:block" />
                <div className="pointer-events-none absolute inset-0 bg-[rgba(0,0,0,0.6)] hidden lg:block" />

                <div className="pointer-events-none absolute inset-y-0 left-full w-[120vw] bg-[url('/homepage/Section%204/background.png')] bg-cover bg-[position:center_top] hidden lg:block" />
                <div className="pointer-events-none absolute inset-y-0 left-full w-[120vw] bg-[rgba(0,0,0,0.6)] hidden lg:block" />
                
                {/* Mobile background handling */}
                <div className="pointer-events-none absolute inset-0 bg-[url('/homepage/Section%204/background.png')] bg-cover bg-[position:center_top] lg:hidden rounded-xl" />
                <div className="pointer-events-none absolute inset-0 bg-[rgba(0,0,0,0.6)] lg:hidden rounded-xl" />

                <div className="relative z-10 w-full h-full">
                  {/* Heading outside translucent effect */}
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white pt-4 pb-4 drop-shadow-md relative z-20 lg:translate-x-10">
                    Delaware Company Formations for Non-Residents
                  </h2>

                  {/* Glass overlay strip */}
                  <div className="pointer-events-none absolute left-0 top-20 bottom-10 w-[200vw] bg-[rgba(132,132,132,0.3)] backdrop-blur-[25px] border border-white/20 border-l-transparent border-t-transparent border-b-transparent shadow-[0px_24px_48px_rgba(15,23,42,0.35)] hidden lg:block" />
                  
                  {/* Mobile glass overlay */}
                  <div className="pointer-events-none absolute inset-0 top-0 bottom-0 bg-[rgba(132,132,132,0.3)] backdrop-blur-[25px] border border-white/20 shadow-[0px_24px_48px_rgba(15,23,42,0.35)] lg:hidden rounded-xl" />

                  {/* Content on top of the glass panel */}
                  <div className="relative w-full h-full flex flex-col px-4 sm:px-6 lg:px-10 pt-10 lg:pt-12 pb-10 text-[#333333]">
                    <div className="flex flex-col gap-8 max-w-3xl mx-auto">
                      
                      <div className="prose prose-xl max-w-none text-white font-semibold text-lg sm:text-xl lg:text-2xl">
                        <p className="mb-6">
                          As an aspiring business owner, you may hear stories about the benefits of forming a Delaware company. Delaware's Court of Chancery, flexible corporate structure, and tax advantages are all great reasons to start a Delaware business. And, believe it or not, these benefits are not limited to Delaware residents. In fact, you do not have to live in, or even visit, the State of Delaware to form a Delaware company. Except for residents of restricted countries (such as Cuba, Iran, North Korea, Syria, and Russia), anyone can establish a Delaware corporation or LLC as a non-resident and conduct lawful business activities from anywhere in the world.
                        </p>

                        {/* Who Can Form a Delaware Company? */}
                        <div className="mb-8">
                          <div className="bg-white text-[#489FE8] py-3 px-6 rounded-lg shadow-md mb-4 inline-block">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                              <span className="text-2xl">✈️</span> Who Can Form a Delaware Company?
                            </h2>
                          </div>
                          <p>
                            Just about anyone can start a business in Delaware. There are no citizenship or residency requirements for company owners, directors, or officers. This makes Delaware an appealing option for non-residents who want to conduct business in the U.S. or hold U.S. based assets. However, Delaware does require every business to maintain a registered agent with a physical address in the state.
                          </p>
                        </div>

                        {/* Why Choose Delaware to Form a Company? */}
                        <div className="mb-8">
                          <div className="bg-white text-[#489FE8] py-3 px-6 rounded-lg shadow-md mb-4 inline-block">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                              <span className="text-2xl">🏢</span> Why Choose Delaware to Form a Company?
                            </h2>
                          </div>
                          <p>
                            Delaware is the most popular U.S. state for company formation, thanks to its business-friendly laws, a well-established legal framework, and the Delaware Court of Chancery, a specialized court that handles corporate disputes. Remember that there is no requirement to be a U.S. citizen or resident to incorporate in Delaware, so people from around the world take advantage of the state's benefits. Non-residents that form a business in Delaware will be able to enjoy a straightforward incorporation process and generally will not pay U.S. income taxes if operating outside Delaware. Additionally, Delaware does not require the disclosure of owners, directors, or officers in public records, providing a high level of privacy.
                          </p>
                        </div>

                        {/* How to Form a Delaware LLC as a Non-resident */}
                        <div className="mb-8">
                          <div className="bg-white text-[#489FE8] py-3 px-6 rounded-lg shadow-md mb-4 inline-block">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                              <span className="text-2xl">📋</span> How to Form a Delaware LLC as a Non-resident
                            </h2>
                          </div>
                          <p className="mb-4">
                            Here is a simple step-by-step guide that outlines the U.S. company formation process for non-residents:
                          </p>
                          <ol className="list-decimal list-inside space-y-2 ml-4 font-medium">
                            <li>Choose a name for your LLC</li>
                            <li>Hire a Delaware Registered Agent</li>
                            <li>File a Certificate of Formation</li>
                            <li>Create an Operating Agreement (optional)</li>
                            <li>Obtain an EIN</li>
                            <li>File a Beneficial Ownership Information (BOI) Report</li>
                          </ol>
                        </div>

                        {/* What Is a Non Resident Company? */}
                        <div className="mb-8">
                          <div className="bg-white text-[#489FE8] py-3 px-6 rounded-lg shadow-md mb-4 inline-block">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                              <span className="text-2xl">🌐</span> What Is a Non Resident Company?
                            </h2>
                          </div>
                          <p className="mb-4">
                            A non-resident company is a business that is registered in a country other than the one where it generates its income and conducts its primary operations. In the U.S., this typically refers to a company formed by foreign individuals who do not live in or hold legal residency status in the United States. For example, if someone lives in Canada and forms an LLC or Corporation in Delaware, that business is considered a non-resident company.
                          </p>
                          <p>
                            Non-resident companies are fully legal and enjoy many of the same rights and protections as those owned by U.S. residents. However, while forming a non-resident company is relatively easy, foreign business owners will still need to obtain an EIN, comply with U.S. tax laws, and work with a registered agent.
                          </p>
                        </div>

                        {/* Can I Form an LLC in Delaware Without Living There? */}
                        <div className="mb-8">
                          <div className="bg-white text-[#489FE8] py-3 px-6 rounded-lg shadow-md mb-4 inline-block">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                              <span className="text-2xl">🏠</span> Can I Form an LLC in Delaware Without Living There?
                            </h2>
                          </div>
                          <p className="mb-4">
                            Yes. Delaware's corporate law structure does not impose restrictions on the ownership or management of a Delaware company by a non-resident of the United States. This means that starting a corporation or LLC for a non-U.S. resident doesn't require an address in the State of Delaware or even in the United States.
                          </p>
                          <p className="mb-4">
                            However, every Delaware company is required to maintain a Registered Agent with a physical address in the state. The Registered Agent serves as your company's official point of contact for legal and state correspondence, including service of process and Franchise Tax notices. They must be available during normal business hours and are responsible for forwarding important documents to your designated contact address.
                          </p>
                          <p className="mb-4">
                            A Delaware Registered Agent not only has a physical address in Delaware but is also obligated to be available during normal business hours in order to receive documents sent by the Delaware Secretary of State to your company.
                          </p>
                          <p className="mb-4">
                            As long as you retain the services of a Delaware Registered Agent, you can form a Delaware Corporation, LLC, LP, Benefit Company, or Non-Profit Corporation without being a resident of Delaware or the United States.
                          </p>
                          <p>
                            Your Registered Agent may offer mail forwarding services and/or a virtual office; however, you will not be able to use the Registered Agent's address as your company's "place of business" address. Your company's physical address will be the location of your office (or home office) in the country where you actually work.
                          </p>
                        </div>

                        {/* Can a Non-U.S. Resident Get an EIN? */}
                        <div className="mb-8">
                          <div className="bg-white text-[#489FE8] py-3 px-6 rounded-lg shadow-md mb-4 inline-block">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                              <span className="text-2xl">🔢</span> Can a Non-U.S. Resident Get an EIN (Employer Identification Number)?
                            </h2>
                          </div>
                          <p className="mb-4">
                            Yes. As part of the Delaware company formation process for non-residents of the U.S., new businesses will need an EIN from the IRS. An EIN is mandatory for any company conducting lawful business activities, opening a bank account, or hiring employees in the United States.
                          </p>
                          <p className="mb-4">
                            You also need an EIN in order to file and pay taxes to the U.S. Treasury. If you have already filed your Delaware corporation or LLC with the Delaware Division of Corporations, you can apply for an EIN on their website or contact us for assistance.
                          </p>
                          <p>
                            Even if you don't live in the United States or have a U.S. Social Security Number (SSN), you are still eligible to apply for an EIN. However, if you do not have either of these, you will be required to provide a copy of the passport or government-issued ID for the person listed as the responsible party. You can email a copy to filings@delawareinc.com after you submit your order.
                          </p>
                          <p>
                            You can learn more about this process in our blog about obtaining Federal Tax ID Numbers for Non-U.S. Citizens.
                          </p>
                        </div>

                        {/* Can a Non-U.S. Resident Be an Officer or Director? */}
                        <div className="mb-8">
                          <div className="bg-white text-[#489FE8] py-3 px-6 rounded-lg shadow-md mb-4 inline-block">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                              <span className="text-2xl">👥</span> Can a Non-U.S. Resident Be an Officer or Director of a Delaware Corporation?
                            </h2>
                          </div>
                          <p className="mb-4">
                            Yes, the State of Delaware permits foreigners who are registering for a U.S. company to act as officers, directors, or members of a Delaware LLC. Right now, there are no restrictions on the citizenship or residency of a corporation's directors or officers. This means that individuals from any country can legally serve as the president, secretary, treasurer, or a member of the board of directors of a Delaware corporation. This perk enables full control and legal governance of a company by foreign individuals without requiring them to relocate or become U.S. residents.
                          </p>
                          <p>
                            There is also no age restriction for officers, directors, corporate shareholders, or members of Delaware Limited Liability Companies.
                          </p>
                        </div>

                        {/* How Do I Open a U.S. Business Bank Account? */}
                        <div className="mb-8">
                          <div className="bg-white text-[#489FE8] py-3 px-6 rounded-lg shadow-md mb-4 inline-block">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                              <span className="text-2xl">🏦</span> How Do I Open a U.S. Business Bank Account?
                            </h2>
                          </div>
                          <p className="mb-4">
                            A U.S. bank account for your Delaware business can be opened with any bank of your choosing. Each U.S. bank has different requirements for opening a business bank account. Unfortunately for our international clients, one of the most common and inflexible requirements for opening a business bank account in the United States is showing up in person to do so.
                          </p>
                          <p className="mb-4">
                            While some international business owners are able to travel to the U.S. to open an account, this can cause problems for others trying to register a U.S. company as a non-resident. Many people ask a friend or family member who lives in the U.S. to open the bank account on their company's behalf, but sometimes even that poses challenges. Other business owners appoint a manager (LLC) or director (Corporation) who already lives in the U.S. as an authorized person to open and manage the business bank account. Some business owners have had success by finding a branch of an American bank that is located near them, and asking that branch to facilitate opening an account.
                          </p>
                          <p className="mb-4">
                            If none of these options are available, you may consider working with Mercury, a popular choice among many of our non-U.S. clients.
                          </p>
                          <p className="mb-4">
                            Once you've decided on a bank, it's generally a good idea to call ahead to determine the requirements for opening an account as a Delaware LLC or corporation, as these requirements can vary from bank to bank.
                          </p>
                          <p className="mb-4 font-medium">
                            The following are examples of what banks may ask for when opening a business bank account for a corporation or LLC for non-U.S. residents:
                          </p>
                          <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                            <li>Certificate of Formation/Incorporation</li>
                            <li>Federal Tax ID Number (EIN)</li>
                            <li>Photo ID (such as a valid passport)</li>
                            <li>Proof of address</li>
                            <li>Banking resolution document</li>
                            <li>LLC Operating Agreement</li>
                            <li>Corporate bylaws</li>
                          </ul>
                          <p className="mb-4">
                            At Harvard Business Services, Inc., we can help with Delaware company registration for non-residents and provide an approved Certificate of Formation/Incorporation within three (3) business days or less via email.
                          </p>
                          <p className="mb-4">
                            We offer a variety of international business formation packages for you to choose from.
                          </p>
                          <p className="mb-4">
                            We can also help you obtain a Federal Tax ID Number (EIN).
                          </p>
                          <p className="mb-4">
                            Either an LLC Operating Agreement template or corporate bylaws can be included in all our formation packages.
                          </p>
                          <p className="mb-4">
                            While we cannot assist you in opening a U.S. business bank account, we are here to help in any other way we can. If you have any questions, please reach out to our helpful customer service representatives via phone (800-345-2677), email, or live chat.
                          </p>
                        </div>

                        {/* Apostille Documents */}
                        <div className="mb-8">
                          <div className="bg-white text-[#489FE8] py-3 px-6 rounded-lg shadow-md mb-4 inline-block">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                              <span className="text-2xl">📜</span> Apostille Documents
                            </h2>
                          </div>
                          <p className="mb-4">
                            A non-resident company uses Apostille documents to help verify the authenticity of legal papers from a foreign company. A Delaware company may, if you are doing business with any of the countries that participate in the Hague Conference, need to utilize documents that have been certified by the State of Delaware and affixed with an Apostille by the Delaware Secretary of State. Apostille documents are often required when you need to prove your company's legal existence to foreign banks or government agencies.
                          </p>
                          <p>
                            We can provide you with an Apostille for any of your company's documents that were issued by the Secretary of State in Delaware.
                          </p>
                        </div>

                        {/* Keeping a Delaware Company Compliant */}
                        <div className="mb-8">
                          <div className="bg-white text-[#489FE8] py-3 px-6 rounded-lg shadow-md mb-4 inline-block">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                              <span className="text-2xl">✅</span> Keeping a Delaware Company Compliant
                            </h2>
                          </div>
                          <p className="mb-4">
                            As the owner of a Delaware company, it is important that you understand the State of Delaware's annual corporate compliance requirements. Even as a Delaware corporation or LLC without U.S. residents, your company must still remain compliant. The two major aspects of compliance you will be required to maintain are:
                          </p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Delaware Franchise Tax</li>
                            <li>Delaware Registered Agent Fee</li>
                          </ul>
                        </div>

                        {/* Mail Forwarding Service */}
                        <div className="mb-8">
                          <div className="bg-white text-[#489FE8] py-3 px-6 rounded-lg shadow-md mb-4 inline-block">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                              <span className="text-2xl">📧</span> Mail Forwarding Service
                            </h2>
                          </div>
                          <p className="mb-4">
                            Many international business owners wish to establish a U.S. presence or need a U.S. address. To support that demand, Harvard Business Services, Inc. offers both a reliable mail forwarding service as well as a virtual office service. By signing up for our mail forwarding service, you can have mail for your company addressed to our office, where we will forward it to the address of your choice. We can receive important government notices, banking correspondence, and vendor mail while helping maintain professional credibility with U.S. clients and partners.
                          </p>
                          <p className="mb-4">
                            While this service provides a U.S. address for mail, it is not a substitute for a registered agent.
                          </p>
                          <p className="mb-4">
                            Non-U.S. residents cannot own an S Corporation in the United States, so their Delaware companies will be either an LLC or a C Corporation. A Delaware LLC with non-U.S. owners is usually treated as a pass-through entity for tax purposes. This means the LLC itself doesn't pay federal income tax. Instead, the members report U.S.-sourced income on their own personal tax returns (if applicable). Corporations, on the other hand, are typically taxed on total earnings, including U.S. and non-U.S.-sourced earnings.
                          </p>
                          <p>
                            Business taxation, especially for non-U.S. residents, is complicated and comes with a number of variables. At Harvard Business Services, Inc., we are not tax professionals and urge you to consult a qualified tax professional before forming a company in the United States. You should also consult the IRS publication's U.S. Tax Guide for Aliens and Tax Treaties.
                          </p>
                        </div>

                        {/* What Is U.S. Source Income? */}
                        <div className="mb-8">
                          <div className="bg-white text-[#489FE8] py-3 px-6 rounded-lg shadow-md mb-4 inline-block">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                              <span className="text-2xl">💰</span> What Is U.S. Source Income?
                            </h2>
                          </div>
                          <p className="mb-4">
                            In general, U.S. source income is any income earned inside the United States. This includes wages and any other compensation for services performed or goods sold in the United States.
                          </p>
                          <p className="mb-4">
                            Companies that do business in the United States are typically required to pay taxes on income earned in the U.S., even if they are based abroad. However, U.S. incorporated companies that are based overseas and earn no income from the United States are not required to pay U.S. income taxes.
                          </p>
                          <p className="mb-4">
                            Below is a brief primer on what does and does not constitute U.S. source income, per the IRS. This is intended to be a general guide, with exceptions. Please consult a tax professional or accountant for more details.
                          </p>
                          <p className="mb-4">
                            For example, if a Delaware company based in India does business solely with clients in India and England, the business's income is typically not considered U.S. source income and therefore is not subject to U.S. taxes. If that same company does business with clients in the U.S. as well, the income earned from those U.S. transactions is typically considered U.S. source income.
                          </p>
                          <p className="mb-8">
                            Ready to form your new Delaware company? Harvard Business Services, Inc. can help with Delaware company registration for both U.S. residents and non-residents. Here is how you can get started.
                          </p>
                        </div>

                        {/* Income Table */}
                        <div className="mb-12 overflow-hidden rounded-lg shadow-lg border border-gray-200">
                          <table className="w-full text-sm text-left">
                            <thead className="text-white uppercase bg-[#2D89D8]">
                              <tr>
                                <th scope="col" className="px-6 py-4 text-center border-r border-blue-400">
                                  Type of Income
                                </th>
                                <th scope="col" className="px-6 py-4 text-center">
                                  How Source Income is Determined
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              <tr className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-blue-600 border-r">
                                  Salaries, wages, and other compensation
                                </td>
                                <td className="px-6 py-4 text-gray-600 text-center">
                                  Where services are performed
                                </td>
                              </tr>
                              <tr className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-blue-600 border-r">
                                  Business income: personal services
                                </td>
                                <td className="px-6 py-4 text-gray-600 text-center">
                                  Where services are performed
                                </td>
                              </tr>
                              <tr className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-blue-600 border-r">
                                  Business income: sale of inventory purchased
                                </td>
                                <td className="px-6 py-4 text-gray-600 text-center">
                                  Where goods are sold
                                </td>
                              </tr>
                              <tr className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-blue-600 border-r">
                                  Business income: sale of inventory produced
                                </td>
                                <td className="px-6 py-4 text-gray-600 text-center">
                                  Where produced
                                </td>
                              </tr>
                              <tr className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-blue-600 border-r">
                                  Interest
                                </td>
                                <td className="px-6 py-4 text-gray-600 text-center">
                                  Residence of payer
                                </td>
                              </tr>
                              <tr className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-blue-600 border-r">
                                  Dividends
                                </td>
                                <td className="px-6 py-4 text-gray-600 text-center">
                                  Whether a U.S. or foreign corporation (exceptions apply)
                                </td>
                              </tr>
                              <tr className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-blue-600 border-r">
                                  Rents
                                </td>
                                <td className="px-6 py-4 text-gray-600 text-center">
                                  Where property is located
                                </td>
                              </tr>
                              <tr className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-blue-600 border-r">
                                  Royalties: Natural resources
                                </td>
                                <td className="px-6 py-4 text-gray-600 text-center">
                                  Where property is located
                                </td>
                              </tr>
                              <tr className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-blue-600 border-r">
                                  Royalties: Patents, copyrights, etc.
                                </td>
                                <td className="px-6 py-4 text-gray-600 text-center">
                                  Where property is used
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 font-medium text-blue-600 border-r">
                                  Sale of real property
                                </td>
                                <td className="px-6 py-4 text-gray-600 text-center">
                                  Where property is located
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="bg-gray-50 px-6 py-3 text-center text-sm text-gray-500">
                            SOURCE: Internal Revenue Service
                          </div>
                        </div>

                        {/* Bottom CTA Buttons */}
                        <div className="flex flex-col gap-4 items-center justify-center mt-8 mb-12 animate-fade-in-up delay-200">
                          <button className="w-full sm:w-auto px-8 py-4 bg-[#2D89D8] text-white font-bold rounded-full shadow-lg hover:bg-[#1a6bb3] transition transform hover:scale-105 text-lg flex items-center justify-center gap-2">
                            Why Form a Delaware LLC? <span className="text-xl">→</span>
                          </button>
                          <button className="w-full sm:w-auto px-8 py-4 bg-[#2D89D8] text-white font-bold rounded-full shadow-lg hover:bg-[#1a6bb3] transition transform hover:scale-105 text-lg flex items-center justify-center gap-2">
                            Why Form a Delaware Corporation? <span className="text-xl">→</span>
                          </button>
                        </div>

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

export default NonResidentFormations
