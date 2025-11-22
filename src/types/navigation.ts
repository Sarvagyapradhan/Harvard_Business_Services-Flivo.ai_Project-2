export type PageKey =
  | 'home'
  | 'startCompany'
  | 'services'
  | 'learningCenter'
  | 'hbsBlog'
  | 'aboutHbs'
  | 'makeAnnualPayments'
  | 'franchiseSinglePayment'
  | 'franchiseMultiPayment'
  | 'agentSinglePayment'
  | 'agentMultiPayment'
  | 'nonResidentFormations'

export const PAGE_PATHS: Record<PageKey, string> = {
  home: '/',
  startCompany: '/start-company',
  services: '/services',
  learningCenter: '/learning-center',
  hbsBlog: '/hbs-blog',
  aboutHbs: '/about-hbs',
  makeAnnualPayments: '/make-annual-payments',
  franchiseSinglePayment: '/franchise-single-payment',
  franchiseMultiPayment: '/franchise-multi-payment',
  agentSinglePayment: '/agent-single-payment',
  agentMultiPayment: '/agent-multi-payment',
  nonResidentFormations: '/delaware-company-formations-for-non-residents',
}
