export type PageKey =
  | 'home'
  | 'startCompany'
  | 'services'
  | 'domesticFormationPackages'
  | 'internationalFormationPackages'
  | 'learningCenter'
  | 'hbsBlog'
  | 'aboutHbs'
  | 'makeAnnualPayments'
  | 'franchiseSinglePayment'
  | 'franchiseMultiPayment'
  | 'agentSinglePayment'
  | 'agentMultiPayment'
  | 'nonResidentFormations'
  | 'termsAndConditions'
  | 'privacyPolicy'
  | 'generalDisclaimer'
  | 'contactUs'

export const PAGE_PATHS: Record<PageKey, string> = {
  home: '/',
  startCompany: '/start-company',
  services: '/services',
  domesticFormationPackages: '/domestic-formation-packages',
  internationalFormationPackages: '/international-formation-packages',
  learningCenter: '/learning-center',
  hbsBlog: '/hbs-blog',
  aboutHbs: '/about-hbs',
  makeAnnualPayments: '/make-annual-payments',
  franchiseSinglePayment: '/franchise-single-payment',
  franchiseMultiPayment: '/franchise-multi-payment',
  agentSinglePayment: '/agent-single-payment',
  agentMultiPayment: '/agent-multi-payment',
  nonResidentFormations: '/delaware-company-formations-for-non-residents',
  termsAndConditions: '/terms-and-conditions',
  privacyPolicy: '/privacy-policy',
  generalDisclaimer: '/general-disclaimer',
  contactUs: '/contact-us',
}
