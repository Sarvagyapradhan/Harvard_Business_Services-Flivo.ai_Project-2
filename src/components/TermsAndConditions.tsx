import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import type { PageKey } from '../types/navigation'

interface TermsAndConditionsProps {
  onNavigate?: (destination: PageKey) => void
}

const termsContent = [
  {
    title: "OVERVIEW",
    content: [
      `These Terms and Conditions of Use (these “Terms” or “Terms of Use”) apply to any visitors to the website located at www.delawareinc.com (the “Website”), as well as persons who register to receive our weekly blog or other information, as well as company formation and registered agent clients of Harvard Business Services, Inc. (“HBS” or the Company”).  These terms also set out the Company’s rights with respect to the Website and your use of the Website, among other things.  By using the Website (for any purpose, including to purchase services of any kind from the Company (the “Services”)), these Terms form an agreement just as if both parties had executed a contract.  By continuing to use the Website, and in consideration of your continued access thereto, you agree to be bound by these Terms and the policies and materials incorporated by reference herein, including the Company’s then-current privacy policy, as it may be amended (the “Privacy Policy”).  The Company’s Privacy Policy can be found on the Website at www.delawareinc.com/privacy-policy/. If you do not agree to be bound by these Terms and the Privacy Policy, please discontinue your use of the Website immediately.`,
      `Please read these Terms carefully before using Website.`
    ]
  },
  {
    title: "USER IS OF LEGAL AGE TO FORM A BINDING AGREEMENT",
    content: [
      `This Website is offered and available to users who are 18 years of age or older. By using this Website, you represent and warrant that you are of legal age and sufficient capacity under law to form a binding contract with the Company. If the foregoing representation is not true, you must not access or use the Website.`
    ]
  },
  {
    title: "CHANGES/UPDATES TO THESE TERMS",
    content: [
      `We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post such changes or updates, and apply to all access to and use of the Website thereafter. However, any changes to the dispute resolution provisions set out in Governing Law and Jurisdiction section in these Terms will not apply to any disputes for which the parties have actual notice before the date the revised Terms are posted on the Website.`,
      `Your continued use of the Website following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page and review these Terms from time to time so you are aware of any changes, as they are binding on you.`
    ]
  },
  {
    title: "CHANGES TO THE WEBSITE",
    content: [
      `We may update the content on the Website from time to time, but its content is not necessarily complete or continuously up-to-date. Although the Company makes a strong effort to keep all relevant terms relating to Services, policies, and terms governing the provision of Services to clients, it is possible that certain material on the Website may be out of date at any given time, and we are under no obligation to update such material. For example, posts on our blog, while accurate at the time written and posted, may become out of date or obsolete because of changes in law, regulation, market conditions, or accepted practices.`
    ]
  },
  {
    title: "NO “LEGAL ADVICE” PROVIDED",
    content: [
      `The Website is intended to provide you with a convenient way review the type and nature of the Services we offer, among other things. It provides Website visitors with a general understanding of the features, characteristics, and relative advantages and disadvantages of the types of business entities offered under Delaware law. While this discussion necessarily includes an assessment or comparison/contract of broad legal concepts governing the characteristics, treatment under various regulator regimes, and structure of Delaware business entities, which are essentially creatures of law, the Website does not tailor its discussion to the specific situation and circumstances of any person or entity.`,
      `The Website does not provide “legal advice” to any person or entity as that term is defined under state (and federal) regulation and the self-regulatory organizations for attorneys in each state, which may only be provided by licensed attorneys. The Company is not a law firm and is not (and will not) provide you with legal advice or legal counsel under any circumstances.`,
      `HBS and its employees, agents, representatives, and sales associates are not at any time acting as your attorney. Further, no attorney-client or other privilege applies to the communications between you and the Company, meaning that any discussions, notes or records, and the content thereof, can be subject to disclosure pursuant to a valid subpoena, other judicial disclosure order, or federal or state law enforcement requests.`,
      `Nothing on this Website should be taken as a substitute for legal advice, and the Company urges you to contact an attorney should you feel it necessary or appropriate. The Company is a document filing service; you are solely responsible for any actions or inactions taken in reliance on any information on the Website.`
    ]
  },
  {
    title: "CUSTOMER SATISFACTION IS OUR PRIORITY",
    content: [
      `HBS is committed to ensuring your satisfaction with all of our Services and support. If you are not satisfied with our Services, please contact an HBS representative immediately by calling 800-345-2677. We will address your concern promptly by assigning your request to a manager who will work with you to attempt to resolve your issue or concern.`
    ]
  },
  {
    title: "ACCESSING THE WEBSITE AND ACCOUNT SECURITY",
    content: [
      `We reserve the right to temporarily or permanently shut down or remove access to all or part of the Website, and any service or material we provide on the Website, in our sole discretion, with or without notice. We will not be liable to you if, for any reason, all or any part of the Website is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Website, or the entire Website, to users, including registered users. This may occur in the process of servicing the Website, amending all or a portion of the Website’s content, or adding additional functionality and features to the Website, among other things.`,
      `You are responsible for:`,
      `• Making all arrangements necessary for you to access the Website (e.g., appropriate hardware and software).`,
      `• Ensuring that all persons who access the Website through your internet connection are aware of these Terms and comply with them.`,
      `• If you register on the Website, protecting the confidentiality of your username and password used to access your account on the Website.`,
      `• Ensuring that any person(s) using your account are not violating these Terms, any other agreement you may have with the Company, or any provision of federal or state law or regulation.`,
      `• Maintaining accurate contact information for your account; this is particularly important for registered agent clients of the Company, as Delaware law requires that a registered agent maintain current and correct contact information for its clients, and provides that a failure to do so may result in our resignation as registered agent, among other things.`
    ]
  },
  {
    title: "REGISTRATION FOR SERVICES",
    content: [
      `If you elect to use our Services, you will be given access to an account (MyControlDesk) through which the Company will provide information regarding such Services and other matters. When you register for such account to use these Services, you will be required to provide certain information about yourself. You agree to provide true, accurate and complete information about yourself, and to update this information when it changes. If you provide any information that is untrue or inaccurate, not current, or incomplete, or if HBS suspects that your information is untrue or inaccurate, not current, or incomplete, HBS may, in its sole discretion, suspend or terminate your account and refuse current or future access to any Service. More broadly, HBS has the right to disable any username, password or other identifier, whether chosen by you or provided by us, at any time, including if, in our opinion, you have violated any provision of these Terms or the account has been compromised through unauthorized access.`,
      `Any personal information supplied in connection with a client account will be subject to the terms of our Privacy Policy. As a fundamental policy, as stated in the Privacy Policy, the Company does not sell your information to anyone for any purpose.`,
      `You must treat as confidential any username, password or any other piece of information you select or are provided by the Company, and you must not disclose it to any other person or entity. If you create an account, you also acknowledge that your account is personal to you and agree not to provide any other person with access to this Website or portions of it using your username, password or other security information. You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security. You also agree to take reasonable steps to ensure the security of your account access information, such as signing out of your account at the end of each session and/or using extra caution when using a public or shared computer.`,
      `The Company is permitted to rely upon directions, instructions, or other information transmitted from or entered in the account until we are otherwise instructed otherwise, and shall have no liability, therefore.`
    ]
  },
  {
    title: "FRANCHISE TAX SERVICES",
    content: [
      `The Company facilitates its clients Delaware Franchise Tax payments, accepting such payments and transmitting them to the State. By using our Services to file your Delaware Franchise Tax, you are indicating your understanding and consent to the following:`,
      `• if more is owed than the amount specified or if the form is not fully completed, Harvard will contact the client for payment and information before submitting the Franchise Tax filing; and`,
      `• for Franchise Tax filings that have not been processed with the State of Delaware, a service fee of $10 will be imposed on all refund requests. No refunds will be issued for Franchise Tax filings that have already been processed with the State of Delaware.`
    ]
  },
  {
    title: "COMMUNICATIONS FROM THE COMPANY",
    content: [
      `If you sign up for an account or if you sign up to receive them, the Company may choose to send you limited materials, such as notices letting you know of problems with the site or with services offered by HBS, or presenting you with the opportunity to review for purchase selected products and services.`,
      `As set forth in the Privacy Policy, you may elect during registration not to receive certain of these materials, and you may start or stop receiving such materials at any time by sending an e-mail to the address listed in the Privacy Policy.`
    ]
  },
  {
    title: "INTELLECTUAL PROPERTY RIGHTS",
    content: [
      `The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof), are owned by the Company, its licensors or other providers of such material. The foregoing materials are protected by United States and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.`,
      `These Terms permit you to use the Website for your direct use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store or transmit any of the material on our Website, except as follows:`,
      `• Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.`,
      `• You may store files that are automatically cached by your Web browser for display enhancement purposes.`,
      `• You may print or download a reasonable number of pages of the Website for your own personal, non-commercial use and not for further reproduction, publication or distribution.`,
      `• Where (or if at a given time) we provide desktop, mobile or other applications for download, you may download a single copy to your computer or mobile device solely for your own personal, non-commercial use, provided you agree to be bound by our end user license agreement for such applications.`,
      `• Where we provide social media features with certain content, you may take such actions as are enabled by such features.`,
      `• You may print copies of our blog posts, articles, white papers and other materials as you see fit for personal, educational, or other reasonable non-commercial use (although the Company may permit commercial or related uses otherwise prohibited in its sole discretion upon a prior written request by a Website user).`,
      `You must not:`,
      `• Modify copies of any materials from this site.`,
      `• Use any illustrations, photographs, video or audio sequences or any graphics separately from the accompanying text.`,
      `• Delete or alter any copyright, trademark or other proprietary rights notices from copies of materials from this site.`,
      `• Attempt to “spoof” or mimic the appearance or functionality of the Website.`,
      `• Reverse engineer, disassemble, rent, lease, loan, sell, sub-license, or create derivative works from the Website or the functions therein or materials thereon.`,
      `• Use any network monitoring or discovery software to determine the site architecture, or extract information about usage or users.`,
      `• Use any robot, spider, or other automatic device or manual process to monitor or copy the Website or Content without HBS's prior written permission.`,
      `If you wish to make any use of material on the Website other than that set out in this section, please address your request to: info@delawareinc.com.`,
      `If you print, copy, modify, download or otherwise use or provide any other person with access to any part of the Website in breach of these Terms, your right to use the Website will cease immediately and you must, at our option, return or destroy any copies of the materials you have made. No right, title or interest in or to the Website or any content on the Website is transferred to you, and all rights not expressly granted are reserved by the Company. Any use of the Website not expressly permitted by these Terms is a breach of these Terms and may violate copyright, trademark and other laws. Violation of the foregoing may result in our termination of services to you and/or resignation of our role as registered agent for entities affiliated with you (as permitted by Delaware law), if applicable.`
    ]
  },
  {
    title: "TRADEMARKS",
    content: [
      `Harvard Business Services, Inc., HBS, the HBS logo, MyControlDesk, ComplianceMonitor and DelawareInc.com and all related names, logos, product and service names, designs and slogans are trademarks of Harvard Business Services, Inc., and all other trademarks, service marks and trade names used on the Website are the property of their respective owners. None of the trademarks discussed above may be copied, downloaded or otherwise exploited without the permission of HBS or the owner of such trademark, service mark, or trade name, as applicable.`
    ]
  },
  {
    title: "PROHIBITED CONDUCT",
    content: [
      `It is a condition of your use of the Website that you do not:`,
      `• Use the Website in any way that violates any applicable federal, state, local, or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from the U.S. or other countries);`,
      `• Use the Website for the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise;`,
      `• Restrict or inhibit any other user from using the Website;`,
      `• Post or transmit any unlawful, threatening, abusive, libelous, defamatory, obscene, vulgar, pornographic, profane or indecent information of any kind, including without limitation, any images or other material depicting nudity;`,
      `• Post or transmit comments containing harassing or offensive language, including sexual references, sexual nicknames, racial slurs, hate propaganda, hate mongering, swearing, or rude or deliberately offensive comments, or engage in disruptive activities online, including excessive use of scripts, sound waves, scrolling (repeating the same message over and over), or use of viruses, bots, worms or trojan horses;`,
      `• Post or transmit any information, software or other material that is fraudulent or violates or infringes the rights of others, including material that violates privacy or publicity rights, or infringes copyright, trademark or other proprietary rights, without first obtaining permission from the owner or right holder, including WAREZ (copyrighted material distributed without permission);`,
      `• Post or transmit any information, software or other material that contains a virus or other harmful component;`,
      `• Post, transmit or in any way exploit any information, software or other material for commercial purposes or that contains advertising, “junk mail,” “spam,” or “chain letters”;`,
      `• Solicit other users to join, become members of, or contribute money to any online service or other organization, advocate or attempt to get users to join in legal or illegal schemes or plan or participate in scams involving other users;`,
      `• Impersonate HBS or its employees, any person or entity or falsely state or otherwise misrepresent your professional or other affiliation with any person or entity;`,
      `• Resell, redistribute, broadcast or transfer the information or use the information derived from the Website in a searchable, machine-readable database;`,
      `• Use the Website to collect personally identifying information about users of the Website in violation of our Privacy Policy;`,
      `• Disguise a file type to thwart HBS’s detection processes;`,
      `• Post or transmit any transmissions constituting or encouraging conduct that would constitute a criminal offense, give rise to civil liability or otherwise violate any local, state, national or international law;`,
      `• Attempt to gain unauthorized access to other computer systems or networks connected to the Website or otherwise attempt to interfere with the proper working of the Website;`,
      `• Use our address, telephone number, or other contact info absent the Company’s consent (acknowledging that certain mail forwarding services permit a registered agent client to use our contact information in specific, authorized ways).`,
      `The Company, at its sole discretion, shall determine whether any behavior, action, inaction, or information transmitted or received violates this provision.`
    ]
  },
  {
    title: "MONITORING CONDUCT; ENFORCEMENT",
    content: [
      `We have the right to:`,
      `• Remove or refuse to post any user contributions or blog post comments for any or no reason in our sole discretion.`,
      `• Disclose your identity or other information about you to any third party who claims that material posted by you violates their rights, including their intellectual property rights or their right to privacy.`,
      `• Take appropriate legal action, including without limitation, referral to law enforcement, for any illegal or unauthorized use of the Website.`,
      `• Terminate or suspend your access to all or part of the Website for any or no reason, including without limitation, any violation of these Terms.`,
      `YOU WAIVE AND HOLD HARMLESS THE COMPANY AND ITS AFFILIATES FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY ANY OF THE FOREGOING PARTIES DURING, OR TAKEN AS A CONSEQUENCE OF, INVESTIGATIONS BY EITHER THE COMPANY/SUCH PARTIES OR LAW ENFORCEMENT AUTHORITIES.`,
      `The Company assumes no liability for any action or inaction regarding transmissions, communications, or content provided by any user or third party. The Company accepts no liability or responsibility to anyone for performance or non-performance of the activities described in this Section.`,
      `You acknowledge and agree that the Company reserves the right to, and may from time to time in its sole discretion for any reason or no reason, monitor any and all information transmitted or received through the Website for operational and other purposes. During monitoring, any such transmitted or received information may be examined, recorded, copied, and used for authorized purposes in accordance with the Privacy Policy. Use of the Website constitutes consent to such monitoring. Furthermore, the Company reserves the right at all times to disclose any information, including any posted on any portion of the Website, as necessary to satisfy any law, regulation, valid subpoena, or federal or state law enforcement or governmental request.`
    ]
  },
  {
    title: "SUBMISSIONS BY USERS",
    content: [
      `Any testimonials or other comments or posts on our blog, podcast or other creative forum by Website users or those with an account on the Website (“Comments”) shall be deemed, and shall remain, the property of HBS, and shall otherwise be subject to the provisions below. You represent and warrant that you are authorized to grant all rights in any Comments to the Company. Disclosure, submission, or offer of any Comments shall constitute an assignment to HBS of all worldwide rights, titles, and interests in all copyrights and other intellectual property rights in such Comments. HBS may edit, copy, publish, distribute, translate, and otherwise use in any medium any Comments that you forward to HBS and will own exclusively all such rights, titles, and interest and shall not be limited in any way in its use, commercial or otherwise, of the Comments. HBS is and shall be under no obligation to: (1) maintain any of your or any user’s Comments in confidence; (2) to pay to you or any user any compensation for any Comments; or (3) to respond to any of your or any other user’s Comments.`
    ]
  },
  {
    title: "RELIANCE ON INFORMATION POSTED",
    content: [
      `The information presented on or through the Website is made available solely for general information purposes. We do not warrant the accuracy or completeness of this information. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the Website, or by anyone who may be informed of any of its contents.`,
      `This Website may include content provided by third parties, including materials provided by other users, bloggers and others. All statements and/or opinions expressed in these materials, and all articles and responses to questions and other content, other than the content provided by the Company, are solely the opinions and the responsibility of the person or entity providing those materials. These materials do not necessarily reflect the opinion of the Company. We are not responsible or liable to you or any third party, for the content or accuracy of any materials provided by any third parties.`,
      `The Company may rely on third-party statistical, survey, or other information or figures in its discussions on the Website or in the Company’s blog. The Company makes every attempt to only rely on sources it believes to be accurate and verified, but is not responsible for the accuracy or completeness of such information or sources.`
    ]
  },
  {
    title: "ONLINE PURCHASES AND OTHER TERMS AND CONDITIONS",
    content: [
      `All contracting for Services through the Website or other transactions you make on the Website will be governed by separate agreements for such services (“Services Agreements”). The template Services Agreement for registered agent services is available here. In connection with your Services Agreement(s), you will have the opportunity to review, carefully read through, and, if you choose, ask the Company’s staff questions regarding the relevant agreements. Your payment for and acceptance of these Services constitutes your agreement to the applicable Services Agreements.`,
      `The Company only accepts payments in U.S. dollars.`
    ]
  },
  {
    title: "LINKING TO THE WEBSITE AND SOCIAL MEDIA FEATURES",
    content: [
      `You may link to our homepage, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of our reputation or standing, but you must not establish a link in such a way as to suggest any form of association with your website, business, or other venture, or our approval or endorsement on our part without our express prior written consent.`,
      `This Website may provide certain social media features that enable you to:`,
      `• Link from your own or certain third-party websites to certain content on this Website.`,
      `• Send e-mails or other communications with certain content, or links to certain content, on this Website.`,
      `• Cause limited portions of content on this Website to be displayed or appear to be displayed on your own or certain third-party websites.`,
      `You may use these features solely as they are provided by us, and solely with respect to the content they are displayed with and otherwise in accordance with any additional terms and conditions we provide with respect to such features. Subject to the foregoing, you must not:`,
      `• Establish a link from any website that is not owned by you.`,
      `• Cause the Website or portions of it to be displayed, or appear to be displayed by, for example, framing, deep linking or in-line linking, on any other site.`,
      `• Otherwise take any action with respect to the materials on this Website that is inconsistent with any other provision of these Terms.`,
      `You agree to cooperate with us in causing any unauthorized framing or linking immediately to cease. We reserve the right to withdraw linking permission without notice. We may disable all or any social media features and any links at any time without notice in our discretion.`
    ]
  },
  {
    title: "LINKS FROM THE WEBSITE",
    content: [
      `If the Website contains links to other sites and resources provided by third parties, these links are provided for your convenience only (“Advertisement Links”). These Advertisement Links include links contained in advertisements, including banner advertisements and sponsored links. We have no control over the contents of Advertisement Links, and accept no responsibility for them or for any loss or damage that may arise from your access, use, or reliance upon them. We do not endorse or recommend the use of any Advertisement Links. If you decide to access any Advertisement Link, you do so entirely at your own risk and subject to the terms and conditions of use for such websites.`
    ]
  },
  {
    title: "DISCLAIMER OF WARRANTIES",
    content: [
      `Although we take commercially reasonable steps to prevent such occurrence, you understand that the Company cannot and does not guarantee or warrant that files available for downloading from the Website or content to which the Website links will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our Website for any reconstruction of any lost data.`,
      `WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITE LINKED TO IT.`,
      `YOUR USE OF THE WEBSITE, ITS CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY OF THE WEBSITE. WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT THE WEBSITE, ITS CONTENT OR ANY SERVICES OBTAINED THROUGH THE WEBSITE WILL BE ACCURATE, RELIABLE, ERROR-FREE OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE WEBSITE OR ANY SERVICES OBTAINED THROUGH THE WEBSITE WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.`,
      `THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE.`,
      `THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.`
    ]
  },
  {
    title: "LIMITATION ON LIABILITY",
    content: [
      `IN NO EVENT WILL THE COMPANY, ITS AFFILIATES OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES OR ANY SERVICES OBTAINED THROUGH THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE.`,
      `THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.`
    ]
  },
  {
    title: "LIMITATION ON TIME TO FILE CLAIMS",
    content: [
      `ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OR THE WEBSITE MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES, OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED. IF THE FOREGOING PROVISION IS DEEMED UNENFORCEABLE AS A MATTER OF LAW, THEN THE PROVISION SHALL BE AMENDED TO PROVIDE FOR THE SHORTEST PERIOD OF TIME FOR COMMENCEMENT OF A CAUSE OF ACTION OR CLAIM AFTER SUCH CAUSE OF ACTION ACCRUED PERMITTED UNDER APPLICABLE LAW.`
    ]
  },
  {
    title: "INDEMNIFICATION",
    content: [
      `You agree to defend, indemnify and hold harmless the Company, its affiliates, licensors and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Website, including, but not limited to, your contributions, any use of the Website's content, services and products other than as expressly authorized in these Terms, or your use of any information obtained from the Website, or any misconduct or illegality involving the foregoing.`
    ]
  },
  {
    title: "TERMINATION",
    content: [
      `HBS may, in its sole discretion, terminate your password, account (or any part thereof) or use of the Website, or remove and discard any communication transmitted by you, or information stored, sent, or received via the Website without prior notice and for any reason, including, but not limited to:`,
      `• Concurrent access of the Website with identical user identification numbers.`,
      `• Permitting another person or entity to use your user identification number to access the Website.`,
      `• Any other access or use of the Website except as expressly provided in these Terms.`,
      `• Any violation of the terms and conditions of these Terms or the rules and regulations relating to the use of, the software and/or data files contained in, or accessed through, the Website.`,
      `• Tampering with or alteration of any of the software and/or data files contained in, or accessed through, the Website.`,
      `• Failure to use the Website or portion thereof on a regular basis.`,
      `You may terminate your membership hereunder upon thirty (30) days written notice by you to HBS of your intent to terminate these Terms. Termination, suspension, or cancellation of these Terms or your access rights shall not affect any right or relief to which HBS may be entitled, at law or in equity. Upon termination of these Terms, all rights granted to you will automatically terminate and immediately revert to HBS and its licensors.`
    ]
  },
  {
    title: "GEOGRAPHIC RESTRICTIONS",
    content: [
      `The Company's Services provided through its Website are subject to United States export controls. No Services may be provided (1) to a national or resident of Cuba, Libya, North Korea, Iran, Syria, Russia, or any other country to which the U.S. has embargoed goods or prohibited commercial transactions ("Restricted Countries"), or (2) to anyone on the U.S. Treasury Department's Office of Foreign Asset Control ("OFAC") lists. By using the Website, you represent and warrant that you are not located in, under the control of, or a national or resident of a Restricted Country and are not currently named on any sanctions list maintained by OFAC.`
    ]
  },
  {
    title: "JURISDICTION AND VENUE",
    content: [
      `These Terms shall be governed by and construed in accordance with the laws of the State of Delaware without giving effect to any principles of conflicts of law. You hereby consent to the exclusive jurisdiction and venue of courts in Sussex County, Delaware, U.S.A., regarding any and all disputes relating to these Terms.`
    ]
  },
  {
    title: "DISCLAIMERS AND LIMITATIONS ARE MATERIAL TERMS",
    content: [
      `You acknowledge and agree that the warranty disclaimers and liability and remedy limitations in these Terms are material terms and that they have been taken into account in the decision by the Company to operate the Website in connection with its business.`
    ]
  },
  {
    title: "NO WAIVER",
    content: [
      `No waiver of any provision or any right granted hereunder will be effective unless set forth in a written instrument signed by the waiving party. No waiver by either party of any breach or default hereunder shall be deemed a waiver of any subsequent breach or default. You agree not to reproduce, duplicate, copy, sell, resell, or exploit for any commercial purposes, any portion of the Website or access to the Website. The headings and subtitles-headings used in these Terms are used for convenience only and are not to be considered in construing or interpreting these Terms.`
    ]
  },
  {
    title: "SEVERABILITY",
    content: [
      `In the event any of the provisions of these Terms are deemed to be unenforceable by a court of law, such provisions shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.`
    ]
  },
  {
    title: "ENTIRE AGREEMENT",
    content: [
      `You agree that these Terms are the complete and exclusive agreement between you and Harvard Business Services, Inc. pertaining specifically to your use of the Website. If any provision herein conflicts with a Services Agreement for a particular Service, the applicable Services Agreement shall control.`
    ]
  },
  {
    title: "COMMENTS AND CONCERNS",
    content: [
      `This Website is operated by the Company, located at 16192 Coastal Highway, Lewes, DE 19958.`,
      `All notices of copyright infringement claims should be sent to our copyright agent, Jarrod Melson, General Counsel of the Company. He can be reached by email at jarrod@delawareinc.com.`,
      `All other feedback, comments, requests for technical support, and other communications relating to the Website should be directed to: info@delawareinc.com.`
    ]
  }
]

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onNavigate={onNavigate} />
      <main>
        <section className="relative left-1/2 w-screen -translate-x-1/2 h-[302px] overflow-hidden bg-[url('/Footer%20Pages/bsckground_tc_pp.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.5),_rgba(0,0,0,0.5))]" />
          <div className="absolute inset-0 bg-[linear-gradient(178.09deg,_rgba(72,159,232,0)_23.19%,_#489FE8_91.93%)]" />
          <div className="relative max-w-[1440px] h-full mx-auto px-6 lg:px-12 flex flex-col justify-end pb-12 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Legal</p>
            <h1 className="text-[36px] sm:text-[44px] lg:text-[52px] font-semibold leading-tight">
              Terms & Conditions
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl">
              Please review the following terms carefully. Continued access to this site signifies your acceptance of these conditions.
            </p>
          </div>
        </section>

        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#F2F2F2] py-16 sm:py-20">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="mb-10">
              <p className="text-sm text-gray-500 font-medium mb-2">Last Updated: May 24, 2025</p>
            </div>
            
            <div className="space-y-12">
              {termsContent.map((section) => (
                <div key={section.title} className="scroll-mt-24" id={section.title.split('.')[0]}>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                    {section.title}
                  </h2>
                  <div className="space-y-4 text-black leading-relaxed text-xl">
                    {section.content.map((paragraph, idx) => (
                      <p key={idx} className="whitespace-pre-line">{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default TermsAndConditions
