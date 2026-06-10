const image = (id, crop = "1800") =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${crop}&q=82`;

export const site = {
  brand: "Crestfield Advisory",
  descriptor: "Audit, Accounts & Tax",
  strapline: "Business advisers, chartered accountants, registered auditors and tax specialists",
  phone: "020 0000 0000",
  email: "hello@crestfield.example",
  year: "2026",
  address: "Portfolio House, 10 Portfolio Street, London, EC1A 1AA",
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
    finance: image("photo-1579621970563-ebec7560ff3e", "1600"),
    payroll: "/assets/payroll.webp"
  }
};

export const offices = [
  {
    name: "Chichester",
    path: "/chichester-accountants/",
    phone: "01243 000 000",
    address: "Portfolio Barns, Birdham Road, Chichester, PO20 0AA"
  },
  {
    name: "London",
    path: "/london-accountants/",
    phone: "020 0000 0000",
    address: "Portfolio House, Bell Yard, London, WC2A 0AA"
  },
  {
    name: "Midhurst",
    path: "/midhurst-accountants/",
    phone: "01730 000 000",
    address: "Portfolio Grange, High Street, Midhurst, GU29 0AA"
  },
  {
    name: "Whiteley",
    path: "/whiteley-office/",
    phone: "01489 000 000",
    address: "Portfolio Suite 19, Parkway, Whiteley, PO15 0AA"
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
    copy: "Sharper reporting, better decisions and confidence in the numbers.",
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
        label: "Advisory & Growth",
        children: [
          { label: "Profit Improvement", path: "/profit-improvement/" },
          { label: "Strategic Business Planning", path: "/strategic-business-planning/" },
          { label: "Corporate Finance", path: "/corporate-finance/" },
          { label: "Virtual Finance Director", path: "/virtual-finance-director/" },
          { label: "Virtual Financial Controller", path: "/virtual-financial-controller/" },
          { label: "Business Advisory", path: "/business-advisory/" }
        ]
      },
      {
        label: "Tax",
        children: [
          { label: "Business Tax", path: "/business-tax/" },
          { label: "Personal Tax", path: "/personal-tax/" },
          { label: "Capital Gains Tax", path: "/capital-gains-tax-advice/" },
          { label: "Inheritance Tax", path: "/inheritance-tax-2/" },
          { label: "VAT Advice", path: "/vat-advice/" },
          { label: "Making Tax Digital", path: "/making-tax-digital/" },
          { label: "Tax Investigation Service", path: "/taxinvestigationservice/" },
          { label: "Agricultural & Horticultural Tax", path: "/agricultural-accounting-and-horticultural-business-accounting-2/" }
        ]
      },
      {
        label: "Accounts & Operations",
        children: [
          { label: "Annual Accounts", path: "/accounts/" },
          { label: "Bookkeeping & Management Accounts", path: "/bookkeeping/" },
          { label: "Payroll Services", path: "/payroll/" },
          { label: "Company Secretarial", path: "/company-secretarial/" },
          { label: "Xero Cloud Accounting", path: "/xero-cloud-accounting-experts-2/" },
          { label: "QuickBooks", path: "/quickbooks/" }
        ]
      },
      {
        label: "Audit & Specialist",
        children: [
          { label: "Audit & Assurance", path: "/audit/" },
          { label: "Statutory Audits", path: "/statutory-audits/" },
          { label: "SRA Solicitors Examinations", path: "/sra-solicitors-accounts-rules-examinations/" },
          { label: "Tailored Assurance", path: "/tailored-assurance-services/" },
          { label: "Probate", path: "/probate-services/" },
          { label: "Charities Examination & Audit", path: "/charities-independent-examination-and-audit-services/" },
          { label: "Agriculture & Horticulture", path: "/agricultural-and-horticultural-businesses/" },
          { label: "Solicitors Accounts Rules", path: "/solicitors-accounts-rules-audits/" }
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
  { title: "Bookkeeping", path: "/bookkeeping/", copy: "Accurate records and smoother month ends" },
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
  "Defined deliverables, realistic timelines and regular progress updates.",
  "Recommendations that support better decisions as well as compliance."
];

const service = (path, title, subtitle, area, imageUrl = site.images.finance, features = commonServiceFeatures, heading = null, body = null) => ({
  path,
  title,
  subtitle,
  type: "service",
  area,
  image: imageUrl,
  features,
  heading: heading || title,
  body: body || subtitle
});

export const servicePages = [
  service(
    "/profit-improvement/",
    "Profit Improvement & Margin Analysis",
    "Better visibility, stronger margins and fewer surprises.",
    "Business Growth",
    "/assets/profit-improvement.webp",
    [
      "Detailed cost and margin analysis across your business lines.",
      "Pricing review with clear benchmarks and improvement levers.",
      "Cash flow mapping to find where profit is lost in the cycle."
    ],
    "Find the margin hiding in your numbers",
    "Many businesses have more profit available than their accounts suggest. We review cost structures, pricing decisions and the cash cycle to show where margin is being lost. From there, we help you recover it in a measured and sustainable way."
  ),
  service(
    "/strategic-business-planning/",
    "Strategic Business Planning",
    "Turn management information into a focused commercial plan.",
    "Business Growth",
    site.images.planning,
    [
      "Financial modelling built on your actual business data.",
      "Scenario planning that tests assumptions before they become commitments.",
      "A working plan that updates as conditions and the market evolve."
    ],
    "A plan that connects your numbers to your decisions",
    "A strong plan needs numbers behind it. We turn your goals into a working financial model, with forecasts, scenario testing and clear milestones. The result is a plan that supports decisions and can be updated as the business changes."
  ),
  service(
    "/corporate-finance/",
    "Corporate Finance",
    "Support for funding, succession, acquisitions and business sales.",
    "Business Growth",
    site.images.city,
    [
      "Financial modelling and information memoranda for funding rounds.",
      "Due diligence support for acquisitions and business purchases.",
      "Deal-ready reporting and vendor preparation for business sales and exits."
    ],
    "Support at the moments that define the business",
    "Whether you are raising investment, acquiring a competitor, or planning an exit, the quality of your financial preparation shapes the outcome. We provide modelling, due diligence support, and deal-ready reporting for founders and shareholders at every stage of a transaction."
  ),
  service(
    "/virtual-finance-director/",
    "Virtual Finance Director",
    "Strategic finance leadership without hiring a full-time FD.",
    "Business Growth",
    site.images.meeting,
    [
      "Monthly board packs and management accounts with clear commentary.",
      "Cash flow forecasting and scenario planning for key decisions.",
      "Investor relations support and funding preparation when needed."
    ],
    "Board-level finance leadership without the full-time overhead",
    "A Virtual Finance Director gives you senior finance support without the cost of a permanent hire. We provide board packs, investor support, cash forecasting and commercial challenge at the points where the business needs it most."
  ),
  service(
    "/virtual-financial-controller/",
    "Virtual Financial Controller",
    "Month-end discipline, useful dashboards and stronger controls.",
    "Business Growth",
    site.images.laptop,
    [
      "Month-end close process that completes on the same date every period.",
      "Balance sheet reconciliations and control environment review.",
      "Management accounts produced with meaningful variance analysis."
    ],
    "Month-end that closes on time with numbers you can trust",
    "A Virtual Financial Controller tightens the reporting cycle, cleans up reconciliations, and ensures the management accounts actually reflect reality. Month-end closes on schedule, controls hold, and the numbers the board sees are the numbers that matter."
  ),
  service(
    "/xero-cloud-accounting-experts-2/",
    "Xero Cloud Accounting Experts",
    "A clean cloud accounting setup that gives you numbers you can trust.",
    "Cloud Accounting",
    site.images.cloud,
    [
      "Chart of accounts configured for your specific reporting needs.",
      "Bank feed connection, reconciliation rules, and automation setup.",
      "Team training so Xero is used correctly and consistently from day one."
    ],
    "A Xero setup that earns its subscription every month",
    "Many businesses use Xero but only get a basic ledger from it. We configure the chart of accounts, connect bank feeds, set up useful reporting views and train your team, so Xero supports management decisions as well as compliance."
  ),
  service(
    "/xero-cloud-accounting-experts/",
    "Xero Cloud Accounting Experts",
    "Cloud accounting, reporting and training for modern teams.",
    "Cloud Accounting",
    site.images.cloud,
    [
      "Xero chart of accounts and categories configured for your business.",
      "Bank feeds, rules, and automated reconciliation set up correctly.",
      "Staff training and ongoing support to maintain data quality."
    ],
    "Xero configured and working the way your business does",
    "We set up and optimise Xero for your specific reporting and compliance needs, connect the right apps, and make sure your team is trained to use it correctly. Good configuration at the start prevents months of reconciliation issues later."
  ),
  service(
    "/quickbooks/",
    "Quickbooks",
    "Quickbooks support for setup, clean-up, training and reporting.",
    "Cloud Accounting",
    site.images.cloud,
    [
      "Initial setup and chart of accounts tailored to your business.",
      "Historical data clean-up and reconciliation of existing records.",
      "Training for internal staff and ongoing support when issues arise."
    ],
    "QuickBooks configured to fit the way you actually work",
    "We set up, clean up and optimise QuickBooks for your business, whether you need straightforward bookkeeping, job costing or management reporting. Training helps your team use it correctly from the start, and ongoing support keeps data issues under control."
  ),
  service(
    "/accounts/",
    "Accounts",
    "Year-end accounts prepared carefully, explained clearly and filed on time.",
    "Accounts",
    site.images.finance,
    [
      "Statutory accounts prepared under FRS 102 or FRS 105 as appropriate.",
      "Corporation tax computation and CT600 filed alongside the accounts.",
      "Companies House and HMRC deadlines monitored and met without last-minute pressure."
    ],
    "Year-end accounts that do more than satisfy a filing obligation",
    "Statutory accounts are a legal requirement, but they should still be useful. We prepare accurate year-end accounts, explain the key numbers, identify planning points for the year ahead and manage Companies House and HMRC deadlines without a last-minute rush."
  ),
  service(
    "/expert-tax-advice-in-hampshire-west-sussex/",
    "Expert Tax Advice",
    "Personal and business tax guidance shaped around your plans.",
    "Tax",
    site.images.finance,
    [
      "Joined-up advice that looks at personal and business tax positions together.",
      "Proactive planning before year-end and before any major transaction.",
      "Straightforward explanations so every decision is understood before it is made."
    ],
    "Tax advice that works before the deadline, not after it",
    "Good tax advice reduces risk and prevents surprises. We review your full position across personal and business structures, identify where planning can improve the outcome and make sure decisions are made with the complete picture in view."
  ),
  service(
    "/business-tax/",
    "Business Tax",
    "Tax compliance and planning for companies, partnerships and growing groups.",
    "Tax",
    site.images.finance,
    [
      "Corporation tax computation, CT600 preparation and HMRC filing.",
      "R&D tax credit and capital allowance reviews across the business.",
      "Group structure and inter-company transaction planning advice."
    ],
    "Tax compliance and planning that work together",
    "Corporation tax, partnerships and growing business groups each bring their own compliance requirements and planning opportunities. We handle filings accurately, identify available reliefs, including R&D credits and capital allowances, and plan ahead rather than repeating the same position each year."
  ),
  service(
    "/capital-gains-tax-advice/",
    "Capital Gains Tax Advice",
    "Plan disposals, investments and property sales before tax becomes a surprise.",
    "Tax",
    site.images.city,
    [
      "Pre-transaction planning for business sales, asset disposals, and property.",
      "Business Asset Disposal Relief and other relief eligibility review.",
      "Capital gains calculation and reporting through Self Assessment."
    ],
    "Plan the disposal before the numbers are fixed",
    "Capital gains tax planning starts long before a sale completes. We advise on timing, structure and available reliefs, including Business Asset Disposal Relief and principal private residence exemption, so you understand the likely tax position before decisions are final."
  ),
  service(
    "/inheritance-tax-2/",
    "Inheritance Tax",
    "Thoughtful estate planning for families, owners and trustees.",
    "Tax",
    site.images.office,
    [
      "Estate valuation and current inheritance tax exposure reviewed clearly.",
      "Business Property Relief and Agricultural Property Relief analysis.",
      "Gifting strategy, trust use, and coordination with solicitors where needed."
    ],
    "Estate planning that protects what you have built",
    "Inheritance tax is avoidable or significantly reducible in many situations with the right planning. We review your estate, explain available exemptions and reliefs, and work with your wider advisers to structure assets in a way that reflects your wishes while reducing the exposure your estate would otherwise face."
  ),
  service(
    "/making-tax-digital/",
    "Making Tax Digital",
    "Digital record keeping and reporting workflows that stay compliant.",
    "Tax",
    site.images.cloud,
    [
      "MTD-compatible software selected, configured, and connected to your bank.",
      "Quarterly update preparation and HMRC submission each period.",
      "Record-keeping workflow set up to produce clean digital data throughout the year."
    ],
    "MTD compliance built into the way you already work",
    "Making Tax Digital changes how records are kept and how HMRC receives information. We help choose the right software, configure it properly and manage quarterly submissions, so MTD becomes part of your normal workflow rather than another task added at the end."
  ),
  service(
    "/personal-tax/",
    "Personal Tax",
    "Self-assessment, property income and personal planning with less friction.",
    "Tax",
    site.images.finance,
    [
      "Self Assessment return preparation, review and HMRC filing.",
      "Rental income, investment income and employment benefit reporting.",
      "Proactive planning for payments on account and year-end tax position."
    ],
    "Personal tax handled carefully and planned in advance",
    "Self Assessment, employment income, property, investments, and pension arrangements all interact in ways that affect your overall tax position. We prepare accurate returns, identify legitimate savings, manage the HMRC relationship, and make sure payment deadlines are never a surprise."
  ),
  service(
    "/taxinvestigationservice/",
    "Tax Investigation Service",
    "Calm, organised support if HMRC asks difficult questions.",
    "Tax",
    site.images.audit,
    [
      "HMRC correspondence managed professionally on your behalf.",
      "Evidence gathering, record organisation, and clear timeline preparation.",
      "Negotiated settlement support where the facts support a better outcome."
    ],
    "Calm, prepared support when HMRC opens an enquiry",
    "An HMRC enquiry does not mean you have done anything wrong, but it does require a well-organised response. We manage the correspondence, gather the evidence and work methodically to close the investigation while protecting your position and your time."
  ),
  service(
    "/vat-advice/",
    "VAT Advice",
    "Practical VAT advice for property, ecommerce, hospitality and growing groups.",
    "Tax",
    "/assets/VAT.webp",
    [
      "VAT registration, scheme selection, and threshold monitoring.",
      "Partial exemption calculations and property VAT treatment.",
      "VAT return preparation, MTD submission, and HMRC liaison."
    ],
    "VAT that is neither overpaid nor overlooked",
    "VAT rules differ across property, hospitality, ecommerce and professional services. We advise on registration timing, scheme selection, partial exemption and group structures, then prepare accurate returns when they fall due."
  ),
  service(
    "/audit/",
    "Audit & Assurance",
    "Independent, expert-led assurance that goes beyond basic compliance.",
    "Audits & Assurance",
    site.images.audit,
    [
      "Risk-based audit planning focused on what matters most to the business.",
      "Senior-led fieldwork with clear, direct communication at every stage.",
      "Practical management letter findings that help improve the business."
    ],
    "Audit that adds value beyond the opinion",
    "An audit should do more than satisfy a legal or regulatory requirement. Our risk-based approach focuses on the areas that matter most, delivers practical observations alongside the formal opinion, and gives boards, lenders, and investors well-founded confidence in the numbers."
  ),
  service(
    "/sra-solicitors-accounts-rules-examinations/",
    "SRA Solicitors Accounts Rules Examinations",
    "Specialist assurance for legal practices handling client money.",
    "Audits & Assurance",
    site.images.audit,
    [
      "Annual accountant's report prepared under the SRA Solicitors Accounts Rules.",
      "Client ledger examination and reconciliation review.",
      "Practical guidance on procedural improvements where the Rules require it."
    ],
    "Specialist assurance for legal practices handling client money",
    "SRA Solicitors Accounts Rules require an annual accountant's report when thresholds are met. We understand the Rules in detail, conduct the examination efficiently and produce a clear report with recommendations where procedures need to improve."
  ),
  service(
    "/statutory-audits/",
    "Statutory Audits",
    "Efficient statutory audit work for SMEs, charities and regulated entities.",
    "Audits & Assurance",
    site.images.audit,
    [
      "Audit planning early in the cycle to avoid last-minute pressure.",
      "Clear milestones and direct senior contact from start to sign-off.",
      "Accounts and audit opinion delivered together to meet all deadlines."
    ],
    "Statutory audit delivered efficiently and on time",
    "We plan early, communicate clearly throughout fieldwork, and produce the audit opinion and accounts together so Companies House and HMRC deadlines are met without pressure. Senior involvement from scoping to sign-off means quality is consistent and there are no gaps from handoffs to junior staff."
  ),
  service(
    "/tailored-assurance-services/",
    "Tailored Assurance Services",
    "Independent checks designed around stakeholder confidence and business risk.",
    "Audits & Assurance",
    site.images.audit,
    [
      "Agreed-upon procedures designed around specific stakeholder questions.",
      "Independent reviews for boards, lenders, and investors.",
      "Comfort reports scoped to answer exactly what is being asked."
    ],
    "Independent assurance designed around what your stakeholders need to know",
    "Not every assurance need requires a full statutory audit. We design agreed-upon procedures, independent reviews and comfort reports for boards, lenders and investors, with a scope that answers the questions they need resolved."
  ),
  service(
    "/bookkeeping/",
    "Bookkeeping and Management Accounts",
    "Reliable bookkeeping and management reporting that keeps decisions current.",
    "Operations",
    site.images.laptop,
    [
      "Monthly bank reconciliation and consistent transaction categorisation.",
      "Management accounts produced to a regular timetable each period.",
      "Cloud software maintained correctly so the data is always reliable."
    ],
    "Clean records and management accounts you can actually use",
    "Useful management accounts start with reliable bookkeeping. We maintain records monthly, reconcile bank feeds, categorise transactions consistently and produce management accounts that reflect the period while the information is still current."
  ),
  service(
    "/payroll/",
    "Payroll Services",
    "Accurate, confidential payroll support for teams of all shapes.",
    "Operations",
    site.images.payroll,
    [
      "Monthly payroll processing, payslip production and RTI submissions to HMRC.",
      "P60, P45, and P11D preparation and filing within deadlines.",
      "Auto-enrolment administration and pension contribution management."
    ],
    "Payroll handled accurately, every pay run",
    "Late or incorrect payroll damages trust and creates avoidable compliance risk. We manage the full payroll cycle, including processing, RTI submissions, payslips, P60s, statutory payments and auto-enrolment, so your team is paid correctly and on time."
  ),
  service(
    "/company-secretarial/",
    "Company Secretarial",
    "Company filings, records and governance support kept tidy.",
    "Operations",
    site.images.office,
    [
      "Annual confirmation statement preparation and Companies House filing.",
      "Director and shareholder changes registered accurately and promptly.",
      "Statutory registers maintained and available when auditors or lenders need them."
    ],
    "Company records and filings kept in good order",
    "Director changes, confirmation statements, registered office updates, and share allotments all carry legal obligations and filing deadlines. We manage the company secretarial function so your statutory records are always accurate, filings are made on time, and Companies House has no reason to send a reminder."
  ),
  service(
    "/probate-services/",
    "Probate",
    "Sensitive probate support delivered with patience and technical care.",
    "Specialist Services",
    site.images.office,
    [
      "Estate asset valuation and inheritance tax calculation for probate.",
      "Income and capital gains tax returns for the period of administration.",
      "Estate accounts prepared for executors and beneficiaries."
    ],
    "Patient, careful support through a difficult process",
    "Estate administration involves valuations, tax calculations, creditor management and asset distribution, often at a difficult time for families. We handle the financial and accounting elements carefully, helping executors keep the estate moving forward."
  ),
  service(
    "/probate/",
    "Probate",
    "Practical estate administration support for families and executors.",
    "Specialist Services",
    site.images.office,
    [
      "Estate valuation and inheritance tax calculation prepared accurately.",
      "Tax returns for the administration period handled on behalf of the estate.",
      "Estate accounts prepared for executors and beneficiaries in plain English."
    ],
    "Steady support for executors and families",
    "Probate can bring financial complexity at an already difficult time. We work through estate accounts, tax obligations and reporting requirements carefully, keeping executors informed so the next steps are always understood."
  ),
  service(
    "/agricultural-accounting-and-horticultural-business-accounting-2/",
    "Agricultural & Horticultural Business Accounting",
    "Accounting and tax support for land, growers and rural enterprises.",
    "Specialist Sectors",
    site.images.heroGrowth,
    [
      "Annual accounts with correct treatment of farming stocks, livestock, and assets.",
      "Agricultural Property Relief and succession planning advice.",
      "Grant income, single farm payment, and subsidy accounting handled accurately."
    ],
    "Accounting that understands the rhythm of land and seasons",
    "Agricultural and horticultural businesses face unique timing, subsidy, valuation, and succession questions that general accountancy does not always address. We combine technical accuracy with genuine sector knowledge to give growers, farmers, and landowners advice that connects to how their business actually works."
  ),
  service(
    "/agricultural-and-horticultural-businesses/",
    "Agriculture and Horticulture",
    "Sector-aware advice for farming, horticulture and food supply businesses.",
    "Specialist Sectors",
    site.images.heroGrowth,
    [
      "Farm accounts, management information, and year-end compliance.",
      "Diversification, land development, and tax structure advice.",
      "Succession and estate planning for farming families and landowners."
    ],
    "Sector-aware accounting for farming and rural enterprise",
    "From farm payment schemes and stock valuations to complex land structures and multi-generational succession planning, agricultural businesses need advisers who understand the sector as well as the numbers. We provide compliance, tax planning, and advisory support grounded in practical knowledge of rural business."
  ),
  service(
    "/charities-independent-examination-and-audit-services/",
    "Charities Independent Examination and Audit Services",
    "Assurance and accounts support for trustees and not-for-profit teams.",
    "Specialist Sectors",
    site.images.audit,
    [
      "Independent examination or audit conducted under Charity Commission requirements.",
      "Trustees' report review and statutory accounts preparation.",
      "Practical governance and financial controls guidance for charity boards."
    ],
    "Assurance that supports trustees and builds donor confidence",
    "Charities have specific reporting obligations under the Charities Act, and trustees carry personal responsibility for the accounts they approve. We provide independent examinations and audits that meet regulatory requirements, give trustees clear comfort on their obligations, and help funders and donors trust the numbers."
  ),
  service(
    "/solicitors-accounts-rules-audits/",
    "Solicitors Accounts Rules Audits",
    "Legal sector assurance, clear reporting and practical compliance advice.",
    "Specialist Sectors",
    site.images.audit,
    [
      "Client account examination against the current SRA Solicitors Accounts Rules.",
      "Accountant's report prepared and submitted within the required timeframe.",
      "Clear written feedback on any areas requiring procedural improvement."
    ],
    "Specialist compliance for regulated legal practices",
    "Client money requires careful handling, clear records and an annual examination that can be relied upon. We examine law firm accounts against the SRA Solicitors Accounts Rules, report accurately and advise on procedural improvements without unnecessary disruption."
  ),
  service(
    "/business-advisory/",
    "Business Advisory",
    "Commercial advice that links strategy, profit, cash and reporting.",
    "Business Growth",
    site.images.planning,
    [
      "Performance review linking financial data to commercial decisions.",
      "Management information improvement so reporting drives action.",
      "Sounding board support for owners and boards facing key decisions."
    ],
    "Commercial advice that makes the numbers work harder",
    "Good advisory work turns financial data into better decisions. We work alongside management teams to interpret performance, challenge assumptions and identify the commercial levers that move the business forward."
  ),
  service(
    "/tax/",
    "Tax",
    "Clear tax compliance and planning for individuals and organisations.",
    "Tax",
    "/assets/tax-compliance-planning.webp",
    [
      "Compliance filings for individuals, companies, trusts, and partnerships.",
      "Tax planning that looks at personal and business positions together.",
      "Proactive advice before major transactions and before year-end."
    ],
    "Tax compliance and planning that work together",
    "Managing tax across personal and business structures requires joined-up advice rather than separate filings. We combine compliance accuracy with forward planning to reduce your exposure, meet every deadline, and avoid the surprises that come from looking at the tax position too late or too narrowly."
  )
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
  { title: "Newsletter", path: "/newsletter/", copy: "Monthly tax reminders and practical finance notes." },
  { title: "Videos and podcasts", path: "/videos-podcasts/", copy: "Short advisory explainers in a media-library format." },
  { title: "Blog", path: "/blog/", copy: "Articles on tax, payroll, cloud accounting and business planning." },
  { title: "News and reports", path: "/resources-2/news-and-reports/", copy: "Finance updates and planning notes in one place." },
  { title: "Latest tax calendar", path: "/resources-2/tax-calendar/", copy: "Key filing dates and reminders for the year ahead." },
  { title: "Calculators", path: "/resources-2/calculators/", copy: "Quick calculators for VAT, loans, payroll and profit checks." },
  { title: "Factsheets", path: "/resources-2/factsheet-2/", copy: "Short explainers for common finance and tax topics." },
  { title: "Tax rates and allowances", path: "/resources-2/tax-rates-and-allowances/", copy: "Current reference rates for common UK tax areas." },
  { title: "Downloadable forms", path: "/resources-2/downloadable-forms/", copy: "Checklists and onboarding forms for common requests." }
];

export const newsArticles = [
  {
    path: "/resources-2/news-and-reports/planning-ahead-for-payroll-benefits/",
    title: "Planning ahead for payroll benefits: what UK employers need to know before July",
    subtitle: "P11D deadline is 6 July 2026. We explain what UK employers must report, how payrolling benefits works, and what changes from April 2027.",
    metaTitle: "Payroll Benefits & P11D Reporting 2026 | Crestfield Advisory",
    metaDescription: "P11D deadline is 6 July 2026. We explain what UK employers must report, how payrolling benefits works, and what changes from April 2027. Crestfield Advisory.",
    type: "news-article",
    image: site.images.finance,
    content: {
      date: "May 2026",
      readTime: "5 min",
      category: "Payroll",
      summary: "P11D reporting, Class 1A NIC, taxable benefits and the April 2027 move to mandatory payrolling of benefits in kind.",
      intro: "The P11D deadline falls on 6 July every year, yet payroll teams across the UK still spend the final weeks of June scrambling for records that should have been in one place since April. Private medical invoices turn up in HR inboxes. Company car details sit with a director who has not yet replied. Mileage claims are somewhere in the accounting software, waiting to be reconciled.",
      html: `
        <div style="margin-top:38px">
          <p>None of this is unusual. But it is avoidable, and with mandatory payrolling of benefits arriving in April 2027, the administrative stakes are about to get higher.</p>
        </div>

        <div style="margin-top:38px">
          <h2>What counts as a taxable benefit in kind?</h2>
          <p>A benefit in kind is any non cash item an employer provides to a director or employee that has a taxable value. Common examples include:</p>
          <ul class="check-list">
            <li>Company cars available for private use.</li>
            <li>Private medical or dental insurance.</li>
            <li>Interest free or low interest loans above £10,000.</li>
            <li>Employer provided accommodation.</li>
            <li>Relocation expenses above the £8,000 exempt threshold.</li>
            <li>Non cash vouchers and subscriptions.</li>
            <li>Assets made available for personal use.</li>
          </ul>
          <p>Not everything needs to go on a P11D. Trivial benefits under £50, genuine business expenses reimbursed on a like for like basis and items already taxed through payroll are excluded. The challenge for most owner managed businesses is knowing which category each item falls into and having the records to prove it.</p>
        </div>

        <div style="margin-top:38px">
          <h2>The P11D deadline for 2025/26</h2>
          <p>For the tax year ended 5 April 2026, employers face three separate obligations:</p>
          <div class="feature-grid" style="margin-top:24px">
            <article class="info-card">
              <p class="eyebrow">6 July 2026</p>
              <h3>P11D and P11D(b)</h3>
              <p>P11D forms for each employee who received taxable benefits, plus the P11D(b) employer declaration, must be submitted to HMRC online. Employees must also receive their own copy by this date.</p>
            </article>
            <article class="info-card">
              <p class="eyebrow">19 July 2026</p>
              <h3>Cheque payment</h3>
              <p>Class 1A National Insurance is due by cheque where the employer does not pay electronically.</p>
            </article>
            <article class="info-card">
              <p class="eyebrow">22 July 2026</p>
              <h3>Electronic payment</h3>
              <p>Class 1A National Insurance is due electronically. The Class 1A rate for 2025/26 is 15% of the taxable value of benefits.</p>
            </article>
          </div>
          <div class="info-card" style="margin-top:24px;border-left:5px solid var(--copper)">
            <p>Missing the P11D(b) filing triggers an automatic penalty of £100 per 50 employees for each month the form is late. Individual P11D penalties can reach £300 per form. HMRC does not send reminders.</p>
          </div>
        </div>

        <div style="margin-top:38px">
          <h3>What payrolled actually means and the one thing it does not remove</h3>
          <p>Employers who voluntarily payrolled their benefits during 2025/26 still need to file the P11D(b) employer declaration by 6 July 2026. Individual P11D forms for employees are not required where benefits were payrolled, but the employer declaration remains.</p>
          <p>Class 1A National Insurance is still due on the same July timeline regardless of whether benefits were payrolled or reported on P11D.</p>
        </div>

        <div style="margin-top:38px">
          <h2>Building a complete benefit record before the deadline</h2>
          <p>The practical problem most employers face is not knowing whether all benefits have been captured. A single list, built before the year closes, is the most reliable way to find out.</p>
          <p>For each item provided during 2025/26, the record should confirm:</p>
          <ul class="check-list">
            <li>Whether the benefit was taxed through payroll or needs a P11D.</li>
            <li>The dates it was available.</li>
            <li>Any employee contribution that reduces the taxable value.</li>
            <li>The supplier cost or HMRC approved method of calculation.</li>
            <li>Supporting documentation such as an invoice, contract or benefit statement.</li>
          </ul>
          <p>Where records are missing, the employer must estimate and correct later. That creates additional admin, possible interest and the kind of HMRC query that takes weeks to resolve.</p>
        </div>

        <div class="info-card" style="margin-top:38px;background:var(--paper);border-left:5px solid var(--copper)">
          <p class="eyebrow">April 2027 change</p>
          <h2>The April 2027 change and why preparation matters now</h2>
          <p>From 6 April 2027, payrolling of benefits in kind becomes mandatory for most employers. Individual P11D forms will no longer be required. Income tax and Class 1A National Insurance on benefits will instead be collected in real time through payroll each pay period.</p>
          <p>Two benefit types remain outside the mandatory scope initially: employment related loans and accommodation. P11D reporting will continue to be available for these, reflecting the complexity involved, particularly around the HMRC Official Rate of Interest, which can change during the year.</p>
        </div>

        <div style="margin-top:38px">
          <p>The 2025/26 tax year is, in practical terms, the final full year of traditional P11D reporting for most employers. That makes the period between now and July 2026 the right time to:</p>
          <ul class="check-list">
            <li>Review whether your payroll software is ready for mandatory payrolling from April 2027.</li>
            <li>Identify which benefits will need to move to real time reporting and which will stay on P11D.</li>
            <li>Brief employees on the change, especially where monthly tax collection may affect take home pay.</li>
          </ul>
        </div>

        <div style="margin-top:38px">
          <h2>How Crestfield Advisory supports payroll year end</h2>
          <p>Our <a href="/payroll/">Payroll Services</a> team works with owner managed businesses throughout the year to keep benefit records current, prepare P11D and P11D(b) filings before the July deadline and manage the transition to payrolling of benefits in kind.</p>
          <p>If your benefit records are incomplete or you are unsure how to handle a specific item, such as a director loan, a company car part way through the year or a benefit provided for only part of the tax year, we can review the position and confirm the correct treatment before forms are prepared.</p>
        </div>
      `,
      service: {
        label: "Payroll Services",
        path: "/payroll/",
        copy: "We can review benefits, payroll records and year-end reporting so the employer has a clear process before deadlines arrive."
      },
      faq: [
        {
          question: "What is the P11D deadline for 2026?",
          answer: "The P11D and P11D(b) filing deadline for the 2025/26 tax year is 6 July 2026. Class 1A National Insurance is due by 22 July 2026 for electronic payments."
        },
        {
          question: "Do I still need to file a P11D if I have payrolled my benefits?",
          answer: "Individual P11D forms for employees are not required where benefits were payrolled during the year. However, the P11D(b) employer declaration must still be filed by 6 July 2026."
        },
        {
          question: "What happens if I miss the P11D deadline?",
          answer: "HMRC charges automatic penalties of up to £300 per late P11D form and £100 per 50 employees for each month the P11D(b) is filed late. Interest also applies to any late Class 1A NIC payment."
        },
        {
          question: "When does P11D reporting end?",
          answer: "From 6 April 2027, payrolling of benefits in kind becomes mandatory for most employers and individual P11D forms will no longer be required. Employment related loans and accommodation will continue to allow P11D reporting beyond that date."
        },
        {
          question: "Can I voluntarily payroll benefits before April 2027?",
          answer: "Voluntary payrolling for 2026/27 required HMRC registration before 5 April 2026. If your business has not registered, the earliest you can begin payrolling most benefits is April 2027."
        }
      ],
      sources: [
        { label: "GOV.UK: Expenses and benefits for employers", url: "https://www.gov.uk/employer-reporting-expenses-benefits/reporting-and-paying" },
        { label: "GOV.UK: Payroll annual reporting and tasks", url: "https://www.gov.uk/payroll-annual-reporting" },
        { label: "Grant Thornton: Employment tax reporting in 2026", url: "https://www.grantthornton.co.uk/insights/employment-tax-reporting/" },
        { label: "Bishop Fleming: Employment tax year end 2025/26", url: "https://www.bishopfleming.co.uk/insights/employment-tax-year-end-202526-key-reporting-requirements" }
      ]
    }
  },
  {
    path: "/resources-2/news-and-reports/mileage-rates-and-business-travel-records/",
    title: "HMRC mileage rates 2026: what employers need to update now",
    subtitle: "HMRC raised the approved mileage rate to 55p in May 2026. Here is what UK employers must update, what records to keep and how to avoid common compliance errors.",
    metaTitle: "HMRC Mileage Rates 2026: 55p Rule & Business Travel Records",
    metaDescription: "HMRC raised the approved mileage rate to 55p in May 2026. Here's what UK employers must update, what records to keep and how to avoid the most common compliance errors.",
    type: "news-article",
    image: site.images.city,
    content: {
      date: "May 2026",
      readTime: "6 min",
      category: "Business records",
      summary: "The new 55p AMAP rate, Advisory Fuel Rates, mileage logs and the records employers need for business travel claims.",
      intro: "On 21 May 2026, Chancellor Rachel Reeves announced the first increase to the approved mileage rate in 15 years. The change took effect from 6 April 2026, which means any mileage paid since the start of the tax year needs to be reviewed against the new figure.",
      html: `
        <div style="margin-top:38px">
          <p>If your expenses policy still shows 45p, it is out of date. If April and May claims have already been processed at the old rate, employees may have been underpaid and some payrolls may need correction.</p>
        </div>

        <div style="margin-top:38px">
          <h2>The new AMAP rate: 55p per mile from 6 April 2026</h2>
          <p>The Approved Mileage Allowance Payment rate for cars and vans used by employees for business travel has increased from 45p to 55p per mile for the first 10,000 business miles in the tax year. The rate above 10,000 miles stays at 25p per mile. All other rates are unchanged: motorcycles remain at 24p per mile and bicycles at 20p per mile.</p>
          <div class="info-card" style="margin-top:24px;border-left:5px solid var(--sage)">
            <p class="eyebrow">New AMAP rate</p>
            <h2>55p per mile</h2>
            <p>The uplift applies to the whole 2026/27 tax year from 6 April 2026, regardless of when the announcement was made.</p>
          </div>
          <h3>What to do about claims already processed at 45p</h3>
          <p>Because the announcement came on 21 May with a backdated April start, most employers have already paid April and May claims at 45p. Employers can pay the shortfall for any business miles since 6 April 2026, without income tax or NIC being payable on the additional amount. Employees paid below 55p per mile can claim Mileage Allowance Relief on the shortfall through Self Assessment or form P87.</p>
          <div class="info-card" style="margin-top:24px;border-left:5px solid var(--copper)">
            <p>The practical priority is straightforward: update the expenses policy, recalculate any April and May underpayments and pay the balance.</p>
          </div>
        </div>

        <div style="margin-top:38px">
          <h2>AMAP versus Advisory Fuel Rates: two systems that must not be confused</h2>
          <p>HMRC operates two separate mileage frameworks. Applying the wrong one is one of the most frequently identified issues during employer compliance reviews.</p>
          <div class="feature-grid" style="margin-top:24px">
            <article class="info-card">
              <p class="eyebrow">AMAP rates</p>
              <h3>Employee's own vehicle</h3>
              <ul class="check-list">
                <li>Car or van, first 10,000 miles: 55p.</li>
                <li>Car or van, above 10,000 miles: 25p.</li>
                <li>Motorcycle: 24p.</li>
                <li>Bicycle: 20p.</li>
                <li>Passenger, per business passenger: 5p.</li>
              </ul>
            </article>
            <article class="info-card">
              <p class="eyebrow">Advisory Fuel Rates</p>
              <h3>Company cars from 1 June 2026</h3>
              <ul class="check-list">
                <li>Petrol: 14p, 17p or 26p depending on engine size.</li>
                <li>Diesel: 15p, 17p or 23p depending on engine size.</li>
                <li>Electric home charging: 7p.</li>
                <li>Electric public charging: 15p.</li>
              </ul>
            </article>
            <article class="info-card">
              <p class="eyebrow">Why it matters</p>
              <h3>Do not mix the systems</h3>
              <p>AMAP applies when an employee uses their own vehicle and the employer reimburses per mile. Advisory Fuel Rates apply when an employee uses a company owned vehicle for business travel or repays private fuel used in a company car. Hybrid vehicles use the petrol or diesel AFR based on engine type.</p>
            </article>
          </div>
          <p>A VAT registered employer can reclaim input VAT on the fuel element of mileage payments. This requires fuel receipts and a calculation using Advisory Fuel Rates, not the AMAP figure.</p>
        </div>

        <div style="margin-top:38px">
          <h2>What a compliant mileage log needs to contain</h2>
          <p>HMRC does not prescribe a specific format, but the following fields are required to withstand review. A log missing any of them is not defensible.</p>
          <div class="timeline">
            <article class="timeline-item"><strong>Date</strong><span>Shows which tax year and rate applies.</span></article>
            <article class="timeline-item"><strong>Locations</strong><span>Start and end points help verify the mileage and separate business travel from ordinary commuting.</span></article>
            <article class="timeline-item"><strong>Business purpose</strong><span>Name the client, site or meeting. A vague note such as client visit is not enough.</span></article>
            <article class="timeline-item"><strong>Miles claimed</strong><span>This is the figure used to calculate reimbursement.</span></article>
            <article class="timeline-item"><strong>Vehicle used</strong><span>Confirms whether AMAP or Advisory Fuel Rates apply.</span></article>
            <article class="timeline-item"><strong>Cumulative miles</strong><span>Shows when the 10,000 mile threshold is crossed.</span></article>
            <article class="timeline-item"><strong>Approval</strong><span>Provides an audit trail before payment is made.</span></article>
            <article class="timeline-item"><strong>Passenger names</strong><span>Needed if the employer pays the 5p per passenger rate.</span></article>
            <article class="timeline-item"><strong>Fuel receipts</strong><span>Needed where fuel costs are reimbursed separately or VAT recovery is being claimed.</span></article>
          </div>
          <p>Records should be kept for at least 22 months after the end of the tax year. Digital logs are acceptable provided they are contemporaneous. A spreadsheet completed from memory will not satisfy HMRC if the entries cannot be independently verified.</p>
          <div class="info-card" style="margin-top:24px;border-left:5px solid var(--sage)">
            <p>Travel between home and a permanent workplace is ordinary commuting and does not qualify. Travel to a temporary workplace can qualify, but the conditions should be documented each time.</p>
          </div>
        </div>

        <div style="margin-top:38px">
          <h2>Three process gaps that create audit risk</h2>
          <p>Most mileage problems stem from process failures rather than deliberate errors. The three that come up most often are:</p>
          <ul class="check-list">
            <li><strong>No threshold tracking.</strong> When an employee's mileage crosses 10,000 miles in a tax year, the AMAP rate drops from 55p to 25p. Without a running total per employee, overpayments continue at the higher rate.</li>
            <li><strong>AMAP and AFR mixed in one policy.</strong> A single expenses form that does not clearly separate company car journeys from personal vehicle journeys leads to incorrect reimbursements and confused records.</li>
            <li><strong>Stale rates carried forward.</strong> Advisory Fuel Rates change quarterly. Applying the same rate throughout the year can create overpayments, reportable taxable benefits or employee relief claims.</li>
          </ul>
        </div>

        <div style="margin-top:38px">
          <h2>Advisory Fuel Rates need a quarterly review</h2>
          <p>Unlike AMAP rates, Advisory Fuel Rates are reviewed and updated by HMRC every quarter, usually on 1 March, 1 June, 1 September and 1 December. The previous rates remain valid for one month after new rates take effect, giving employers a short transition window.</p>
          <p>From 1 June 2026, HMRC has continued its dual rate approach for electric vehicles, with separate reimbursement rates for home charging and public charging. Employers with electric company car drivers should record how the vehicle was charged during the journey period so the correct rate can be applied.</p>
          <p>The practical step is simple: update the expenses system at the start of each quarter and give one person clear responsibility for checking the new HMRC figures.</p>
        </div>

        <div style="margin-top:38px">
          <h2>How Crestfield Advisory can help</h2>
          <p>Keeping mileage records accurate is part of the broader bookkeeping discipline that makes year end reporting straightforward. Our <a href="/bookkeeping/">Bookkeeping and Management Accounts</a> team can help set up an expenses process that captures the right information at source, separates AMAP and AFR claims correctly, and keeps records in a format that supports both tax reporting and VAT recovery.</p>
          <p>For businesses with more complex travel arrangements, including mixed fleets, frequent high mileage drivers or directors claiming significant business mileage, a review through our <a href="/business-tax/">Business Tax</a> service can confirm that the current approach is compliant and identify any historical corrections needed.</p>
        </div>

        <div style="margin-top:38px">
          <h2>Reviewing the process going forward</h2>
          <ul class="check-list">
            <li>Has the expenses policy been updated to show 55p as the AMAP rate for 2026/27?</li>
            <li>Have April and May 2026 claims paid at 45p been reviewed?</li>
            <li>Does the claim form clearly separate company car journeys from personal vehicle journeys?</li>
            <li>Is there a running total of business miles per employee?</li>
            <li>Are Advisory Fuel Rates reviewed each quarter?</li>
            <li>Are claims approved before payment, with the approver name on the record?</li>
            <li>Are fuel receipts retained where VAT recovery on the fuel element is being claimed?</li>
          </ul>
        </div>
      `,
      service: {
        label: "Bookkeeping & Management Accounts",
        path: "/bookkeeping/",
        copy: "We can help set up expense records, monthly bookkeeping checks and reporting routines so travel costs are easier to reconcile."
      },
      faq: [
        {
          question: "What is the HMRC mileage rate for 2026/27?",
          answer: "From 6 April 2026, the approved mileage rate for cars and vans is 55p per mile for the first 10,000 business miles in the tax year and 25p per mile above that."
        },
        {
          question: "When did the mileage rate change to 55p?",
          answer: "The change was announced on 21 May 2026 and backdated to apply from 6 April 2026 for the whole of the 2026/27 tax year."
        },
        {
          question: "What if I have already paid employees at 45p since April 2026?",
          answer: "Employers can pay the 10p per mile shortfall for journeys since 6 April 2026 without tax or NIC on the additional amount. Payroll corrections may be needed where tax has already been deducted."
        },
        {
          question: "What are the Advisory Fuel Rates from June 2026?",
          answer: "For company cars from 1 June 2026, petrol rates are 14p, 17p or 26p, diesel rates are 15p, 17p or 23p and electric company car rates are 7p for home charging and 15p for public charging."
        },
        {
          question: "What is the difference between AMAP and Advisory Fuel Rates?",
          answer: "AMAP rates apply when an employee uses their own vehicle and the employer reimburses per mile. Advisory Fuel Rates apply only to company owned vehicles."
        },
        {
          question: "How long must mileage records be kept?",
          answer: "Mileage records should be kept for at least 22 months after the end of the tax year in which the journey was made."
        }
      ],
      sources: [
        { label: "GOV.UK: Business travel mileage for employees' own vehicles", url: "https://www.gov.uk/expenses-and-benefits-business-travel-mileage/rules-for-tax" },
        { label: "GOV.UK: Advisory fuel rates", url: "https://www.gov.uk/guidance/advisory-fuel-rates" },
        { label: "Association of Taxation Technicians: AMAP rate increase confirmed", url: "https://www.att.org.uk/technical/news/increased-hmrc-approved-mileage-rates-business-travel-announced" },
        { label: "Azets: Mileage rate increase to 55p announced", url: "https://www.azets.com/en-uk/resources/mileage-rate-increase-to-55p-per-mile-announced" },
        { label: "Fleet Point: Advisory Fuel Rates from 1 June 2026", url: "https://www.fleetpoint.org/government-policy/hmrc-confirms-new-advisory-fuel-rates-from-1-june-2026/" }
      ]
    }
  },
  {
    path: "/resources-2/news-and-reports/key-dates-tax-calendar-2026/",
    title: "Key dates: tax calendar 2026",
    subtitle: "The tax and reporting deadlines owner-managed businesses should plan around.",
    type: "news-article",
    image: site.images.planning,
    content: {
      date: "April 2026",
      category: "Tax deadlines",
      summary: "A planning article covering Self Assessment, VAT, payroll year-end and company filing reminders.",
      intro: "Tax deadlines are not just compliance dates. They affect cash flow, staff workload and the quality of the records available for decision-making. A useful calendar turns the main dates into planning checkpoints rather than last-minute tasks.",
      sections: [
        {
          heading: "Separate filing dates from preparation dates",
          body: "The official deadline is the latest point at which a return or payment must reach the authority. Internal preparation should happen earlier. Businesses should set their own cut-off dates for bookkeeping, payroll changes, VAT evidence and director approval."
        },
        {
          heading: "Build recurring reviews into the year",
          body: "Self Assessment, PAYE, VAT, P60s, benefits reporting and company accounts all need different records. Reviewing the calendar quarterly helps the business spot missing information before a deadline blocks progress."
        },
        {
          heading: "Use the calendar for cash planning",
          body: "Payment deadlines should be included in the cash forecast, especially where Corporation Tax, VAT or Self Assessment payments fall close to supplier payments, payroll or seasonal stock purchases. A calendar is most useful when it is connected to the forecast."
        }
      ],
      service: {
        label: "Business Tax",
        path: "/business-tax/",
        copy: "We can help turn filing dates into a practical tax calendar with reminders, review points and cash planning prompts."
      },
      sources: [
        { label: "GOV.UK: Self Assessment deadlines", url: "https://www.gov.uk/self-assessment-tax-return-deadlines/" },
        { label: "GOV.UK: Sending a VAT Return", url: "https://www.gov.uk/submit-vat-return" },
        { label: "GOV.UK: Payroll annual reporting and tasks", url: "https://www.gov.uk/payroll-annual-reporting" }
      ]
    }
  },
  {
    path: "/resources-2/news-and-reports/preparing-accounts-before-a-funding-conversation/",
    title: "Preparing accounts before a funding conversation: what lenders and investors actually look at",
    subtitle: "Most funding conversations stall not because the business is unsuitable, but because the numbers are not ready when the conversation starts.",
    metaTitle: "Preparing Accounts for Funding | Crestfield Advisory",
    metaDescription: "A practical guide to the accounts, forecasts and financial pack UK lenders and investors expect before a funding conversation.",
    type: "news-article",
    image: site.images.audit,
    content: {
      date: "April 2026",
      readTime: "7 min",
      category: "Corporate Finance",
      summary: "A lender ready funding pack, current management accounts, cash flow forecast and the questions that usually come up in due diligence.",
      intro: "The businesses that move quickly through due diligence are rarely the ones with the best performance. They are the ones whose financial information is organised, current and easy to interrogate. Preparation before the meeting determines the pace of everything that follows.",
      html: `
        <div style="margin-top:38px">
          <h2>What a lender reads first: the core pack</h2>
          <p>The starting point for most commercial lenders and equity investors is a core pack of financial information. For owner managed businesses, this typically means:</p>
          <ul class="check-list">
            <li>Statutory accounts for the last two completed financial years.</li>
            <li>Management accounts for the current year to date, no older than 60 to 90 days.</li>
            <li>Three to six months of business bank statements.</li>
            <li>A summary of existing borrowing facilities and their terms.</li>
            <li>A clear statement of how much is needed, what it will be used for and how it will be repaid.</li>
          </ul>
          <p>What catches businesses out is not knowing in advance that all of this will be needed at the same time, or discovering that management accounts have not been produced monthly and now need to be reconstructed from bookkeeping records.</p>
        </div>

        <div style="margin-top:38px">
          <h2>Why statutory accounts are not enough on their own</h2>
          <p>Filed accounts answer the compliance question. They do not answer the commercial one. A set of accounts prepared for Companies House and HMRC is designed to meet statutory requirements. It does not explain margin movement, the condition of the debtor book, the working capital cycle or the relationship between cash and reported profit.</p>
          <div class="info-card" style="margin-top:24px;border-left:5px solid var(--sage)">
            <p>Management accounts fill that gap. Lenders and investors need to see that the business is well run, financially disciplined and in control of its numbers.</p>
          </div>
          <p>A business that has not been producing management accounts monthly will spend weeks on a retrospective exercise. The results are usually less credible than accounts produced routinely throughout the year.</p>
        </div>

        <div style="margin-top:38px">
          <h2>Building a credible forecast</h2>
          <p>A forecast matters because it tells the funder what the money is expected to do. A projection that simply moves recent revenue upward without explanation does not answer the question a lender will ask: how confident are you, and what supports this?</p>
          <div class="feature-grid" style="margin-top:24px">
            <article class="info-card">
              <p class="eyebrow">Sales assumptions</p>
              <h3>Evidence behind growth</h3>
              <p>Named pipeline, signed contracts, a demonstrable run rate or documented market comparables. Growth without evidence is not an assumption a lender can underwrite.</p>
            </article>
            <article class="info-card">
              <p class="eyebrow">Cost assumptions</p>
              <h3>The real cost base</h3>
              <p>The staffing plan, supplier agreements, new finance cost of the requested facility and the tax liability that improved trading will generate.</p>
            </article>
            <article class="info-card">
              <p class="eyebrow">Cash timing</p>
              <h3>The missing question</h3>
              <p>A profit and loss forecast without a cash flow statement leaves the most important question unanswered. Profitable businesses can run out of cash when VAT, Corporation Tax and debtor collections are not modelled on the correct timing.</p>
            </article>
          </div>
        </div>

        <div style="margin-top:38px">
          <h2>Questions that arise in every due diligence</h2>
          <p>Every lender working through a set of accounts will form a list of questions. Businesses that identify those questions in advance and prepare clear answers move through the process faster.</p>
          <div class="timeline">
            <article class="timeline-item"><strong>Margin movement</strong><span>If gross or net margins have shifted, the funder will ask why. An unprepared answer implies the directors do not track their own margins closely enough.</span></article>
            <article class="timeline-item"><strong>Customer concentration</strong><span>Where a significant proportion of revenue comes from a small number of customers, lenders will ask about contracts, renewal risk and what happens if a key customer reduces spend.</span></article>
            <article class="timeline-item"><strong>Overdue debts</strong><span>An aged debtor report showing invoices 90 or 120 days past due needs explanation. The lender needs to know whether the debtor book is real and collectable.</span></article>
            <article class="timeline-item"><strong>Director loans</strong><span>Director loan accounts, inter company transactions and related party balances are scrutinised closely and should be documented before the meeting.</span></article>
            <article class="timeline-item"><strong>Tax arrears</strong><span>Outstanding PAYE, VAT or Corporation Tax indicates HMRC has an existing claim on the business. Time to Pay arrangements need to be disclosed and documented early.</span></article>
          </div>
        </div>

        <div style="margin-top:38px">
          <h2>What a complete funding pack contains</h2>
          <p>A funding pack is not the same as sending last year's filed accounts. It is a purposeful document designed to answer the questions a lender will ask before committing to a process.</p>
          <div class="feature-grid" style="margin-top:24px">
            <article class="info-card"><p class="eyebrow">01</p><h3>Statutory accounts</h3><p>Two years of statutory accounts with commentary on significant movements.</p></article>
            <article class="info-card"><p class="eyebrow">02</p><h3>Management accounts</h3><p>Current year figures with a short variance note and current trading commentary.</p></article>
            <article class="info-card"><p class="eyebrow">03</p><h3>Working capital</h3><p>Aged debtor and aged creditor reports that explain what is collectible and what falls due.</p></article>
            <article class="info-card"><p class="eyebrow">04</p><h3>Bank statements</h3><p>Three to six months of business bank statements to evidence cash movement.</p></article>
            <article class="info-card"><p class="eyebrow">05</p><h3>Cash forecast</h3><p>A 12 month forecast with named assumptions, repayment costs and tax timing.</p></article>
            <article class="info-card"><p class="eyebrow">06</p><h3>Funding proposal</h3><p>The amount requested, purpose, proposed term and expected repayment route.</p></article>
          </div>
          <div class="info-card" style="margin-top:24px;border-left:5px solid var(--copper)">
            <p>For businesses approaching equity investors or seeking growth finance, the pack is usually more detailed and may include KPI history, unit economics and a three to five year financial model.</p>
          </div>
        </div>

        <div class="info-card" style="margin-top:38px;background:var(--paper);border-left:5px solid var(--copper)">
          <p class="eyebrow">Funding support</p>
          <h3>Prepare before the first conversation</h3>
          <p>Our <a href="/corporate-finance/">Corporate Finance</a> team prepares funding packs, forecast models and management information for owner managed businesses approaching lenders or investors. Where the pack depends on current reporting, our <a href="/bookkeeping/">Bookkeeping and Management Accounts</a> service can help bring the numbers into a reliable monthly format.</p>
        </div>
      `,
      service: {
        label: "Corporate Finance",
        path: "/corporate-finance/",
        copy: "We can prepare funding packs, forecast models and management information for lender or investor conversations."
      },
      faq: [
        {
          question: "What accounts do I need before approaching a business lender?",
          answer: "Most lenders want at least two years of statutory accounts, current year management accounts no older than 60 to 90 days, three to six months of business bank statements and a cash flow forecast."
        },
        {
          question: "What do investors look for in management accounts?",
          answer: "Investors look for a monthly profit and loss, balance sheet, cash movement summary and evidence of how the business tracks performance against budget. Commentary explaining unusual movements is as important as the numbers themselves."
        },
        {
          question: "Will a director loan account affect my funding application?",
          answer: "A director loan account in debit will be scrutinised but does not automatically prevent funding. It needs to be explained clearly and the terms documented before the lender asks."
        },
        {
          question: "Can I approach a lender if I have a Time to Pay arrangement with HMRC?",
          answer: "Yes, but the arrangement needs to be disclosed and documented. Lenders will want to understand the amount, repayment schedule and whether payments are current."
        },
        {
          question: "How detailed should a cash flow forecast be for a lender?",
          answer: "A lender ready cash flow forecast should cover at least 12 months, show receipts and payments on realistic timing, include the cost of the facility being requested and be supported by named assumptions."
        }
      ],
      sources: [
        { label: "GOV.UK: Prepare annual accounts for a private limited company", url: "https://www.gov.uk/annual-accounts" },
        { label: "GOV.UK: Accounts and tax returns for private limited companies", url: "https://www.gov.uk/prepare-file-annual-accounts-for-limited-company/overview" },
        { label: "Finspire Finance: UK Business Loans 2026", url: "https://finspirefinance.com/uk-business-loans-2026-finance-options-brokers-rules/" }
      ]
    }
  },
  {
    path: "/resources-2/news-and-reports/month-end-reporting-pack-checklist/",
    title: "Management accounts: the month end reporting pack that actually helps directors make decisions",
    subtitle: "Annual accounts tell you what happened last year. Management accounts tell you what is happening now. That distinction matters when there is still time to act.",
    metaTitle: "Management Accounts and Month End Reporting Packs | Crestfield",
    metaDescription: "What UK directors should include in monthly management accounts, from profit and loss to cash movement, aged debtors and commentary.",
    type: "news-article",
    image: site.images.laptop,
    content: {
      date: "March 2026",
      readTime: "7 min",
      category: "Bookkeeping",
      summary: "A practical guide to the monthly management pack that helps directors review profit, cash, debtors, creditors and performance while there is still time to act.",
      intro: "The purpose of a monthly management pack is to give directors current financial visibility with enough time to act on it. A pack that arrives three weeks after month end, contains unexplained movements and repeats the bookkeeping totals without interpretation does not serve that purpose.",
      html: `
        <div style="margin-top:38px">
          <h2>What a useful management pack contains</h2>
          <div class="info-card" style="margin-top:20px;border-left:5px solid var(--sage)">
            <p>Best practice is to produce management accounts within 10 to 15 working days of month end, ideally targeting working day 5 to 10 where the close process is well established.</p>
          </div>
          <div class="feature-grid" style="margin-top:24px">
            <article class="info-card"><h3>Profit and loss</h3><p>Current month and year to date, with variance against budget or prior period. Margin percentages should sit alongside absolute figures.</p></article>
            <article class="info-card"><h3>Balance sheet</h3><p>Net assets, cash, debtor and creditor balances and any borrowing. Reviewing profit and loss without the balance sheet is seeing half the picture.</p></article>
            <article class="info-card"><h3>Cash movement</h3><p>Opening balance, receipts, payments and closing balance, plus a 30 to 90 day forward look where possible.</p></article>
            <article class="info-card"><h3>Aged debtors</h3><p>Which invoices are outstanding, how long they have been outstanding and whether any are in dispute.</p></article>
            <article class="info-card"><h3>Aged creditors</h3><p>What the business owes, to whom and when it falls due. Delayed creditor payments should show up here early.</p></article>
            <article class="info-card"><h3>Variance commentary</h3><p>One paragraph per material movement. Numbers without explanation force every director to reach their own conclusion independently.</p></article>
          </div>
        </div>

        <div style="margin-top:38px">
          <h2>Commentary is the part most packs get wrong</h2>
          <div class="feature-grid" style="margin-top:24px">
            <article class="info-card" style="border-left:5px solid var(--copper)">
              <p class="eyebrow">Vague</p>
              <p>Revenue was below budget due to market conditions.</p>
            </article>
            <article class="info-card" style="border-left:5px solid var(--sage)">
              <p class="eyebrow">Useful</p>
              <p>Revenue was £80,000 below budget, driven by the delayed start of the XYZ contract which now begins in April. The Q2 pipeline is £320,000 above the equivalent position last year.</p>
            </article>
          </div>
          <p>Commentary should answer three questions for each significant movement: what changed, why it matters and what is being done about it. Directors should be able to review a well written pack in 15 to 30 minutes.</p>
        </div>

        <div style="margin-top:38px">
          <h2>What makes the close process repeatable</h2>
          <p>A reliable management pack depends on a consistent close process. When steps change each month, or different team members complete them in different orders, the results vary and variation creates distrust.</p>
          <ul class="check-list">
            <li><strong>Bank reconciliation.</strong> Every bank account should be fully reconciled to statement before the pack is produced.</li>
            <li><strong>Supplier cut off.</strong> Invoices received but not yet processed need to be posted or accrued so the profit and loss reflects costs incurred in the period.</li>
            <li><strong>Payroll journals.</strong> Payroll cost should match the payroll run including employer NIC and pension contributions.</li>
            <li><strong>VAT coding review.</strong> Common coding errors are much easier to correct before the return is filed than after.</li>
            <li><strong>Accruals and prepayments.</strong> Rent, insurance, subscriptions and professional fees should be accrued or deferred consistently each month.</li>
            <li><strong>Related party balances.</strong> Director loan accounts and inter company transactions should be reconciled and documented before the pack is closed.</li>
          </ul>
          <div class="info-card" style="margin-top:24px;border-left:5px solid var(--sage)">
            <p>A pack that looks identical month after month, even when the numbers change significantly, signals a process that is under control.</p>
          </div>
        </div>

        <div style="margin-top:38px">
          <h2>When management accounts become essential rather than optional</h2>
          <div class="feature-grid" style="margin-top:24px">
            <article class="info-card">
              <h3>Approaching a lender or investor</h3>
              <p>Most commercial lenders and all equity investors want at least six months of management accounts.</p>
            </article>
            <article class="info-card">
              <h3>Bank covenants in place</h3>
              <p>Facilities with financial covenants need to be monitored monthly. A covenant breach should not first appear in the annual accounts.</p>
            </article>
            <article class="info-card">
              <h3>Cash is tightening</h3>
              <p>Monthly accounts with a rolling 90 day cash forecast provide enough lead time to act before the position becomes critical.</p>
            </article>
            <article class="info-card">
              <h3>Preparing for a sale</h3>
              <p>Whether preparing for a sale, management buyout or restructuring, the quality of management accounts affects the confidence a buyer places in the numbers.</p>
            </article>
          </div>
        </div>

        <div class="info-card" style="margin-top:38px;background:var(--paper);border-left:5px solid var(--copper)">
          <p class="eyebrow">Monthly reporting support</p>
          <h3>Build a reporting pack that directors will actually use</h3>
          <p>Our <a href="/bookkeeping/">Bookkeeping and Management Accounts</a> team designs and maintains monthly reporting packs for owner managed businesses, from straightforward profit and loss packs through to commentary led board reports with cash forecasting and KPI dashboards. Where reporting supports a funding process, we work alongside our <a href="/corporate-finance/">Corporate Finance</a> team.</p>
        </div>
      `,
      service: {
        label: "Bookkeeping & Management Accounts",
        path: "/bookkeeping/",
        copy: "We can design and maintain monthly reporting packs that give directors clearer numbers and faster insight."
      },
      faq: [
        {
          question: "What should be included in monthly management accounts?",
          answer: "A core pack includes profit and loss, balance sheet, cash movement summary, aged debtors, aged creditors and written commentary explaining material movements. KPI dashboards can be added where relevant."
        },
        {
          question: "How quickly should management accounts be produced after month end?",
          answer: "Best practice is within 10 to 15 working days. For a well run close process, working day 5 to 10 is achievable."
        },
        {
          question: "Are management accounts a legal requirement in the UK?",
          answer: "No. There is no legal requirement to produce management accounts. They are commonly required or expected by commercial lenders, equity investors and businesses with financial covenants."
        },
        {
          question: "What is the difference between management accounts and statutory accounts?",
          answer: "Statutory accounts are prepared annually and filed at Companies House. Management accounts are prepared for internal use, produced as often as needed and designed to support decision making."
        },
        {
          question: "How do management accounts help with funding applications?",
          answer: "Lenders and investors use management accounts to understand current trading, working capital and the quality of financial controls. Consistent monthly accounts show the business has reliable numbers."
        }
      ],
      sources: [
        { label: "GOV.UK: Prepare annual accounts for a private limited company", url: "https://www.gov.uk/annual-accounts" },
        { label: "FD Capital: Management Accounts UK Business Guide", url: "https://www.fdcapital.co.uk/management-accounts/" },
        { label: "BlackpeakCFO: UK Management Accounts Template 2026", url: "https://blackpeakcfo.com/blog/management-accounts-uk-template/" }
      ]
    }
  },
  {
    path: "/resources-2/news-and-reports/vat-review-points-before-submitting-a-return/",
    title: "VAT return review checklist: the checks that prevent costly errors before you file",
    subtitle: "The number your accounting software generates is only as reliable as the coding decisions behind every transaction in that period.",
    metaTitle: "VAT Return Review Checklist | Crestfield Advisory",
    metaDescription: "A practical VAT return review checklist covering disclosure thresholds, coding errors, reverse charge, partial exemption and penalty points.",
    type: "news-article",
    image: "/assets/VAT.webp",
    content: {
      date: "March 2026",
      readTime: "6 min",
      category: "VAT",
      summary: "A VAT review checklist covering disclosure thresholds, coding errors, partial exemption, reverse charge treatment and final checks before filing.",
      intro: "HMRC's own data shows a VAT gap of approximately 6.2% for 2024/25, equivalent to £11.4 billion. Most of that gap comes from error and failure to take reasonable care, not deliberate evasion. With Making Tax Digital now giving HMRC greater visibility into VAT data, inconsistencies are more easily flagged than they were under the old paper based system.",
      html: `
        <div style="margin-top:38px">
          <h2>When does a VAT error require separate disclosure?</h2>
          <div class="feature-grid" style="margin-top:24px">
            <article class="info-card"><p class="eyebrow">Below £10,000</p><h3>Correct on next return</h3><p>Can usually be corrected on the next VAT return without separate disclosure, subject to the detailed HMRC rules.</p></article>
            <article class="info-card"><p class="eyebrow">£10,000 to £50,000</p><h3>Check Box 6</h3><p>Separate disclosure is required where the error is over 1% of the Box 6 figure for the current period.</p></article>
            <article class="info-card"><p class="eyebrow">Over £50,000</p><h3>Disclose separately</h3><p>Mandatory separate disclosure is required regardless of the Box 6 percentage.</p></article>
          </div>
          <div class="info-card" style="margin-top:24px;border-left:5px solid var(--copper)">
            <p>Any deliberate error must always be separately disclosed. Penalties for careless errors can range from 0% to 30% of the underpaid VAT, and deliberate errors can attract penalties up to 100%.</p>
          </div>
        </div>

        <div style="margin-top:38px">
          <h2>Start with the VAT transaction report, not the box totals</h2>
          <p>The box totals in your accounting software are a summary. The errors are in the detail. Running a full VAT transaction report for the period and reviewing it line by line is where the problems are found.</p>
          <div class="timeline">
            <article class="timeline-item"><strong>Zero rated income coded as exempt</strong><span>Both produce zero output tax, so the totals can look identical. The difference matters for partial exemption calculations and input tax recovery.</span></article>
            <article class="timeline-item"><strong>Input tax on blocked costs</strong><span>Business entertainment for non employees, motor cars available for private use and certain gifts above £50 per person per year are blocked from input tax recovery.</span></article>
            <article class="timeline-item"><strong>Reverse charge not applied</strong><span>Overseas services often require the recipient to self account for UK VAT. This creates both an output tax entry and an input tax entry.</span></article>
            <article class="timeline-item"><strong>Import VAT without C79 certificate</strong><span>Input tax on import VAT can only be reclaimed where the business holds a C79 certificate issued by HMRC.</span></article>
            <article class="timeline-item"><strong>Construction reverse charge errors</strong><span>For construction businesses, the domestic reverse charge on qualifying services between subcontractors and contractors remains an active compliance risk.</span></article>
          </div>
        </div>

        <div style="margin-top:38px">
          <h2>Transactions that need more than an invoice</h2>
          <div class="feature-grid" style="margin-top:24px">
            <article class="info-card"><h3>Property and land</h3><p>VAT treatment depends on whether the option to tax has been exercised and on the specific nature of the property transaction.</p></article>
            <article class="info-card"><h3>Overseas services</h3><p>The nature of the service, location of the supplier and business status of the customer all affect the treatment.</p></article>
            <article class="info-card"><h3>High value assets</h3><p>Capital expenditure above certain thresholds may fall under the Capital Goods Scheme and require annual adjustments.</p></article>
            <article class="info-card"><h3>Staff expenses</h3><p>Input VAT on employee expenses requires a valid VAT receipt, not just a credit card statement.</p></article>
          </div>
        </div>

        <div style="margin-top:38px">
          <h2>Partial exemption: the area most likely to be wrong without anyone noticing</h2>
          <p>Partial exemption applies where a business makes both taxable and exempt supplies. Common triggers include property rental income from non opted properties, financial services commission, grant income and certain insurance or educational activities alongside ordinary trading.</p>
          <div class="info-card" style="margin-top:24px;border-left:5px solid var(--copper)">
            <p>Common problems include failing to identify exempt supplies, using the wrong income figures, missing the annual adjustment and not retaining working papers showing how the recovery percentage was calculated.</p>
          </div>
          <p>The calculation must be performed for each quarter and an annual adjustment must be completed using the full year figures. Where a business has a special method agreed with HMRC, it must be followed consistently.</p>
        </div>

        <div style="margin-top:38px">
          <h2>Penalty points: how the current system works</h2>
          <div class="feature-grid" style="margin-top:24px">
            <article class="info-card"><p class="eyebrow">Monthly filers</p><h3>5 points</h3><p>The threshold for a £200 penalty.</p></article>
            <article class="info-card"><p class="eyebrow">Quarterly filers</p><h3>4 points</h3><p>The threshold for a £200 penalty.</p></article>
            <article class="info-card"><p class="eyebrow">Annual filers</p><h3>2 points</h3><p>The threshold for a £200 penalty.</p></article>
          </div>
          <p>Points do not reset automatically. The business must submit a series of returns on time and have no outstanding returns from the relevant look back period before points are cleared. Late payment penalties are separate from late submission penalty points.</p>
        </div>

        <div style="margin-top:38px">
          <h2>Pre submission review checklist</h2>
          <ul class="check-list">
            <li>VAT transaction report reviewed for unexpected codes or unusual patterns.</li>
            <li>Input tax on blocked costs checked and removed.</li>
            <li>Reverse charge entries verified for overseas services purchased.</li>
            <li>Construction reverse charge applied correctly to qualifying transactions.</li>
            <li>Import VAT claimed only where C79 certificates are held.</li>
            <li>Partial exemption calculation completed and annual adjustment flagged where applicable.</li>
            <li>Flat rate scheme percentage confirmed as current and correct.</li>
            <li>Supporting documents available for high value or unusual items.</li>
            <li>Return reconciled to bookkeeping records before submission.</li>
            <li>Sign off recorded before filing.</li>
          </ul>
        </div>

        <div class="info-card" style="margin-top:38px;background:var(--paper);border-left:5px solid var(--copper)">
          <p class="eyebrow">VAT support</p>
          <h3>Review the return before it is filed</h3>
          <p>Our <a href="/vat-advice/">VAT Advice</a> team reviews VAT coding, return preparation and unusual transactions before submission. For partial exemption, reverse charge or complex property arrangements, we can confirm the correct treatment before the return is filed. Our <a href="/bookkeeping/">Bookkeeping and Management Accounts</a> team can also strengthen the records behind each return.</p>
        </div>
      `,
      service: {
        label: "VAT Advice",
        path: "/vat-advice/",
        copy: "We can review VAT coding, return preparation and unusual transactions before a return is submitted."
      },
      faq: [
        {
          question: "What are the most common VAT return errors UK businesses make?",
          answer: "Common errors include miscoding zero rated income as exempt, reclaiming input VAT on blocked costs, failing to apply the reverse charge on overseas services, missing the C79 requirement for import VAT and making mistakes in partial exemption calculations."
        },
        {
          question: "When does a VAT error need to be separately disclosed to HMRC?",
          answer: "Separate disclosure is required where the net value of previous return errors is over £50,000, or where it is between £10,000 and £50,000 and exceeds 1% of Box 6 for the current period. Deliberate errors must always be separately disclosed."
        },
        {
          question: "What is the domestic reverse charge for construction services?",
          answer: "The domestic reverse charge requires the recipient of qualifying construction services to account for VAT, rather than the supplier charging it. It applies in the supply chain between VAT registered contractors and subcontractors."
        },
        {
          question: "What is partial exemption and who does it affect?",
          answer: "Partial exemption applies where a business makes both taxable and exempt supplies. It can affect businesses with property rental income, financial services commission, grant income or certain insurance or educational activities alongside ordinary trading."
        },
        {
          question: "What are the VAT penalty point thresholds in 2026?",
          answer: "Quarterly filers reach the threshold at four points, monthly filers at five and annual filers at two. Once the threshold is reached, a £200 fixed penalty applies and further late submissions can trigger further penalties."
        }
      ],
      sources: [
        { label: "GOV.UK: Sending a VAT Return", url: "https://www.gov.uk/submit-vat-return" },
        { label: "GOV.UK: VAT domestic reverse charge for building and construction services", url: "https://www.gov.uk/guidance/vat-domestic-reverse-charge-for-building-and-construction-services" },
        { label: "Johnston Carmichael: VAT penalties and error correction", url: "https://johnstoncarmichael.com/insights/vat-penalties-correct-vat-errors" },
        { label: "DUA: VAT risk areas HMRC is targeting in 2026", url: "https://www.dua.co.uk/vat-risk-areas-hmrc-is-targeting-in-2026/" }
      ]
    }
  }
];

export const calculatorPages = [
  {
    title: "VAT Calculator",
    path: "/resources-2/calculators/vat-calculator/",
    calc: "vat",
    subtitle: "Add or extract VAT using standard, reduced, zero or custom rates."
  },
  {
    title: "Payslip Calculator",
    path: "/resources-2/calculators/payslip-calculator/",
    calc: "payroll",
    subtitle: "Estimate monthly take-home pay using 2026/27 PAYE and employee National Insurance."
  },
  {
    title: "Fuel Costs Calculator",
    path: "/resources-2/calculators/fuel-costs-calculator/",
    calc: "fuel-cost",
    subtitle: "Estimate trip, monthly and annual fuel spend from mileage, MPG and pump price."
  },
  {
    title: "CIS Tax Deduction Calculator",
    path: "/resources-2/calculators/cis-tax-deduction-calculator/",
    calc: "cis",
    subtitle: "Calculate CIS deductions on labour, excluding materials and VAT."
  },
  {
    title: "Startup Calculator",
    path: "/resources-2/calculators/startup-calculator/",
    calc: "startup",
    subtitle: "Plan a launch reserve using setup costs, monthly spend, revenue and contingency."
  },
  {
    title: "Savings Calculator",
    path: "/resources-2/calculators/savings-calculator/",
    calc: "savings",
    subtitle: "Project savings with monthly contributions and compound interest."
  },
  {
    title: "Millionaire Calculator",
    path: "/resources-2/calculators/millionaire-calculator/",
    calc: "millionaire",
    subtitle: "Estimate how long it could take to reach a savings target."
  },
  {
    title: "APR Calculator",
    path: "/resources-2/calculators/apr-calculator/",
    calc: "apr",
    subtitle: "Estimate an effective APR from loan cash received, fees, term and monthly repayments."
  },
  {
    title: "Loan Calculator",
    path: "/resources-2/calculators/loan-calculator/",
    calc: "loan",
    subtitle: "Calculate repayments, interest and total cost for a fixed-rate loan."
  },
  {
    title: "Gross Profit Calculator",
    path: "/resources-2/calculators/gross-profit-calculator/",
    calc: "gross",
    subtitle: "Work out gross profit, margin and mark-up from sales and direct costs."
  },
  {
    title: "Dividend Tax Calculator",
    path: "/resources-2/calculators/dividend-tax-calculator/",
    calc: "dividend",
    subtitle: "Estimate UK dividend tax using the dividend allowance and current rate bands."
  },
  {
    title: "Mortgage Calculator",
    path: "/resources-2/calculators/mortgage-calculator/",
    calc: "mortgage",
    subtitle: "Estimate repayment mortgage costs from property price, deposit, rate and term."
  },
  {
    title: "More Profit Calculator",
    path: "/resources-2/calculators/more-profit-calculator/",
    calc: "more-profit",
    subtitle: "Model the effect of revenue growth or margin improvement on annual profit."
  },
  {
    title: "Land and Buildings Transaction Tax",
    path: "/resources-2/calculators/land-and-buildings-transaction-tax/",
    calc: "lbtt",
    subtitle: "Estimate Scottish residential LBTT, including first-time buyer and additional dwelling options."
  },
  {
    title: "Company Car and Fuel Benefit in Kind",
    path: "/resources-2/calculators/company-car-and-fuel-benefit-in-kind/",
    calc: "company-car",
    subtitle: "Estimate company car and private fuel benefit using 2026/27 appropriate percentages."
  },
  {
    title: "Stamp Duty Land Tax Calculator",
    path: "/resources-2/calculators/stamp-duty-land-tax-calculator/",
    calc: "sdlt",
    subtitle: "Estimate residential SDLT in England or Northern Ireland, including first-time buyer and surcharge cases."
  }
].map((page) => ({
  ...page,
  type: "calculator"
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
    image: site.images.planning
  },
  {
    path: "/reviews/",
    title: "The Highest Standards & Excellent Service",
    subtitle: "Client-style feedback presented for this portfolio build.",
    type: "reviews",
    image: site.images.meeting
  },
  {
    path: "/contact-us/",
    title: "Contact Us",
    subtitle: "Tell us what you need and we will route your enquiry to the right person.",
    type: "contact",
    image: site.images.city
  },
  {
    path: "/newsletter/",
    title: "Sign up for our newsletter",
    subtitle: "Monthly finance notes, tax reminders and practical planning updates.",
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
    subtitle: "Useful tools, checklists and knowledge pages.",
    type: "resources",
    image: site.images.laptop
  },
  {
    path: "/resources-2/news-and-reports/",
    title: "News and Reports",
    subtitle: "Tax, payroll and business updates for owners and finance teams.",
    type: "resource-list",
    image: site.images.city
  },
  {
    path: "/resources-2/tax-calendar/",
    title: "Tax Calendar",
    subtitle: "Key filing dates and planning reminders.",
    type: "calendar",
    image: site.images.finance
  },
  {
    path: "/resources-2/calculators/",
    title: "Calculators",
    subtitle: "Calculators for quick business and tax estimates.",
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
    subtitle: "A reference page for common allowances and thresholds.",
    type: "rates",
    image: site.images.audit
  },
  {
    path: "/resources-2/downloadable-forms/",
    title: "Downloadable Forms",
    subtitle: "Onboarding, payroll and planning documents.",
    type: "forms",
    image: site.images.office
  },
  {
    path: "/job-application-form/",
    title: "Job Application Form",
    subtitle: "An application form for the careers section.",
    type: "application",
    image: site.images.career
  },
  {
    path: "/new-client-information-request/",
    title: "New Client Information Request",
    subtitle: "An onboarding form for prospective clients.",
    type: "client-form",
    image: site.images.office
  },
  {
    path: "/payroll-starter-checklist/",
    title: "Payroll Starter Checklist",
    subtitle: "Details needed before adding a new employee to payroll.",
    type: "resource-form",
    image: site.images.office
  },
  {
    path: "/bookkeeping-handover-checklist/",
    title: "Bookkeeping Handover Checklist",
    subtitle: "Records and access details needed before monthly bookkeeping begins.",
    type: "resource-form",
    image: site.images.laptop
  },
  {
    path: "/vat-records-checklist/",
    title: "VAT Records Checklist",
    subtitle: "Documents and reports to prepare before a VAT return review.",
    type: "resource-form",
    image: site.images.audit
  },
  {
    path: "/probate-information-request/",
    title: "Probate Information Request",
    subtitle: "Initial estate information needed before probate accounts or tax work can begin.",
    type: "resource-form",
    image: site.images.office
  },
  {
    path: "/thank-you/",
    title: "Thank You",
    subtitle: "Your enquiry has been received.",
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
    subtitle: "A straightforward guide page for estate administration.",
    type: "guide",
    image: site.images.office
  },
  {
    path: "/probate-valuation/",
    title: "Probate Valuation",
    subtitle: "A service explainer for valuation and estate reporting.",
    type: "guide",
    image: site.images.office
  },
  {
    path: "/driving-instructions/",
    title: "Driving Instructions",
    subtitle: "Travel information for office visits.",
    type: "directions",
    image: site.images.city
  },
  {
    path: "/complaints_procedure/",
    title: "Complaints Procedure",
    subtitle: "How concerns are reviewed and responded to.",
    type: "legal",
    image: site.images.office
  },
  {
    path: "/privacy/",
    title: "Privacy Policy",
    subtitle: "Privacy notice for the portfolio website.",
    type: "legal",
    image: site.images.office
  },
  {
    path: "/cookies/",
    title: "Cookie Policy",
    subtitle: "Cookie information for the portfolio website.",
    type: "legal",
    image: site.images.office
  },
  {
    path: "/disclaimer/",
    title: "Disclaimer",
    subtitle: "Important limitations for the portfolio website.",
    type: "legal",
    image: site.images.office
  },
  {
    path: "/2025-probate-diversity-survey-results/",
    title: "Diversity Results",
    subtitle: "A diversity survey summary page.",
    type: "legal",
    image: site.images.team
  },
  {
    path: "/logins/",
    title: "Logins",
    subtitle: "Client portal and cloud accounting login links.",
    type: "logins-overview",
    image: site.images.cloud
  },
  {
    path: "/client-portal/",
    title: "Client Portal",
    subtitle: "A portfolio portal entry page.",
    type: "portal",
    image: site.images.laptop
  },
  {
    path: "/xero-login/",
    title: "Xero Login",
    subtitle: "A cloud accounting login reference page.",
    type: "portal",
    image: site.images.cloud
  },
  {
    path: "/dext-login/",
    title: "Dext Login",
    subtitle: "A document capture login reference page.",
    type: "portal",
    image: site.images.cloud
  },
  {
    path: "/quickbooks-online-login/",
    title: "Quickbooks Online Login",
    subtitle: "A QuickBooks Online login reference page.",
    type: "portal",
    image: site.images.cloud
  },
  {
    path: "/mhmm-menu-layout-loader/",
    title: "Menu Layout Loader",
    subtitle: "A preserved route for menu compatibility.",
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
          body: "You must keep digital records, send four quarterly updates to HMRC each year and submit a final declaration at the close of each tax year. The quarterly updates are new obligations. They do not replace anything currently required by Self Assessment. The final declaration replaces the annual return. Late or missing quarterly updates generate penalty points under the new points-based penalty system."
        },
        {
          heading: "Your April 2026 preparation checklist",
          body: "Choose and set up MTD-compatible software such as Xero, QuickBooks or FreeAgent. Connect your bank feeds to the software. Separate business and personal transactions from the start of the 2026 to 2027 tax year. Agree a quarterly review and submission workflow with your accountant. Check that your bookkeeping produces categorised data throughout the year, rather than being reconstructed in January."
        },
        {
          heading: "What happens if you miss a quarterly update?",
          body: "HMRC introduced a points-based penalty system alongside MTD. Each missed quarterly update adds one point. Quarterly filers receive a £200 penalty once they reach four points. Further missed submissions add further penalties. Points reset after a period of sustained compliance, but it is better not to accumulate them in the first place."
        },
        {
          heading: "How Crestfield Advisory can help",
          body: "Crestfield Advisory can review your current records, recommend compatible software, set up your first quarterly workflow and handle submissions alongside your annual tax position. If you are in scope from April 2026, preparation should start well before the deadline."
        }
      ],
      sources: [
        { label: "GOV.UK: Making Tax Digital for Income Tax collection", url: "https://www.gov.uk/government/collections/making-tax-digital-for-income-tax" },
        { label: "HMRC: Check if you need to use MTD for Income Tax", url: "https://www.gov.uk/guidance/check-if-youre-eligible-for-making-tax-digital-for-income-tax" },
        { label: "GOV.UK: Late submission penalty reform", url: "https://www.gov.uk/government/publications/income-tax-self-assessment-and-partnerships-late-submission-and-late-payment-penalties" }
      ]
    }
  }
];

export const locationPages = [
  ...offices.map((office) => ({
    ...office,
    title: `${office.name} Accountants`,
    subtitle: `${office.name} office page with portfolio address and contact details.`,
    type: "location",
    image: site.images.city
  })),
  {
    name: "Whiteley",
    path: "/whiteley-accountants/",
    phone: "01489 000 000",
    address: "Portfolio Suite 19, Parkway, Whiteley, PO15 0AA",
    title: "Whiteley Accountants",
    subtitle: "A duplicate preserved route for the Whiteley accountants page.",
    type: "location",
    image: site.images.city
  },
  {
    name: "Hampshire",
    path: "/hampshire-accountants/",
    phone: "020 0000 0000",
    address: "Portfolio regional service page, Hampshire",
    title: "Hampshire Accountants",
    subtitle: "Regional accountancy support for Hampshire businesses.",
    type: "location",
    image: site.images.city
  },
  {
    name: "Southampton",
    path: "/southampton-accountants/",
    phone: "020 0000 0000",
    address: "Portfolio regional service page, Southampton",
    title: "Southampton Accountants",
    subtitle: "Regional accountancy support for Southampton businesses.",
    type: "location",
    image: site.images.city
  },
  {
    name: "Portsmouth",
    path: "/portsmouth-accountants/",
    phone: "020 0000 0000",
    address: "Portfolio regional service page, Portsmouth",
    title: "Portsmouth Accountants",
    subtitle: "Regional accountancy support for Portsmouth businesses.",
    type: "location",
    image: site.images.city
  },
  {
    name: "Fareham",
    path: "/fareham-accountants/",
    phone: "020 0000 0000",
    address: "Portfolio regional service page, Fareham",
    title: "Fareham Accountants",
    subtitle: "Regional accountancy support for Fareham businesses.",
    type: "location",
    image: site.images.city
  }
];

export const pages = [
  { path: "/", title: "Chartered Accountants, Tax Planning & Business Advisers", type: "home", image: site.images.heroGrowth },
  ...standalonePages,
  ...newsArticles,
  ...servicePages,
  ...calculatorPages,
  ...blogCategories,
  ...locationPages
];
