const image = (id, crop = "1800") =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${crop}&q=82`;

export const site = {
  brand: "Crestfield Advisory",
  descriptor: "Audit, Accounts & Tax",
  strapline: "Business advisers, chartered accountants, registered auditors and tax specialists",
  phone: "020 0000 0000",
  email: "hello@crestfield.example",
  year: "2026",
  address: "Demo House, 10 Portfolio Street, London, EC1A 1AA",
  siteUrl: "https://crestfield.example",
  social: {
    linkedin: "https://www.linkedin.com/company/crestfield-advisory",
    twitter: "https://x.com/crestfieldadvisory"
  },
  images: {
    heroStrategy: image("photo-1554224155-6726b3ff858f", "2200"),
    heroSupport: image("photo-1556761175-b413da4baf72", "2200"),
    heroGrowth: image("photo-1486406146926-c627a92ad1ab", "2200"),
    meeting: image("photo-1552664730-d307ca884978", "1600"),
    team: image("photo-1556761175-4b46a572b786", "1600"),
    audit: image("photo-1450101499163-c8848c66ca85", "1600"),
    laptop: image("photo-1460925895917-afdab827c52f", "1600"),
    office: image("photo-1497366754035-f200968a6e72", "1600"),
    city: image("photo-1497366811353-6870744d04b2", "1600"),
    cloud: image("photo-1551288049-bebda4e38f71", "1600"),
    planning: image("photo-1551836022-d5d88e9218df", "1600"),
    career: image("photo-1521737711867-e3b97375f902", "1600"),
    finance: image("photo-1554224154-26032fced8bd", "1600")
  }
};

export const offices = [
  {
    name: "Chichester",
    path: "/chichester-accountants/",
    phone: "01243 000 000",
    address: "Demo Barns, Birdham Road, Chichester, PO20 0AA"
  },
  {
    name: "London",
    path: "/london-accountants/",
    phone: "020 0000 0000",
    address: "Demo House, Bell Yard, London, WC2A 0AA"
  },
  {
    name: "Midhurst",
    path: "/midhurst-accountants/",
    phone: "01730 000 000",
    address: "Demo Grange, High Street, Midhurst, GU29 0AA"
  },
  {
    name: "Whiteley",
    path: "/whiteley-office/",
    phone: "01489 000 000",
    address: "Demo Suite 19, Parkway, Whiteley, PO15 0AA"
  }
];

export const heroSlides = [
  {
    title: "Plan Boldly",
    copy: "Clear financial guidance for ambitious founders, families and growing teams.",
    image: site.images.heroGrowth
  },
  {
    title: "Flexible Support",
    copy: "Practical accountancy help that adapts around the way your business works.",
    image: site.images.heroSupport
  },
  {
    title: "Strategic Clarity",
    copy: "Sharper reporting, calmer decisions and confidence in the numbers.",
    image: site.images.heroStrategy
  }
];

export const nav = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/about-us/",
    children: [
      { label: "Who are we?", path: "/who-we-are/" },
      { label: "Meet the Team", path: "/meet-the-team/" },
      { label: "Careers", path: "/careers/" },
      { label: "Corporate and Social Responsibility", path: "/corporate-and-social-responsibility/" }
    ]
  },
  {
    label: "Services",
    path: "/services/",
    mega: true,
    children: [
      {
        label: "Business Growth",
        children: [
          { label: "Profit Improvement Accountants", path: "/profit-improvement/" },
          { label: "Strategic Business Planning", path: "/strategic-business-planning/" },
          { label: "Corporate Finance", path: "/corporate-finance/" },
          { label: "Virtual Finance Director", path: "/virtual-finance-director/" },
          { label: "Virtual Financial Controller", path: "/virtual-financial-controller/" }
        ]
      },
      {
        label: "Cloud Accounting",
        children: [
          { label: "Xero Cloud Accounting Experts", path: "/xero-cloud-accounting-experts-2/" },
          { label: "Quickbooks", path: "/quickbooks/" }
        ]
      },
      { label: "Accounts", path: "/accounts/" },
      {
        label: "Tax",
        children: [
          { label: "Agricultural & Horticultural Business Accounting", path: "/agricultural-accounting-and-horticultural-business-accounting-2/" },
          { label: "Business Tax", path: "/business-tax/" },
          { label: "Capital Gains Tax Advice", path: "/capital-gains-tax-advice/" },
          { label: "Inheritance Tax", path: "/inheritance-tax-2/" },
          { label: "Making Tax Digital", path: "/making-tax-digital/" },
          { label: "Personal Tax", path: "/personal-tax/" },
          { label: "Tax Investigation Service", path: "/taxinvestigationservice/" },
          { label: "VAT Advice", path: "/vat-advice/" }
        ]
      },
      {
        label: "Audits & Assurance Services",
        path: "/audit/",
        children: [
          { label: "SRA Solicitors Accounts Rules Examinations", path: "/sra-solicitors-accounts-rules-examinations/" },
          { label: "Statutory Audits", path: "/statutory-audits/" },
          { label: "Tailored Assurance Services", path: "/tailored-assurance-services/" }
        ]
      },
      { label: "Bookkeeping and Management Accounts", path: "/bookkeeping/" },
      { label: "Payroll Services", path: "/payroll/" },
      { label: "Company Secretarial", path: "/company-secretarial/" },
      { label: "Probate", path: "/probate-services/" },
      {
        label: "Specialist Sectors",
        children: [
          { label: "Agriculture and Horticulture", path: "/agricultural-and-horticultural-businesses/" },
          { label: "Charities Independent Examination and Audit Services", path: "/charities-independent-examination-and-audit-services/" },
          { label: "Solicitors Accounts Rules Audits", path: "/solicitors-accounts-rules-audits/" }
        ]
      }
    ]
  },
  {
    label: "Library & Resources",
    path: "/resources-2/",
    children: [
      { label: "Sign up for our newsletter", path: "/newsletter/" },
      { label: "Videos & Podcasts", path: "/videos-podcasts/" },
      { label: "Blog", path: "/blog/" },
      { label: "News and Reports", path: "/resources-2/news-and-reports/" },
      { label: "Tax Calendar", path: "/resources-2/tax-calendar/" },
      { label: "Calculators", path: "/resources-2/calculators/" },
      { label: "Factsheets", path: "/resources-2/factsheet-2/" },
      { label: "Tax Rates and Allowances", path: "/resources-2/tax-rates-and-allowances/" },
      { label: "Downloadable forms", path: "/resources-2/downloadable-forms/" }
    ]
  },
  { label: "Reviews", path: "/reviews/" },
  {
    label: "Logins",
    path: "/logins/",
    children: [
      { label: "Client Portal", path: "/client-portal/" },
      { label: "Xero Login", path: "/xero-login/" },
      { label: "Dext Login", path: "/dext-login/" },
      { label: "Quickbooks Online Login", path: "/quickbooks-online-login/" }
    ]
  },
  {
    label: "Contact Us",
    path: "/contact-us/",
    children: [
      { label: "Become a client", path: "/contact-us/#contact" },
      { label: "Chichester Accountants", path: "/chichester-accountants/" },
      { label: "Midhurst Accountants", path: "/midhurst-accountants/" },
      { label: "Whiteley Office Contact Page", path: "/whiteley-office/" },
      { label: "London Accountants", path: "/london-accountants/" }
    ]
  }
];

export const serviceCards = [
  { title: "Audits & Assurance", path: "/audit/", copy: "Independent comfort in your numbers" },
  { title: "Tax Returns", path: "/expert-tax-advice-in-hampshire-west-sussex/", copy: "Personal and company tax handled clearly" },
  { title: "Virtual Finance Director", path: "/virtual-finance-director/", copy: "Board-level insight without a full-time hire" },
  { title: "Year-End Accounts", path: "/accounts/", copy: "Compliance delivered with useful context" },
  { title: "Tax Planning", path: "/expert-tax-advice-in-hampshire-west-sussex/", copy: "Forward planning before deadlines bite" },
  { title: "Virtual Financial Controller", path: "/virtual-financial-controller/", copy: "Reliable reporting and controls" },
  { title: "Bookkeeping", path: "/bookkeeping/", copy: "Clean records and calmer month ends" },
  { title: "Share Restructures", path: "/corporate-finance/", copy: "Structuring support for the next stage" },
  { title: "Xero Consultancy", path: "/xero-cloud-accounting-experts-2/", copy: "Cloud setup, training and app stacks" },
  { title: "Payroll", path: "/payroll/", copy: "Accurate, timely pay runs" },
  { title: "Probate", path: "/probate-services/", copy: "Patient guidance through sensitive work" },
  { title: "Forecasting & Business Advice", path: "/strategic-business-planning/", copy: "Plans that connect numbers to action" },
  { title: "Solicitors Accounts Rule Audits", path: "/solicitors-accounts-rules-audits/", copy: "Specialist compliance for legal practices" },
  { title: "Charities Independent Review & Audit", path: "/charities-independent-examination-and-audit-services/", copy: "Assurance for trustees and donors" },
  { title: "Agricultural & Horticultural Accounts", path: "/agricultural-and-horticultural-businesses/", copy: "Sector-aware accounting for growers" }
];

const commonServiceFeatures = [
  "A senior-led scoping call to understand your goals and risk areas.",
  "Clear deliverables, timelines and plain-English progress updates.",
  "Practical recommendations that help you improve the business, not just file paperwork."
];

const service = (path, title, subtitle, area, imageUrl = site.images.finance, features = commonServiceFeatures) => ({
  path,
  title,
  subtitle,
  type: "service",
  area,
  image: imageUrl,
  features
});

export const servicePages = [
  service("/profit-improvement/", "Profit Improvement Accountants", "Better visibility, stronger margins and fewer surprises.", "Business Growth", site.images.planning),
  service("/strategic-business-planning/", "Strategic Business Planning", "Turn management information into a focused commercial plan.", "Business Growth", site.images.planning),
  service("/corporate-finance/", "Corporate Finance", "Support for funding, succession, acquisitions and business sales.", "Business Growth", site.images.city),
  service("/virtual-finance-director/", "Virtual Finance Director", "Strategic finance leadership without hiring a full-time FD.", "Business Growth", site.images.meeting),
  service("/virtual-financial-controller/", "Virtual Financial Controller", "Month-end discipline, useful dashboards and stronger controls.", "Business Growth", site.images.laptop),
  service("/xero-cloud-accounting-experts-2/", "Xero Cloud Accounting Experts", "A clean cloud accounting setup that gives you numbers you can trust.", "Cloud Accounting", site.images.cloud),
  service("/xero-cloud-accounting-experts/", "Xero Cloud Accounting Experts", "Cloud accounting, reporting and training for modern teams.", "Cloud Accounting", site.images.cloud),
  service("/quickbooks/", "Quickbooks", "Quickbooks support for setup, clean-up, training and reporting.", "Cloud Accounting", site.images.cloud),
  service("/accounts/", "Accounts", "Year-end accounts prepared carefully, explained clearly and filed on time.", "Accounts", site.images.finance),
  service("/expert-tax-advice-in-hampshire-west-sussex/", "Expert Tax Advice", "Personal and business tax guidance shaped around your plans.", "Tax", site.images.finance),
  service("/business-tax/", "Business Tax", "Tax compliance and planning for companies, partnerships and growing groups.", "Tax", site.images.finance),
  service("/capital-gains-tax-advice/", "Capital Gains Tax Advice", "Plan disposals, investments and property sales before tax becomes a surprise.", "Tax", site.images.city),
  service("/inheritance-tax-2/", "Inheritance Tax", "Thoughtful estate planning for families, owners and trustees.", "Tax", site.images.office),
  service("/making-tax-digital/", "Making Tax Digital", "Digital record keeping and reporting workflows that stay compliant.", "Tax", site.images.cloud),
  service("/personal-tax/", "Personal Tax", "Self-assessment, property income and personal planning with less friction.", "Tax", site.images.finance),
  service("/taxinvestigationservice/", "Tax Investigation Service", "Calm, organised support if HMRC asks difficult questions.", "Tax", site.images.audit),
  service("/vat-advice/", "VAT Advice", "Practical VAT advice for property, ecommerce, hospitality and growing groups.", "Tax", site.images.finance),
  service("/audit/", "Audit & Assurance", "Independent, expert-led assurance that goes beyond basic compliance.", "Audits & Assurance", site.images.audit, [
    "Risk-based audit planning focused on what really matters.",
    "Senior-led fieldwork with practical communication throughout.",
    "Clear findings that strengthen confidence with lenders, investors and boards."
  ]),
  service("/sra-solicitors-accounts-rules-examinations/", "SRA Solicitors Accounts Rules Examinations", "Specialist assurance for legal practices handling client money.", "Audits & Assurance", site.images.audit),
  service("/statutory-audits/", "Statutory Audits", "Efficient statutory audit work for SMEs, charities and regulated entities.", "Audits & Assurance", site.images.audit),
  service("/tailored-assurance-services/", "Tailored Assurance Services", "Independent checks designed around stakeholder confidence and business risk.", "Audits & Assurance", site.images.audit),
  service("/bookkeeping/", "Bookkeeping and Management Accounts", "Reliable bookkeeping and management reporting that keeps decisions current.", "Operations", site.images.laptop),
  service("/payroll/", "Payroll Services", "Accurate, confidential payroll support for teams of all shapes.", "Operations", site.images.meeting),
  service("/company-secretarial/", "Company Secretarial", "Company filings, records and governance support kept tidy.", "Operations", site.images.office),
  service("/probate-services/", "Probate", "Sensitive probate support delivered with patience and technical care.", "Specialist Services", site.images.office),
  service("/probate/", "Probate", "Practical estate administration support for families and executors.", "Specialist Services", site.images.office),
  service("/agricultural-accounting-and-horticultural-business-accounting-2/", "Agricultural & Horticultural Business Accounting", "Accounting and tax support for land, growers and rural enterprises.", "Specialist Sectors", site.images.heroGrowth),
  service("/agricultural-and-horticultural-businesses/", "Agriculture and Horticulture", "Sector-aware advice for farming, horticulture and food supply businesses.", "Specialist Sectors", site.images.heroGrowth),
  service("/charities-independent-examination-and-audit-services/", "Charities Independent Examination and Audit Services", "Assurance and accounts support for trustees and not-for-profit teams.", "Specialist Sectors", site.images.audit),
  service("/solicitors-accounts-rules-audits/", "Solicitors Accounts Rules Audits", "Legal sector assurance, clear reporting and practical compliance advice.", "Specialist Sectors", site.images.audit),
  service("/business-advisory/", "Business Advisory", "Commercial advice that links strategy, profit, cash and reporting.", "Business Growth", site.images.planning),
  service("/tax/", "Tax", "Clear tax compliance and planning for individuals and organisations.", "Tax", site.images.finance)
];

export const teamMembers = [
  { name: "Amelia Hart FCA", role: "Managing Director", image: image("photo-1573496359142-b8d87734a5a2", "600") },
  { name: "Daniel Price CTA", role: "Director of Tax", image: image("photo-1560250097-0b93528c311a", "600") },
  { name: "Maya Singh ACA", role: "Audit & Assurance Director", image: image("photo-1580489944761-15a19d654956", "600") },
  { name: "Oliver Grant FCCA", role: "Business Services Director", image: image("photo-1507003211169-0a1dd7228f2d", "600") },
  { name: "Nina Brooks MAAT", role: "Cloud Accounting Lead", image: image("photo-1544005313-94ddf0286df2", "600") },
  { name: "Theo Morris ACA", role: "Virtual Finance Controller", image: image("photo-1500648767791-00dcc994a43e", "600") },
  { name: "Grace Turner ATT", role: "Personal Tax Manager", image: image("photo-1524504388940-b1c1722653e1", "600") },
  { name: "Elliot Reed", role: "Payroll Manager", image: image("photo-1519085360753-af0119f7cbe7", "600") }
];

export const resourceCards = [
  { title: "Latest tax calendar", path: "/resources-2/tax-calendar/", copy: "Key filing dates and reminders for the demonstration year." },
  { title: "Calculators", path: "/resources-2/calculators/", copy: "Portfolio tools for VAT, loans, payroll and profit checks." },
  { title: "Factsheets", path: "/resources-2/factsheet-2/", copy: "Short explainers for common finance and tax topics." },
  { title: "News and reports", path: "/resources-2/news-and-reports/", copy: "A sample editorial hub for finance updates." },
  { title: "Downloadable forms", path: "/resources-2/downloadable-forms/", copy: "Demo checklists and onboarding forms." },
  { title: "Videos and podcasts", path: "/videos-podcasts/", copy: "Placeholder media cards for advisory explainers." }
];

export const calculatorPages = [
  ["VAT Calculator", "/resources-2/calculators/vat-calculator/", "vat"],
  ["Payslip Calculator", "/resources-2/calculators/payslip-calculator/", "payroll"],
  ["Fuel Costs Calculator", "/resources-2/calculators/fuel-costs-calculator/", "fuel"],
  ["CIS Tax Deduction Calculator", "/resources-2/calculators/cis-tax-deduction-calculator/", "cis"],
  ["Startup Calculator", "/resources-2/calculators/startup-calculator/", "startup"],
  ["Savings Calculator", "/resources-2/calculators/savings-calculator/", "savings"],
  ["Millionaire Calculator", "/resources-2/calculators/millionaire-calculator/", "savings"],
  ["APR Calculator", "/resources-2/calculators/apr-calculator/", "loan"],
  ["Loan Calculator", "/resources-2/calculators/loan-calculator/", "loan"],
  ["Gross Profit Calculator", "/resources-2/calculators/gross-profit-calculator/", "gross"],
  ["Dividend Tax Calculator", "/resources-2/calculators/dividend-tax-calculator/", "dividend"],
  ["Mortgage Calculator", "/resources-2/calculators/mortgage-calculator/", "loan"],
  ["More Profit Calculator", "/resources-2/calculators/more-profit-calculator/", "gross"],
  ["Land and Buildings Transaction Tax", "/resources-2/calculators/land-and-buildings-transaction-tax/", "property"],
  ["Company Car and Fuel Benefit in Kind", "/resources-2/calculators/company-car-and-fuel-benefit-in-kind/", "fuel"],
  ["Stamp Duty Land Tax Calculator", "/resources-2/calculators/stamp-duty-land-tax-calculator/", "property"]
].map(([title, path, calc]) => ({
  title,
  path,
  calc,
  type: "calculator",
  subtitle: "A simple portfolio calculator with sample assumptions."
}));

export const blogCategories = [
  ["Accounting Blog Category", "/accounting-blog-category/"],
  ["Business Blog Category", "/business-blog-category/"],
  ["Other Blog Category", "/other-blog-category/"],
  ["Payroll Blog Category", "/payroll-blog-category/"],
  ["Pension Blog Category", "/pension-blog-category/"],
  ["Property Blog Category", "/property-blog-category/"],
  ["Tax Blog Category", "/tax-blog-category/"],
  ["VAT Blog Category", "/vat-blog-category/"],
  ["Xero Blog Category", "/xero-blog-category/"],
  ["National Insurance Blog Category", "/national-insurance-blog-category/"],
  ["LB News Blog Category", "/lb-news-blog-category/"],
  ["News Blog Category", "/news-blog-category/"]
].map(([title, path]) => ({ title, path, type: "blog" }));

export const standalonePages = [
  {
    path: "/about-us/",
    title: "About Us",
    subtitle: "A complete overview of the practice, people, careers and values.",
    type: "about-overview",
    image: site.images.office
  },
  {
    path: "/who-we-are/",
    title: "Who are we?",
    subtitle: "A modern accountancy practice built around clarity, useful advice and responsive service.",
    type: "about",
    image: site.images.office
  },
  {
    path: "/meet-the-team/",
    title: "Meet our Team",
    subtitle: "Introducing the people behind the portfolio practice.",
    type: "team",
    image: site.images.team
  },
  {
    path: "/careers/",
    title: "Careers",
    subtitle: "A supportive place to learn, qualify and do work you can be proud of.",
    type: "careers",
    image: site.images.career
  },
  {
    path: "/corporate-and-social-responsibility/",
    title: "Corporate and Social Responsibility",
    subtitle: "Doing useful work for clients while taking care of people, communities and resources.",
    type: "standard",
    image: site.images.team
  },
  {
    path: "/services/",
    title: "Services",
    subtitle: "All accountancy, advisory, tax, audit, payroll and specialist-sector services in one place.",
    type: "services-overview",
    image: site.images.finance
  },
  {
    path: "/reviews/",
    title: "The Highest Standards & Excellent Service",
    subtitle: "Sample client feedback for a portfolio case study.",
    type: "reviews",
    image: site.images.meeting
  },
  {
    path: "/contact-us/",
    title: "Contact Us",
    subtitle: "Tell us what you need and we will route the demo enquiry to the right person.",
    type: "contact",
    image: site.images.city
  },
  {
    path: "/newsletter/",
    title: "Sign up for our newsletter",
    subtitle: "A demo sign-up page for monthly finance notes.",
    type: "newsletter",
    image: site.images.laptop
  },
  {
    path: "/videos-podcasts/",
    title: "Videos & Podcasts",
    subtitle: "Short explainers and advisory conversations in a resource-library layout.",
    type: "media",
    image: site.images.meeting
  },
  {
    path: "/blog/",
    title: "Blog",
    subtitle: "Insights, explainers and practical planning notes.",
    type: "blog",
    image: site.images.laptop
  },
  {
    path: "/news/",
    title: "News",
    subtitle: "Firm updates, sample announcements and portfolio news posts.",
    type: "blog",
    image: site.images.city
  },
  {
    path: "/resources-2/",
    title: "Library & Resources",
    subtitle: "Useful tools, checklists and sample knowledge pages.",
    type: "resources",
    image: site.images.laptop
  },
  {
    path: "/resources-2/news-and-reports/",
    title: "News and Reports",
    subtitle: "A sample hub for tax, payroll and business updates.",
    type: "resource-list",
    image: site.images.city
  },
  {
    path: "/resources-2/tax-calendar/",
    title: "Tax Calendar",
    subtitle: "Key dates presented as a clean portfolio timeline.",
    type: "calendar",
    image: site.images.finance
  },
  {
    path: "/resources-2/calculators/",
    title: "Calculators",
    subtitle: "Portfolio calculators for quick business estimates.",
    type: "calculators",
    image: site.images.laptop
  },
  {
    path: "/resources-2/factsheet-2/",
    title: "Factsheets",
    subtitle: "Compact explainers for common financial questions.",
    type: "factsheets",
    image: site.images.finance
  },
  {
    path: "/resources-2/tax-rates-and-allowances/",
    title: "Tax Rates and Allowances",
    subtitle: "A demo reference page for allowances and thresholds.",
    type: "rates",
    image: site.images.audit
  },
  {
    path: "/resources-2/downloadable-forms/",
    title: "Downloadable Forms",
    subtitle: "Sample onboarding and planning documents.",
    type: "forms",
    image: site.images.office
  },
  {
    path: "/job-application-form/",
    title: "Job Application Form",
    subtitle: "A demonstration application form for the careers section.",
    type: "application",
    image: site.images.career
  },
  {
    path: "/new-client-information-request/",
    title: "New Client Information Request",
    subtitle: "A demo onboarding form for prospective clients.",
    type: "client-form",
    image: site.images.office
  },
  {
    path: "/thank-you/",
    title: "Thank You",
    subtitle: "Your demo enquiry has been received.",
    type: "thank-you",
    image: site.images.meeting
  },
  {
    path: "/newsletter-sign-up-completion/",
    title: "Newsletter Sign-up Complete",
    subtitle: "A sample confirmation page.",
    type: "thank-you",
    image: site.images.laptop
  },
  {
    path: "/50-ways-to-grow-your-business-guide/",
    title: "50 Ways to Grow Your Business Guide",
    subtitle: "A lead-magnet style resource page for portfolio use.",
    type: "guide",
    image: site.images.planning
  },
  {
    path: "/property-tax-seminars/",
    title: "Property Tax Seminars",
    subtitle: "A sample events page for property investors and landlords.",
    type: "events",
    image: site.images.city
  },
  {
    path: "/probating-a-will/",
    title: "Probating a Will",
    subtitle: "A plain-English guide page for estate administration.",
    type: "guide",
    image: site.images.office
  },
  {
    path: "/probate-valuation/",
    title: "Probate Valuation",
    subtitle: "A demo service explainer for valuation and estate reporting.",
    type: "guide",
    image: site.images.office
  },
  {
    path: "/driving-instructions/",
    title: "Driving Instructions",
    subtitle: "A placeholder travel information page for offices.",
    type: "directions",
    image: site.images.city
  },
  {
    path: "/complaints_procedure/",
    title: "Complaints Procedure",
    subtitle: "A professional process page with portfolio placeholder wording.",
    type: "legal",
    image: site.images.office
  },
  {
    path: "/privacy/",
    title: "Privacy Policy",
    subtitle: "Portfolio placeholder privacy notice.",
    type: "legal",
    image: site.images.office
  },
  {
    path: "/cookies/",
    title: "Cookie Policy",
    subtitle: "Portfolio placeholder cookie policy.",
    type: "legal",
    image: site.images.office
  },
  {
    path: "/disclaimer/",
    title: "Disclaimer",
    subtitle: "Portfolio placeholder disclaimer.",
    type: "legal",
    image: site.images.office
  },
  {
    path: "/2025-probate-diversity-survey-results/",
    title: "Diversity Results",
    subtitle: "A demo diversity survey summary page.",
    type: "legal",
    image: site.images.team
  },
  {
    path: "/logins/",
    title: "Logins",
    subtitle: "A demo hub for client portal and cloud accounting login links.",
    type: "logins-overview",
    image: site.images.cloud
  },
  {
    path: "/client-portal/",
    title: "Client Portal",
    subtitle: "A non-functional portfolio portal placeholder.",
    type: "portal",
    image: site.images.laptop
  },
  {
    path: "/xero-login/",
    title: "Xero Login",
    subtitle: "A disabled external login placeholder for the portfolio site.",
    type: "portal",
    image: site.images.cloud
  },
  {
    path: "/dext-login/",
    title: "Dext Login",
    subtitle: "A disabled external login placeholder for the portfolio site.",
    type: "portal",
    image: site.images.cloud
  },
  {
    path: "/quickbooks-online-login/",
    title: "Quickbooks Online Login",
    subtitle: "A disabled external login placeholder for the portfolio site.",
    type: "portal",
    image: site.images.cloud
  },
  {
    path: "/mhmm-menu-layout-loader/",
    title: "Menu Layout Loader",
    subtitle: "A preserved URL placeholder so copied navigation routes do not 404.",
    type: "thank-you",
    image: site.images.office
  },
  {
    path: "/blog/making-tax-digital-for-income-tax/",
    title: "Making Tax Digital for Income Tax: Your April 2026 Checklist",
    subtitle: "What sole traders and landlords with income over £50,000 need to do before April 2026.",
    type: "blog-article",
    image: site.images.cloud,
    content: {
      date: "May 2026",
      category: "MTD",
      intro: "From 6 April 2026, Making Tax Digital for Income Tax (MTD for IT) applies to sole traders and landlords whose qualifying income exceeds £50,000. If you have not yet chosen compatible software, reviewed your records workflow, or spoken to your accountant, this guide sets out the practical steps.",
      sections: [
        {
          heading: "Who is affected from April 2026?",
          body: "HMRC uses your most recent Self Assessment return to identify who falls into scope. If your combined self-employment and property income exceeded £50,000 in the 2024 to 2025 tax year, you are likely in the first wave. HMRC will write to eligible taxpayers, but waiting for that letter is not a preparation strategy."
        },
        {
          heading: "What Making Tax Digital for Income Tax actually changes",
          body: "You must keep digital records, send four quarterly updates to HMRC each year, and submit a final declaration at the close of each tax year. The quarterly updates are new obligations — they do not replace anything currently required by Self Assessment. The final declaration replaces the annual return. Late or missing quarterly updates generate penalty points under the new points-based penalty system."
        },
        {
          heading: "Your April 2026 preparation checklist",
          body: "Choose and set up MTD-compatible software — Xero, QuickBooks, FreeAgent and others are approved by HMRC. Connect your bank feeds to the software. Separate business and personal transactions from the start of the 2026 to 2027 tax year. Agree a quarterly review and submission workflow with your accountant. Check that your current bookkeeping produces categorised data throughout the year, not something reconstructed in January."
        },
        {
          heading: "What happens if you miss a quarterly update?",
          body: "HMRC introduced a points-based penalty system alongside MTD. Each missed quarterly update adds one point. When you reach the threshold — four points for quarterly filers — a £200 financial penalty applies. Further missed submissions add further penalties. Points reset after a period of sustained compliance, but the practical approach is not to accumulate them in the first place."
        },
        {
          heading: "How Crestfield Advisory can help",
          body: "Crestfield Advisory can review your current records, recommend compatible software, set up your first quarterly workflow and handle submissions alongside your annual tax position. If you are in scope from April 2026, the practical preparation work starts now — not in March."
        }
      ],
      sources: [
        { label: "GOV.UK — Making Tax Digital for Income Tax collection", url: "https://www.gov.uk/government/collections/making-tax-digital-for-income-tax" },
        { label: "HMRC — Check if you need to use MTD for Income Tax", url: "https://www.gov.uk/guidance/check-if-youre-eligible-for-making-tax-digital-for-income-tax" },
        { label: "GOV.UK — Late submission penalty reform", url: "https://www.gov.uk/government/publications/income-tax-self-assessment-and-partnerships-late-submission-and-late-payment-penalties" }
      ]
    }
  }
];

export const locationPages = [
  ...offices.map((office) => ({
    ...office,
    title: `${office.name} Accountants`,
    subtitle: `Demo ${office.name} office page with placeholder address and contact details.`,
    type: "location",
    image: site.images.city
  })),
  {
    name: "Whiteley",
    path: "/whiteley-accountants/",
    phone: "01489 000 000",
    address: "Demo Suite 19, Parkway, Whiteley, PO15 0AA",
    title: "Whiteley Accountants",
    subtitle: "A duplicate preserved route for the Whiteley accountants page.",
    type: "location",
    image: site.images.city
  },
  {
    name: "Hampshire",
    path: "/hampshire-accountants/",
    phone: "020 0000 0000",
    address: "Demo regional service page, Hampshire",
    title: "Hampshire Accountants",
    subtitle: "Regional accountancy support for Hampshire businesses.",
    type: "location",
    image: site.images.city
  },
  {
    name: "Southampton",
    path: "/southampton-accountants/",
    phone: "020 0000 0000",
    address: "Demo regional service page, Southampton",
    title: "Southampton Accountants",
    subtitle: "Regional accountancy support for Southampton businesses.",
    type: "location",
    image: site.images.city
  },
  {
    name: "Portsmouth",
    path: "/portsmouth-accountants/",
    phone: "020 0000 0000",
    address: "Demo regional service page, Portsmouth",
    title: "Portsmouth Accountants",
    subtitle: "Regional accountancy support for Portsmouth businesses.",
    type: "location",
    image: site.images.city
  },
  {
    name: "Fareham",
    path: "/fareham-accountants/",
    phone: "020 0000 0000",
    address: "Demo regional service page, Fareham",
    title: "Fareham Accountants",
    subtitle: "Regional accountancy support for Fareham businesses.",
    type: "location",
    image: site.images.city
  }
];

export const pages = [
  { path: "/", title: "Chartered Accountants, Tax Planning & Business Advisers", type: "home", image: site.images.heroGrowth },
  ...standalonePages,
  ...servicePages,
  ...calculatorPages,
  ...blogCategories,
  ...locationPages
];
