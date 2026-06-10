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

const defaultProcess = [
  ["01", "Initial consultation", "We start with a call or meeting to understand your situation, goals and the specific outcomes you need from this engagement."],
  ["02", "Scope and plan", "We agree the deliverables, timeline and milestones before work begins, so both sides are clear on what is being done and by when."],
  ["03", "Deliver and review", "We complete the work, review the findings with you and confirm next steps or any ongoing arrangements."]
];

const serviceExtras = {
  "/profit-improvement/": {
    process: [
      ["01", "Numbers diagnostic", "We analyse your accounts, margin by product or service line, pricing structure and cash cycle to establish a clear baseline of where profit is currently being lost."],
      ["02", "Margin analysis and lever identification", "We pinpoint the specific areas where margin is compressed — below-market pricing, drifting cost lines, cash timing drag — and quantify the recoverable opportunity in each."],
      ["03", "Prioritised improvement plan", "We deliver a sequenced action plan with expected impact for each lever, so improvements are measured and sustainable rather than one-off cuts that reverse over time."]
    ],
    clientTypes: [
      ["01", "Owner-managed businesses", "Profitable but uncertain where the real margin sits. Costs have crept up and pricing has not kept pace with the market or competitors."],
      ["02", "Businesses preparing for sale", "Wanting to maximise EBITDA before a transaction. Every percentage point of margin improvement carries a valuation multiple."],
      ["03", "Businesses with declining margins", "Revenue is holding but profit is falling. The cause is not immediately obvious from the headline accounts alone."]
    ],
    testimonial: {
      quote: "We identified over £35,000 of recoverable margin in the first review. The pricing benchmarks alone changed how we approached every client renewal conversation.",
      attribution: "Client review — Manufacturing business, Hampshire"
    },
    faq: [
      { q: "How long does a profit improvement engagement take?", a: "Most engagements run over four to six weeks. We start with a diagnostic phase using your recent accounts and management information, move to analysis and then deliver recommendations. Straightforward businesses move faster; multi-site or multi-product businesses typically take longer to analyse properly." },
      { q: "What information do you need to get started?", a: "We usually begin with the last two or three years of statutory accounts, recent management accounts if available, your pricing schedule or rate card, and a cost breakdown by category. We can work with what you have and identify any gaps during the diagnostic phase." },
      { q: "Is this just cost cutting?", a: "No. Cost reduction is one lever but rarely the most impactful one. Pricing decisions, revenue mix, payment terms and cash cycle improvements typically deliver more sustainable gains. We look at the full margin picture before recommending anything." },
      { q: "Do you implement the changes or just advise?", a: "We produce detailed recommendations with enough supporting context for you to implement them internally, and we can support implementation directly if that is useful. The depth of ongoing involvement is agreed as part of the scope." }
    ]
  },
  "/strategic-business-planning/": {
    process: [
      ["01", "Goals and context session", "We start with a structured session covering your commercial objectives, current financial position, market context and the decisions the plan needs to support over the next one to three years."],
      ["02", "Financial model and scenario build", "We construct a working model from your actual business data, test key assumptions across multiple scenarios and build the forecasts into a format useful for management decisions and external audiences alike."],
      ["03", "Plan delivery and ongoing review", "We present the completed plan, walk through the key outputs and agree a review rhythm so the model stays current as conditions change and milestones are reached."]
    ],
    clientTypes: [
      ["01", "Growth-stage businesses", "Expanding into new markets, adding headcount or investing in infrastructure, needing a financial framework to guide the decisions involved."],
      ["02", "Businesses approaching a funding event", "Preparing for a bank conversation, investor round or management buy-out where a credible financial plan is a prerequisite."],
      ["03", "Management teams with unclear priorities", "Multiple opportunities, limited resources and no shared financial framework for evaluating which direction to commit capital and effort to."]
    ],
    testimonial: {
      quote: "The model was ready before the bank meeting, not after it. We walked in with scenario analysis that answered the lender's questions before they were asked.",
      attribution: "Client review — Technology business, West Sussex"
    },
    faq: [
      { q: "How detailed will the financial model be?", a: "The model is built from your actual revenue, cost and balance sheet data and produces monthly or quarterly forecasts across a three to five year horizon. We include at least three scenarios — base, upside and stress — and build in the key assumptions so they can be updated as conditions change." },
      { q: "How often should the plan be updated?", a: "We typically recommend a quarterly review of key assumptions and an annual rebuild of the full model. For businesses in a fast-moving phase — fundraising, acquisition or rapid growth — more frequent reviews are usually worthwhile." },
      { q: "What format does the plan take?", a: "The financial model is built in Excel or Google Sheets depending on your preference. We also produce a summary document suitable for external audiences such as lenders or investors, covering the strategy, key assumptions and financial projections." },
      { q: "Can you work with our existing forecasts?", a: "Yes. If you have an existing model or forecast, we can review it, identify gaps and update it rather than starting from scratch. We will be honest about whether it needs a rebuild or whether it can be improved incrementally." }
    ]
  },
  "/corporate-finance/": {
    process: [
      ["01", "Transaction readiness review", "We assess your financial position, records and presentation relative to what buyers, investors or lenders will expect, then identify and address any gaps before the process formally begins."],
      ["02", "Documentation and financial modelling", "We prepare the financial model, information memorandum or due diligence pack the transaction requires, built to the standards that professional counterparties will scrutinise."],
      ["03", "Transaction support through to completion", "We support the negotiation and due diligence process, respond to queries, manage financial disclosures and help ensure the transaction completes on the terms agreed."]
    ],
    clientTypes: [
      ["01", "Business owners planning a sale", "Wanting to maximise value, reduce deal risk and avoid the preparation errors that give buyers room to chip the agreed price."],
      ["02", "Management teams making an acquisition", "Needing financial due diligence, valuation support and deal structuring advice before committing to a business purchase."],
      ["03", "Businesses seeking investment", "Preparing for a funding round or equity raise and needing financial modelling, investor-ready documentation and deal support."]
    ],
    testimonial: {
      quote: "The information memorandum got us in front of three credible buyers within six weeks. The financial model held up under due diligence without a single restatement.",
      attribution: "Client review — Business sale, Chichester"
    },
    faq: [
      { q: "When should I start the corporate finance process?", a: "For a business sale, we typically recommend engaging twelve to eighteen months before a planned transaction. This allows time to address any issues that could affect value or deal risk. For acquisitions, earlier is better — we can help identify targets as well as assess specific opportunities." },
      { q: "Do you act as a broker or find buyers?", a: "We are advisers rather than brokers. We prepare the financial materials, support the due diligence process and advise on structure and terms. We work alongside corporate finance brokers or solicitors who manage the transaction process itself, or we can recommend appropriate specialists." },
      { q: "What does financial due diligence involve?", a: "Due diligence on a business you are acquiring involves examining historical financial performance, the quality of earnings, working capital dynamics, debt and contingent liabilities, and the key assumptions behind any forecasts. We produce a due diligence report that gives you a clear picture of what you are buying before the deal closes." },
      { q: "What size of transactions do you advise on?", a: "We work on transactions from £500,000 to £15 million enterprise value, primarily in the owner-managed business market in the south of England and London. Outside this range, we can refer you to appropriate specialists." }
    ]
  },
  "/virtual-finance-director/": {
    process: [
      ["01", "Current state review", "We review your existing reporting, financial processes, management information and the key decisions the business is currently navigating, to understand exactly what a VFD needs to deliver for you."],
      ["02", "Deliverables and rhythm agreement", "We agree the specific outputs — board pack format, reporting timetable, cash forecasting frequency — and the level of involvement needed, whether that is one day a month or ten days a quarter."],
      ["03", "Ongoing advisory relationship", "We provide regular reporting, attend board meetings, lead financial conversations with lenders or investors and act as a genuine strategic resource for the business, not just a reporting function."]
    ],
    clientTypes: [
      ["01", "Growing SMEs without a full-time FD", "Turnover of £2m to £20m, growing fast enough to need senior finance leadership but not ready to justify a permanent hire at £80,000 to £120,000 per year."],
      ["02", "Investor-backed businesses", "Investors require regular, credible board packs and a finance function that responds to requests promptly. A VFD brings that discipline without the recruitment process."],
      ["03", "Businesses in a transition phase", "Preparing for a sale, integration or restructure where senior financial oversight is needed temporarily without a long-term permanent commitment."]
    ],
    testimonial: {
      quote: "Having a VFD changed the quality of our board conversations overnight. For the first time, directors were looking at the same numbers and making decisions based on them.",
      attribution: "Client review — Professional services business, London"
    },
    faq: [
      { q: "What is the difference between a VFD and a bookkeeper?", a: "A bookkeeper records transactions. A Virtual Finance Director interprets them, advises on strategy, challenges commercial assumptions, manages lender and investor relationships and gives the business board-level financial leadership. The VFD typically oversees any bookkeeping or management accounts work rather than performing it." },
      { q: "How many days per month does a VFD typically work?", a: "Most VFD engagements run between two and eight days per month depending on the complexity of the business, the stage of growth and the specific deliverables required. We agree the level upfront and adjust as the business needs change." },
      { q: "What does a typical board pack include?", a: "A well-structured board pack covers management accounts with variance analysis, a cash flow forecast, key performance indicators relevant to the business model, a summary of issues and decisions required, and any specific analysis needed for the period. We build the format around what the board actually uses." },
      { q: "Can a VFD help with fundraising?", a: "Yes. VFDs regularly lead the financial preparation for funding rounds, including building the investor model, preparing the financial sections of pitch documents, managing due diligence requests and advising on deal structure and terms." }
    ]
  },
  "/virtual-financial-controller/": {
    process: [
      ["01", "Month-end process assessment", "We review the current month-end close process, identify where delays and errors occur, and map the steps needed to get reconciliations and management accounts produced reliably within a defined window."],
      ["02", "Process redesign and implementation", "We redesign the close process, set up reconciliation templates, establish approval workflows and agree the management accounts format and timetable with the team."],
      ["03", "Live management and ongoing support", "We manage the month-end close each period, produce the management accounts to the agreed format, maintain the control environment and escalate any issues that require management attention."]
    ],
    clientTypes: [
      ["01", "Businesses with unreliable month-end", "Management accounts arrive three weeks after period end, contain errors and do not support decisions. The finance team is overwhelmed and the close has no consistent structure."],
      ["02", "Post-acquisition or post-merger businesses", "Two finance teams or two charts of accounts combined without a clean close process being established. Reports do not reconcile and the control environment is unclear."],
      ["03", "Scaling businesses", "The finance team has grown but the processes have not kept pace. Month-end takes longer as the business gets bigger, which is the opposite of what should happen."]
    ],
    testimonial: {
      quote: "Month-end went from three weeks to five working days. We now have management accounts before the next month has started, which changes every discussion we have.",
      attribution: "Client review — Recruitment business, Hampshire"
    },
    faq: [
      { q: "What is the difference between a VFC and a VFD?", a: "A Virtual Financial Controller manages the operational finance function — month-end close, reconciliations, controls and management accounts production. A Virtual Finance Director sits at the strategic level — advising on commercial decisions, investor relations and long-range financial planning. The VFC is often a stepping stone to or a complement to a VFD relationship." },
      { q: "How many hours does a VFC typically need?", a: "It depends on the volume and complexity of transactions and the state of existing processes. Most VFC engagements run between two and six days per month. We assess the requirement during the initial review and agree a scope before starting." },
      { q: "Do you work on-site or remotely?", a: "Most VFC work is delivered remotely using cloud accounting software, shared documents and video calls. We visit client offices for the initial setup, periodic reviews and any situations where on-site presence adds clear value." },
      { q: "What software do you work with?", a: "We work primarily with Xero and QuickBooks, and can support other cloud accounting platforms. If a system change is needed to support better reporting, we can advise on the options and manage the migration." }
    ]
  },
  "/business-advisory/": {
    process: [
      ["01", "Performance and data review", "We start by reviewing financial performance against goals, analysing the management information available and identifying where the data is telling a story that the business is not yet acting on."],
      ["02", "Priorities and commercial levers", "We work with you to identify the two or three commercial levers that will move the business most materially, set the priorities and agree the decisions that need to be made in the next quarter."],
      ["03", "Ongoing sounding board", "We meet regularly — monthly or quarterly — to review progress, challenge assumptions and ensure the advisory relationship stays useful as the business evolves and new questions arise."]
    ],
    clientTypes: [
      ["01", "Owner-managers at a crossroads", "Growing the team, entering a new market, raising finance or restructuring. Wanting a commercially-minded sounding board who understands the numbers and the implications."],
      ["02", "Management teams with data but no clear insight", "Good financial systems and regular management accounts, but the team is not converting the information into decisions and actions that move things forward."],
      ["03", "Boards needing an external perspective", "Wanting a trusted, independent voice on performance, priorities and the risks the business is not addressing fast enough."]
    ],
    testimonial: {
      quote: "The advisor challenged assumptions we had held for years. Within six months, we had exited a loss-making product line and reinvested the resource where the margins were actually working.",
      attribution: "Client review — Distribution business, Hampshire"
    },
    faq: [
      { q: "What does business advisory actually cover?", a: "Advisory covers performance review, commercial challenge, planning support and sounding board work for key decisions. It is different from compliance work in that the focus is on improving the business rather than satisfying a regulatory requirement. Engagements are scoped around what the business needs." },
      { q: "How often do we meet?", a: "Most advisory clients meet monthly or quarterly. The rhythm is agreed at the start of the engagement and adjusted as priorities change. Between meetings, we are available for calls and email on specific questions that arise." },
      { q: "Is this different from compliance accounting?", a: "Yes. Advisory is forward-looking and commercial — focused on decisions, improvement and strategy. Compliance is backward-looking and regulatory — focused on accurately reporting what has already happened. We often provide both, but they are separate engagements with different purposes." },
      { q: "Can you attend board or management meetings?", a: "Yes. We attend board meetings, management reviews and investor meetings in an advisory capacity where our presence adds value. This is included in the scope of advisory engagements where it is required." }
    ]
  },
  "/xero-cloud-accounting-experts-2/": {
    process: [
      ["01", "Configuration design", "We review your business structure, reporting requirements and the decisions you need to make, then design a chart of accounts, tracking categories and reporting layout that delivers the right outputs."],
      ["02", "Build, connect and migrate", "We set up Xero, connect bank feeds, configure reconciliation rules, migrate historical data where needed and integrate any additional apps required for payroll, expenses or sales."],
      ["03", "Training and go-live support", "We train your team on the correct workflows for your specific setup, remain on hand during the first month of live use to resolve any issues and set up a review process to keep data quality high."]
    ],
    clientTypes: [
      ["01", "Businesses new to Xero", "Moving from spreadsheets, desktop software or another cloud system. Wanting a clean setup from the start rather than learning through trial and error."],
      ["02", "Businesses with a poorly configured Xero", "Already using Xero but not getting useful management information from it. Bank feeds not reconciling, categories not matching the reporting structure and the accountant spending hours cleaning up each month."],
      ["03", "Groups setting up multiple entities", "Setting up a new company or subsidiary and wanting the Xero environment to work consistently across the group for consolidation and comparison."]
    ],
    testimonial: {
      quote: "For the first time, we have real-time financial visibility without waiting for month-end. The setup was thorough and the training actually changed how the team works.",
      attribution: "Client review — E-commerce business, London"
    },
    faq: [
      { q: "How long does a Xero setup take?", a: "A clean setup for a single entity typically takes two to four weeks from kick-off to go-live. Migration of historical data, complex chart of accounts or app integrations add time. We agree the timeline at scoping and manage it from there." },
      { q: "Which apps does Xero integrate with?", a: "Xero has over 1,000 app integrations covering payroll, expenses, inventory, CRM and ecommerce platforms. We help identify which apps add genuine value for your specific needs and configure the integrations properly rather than connecting everything available." },
      { q: "Can you clean up our existing Xero data?", a: "Yes. Cleanup is a common request and we handle it regularly. We review the existing data, identify the categories of error and work through a cleanup process that restores the reliability of the records without losing the history." },
      { q: "Is training included in the setup?", a: "Yes. We train the team members who will use Xero, tailored to their specific roles and the workflows we have set up for the business. We do not deliver generic Xero training — we train people on the setup we have built." }
    ]
  },
  "/xero-cloud-accounting-experts/": {
    process: [
      ["01", "Requirements and reporting review", "We review what you need from Xero in terms of compliance outputs and management reporting, then design the configuration to deliver both without duplication of effort."],
      ["02", "Setup, migration and integration", "We build the Xero environment, connect bank feeds and payment gateways, migrate existing data and set up the apps needed to complete the workflow."],
      ["03", "Team training and ongoing support", "We train your team on correct use of the specific setup we have built, provide support during the first month and establish a review process to keep the data clean and the reports useful."]
    ],
    clientTypes: [
      ["01", "Businesses migrating from desktop software", "Leaving Sage, QuickBooks Desktop or spreadsheets and wanting a cloud setup built properly from the start."],
      ["02", "Businesses outgrowing their current setup", "Xero is in place but the chart of accounts does not match how the business reports, tracking categories are wrong and the management accounts are not reliable."],
      ["03", "Multi-site or group businesses", "Setting up Xero consistently across multiple entities so group consolidation is straightforward and comparison between sites is possible without manual adjustments."]
    ],
    testimonial: {
      quote: "The Xero setup we had been using for two years was rebuilt in three weeks and the difference in reporting quality was immediate. We finally have numbers we trust.",
      attribution: "Client review — Professional services firm, Chichester"
    },
    faq: [
      { q: "How is this different from just signing up for Xero directly?", a: "Signing up for Xero gives you the software. A properly configured Xero gives you useful financial information. The difference is in the chart of accounts, tracking categories, bank feed rules, reporting layouts and the training — all of which require deliberate setup work that Xero cannot do automatically." },
      { q: "Can you migrate data from our old system?", a: "Yes, for most common accounting platforms. We migrate opening balances, historical data and existing records to give you continuity. The scope and complexity of migration depends on the source system and how far back you need historical data." },
      { q: "What happens if something goes wrong after setup?", a: "We provide support for a defined period after go-live and are available for calls and email support on specific questions. Most issues that arise in the first month relate to edge cases not covered in training, and we resolve them quickly." },
      { q: "Do you provide ongoing bookkeeping in Xero?", a: "Yes. Many clients start with setup and training then move to an ongoing bookkeeping arrangement managed by us. Others prefer to manage the day-to-day records themselves with us providing management accounts, compliance and oversight." }
    ]
  },
  "/quickbooks/": {
    process: [
      ["01", "Requirements and scope", "We start by understanding your business model, what you need from QuickBooks and the specific compliance and reporting outputs required, then design a setup that delivers those without unnecessary complexity."],
      ["02", "Setup and configuration", "We set up the QuickBooks environment, configure the chart of accounts, connect bank feeds, set up payroll if needed and migrate any historical data required to give you a clean opening position."],
      ["03", "Training and ongoing support", "We train your team on the workflows relevant to their roles, provide support during the first month of live use and offer ongoing assistance when questions or issues arise."]
    ],
    clientTypes: [
      ["01", "Small and growing businesses", "Wanting straightforward cloud bookkeeping with good VAT, payroll and management accounts support from a familiar UK-focused platform."],
      ["02", "Businesses with job costing needs", "Contractors, consultancies and project-based businesses that need job costing and project profitability tracking within their accounting software."],
      ["03", "Businesses needing a records cleanup", "Currently using QuickBooks but with inconsistent categorisation, uncategorised transactions and management accounts that do not reflect reality."]
    ],
    testimonial: {
      quote: "Our QuickBooks setup was cleaned up and properly configured in under a month. For the first time, the management accounts we pull out match what the business is actually doing.",
      attribution: "Client review — Construction business, Midhurst"
    },
    faq: [
      { q: "How does QuickBooks compare to Xero?", a: "Both are capable cloud accounting platforms. QuickBooks has strong job costing features and is often preferred by construction and project-based businesses. Xero tends to have a broader app ecosystem and is generally easier to use for businesses with simpler requirements. We help you choose based on your specific needs rather than software preference." },
      { q: "Can you migrate from Sage or another system?", a: "Yes. We handle migrations from Sage, FreeAgent, Kashflow and other systems. The complexity depends on the volume of historical data and how far back you need records. We will give you a clear assessment of the migration scope before starting." },
      { q: "Do you manage the ongoing bookkeeping?", a: "Yes. Many clients use QuickBooks as the platform and engage us to manage the bookkeeping, management accounts and compliance work on an ongoing basis. The setup engagement typically transitions into an ongoing service if that is the preferred arrangement." },
      { q: "What if we just need a cleanup of existing data?", a: "Cleanup is a common request. We review the existing data, identify categories of error and work through a structured process that restores the reliability of the records. This is usually faster than starting from scratch and preserves historical continuity." }
    ]
  },
  "/accounts/": {
    process: [
      ["01", "Pre year-end planning", "We meet or speak before your year-end to identify planning points, dividend decisions, asset purchases or transactions that should be made before the year closes. This is when planning has value — not after the year ends."],
      ["02", "Accounts preparation and computation", "We prepare statutory accounts from the records you provide, calculate the corporation tax liability, review the year for any issues and ensure the accounting treatment is accurate and appropriate for the period."],
      ["03", "Review, filing and forward planning", "We talk through the key numbers, file the accounts and tax return ahead of Companies House and HMRC deadlines, and confirm any planning points for the year ahead."]
    ],
    clientTypes: [
      ["01", "Limited companies of all sizes", "From first-year startups to established SMEs requiring accurate statutory accounts under FRS 102 or FRS 105 with corporation tax computed and filed correctly."],
      ["02", "Director-shareholders", "Where the accounts connect to personal tax planning, dividend decisions and the overall tax position of the individual behind the company."],
      ["03", "Businesses with late or overdue accounts", "Where Companies House deadlines are approaching or have passed, or where previous accounts contain errors that need to be corrected."]
    ],
    testimonial: {
      quote: "Accounts delivered six weeks before the deadline with a clear summary of the numbers and three planning points for the year ahead. Exactly what we needed.",
      attribution: "Client review — Consultancy business, Hampshire"
    },
    faq: [
      { q: "When should we send our records across?", a: "Ideally two to three months after your year-end date. Sending records promptly gives us time to prepare accounts carefully, ask questions without pressure and file well before any deadlines. We send a records request shortly after your year-end to help you gather what we need." },
      { q: "What if our records are not in good shape?", a: "We deal with incomplete or disorganised records regularly. We will tell you what is missing, ask for specific items and use what is available to prepare the best accounts possible. We will also point out what needs to improve for next year." },
      { q: "What is the difference between statutory and management accounts?", a: "Statutory accounts are the formal year-end accounts filed with Companies House and used to calculate the tax liability. Management accounts are more frequent, more detailed and designed to support business decisions throughout the year. We provide both, but they serve different purposes." },
      { q: "Can we take a dividend during the year?", a: "Yes, provided the company has sufficient distributable reserves. We advise on the right level of dividend in the context of your overall tax position — the company tax liability, your personal income and the interaction with any salary you take. This is one of the key planning conversations we have at the pre year-end meeting." }
    ]
  },
  "/expert-tax-advice-in-hampshire-west-sussex/": {
    process: [
      ["01", "Full position review", "We review your personal and business tax positions together, covering income sources, structures in use, reliefs available and any upcoming transactions that will have a tax consequence."],
      ["02", "Planning and structuring", "We identify the most material planning opportunities, explain the options clearly and help you make decisions with the full tax picture in view rather than one element at a time."],
      ["03", "Implementation and monitoring", "We implement the agreed planning steps, manage the compliance obligations that flow from them and review the position at least annually to make sure it remains optimised."]
    ],
    clientTypes: [
      ["01", "Business owners with personal and corporate tax", "Where the interaction between company profits, director salary, dividends and personal income needs joined-up advice rather than separate compliance work done in isolation."],
      ["02", "Property investors", "Managing income tax on rents, capital gains on disposals, stamp duty on purchases and the overall efficiency of the property portfolio structure."],
      ["03", "Individuals before a major transaction", "A business sale, property disposal, inheritance or significant gift where the tax consequence is material and needs planning before the transaction is agreed."]
    ],
    testimonial: {
      quote: "We had been receiving tax advice from two separate advisers for years. Getting it consolidated into a single view saved us over £12,000 in the first year.",
      attribution: "Client review — Business owner, Hampshire"
    },
    faq: [
      { q: "How does personal and business tax planning interact?", a: "The company tax position, your salary, dividends, pension contributions and personal investments all interact. Optimising one in isolation can create inefficiency in another. We review the full picture to identify the structure that works best overall rather than treating each element separately." },
      { q: "When is the right time to start planning?", a: "The earlier the better, but planning still has value at any point before year end. For major transactions — a business sale, property disposal or restructure — we recommend engaging six to twelve months in advance so the structure can be reviewed and improved before decisions are committed." },
      { q: "What reliefs might apply to my situation?", a: "The reliefs available depend on your specific circumstances. Common ones for business owners include Business Asset Disposal Relief, R&D tax credits, capital allowances and pension contributions. We review eligibility as part of the planning process." },
      { q: "Do I need to do a Self Assessment return?", a: "You must complete a Self Assessment return if you are self-employed, a company director, have untaxed income, capital gains above the annual exemption, or income over £100,000. We manage the return for all clients in this position and ensure payments on account are planned rather than unexpected." }
    ]
  },
  "/business-tax/": {
    process: [
      ["01", "Compliance review and planning window", "We review the year's position — income, expenses, capital allowances, R&D activity and group transactions — before year-end where possible, to identify reliefs and planning opportunities while there is still time to act on them."],
      ["02", "Computation and filing", "We prepare the corporation tax computation accurately, identify all available reliefs and deductions, and file the CT600 and iXBRL accounts to HMRC within the statutory deadline."],
      ["03", "Proactive planning for the year ahead", "After filing, we review the position for the upcoming year and flag any structural changes, investment decisions or transactions that would benefit from early planning advice."]
    ],
    clientTypes: [
      ["01", "UK limited companies", "Single entity companies of all sizes requiring accurate corporation tax compliance and access to available reliefs including R&D credits and capital allowances."],
      ["02", "Group structures", "UK groups with multiple entities needing coordinated tax compliance, group relief claims and advice on inter-company transactions and group structure efficiency."],
      ["03", "Partnerships and LLPs", "Partnerships with multiple members, profit-sharing arrangements and the interaction between partnership and personal tax positions to manage carefully."]
    ],
    testimonial: {
      quote: "The R&D claim we had missed for three years was identified and filed in the first year. The tax saving more than covered the advisory fees for the entire engagement.",
      attribution: "Client review — Technology business, London"
    },
    faq: [
      { q: "What are R&D tax credits and do I qualify?", a: "Research and Development tax credits allow companies to claim enhanced deductions for qualifying R&D expenditure. Qualifying activities include resolving technical or scientific uncertainty — not just laboratory research. Software development, engineering, new product development and certain process improvements can all qualify. We review eligibility as part of the tax planning process." },
      { q: "What capital allowances are available?", a: "Capital allowances allow businesses to deduct the cost of qualifying plant, machinery and other assets from taxable profits. The Annual Investment Allowance provides 100% relief up to the current threshold. We review all capital expenditure to ensure every available allowance is claimed." },
      { q: "When does the corporation tax return need to be filed?", a: "The corporation tax return must be filed within twelve months of the accounting period end. The tax itself is due nine months and one day after the year-end for smaller companies. We manage both deadlines and send records requests and reminders to ensure neither is missed." },
      { q: "What is group relief and when does it apply?", a: "Group relief allows losses from one group company to be set against profits of another, reducing the overall group tax liability. It applies where companies are at least 75% connected by ownership. We identify group relief opportunities and coordinate the claims across the group." }
    ]
  },
  "/capital-gains-tax-advice/": {
    process: [
      ["01", "Pre-disposal planning review", "We review the asset, ownership structure, acquisition costs and the likely proceeds to model the CGT position before the transaction is agreed, identifying structuring and relief options while there is still time to act."],
      ["02", "Relief and exemption analysis", "We assess eligibility for Business Asset Disposal Relief, principal private residence exemption, gift relief, rollover relief and other available reliefs that could reduce the liability materially."],
      ["03", "Calculation, reporting and payment", "We prepare the capital gains calculation, advise on the reporting deadline — including the 60-day property reporting requirement — and manage the Self Assessment or in-year reporting with HMRC."]
    ],
    clientTypes: [
      ["01", "Business owners selling shares or assets", "Where Business Asset Disposal Relief or other business-related reliefs may be available, and where the structure of the sale affects the rate of tax payable."],
      ["02", "Property investors and landlords", "Selling investment property, second homes or commercial property with a capital gain, including the in-year 60-day reporting requirement for UK residential property."],
      ["03", "Shareholders and option holders", "Exercising share options, selling shares in a company sale or managing a gain from an earn-out arrangement following a business transaction."]
    ],
    testimonial: {
      quote: "The pre-sale restructure saved over £80,000 in capital gains tax that would have been paid unnecessarily without early planning. The advice paid for itself many times over.",
      attribution: "Client review — Business owner, West Sussex"
    },
    faq: [
      { q: "What is Business Asset Disposal Relief?", a: "Business Asset Disposal Relief (BADR) — formerly Entrepreneurs Relief — reduces the rate of CGT to 10% on qualifying gains up to a lifetime limit of £1 million. It applies to disposals of shares in a personal company where you have held at least 5% of shares and voting rights for two years, and have been an officer or employee. We review eligibility at the planning stage, not after the sale." },
      { q: "What is the 60-day CGT reporting rule?", a: "UK residents must report and pay CGT on UK residential property gains within 60 days of completion. This is separate from Self Assessment. We manage the in-year reporting for all property disposals and make sure the payment is made on time to avoid HMRC interest and penalties." },
      { q: "Can I use my annual CGT exemption?", a: "The CGT annual exempt amount has been significantly reduced — to £3,000 from April 2024. Where you have a spouse or civil partner, gains can sometimes be transferred before disposal to use both exemptions. We model the position before the transaction to maximise available exemptions." },
      { q: "Can the timing of a disposal affect the tax?", a: "Yes, significantly. Completing a disposal before or after the end of the tax year can affect which year the gain falls in, influencing the rates, exemptions and the interaction with other income. For larger transactions, timing is one of the most controllable planning variables." }
    ]
  },
  "/inheritance-tax-2/": {
    process: [
      ["01", "Estate review and exposure calculation", "We map the key assets — property, business interests, investments, gifts and life policies — calculate the current IHT exposure and identify which reliefs, exemptions and planning approaches are most relevant to your situation."],
      ["02", "Planning strategy and options", "We explain the available strategies — gifting programmes, Business Property Relief, trust arrangements, pension funding and charitable giving — and help you choose an approach that reflects your wishes as well as the tax efficiency."],
      ["03", "Implementation and adviser coordination", "We coordinate with your solicitors and financial advisers to implement the agreed plan, document the decisions made, review the position annually and update the plan as circumstances change."]
    ],
    clientTypes: [
      ["01", "Business owners with estate exposure", "Where the business interest is a significant part of the estate and Business Property Relief qualification needs to be reviewed and maintained alongside personal planning."],
      ["02", "Families with property wealth", "Where residential property and investment property form the bulk of the estate and Nil Rate Band, Residence Nil Rate Band and gifting strategies are the primary planning tools."],
      ["03", "Landowners and agricultural families", "Where Agricultural Property Relief and Business Property Relief interact, and where multi-generational succession planning is part of a longer-term estate strategy."]
    ],
    testimonial: {
      quote: "We thought the IHT liability was fixed. Three months of planning later, the exposure was reduced by over £300,000 through a combination of gifting and business restructuring.",
      attribution: "Client review — Family business owner, Sussex"
    },
    faq: [
      { q: "What is the inheritance tax threshold?", a: "The standard nil rate band is £325,000 per person, £650,000 for a couple. An additional Residence Nil Rate Band of up to £175,000 per person applies where a main home passes to direct descendants. For estates over £2 million, the RNRB tapers away. The thresholds are frozen until April 2030." },
      { q: "What is Business Property Relief?", a: "Business Property Relief (BPR) provides 100% IHT relief on qualifying business assets — including shares in unquoted trading companies and interests in a trading business partnership. The qualifying conditions are specific and need to be reviewed carefully, particularly where the business holds significant investment assets." },
      { q: "How do gifts affect inheritance tax?", a: "Gifts made more than seven years before death are fully exempt. Gifts within seven years are potentially exempt and become chargeable on a sliding scale. Gifts of up to £3,000 per year are exempt as annual allowances. We structure gifting programmes around these rules to progressively reduce the estate." },
      { q: "When is the right time to start IHT planning?", a: "The earlier the better. Many of the most effective strategies — gifting programmes, trust structures and business restructuring — take time to become fully effective. The seven-year gift exemption means planning started today has its full benefit in seven years. Starting in your 70s limits the options significantly." }
    ]
  },
  "/making-tax-digital/": {
    process: [
      ["01", "Compliance and software review", "We review your current record-keeping, assess which MTD obligations apply to you and identify the most appropriate software for your business, based on cost, complexity and existing workflows."],
      ["02", "Setup, migration and configuration", "We set up the MTD-compatible software, connect it to HMRC, migrate any existing records and configure the digital links required to meet the functional compatible software requirements."],
      ["03", "Quarterly submission rhythm", "We manage the quarterly update submissions on your behalf, review the data before each submission and prepare the year-end finalisation that completes the annual tax obligation."]
    ],
    clientTypes: [
      ["01", "Sole traders and landlords in scope for MTD for ITSA", "Self-employed individuals and property landlords with qualifying income who need to move to digital record keeping and quarterly reporting under Making Tax Digital for Income Tax Self Assessment."],
      ["02", "Businesses newly within MTD for VAT scope", "VAT-registered businesses that have not yet moved to functional compatible software and need to become compliant without disrupting their existing accounting process."],
      ["03", "Businesses using MTD as an improvement lever", "Businesses that are already compliant but want to use the MTD transition as an opportunity to improve their overall record keeping and reporting quality permanently."]
    ],
    testimonial: {
      quote: "The transition to MTD was handled entirely by the team. We did nothing except provide the data we had always provided. Quarterly submissions have been on time without a single correction.",
      attribution: "Client review — Sole trader, Hampshire"
    },
    faq: [
      { q: "When does MTD for Income Tax apply to me?", a: "MTD for ITSA applies from April 2026 for sole traders and landlords with qualifying income over £50,000, from April 2027 for those with income over £30,000, and from April 2028 for those with income over £20,000. These thresholds and dates have changed previously — we monitor the position for all affected clients." },
      { q: "Which software do I need?", a: "HMRC requires functional compatible software that can keep digital records and submit quarterly updates directly to HMRC. We help select the most appropriate option based on your business complexity, existing accounts software and budget. Most clients use Xero, QuickBooks or FreeAgent." },
      { q: "What are the quarterly updates?", a: "Under MTD for ITSA, you submit a summary of your income and expenses to HMRC each quarter — four in-year reports per year rather than a single annual return. We prepare and submit these on your behalf and review the data before each submission." },
      { q: "Is bridging software acceptable?", a: "For MTD for VAT, bridging software has been acceptable as a transitional measure. For MTD for Income Tax, the requirement for digital links is more stringent and full functional compatible software is generally required from the outset. We advise on what meets the requirements for your specific situation." }
    ]
  },
  "/personal-tax/": {
    process: [
      ["01", "Records gathering and review", "We send a tailored checklist each year covering the specific income sources, expenses and events relevant to your return, review what you provide and follow up on anything missing before we start work."],
      ["02", "Return preparation and planning review", "We prepare the Self Assessment return, review it for accuracy and completeness, check that all legitimate reliefs and deductions have been claimed and review your position for any planning points for the year ahead."],
      ["03", "Filing, payment planning and HMRC management", "We file the return, calculate your payments on account, advise on the payment dates and amounts, and manage any HMRC correspondence or queries that arise from the return."]
    ],
    clientTypes: [
      ["01", "Company directors", "Directors with salary, dividends, company car benefits, private medical insurance and other employment-related income that all feed into the personal tax position."],
      ["02", "Property landlords", "Individuals with rental income from residential or commercial property, managing allowable expenses, finance cost restrictions and the interaction with the overall income tax position."],
      ["03", "Employees and professionals with complex income", "Those with income from multiple sources — employment, self-employment, property, investments, pensions — or with untaxed income where a return is required."]
    ],
    testimonial: {
      quote: "The return was prepared and filed in January with no last-minute pressure. More importantly, the planning review identified two pension decisions that saved over £8,000.",
      attribution: "Client review — NHS consultant, Hampshire"
    },
    faq: [
      { q: "What triggers a Self Assessment requirement?", a: "You must complete a Self Assessment return if you are self-employed with income over £1,000, a company director, have rental income, have income over £100,000, have untaxed income, or have capital gains above the annual exempt amount. HMRC issues notices to file, but the obligation exists regardless of whether you receive one." },
      { q: "What are payments on account?", a: "Payments on account are advance payments towards the following year's tax liability, due in January and July. They are each set at 50% of the prior year's liability where that liability exceeds £1,000. We calculate the expected payments, advise on whether a reduction can be claimed and make sure the dates and amounts are in your calendar." },
      { q: "What if HMRC opens a compliance check on my return?", a: "We manage HMRC compliance checks on behalf of personal tax clients. We respond to the initial contact, gather the evidence HMRC needs and manage the correspondence through to resolution. We keep you informed throughout and make sure the process does not become more disruptive than it needs to be." },
      { q: "How can pension contributions reduce my tax bill?", a: "Pension contributions attract tax relief at your marginal rate — 40% or 45% for higher and additional rate taxpayers. They can also reduce adjusted net income below the £100,000 threshold, restoring the Personal Allowance. The Annual Allowance and any unused allowances from prior years affect how much can be contributed. We review the opportunity as part of the planning conversation." }
    ]
  },
  "/taxinvestigationservice/": {
    process: [
      ["01", "Immediate response management", "As soon as you receive HMRC correspondence, we take over the communication. We review the scope of the enquiry, assess what is being asked and formulate the appropriate response strategy before any reply is sent."],
      ["02", "Evidence gathering and position preparation", "We work through the records methodically, gather the evidence that supports your position, identify any issues that need to be addressed proactively and prepare a clear, organised response that reduces the scope for HMRC to widen the enquiry."],
      ["03", "Negotiation and resolution", "We manage the negotiation with HMRC, respond to follow-up requests and where a settlement is required, negotiate the best outcome the facts will support, minimising penalties and interest where the circumstances allow."]
    ],
    clientTypes: [
      ["01", "Businesses under a corporation tax or VAT enquiry", "Where HMRC has opened a formal enquiry into company accounts, VAT returns or employment taxes and professional representation is needed from the outset."],
      ["02", "Individuals with a Self Assessment enquiry", "Where HMRC has queried a personal tax return, rental income, employment expenses or capital gains and the correspondence is becoming complex or prolonged."],
      ["03", "Businesses or individuals at penalty risk", "Where a disclosure needs to be made to HMRC, whether proactively or in response to a specific request, and where the penalty outcome needs to be managed carefully."]
    ],
    testimonial: {
      quote: "The enquiry had been open for six months before we instructed Crestfield Advisory. It was closed within eight weeks of them taking over. The reduction in stress alone was worth every penny.",
      attribution: "Client review — Self-employed professional, Hampshire"
    },
    faq: [
      { q: "What types of enquiry does HMRC open?", a: "HMRC can open aspect enquiries — focused on a specific entry in a return — or full enquiries, which examine the entire return. They also open compliance visits and written enquiries for VAT and employer taxes. For more serious investigations, HMRC uses code of practice procedures. We deal with all types." },
      { q: "Should I respond to HMRC directly?", a: "You have the right to respond yourself, but it is rarely advisable. HMRC enquiry officers are trained to expand the scope of an enquiry where responses are incomplete, inconsistent or invite further questions. A professional response, carefully prepared, keeps the enquiry focused on what was originally raised." },
      { q: "How long does an HMRC enquiry take to resolve?", a: "A simple aspect enquiry can be resolved in two to four months with a well-prepared response. Full enquiries typically take six to eighteen months. The timeline depends on the complexity of the issues, HMRC's workload and how promptly responses are provided. We manage the pace of the process as far as possible." },
      { q: "What are the penalties if HMRC finds an error?", a: "Penalties for tax errors range from 0% to 200% of the unpaid tax depending on the behaviour involved — careless, deliberate or deliberate and concealed — and whether disclosure was prompted or unprompted. We work to demonstrate that any errors were careless rather than deliberate, and that disclosure was as full as possible, to minimise the penalty percentage applied." }
    ]
  },
  "/vat-advice/": {
    process: [
      ["01", "VAT position and risk review", "We review your current VAT position — registration status, scheme selection, treatment of income streams and input tax recovery — to identify any areas of risk or inefficiency and confirm the return preparation is on a sound footing."],
      ["02", "Structuring and scheme advice", "Where a different scheme, registration approach or group structure would produce a better outcome, we model the alternative and advise on the steps needed to move to it, coordinating the change with HMRC where required."],
      ["03", "Returns, MTD submission and ongoing advisory", "We prepare and submit VAT returns accurately, manage MTD compliance, monitor the threshold and flag any upcoming changes in your business that will affect the VAT position."]
    ],
    clientTypes: [
      ["01", "Property businesses and developers", "Where the option to tax, partial exemption, capital goods scheme and the VAT treatment of mixed-use buildings creates complexity that needs specialist advice before transactions are agreed."],
      ["02", "Ecommerce and digital services businesses", "Where the place of supply rules, OSS registration, distance selling thresholds and the VAT treatment of digital products require ongoing attention as the business sells across borders."],
      ["03", "Growing businesses approaching the VAT threshold", "Where turnover is approaching £90,000 and the registration timing, scheme selection and pricing implications need to be considered before the obligation triggers automatically."]
    ],
    testimonial: {
      quote: "The VAT review identified £23,000 of input tax that had not been recovered over three years. The review paid for itself in the first month.",
      attribution: "Client review — Property business, West Sussex"
    },
    faq: [
      { q: "What is the current VAT registration threshold?", a: "The VAT registration threshold is £90,000 of taxable turnover in any rolling twelve-month period from April 2024. Registration is mandatory once the threshold is reached. Voluntary registration below the threshold can be advantageous in some circumstances — for example, where you have significant input tax to recover." },
      { q: "What is the Flat Rate Scheme?", a: "The Flat Rate Scheme allows eligible businesses to pay VAT as a fixed percentage of gross turnover rather than calculating the difference between output and input tax. It reduces administration but is not always financially beneficial. We compare the flat rate against standard VAT accounting for each client before recommending it." },
      { q: "What is the option to tax on property?", a: "An option to tax makes a previously VAT-exempt property supply taxable, allowing the business to recover input tax on related costs. Once made, it lasts for twenty years and cannot normally be revoked within the first ten. The decision has significant implications for purchasers and tenants of the property and should be taken with advice." },
      { q: "What is partial exemption?", a: "Partial exemption applies where a business makes both taxable and exempt supplies and needs to restrict its input tax recovery to the proportion attributable to taxable supplies. The standard method pro-rates by value of supplies, but special methods can produce a more accurate and favourable result. We review the method and calculate the restriction correctly each period." }
    ]
  },
  "/audit/": {
    process: [
      ["01", "Risk-based planning", "We meet with management before fieldwork begins to understand the business, identify the risk areas that matter most and agree a scope that focuses our work where it adds the most value rather than where it is most convenient to audit."],
      ["02", "Senior-led fieldwork", "We conduct fieldwork with senior involvement throughout, test the key areas, respond to findings as they arise and maintain clear communication with management so there are no surprises in the final report."],
      ["03", "Audit opinion and management letter", "We issue the audit opinion alongside the statutory accounts, produce a management letter with practical observations on internal controls and risks, and discuss the findings directly with the board."]
    ],
    clientTypes: [
      ["01", "Companies meeting the statutory audit threshold", "UK companies exceeding the size thresholds that require a statutory audit and want an efficient, high-quality process with minimal disruption to the finance team."],
      ["02", "Charities and not-for-profit organisations", "Charities with income over the audit threshold or significant assets where the Charity Commission requires an audit and trustees need clear, well-presented assurance on the financial statements."],
      ["03", "Businesses with voluntary audit requirements", "Companies below the statutory threshold that choose to be audited for the benefit of investors, lenders or governance requirements."]
    ],
    testimonial: {
      quote: "The audit was planned and completed in six weeks without the disruption we had experienced with previous auditors. The management letter contained three genuinely useful observations we acted on immediately.",
      attribution: "Client review — Manufacturing group, Hampshire"
    },
    faq: [
      { q: "Does my company need a statutory audit?", a: "Small companies meeting at least two of the three size tests — turnover below £10.2m, balance sheet below £5.1m, fewer than 50 employees — are usually exempt from the statutory audit requirement. Exceptions apply for companies within groups, regulated entities and charities. We confirm the requirement before any audit engagement begins." },
      { q: "How long does an audit take?", a: "Most audits of SMEs are planned and completed within four to eight weeks of fieldwork commencing. Planning typically takes two to four weeks before fieldwork. The total elapsed time from engagement to signed opinion depends on the complexity of the business and the promptness of management responses." },
      { q: "What do auditors actually test?", a: "We test the areas of highest risk — revenue recognition, asset valuation, significant estimates, related party transactions and areas where management judgement has the most impact on the financial statements. We use sampling focused on the items that matter to the overall picture, not every transaction." },
      { q: "What is a management letter?", a: "A management letter accompanies the audit opinion and sets out significant deficiencies in internal controls, accounting errors, areas of risk or practical improvements identified during the audit. It is one of the most useful outputs of the audit process. We write management letters that are specific and actionable rather than generic." }
    ]
  },
  "/statutory-audits/": {
    process: [
      ["01", "Audit planning and risk assessment", "We plan the audit early in the accounting cycle, assess the key risks in the business, agree the audit scope with management and produce a clear audit plan before fieldwork begins."],
      ["02", "Fieldwork and testing", "We conduct fieldwork with senior staff present throughout, testing the key areas of financial statement risk, maintaining communication with management and resolving questions before they become issues."],
      ["03", "Audit opinion and accounts finalisation", "We produce the audit opinion and statutory accounts together, ensuring Companies House and HMRC deadlines are met and that the accounts give a true and fair view of the business."]
    ],
    clientTypes: [
      ["01", "SMEs meeting the audit threshold", "Private limited companies in the south of England and London that exceed the small company exemption thresholds and require a statutory audit delivered efficiently each year."],
      ["02", "Subsidiaries of larger groups", "UK subsidiary companies that require a standalone statutory audit as part of group requirements, even where the parent may be audited separately by another firm."],
      ["03", "Regulated entities", "Entities in regulated industries — financial services, legal practices, charities — where a statutory audit is required regardless of the company's size."]
    ],
    testimonial: {
      quote: "Changing auditors felt like a risk, but the planning meeting alone showed they understood the business better than our previous firm had in three years.",
      attribution: "Client review — Distribution business, Hampshire"
    },
    faq: [
      { q: "What are the audit size thresholds?", a: "A company is small, and generally exempt from the statutory audit requirement, if it meets at least two of: turnover not more than £10.2m, balance sheet total not more than £5.1m, not more than 50 employees. The thresholds are increasing from April 2025 — to £15m turnover and £7.5m balance sheet for medium companies — which may affect some businesses. We confirm the current position for each client." },
      { q: "Can we change our auditors?", a: "Yes. A company can change auditors by ordinary resolution of the shareholders, normally at the AGM, or at any point during the year with proper notice. We handle the professional clearance process and engage with the outgoing auditors in the appropriate way." },
      { q: "What does a group audit involve?", a: "For group audits, we audit the UK entities within the group, provide component audit work to a group auditor if required, consolidate the subsidiary results, eliminate intercompany balances and transactions, and produce group accounts alongside the subsidiary accounts." },
      { q: "How disruptive is the audit process?", a: "A well-planned audit should not be significantly disruptive to the finance team. The key to minimising disruption is planning early, agreeing the information schedule in advance and responding promptly to queries. We plan fieldwork around the finance team's availability and work to a clear schedule." }
    ]
  },
  "/sra-solicitors-accounts-rules-examinations/": {
    process: [
      ["01", "Examination scoping", "We confirm the scope of the examination against the SRA requirements for your practice size and structure, review the accounting systems and client account procedures in place, and agree the timing of fieldwork."],
      ["02", "Client ledger testing and compliance review", "We examine the client account records against the Solicitors Accounts Rules, test client ledger balances, reconciliations and the handling of residual balances and payments, and identify any areas of non-compliance."],
      ["03", "Report production and recommendations", "We produce the accountant's report in the required format, submit it to the SRA within the deadline and provide written recommendations on any procedural improvements identified during the examination."]
    ],
    clientTypes: [
      ["01", "Law firms with client accounts above the SRA threshold", "Practices that hold or receive client money above the SRA threshold and are required to deliver an annual accountant's report under the Solicitors Accounts Rules."],
      ["02", "Newly authorised law practices", "Firms in their first years of operation setting up client account procedures and wanting to ensure compliance from the outset rather than discovering issues at the first examination."],
      ["03", "Practices after an SRA compliance visit", "Firms that have received regulatory feedback and want independent assurance that their procedures are now correctly structured and will produce a clean report."]
    ],
    testimonial: {
      quote: "Clear, efficient and with a practical report. The recommendations improved our client account procedures without requiring significant changes to the way the practice operates.",
      attribution: "Client review — Law firm, Chichester"
    },
    faq: [
      { q: "Which firms need an accountant's report?", a: "Law firms authorised by the SRA that hold or receive client money in a client bank account must deliver an annual accountant's report if their client account transactions exceed the SRA threshold in the reporting period. The report must be delivered within six months of the firm's accounting period end." },
      { q: "What does the examination involve?", a: "We examine the client account bank reconciliations, ledger balances, the handling of residual balances, receipts and payments procedures and the records that demonstrate compliance with the Solicitors Accounts Rules. The level of testing depends on the volume of client account transactions." },
      { q: "What happens if the report is qualified?", a: "A qualified report indicates that the examination found matters that do not comply with the Solicitors Accounts Rules. The SRA receives the report and may take follow-up action. Where we identify issues during the examination, we discuss them with the practice and agree remedial steps before the report is finalised wherever the Rules allow." },
      { q: "When must the report be delivered to the SRA?", a: "The accountant's report must be delivered to the SRA within six months of the end of the accounting period to which it relates. We manage the timing of the examination and reporting to ensure this deadline is always met." }
    ]
  },
  "/tailored-assurance-services/": {
    process: [
      ["01", "Stakeholder question definition", "We work with you to define exactly what comfort is needed, for whom and in what format, converting the underlying question into a clear set of procedures that will produce the answer stakeholders need."],
      ["02", "Testing and agreed procedures", "We carry out the procedures exactly as agreed, document the work performed and the evidence obtained, and flag any findings that fall outside the agreed parameters as the work progresses."],
      ["03", "Comfort report and follow-up", "We produce a report in the format required by the stakeholder — factual findings, conclusions or both — and are available to discuss the findings directly with the recipient where that adds value."]
    ],
    clientTypes: [
      ["01", "Boards needing specific financial comfort", "Where the board needs independent confirmation of a specific financial figure, process or control — without a full audit — to support a key decision or governance requirement."],
      ["02", "Lenders and investors requiring assurance", "Where a lender, investor or joint venture partner requires independent verification of financial information before committing to a transaction or ongoing arrangement."],
      ["03", "Businesses in regulated or grant-funded activities", "Where a regulator, grant body or contract requires independent verification of specific financial data as a condition of ongoing compliance or funding receipt."]
    ],
    testimonial: {
      quote: "The agreed-upon procedures report gave our lender exactly what they needed to proceed. It was scoped precisely, completed quickly and cost a fraction of what a full audit would have.",
      attribution: "Client review — Property development company, London"
    },
    faq: [
      { q: "What is an agreed-upon procedures engagement?", a: "An agreed-upon procedures (AUP) engagement involves an independent accountant performing specific, defined procedures on financial data and reporting factual findings — without providing an opinion or conclusion. The procedures are agreed in advance by the client and the intended user of the report, which states exactly what was done and what was found." },
      { q: "How does tailored assurance differ from an audit?", a: "An audit involves an independent examination of financial statements to express an opinion on whether they give a true and fair view. Tailored assurance is scoped more narrowly — it answers a specific question using defined procedures rather than providing a comprehensive opinion. It is faster, more targeted and less costly where a full audit is not required." },
      { q: "How quickly can a comfort report be produced?", a: "For straightforward engagements, we can produce a comfort report within two to four weeks of agreeing the scope and receiving the relevant documentation. More complex procedures take longer. We are clear on the timeline at the scoping stage so that any transaction or funding timeline is not affected." },
      { q: "Who can receive the assurance report?", a: "The report is addressed to the specific parties who agreed the procedures and is typically restricted to those parties. This is one of the characteristics of agreed-upon procedures — the findings are reported to those who defined the scope, not for general use or third party reliance." }
    ]
  },
  "/bookkeeping/": {
    process: [
      ["01", "Software setup and access", "We confirm the accounting software in use, ensure access permissions are correctly set up, review the chart of accounts and agree the categorisation rules and timetable for the first period."],
      ["02", "Monthly bookkeeping and reconciliation", "We reconcile bank feeds, categorise transactions consistently, manage supplier and customer ledgers and ensure the accounts are complete and accurate before each period closes."],
      ["03", "Management accounts and reporting", "We produce management accounts to the agreed format each period, with commentary on the key variances and the information the business needs to make decisions while it is still current."]
    ],
    clientTypes: [
      ["01", "Growing businesses without an in-house finance team", "Where the owner or director is managing the bookkeeping themselves and the time cost has become significant enough to warrant outsourcing to a professional team."],
      ["02", "Businesses needing regular management accounts", "Where decisions are being made on the basis of statutory accounts or informal estimates rather than reliable monthly or quarterly management information."],
      ["03", "Businesses scaling and preparing for investment", "Where investors, lenders or a VFD engagement require management accounts to a consistent standard before the in-house finance function is established."]
    ],
    testimonial: {
      quote: "Management accounts are now in our hands on the fifth working day of every month. The consistency alone changed how we plan and the quality of information changed what we plan for.",
      attribution: "Client review — Technology business, London"
    },
    faq: [
      { q: "How often will bookkeeping be completed?", a: "Most clients are on a monthly bookkeeping schedule, with reconciliations and categorisation completed within the first week of the following month. For businesses with higher transaction volumes or a need for weekly cash visibility, we can operate on a weekly cycle." },
      { q: "What software do you use?", a: "We work primarily with Xero and QuickBooks. If you are already using one of these, we work within your existing environment. If you are starting fresh or unhappy with the current setup, we can advise on the right choice and set up the software as part of the onboarding process." },
      { q: "What does the management accounts pack include?", a: "A standard management accounts pack includes a profit and loss account for the period and year-to-date, a balance sheet, a cash flow statement or forecast, and variance commentary explaining the key movements versus budget or prior period. The format is agreed at the start of the engagement." },
      { q: "Can you catch up on historical bookkeeping?", a: "Yes. We regularly take on catch-up work where records have not been maintained for a period — sometimes several years. We work through the historical transactions systematically, reconstruct records from bank statements, invoices and receipts, and bring the accounts up to date." }
    ]
  },
  "/payroll/": {
    process: [
      ["01", "Payroll setup and PAYE registration", "We set up the payroll scheme, register with HMRC as needed, collect the required employee information, set up pension auto-enrolment arrangements and configure the payroll software to the correct pay frequency and structure."],
      ["02", "Monthly payroll processing", "Each period we process the payroll, calculate PAYE and National Insurance, produce payslips and make the RTI Full Payment Submission to HMRC, confirming the amounts due before the payment date."],
      ["03", "Year-end reporting and compliance", "We produce P60s for all employees, handle P45s for leavers during the year, manage P11D reporting for benefits in kind and ensure all employer obligations are fully met at each statutory deadline."]
    ],
    clientTypes: [
      ["01", "SMEs with growing teams", "Businesses running payroll internally and finding the compliance burden — RTI, auto-enrolment, statutory payments, P11Ds — is taking significant management time that would be better used elsewhere."],
      ["02", "Businesses with complex pay structures", "Businesses with multiple pay rates, commission, overtime, shift allowances or benefit packages where the manual calculation risk is higher and accuracy is particularly important."],
      ["03", "Businesses after a payroll error", "Where a payroll error has created an HMRC liability, triggered an employee complaint or generated an incorrect employment record, and a reliable ongoing service is needed going forward."]
    ],
    testimonial: {
      quote: "Payroll used to take the finance manager two full days a month. That time is now available for other things and the payroll is more accurate than it ever was when managed in-house.",
      attribution: "Client review — Hospitality business, West Sussex"
    },
    faq: [
      { q: "What is RTI and why does it matter?", a: "Real Time Information (RTI) requires employers to submit payroll data to HMRC on or before each pay day rather than at year-end. Late or incorrect RTI submissions can trigger automatic penalties. We manage RTI submissions as part of every payroll processing cycle, ensuring they are filed accurately and on time." },
      { q: "What are statutory payments and how are they handled?", a: "Statutory payments include Statutory Sick Pay, Statutory Maternity Pay, Statutory Paternity Pay and Statutory Adoption Pay. We calculate the correct entitlement, process the payments through payroll, manage the interaction with HMRC and advise on the reclaim position where it applies." },
      { q: "How does auto-enrolment work?", a: "Auto-enrolment requires employers to automatically enrol eligible employees into a qualifying workplace pension scheme and make minimum contributions. We manage the assessment, enrolment, postponement and contribution calculations, and handle the compliance filings with the Pensions Regulator." },
      { q: "When are P11Ds due?", a: "P11D forms, which report benefits in kind provided to employees and directors, must be submitted to HMRC by 6 July following the end of the tax year. The employer Class 1A National Insurance payment is due by 19 July. We manage both deadlines for all clients with benefit in kind obligations." }
    ]
  },
  "/company-secretarial/": {
    process: [
      ["01", "Statutory registers review", "We review the company's statutory registers — members, directors, PSCs, charges — confirm they are accurate and up to date, identify any historic errors and correct the record with Companies House where needed."],
      ["02", "Event-based filings and changes", "When corporate events occur — director appointments, resignations, share allotments, address changes, PSC updates — we prepare and file the relevant Companies House forms accurately and within the required timeframe."],
      ["03", "Annual maintenance and confirmation statement", "We prepare the annual confirmation statement each year, review the registered information and ensure it accurately reflects the current state of the company before filing."]
    ],
    clientTypes: [
      ["01", "Companies with frequent governance changes", "Growing businesses regularly changing their board, share capital or PSC register who need the Companies House record to remain accurate without the administrative burden falling on the finance team."],
      ["02", "Newly incorporated companies", "Recent incorporations needing their initial statutory registers set up correctly, their first confirmation statement filed and their ongoing governance obligations understood from the outset."],
      ["03", "Businesses preparing for a transaction", "Companies preparing for a sale, investment or restructure where the statutory records need to be clean and accurate before a buyer or investor's solicitors conduct corporate due diligence."]
    ],
    testimonial: {
      quote: "We had three years of unfiled changes. The registers were cleaned up and properly filed within a week. We should have done it much sooner — the cost was minimal.",
      attribution: "Client review — Technology startup, London"
    },
    faq: [
      { q: "What is a confirmation statement?", a: "The annual confirmation statement (formerly the annual return) is a filing required by all UK companies each year, confirming that the information Companies House holds — registered office, directors, shareholders, SIC codes, PSC register — is accurate and up to date. It must be filed within 14 days of the review date." },
      { q: "What are the deadlines for director changes?", a: "A director appointment or resignation must be notified to Companies House within 14 days of the change. Late filings are accepted but create a period where the public record is inaccurate, which can cause issues with banks, credit agencies and counterparties checking the register." },
      { q: "What is a PSC register?", a: "The PSC (People with Significant Control) register records individuals who own or control 25% or more of the shares or voting rights in a company, or who have the right to appoint or remove a majority of the board. All UK companies must maintain a PSC register and keep it up to date at Companies House." },
      { q: "What happens if Companies House records are wrong?", a: "Inaccurate Companies House records can affect bank account applications, credit ratings, property transactions and corporate transactions where a due diligence search is conducted. We correct historic inaccuracies, file overdue changes and put the ongoing maintenance in place so the record remains reliable." }
    ]
  },
  "/probate-services/": {
    process: [
      ["01", "Estate inventory and tax exposure review", "We work with the executors to identify and value the estate assets — property, investments, business interests, pensions, gifts and debts — and calculate the inheritance tax position to confirm whether tax is due."],
      ["02", "IHT return, income and gains compliance", "We prepare the IHT400 or IHT205 for HMRC, manage any income tax or capital gains tax obligations that arise during the administration period and liaise with HMRC on the estate's behalf throughout."],
      ["03", "Estate accounts and distribution support", "We prepare the estate accounts showing assets collected, liabilities settled, income received and the distribution to beneficiaries, giving executors a clear and documented record of the full administration."]
    ],
    clientTypes: [
      ["01", "Executors managing an estate with financial complexity", "Where the estate includes business interests, investment portfolios, rental property or assets with tax implications that go beyond a straightforward property and savings estate."],
      ["02", "Families where the deceased was a business owner", "Where Business Property Relief, agricultural property or company shares are part of the estate and the tax position needs careful analysis before the probate application is submitted."],
      ["03", "Executors facing HMRC or tax compliance questions", "Where HMRC has opened a compliance check on the estate's tax return or IHT return and professional representation is needed to resolve it."]
    ],
    testimonial: {
      quote: "The tax position on the estate was more complex than we had realised. Having a team who understood both the tax and the process made an already difficult time much more manageable.",
      attribution: "Client review — Executor, Hampshire"
    },
    faq: [
      { q: "What financial work is required during probate?", a: "The financial work in probate involves valuing the estate assets at the date of death, calculating and reporting inheritance tax to HMRC, managing any income tax and capital gains tax arising during the administration period, preparing estate accounts and supporting the distribution of assets to beneficiaries. We handle all of this on behalf of executors." },
      { q: "Is inheritance tax always payable on an estate?", a: "No. Estates below the nil rate band — £325,000 per person, with an additional Residence Nil Rate Band of up to £175,000 where a main home passes to direct descendants — pay no IHT. Married couples can transfer the unused nil rate band, potentially sheltering up to £1 million. Reliefs such as BPR and APR can further reduce or eliminate the liability." },
      { q: "How long does the financial administration of an estate take?", a: "Simple estates can be administered within six to twelve months. Complex estates — those with business interests, disputed valuations, HMRC compliance checks or multiple beneficiaries — can take two to three years. We manage the financial elements throughout and keep executors informed at each stage." },
      { q: "Is income tax payable on an estate?", a: "Yes. Income that arises during the administration period — rental income, bank interest, dividends — is taxable as estate income and must be reported to HMRC. We prepare the estate's income tax returns for each tax year of administration and ensure that any tax due is paid correctly." }
    ]
  },
  "/probate/": {
    process: [
      ["01", "Estate overview and initial tax review", "We review the estate with the executors, identify the key assets and liabilities, assess the IHT position and confirm the reporting and filing obligations before any applications are submitted."],
      ["02", "Tax returns and valuation support", "We prepare and submit the IHT reporting, manage income and capital gains tax obligations arising during the administration and support the valuations needed for HMRC purposes."],
      ["03", "Estate accounts and finalisation", "We prepare estate accounts in clear, plain language for executors and beneficiaries, confirming the assets collected, liabilities discharged and the final distribution to each beneficiary."]
    ],
    clientTypes: [
      ["01", "Executors needing financial guidance", "Individuals acting as executors for the first time who need help understanding their financial obligations and navigating the tax and accounting aspects of estate administration."],
      ["02", "Families with straightforward estates", "Estates primarily comprising a property, savings and standard investments, where the main requirement is accurate IHT reporting and a clear estate account for the beneficiaries."],
      ["03", "Families needing sensitivity alongside technical support", "Situations where the family wants the estate administered efficiently and clearly, with regular plain-language updates, while also receiving patient support through a difficult process."]
    ],
    testimonial: {
      quote: "Clear, patient and professional. The estate was administered efficiently and we always knew exactly where things stood with HMRC and what was coming next.",
      attribution: "Client review — Beneficiary, West Sussex"
    },
    faq: [
      { q: "What does an executor need to do on the financial side?", a: "An executor is responsible for valuing the estate at the date of death, reporting inheritance tax to HMRC, managing the estate's income and gains during administration, paying debts and liabilities, preparing estate accounts and distributing the remaining assets to beneficiaries. We guide executors through each stage and handle the technical elements on their behalf." },
      { q: "Do we need probate if there is a Will?", a: "A Grant of Probate is usually needed to release assets held by banks, investment providers and property registers, regardless of whether there is a Will. The Grant confirms the executor's legal authority to deal with the estate. We work with solicitors who manage the probate application while we handle the financial and tax aspects." },
      { q: "What is the IHT205 form?", a: "Form IHT205 is the simplified HMRC form used for smaller or straightforward estates below the IHT threshold. Where the estate is above the threshold or more complex, form IHT400 is required instead. We assess which form applies and prepare it accurately for HMRC." },
      { q: "How do we access the estate bank accounts?", a: "To access estate bank accounts, most banks require sight of the Grant of Probate or Letters of Administration. Some banks will release small amounts to meet estate expenses before the Grant is issued on production of the death certificate. We advise executors on the process for each institution as required." }
    ]
  },
  "/agricultural-accounting-and-horticultural-business-accounting-2/": {
    process: [
      ["01", "Farm and enterprise review", "We review the farming or horticultural operation in detail — the enterprises, the asset base, the subsidy and grant income and the ownership and tenancy structure — to establish a clear picture of what the accounting needs to reflect."],
      ["02", "Annual accounts and tax compliance", "We prepare accurate annual accounts with correct treatment of farming stocks, growing crops, livestock, single farm payments, ELM scheme payments and other rural enterprise income, and compute the tax position correctly for the farming structure in use."],
      ["03", "Planning, succession and advisory", "We advise on Agricultural Property Relief, business succession options, diversification tax consequences and the interaction between farm income and the personal tax positions of farming family members."]
    ],
    clientTypes: [
      ["01", "Arable and livestock farmers", "Farming businesses requiring accurate annual accounts, correct treatment of trading stocks and livestock, and tax planning that reflects the cyclical and seasonal nature of farm income."],
      ["02", "Horticultural businesses and growers", "Growers and plant nurseries requiring accounts that properly handle growing crops, harvest timing, subsidies and the specific cost structures of horticultural production."],
      ["03", "Rural landowners and diversifying estates", "Landowners with a mix of farming, environmental land management, renewable energy, holiday lets and other diversification activities that create complex tax and accounting questions."]
    ],
    testimonial: {
      quote: "Previous accountants never really understood the farming side. Having advisers who know what BPS receipts are and how to treat growing crops in the accounts has made a real difference to the advice we receive.",
      attribution: "Client review — Arable farm, West Sussex"
    },
    faq: [
      { q: "How is Agricultural Property Relief relevant to farming families?", a: "Agricultural Property Relief (APR) provides 100% IHT relief on the agricultural value of qualifying agricultural property — including farmland, farm buildings and farmhouses occupied for agricultural purposes — where the property has been owned and occupied for two years or let under an agricultural tenancy for seven years. APR does not cover development value. We review APR eligibility as part of both annual tax compliance and estate planning work." },
      { q: "How are environmental land management payments taxed?", a: "Environmental Land Management (ELM) payments, including Sustainable Farming Incentive payments and Countryside Stewardship, are generally taxable as trading income where the recipient is a farming business. We ensure the correct tax treatment is applied and that the transition from Basic Payment Scheme to ELM-based support is reflected correctly in the accounts." },
      { q: "How is farming income taxed where there are losses?", a: "Farming losses can be offset against other income in the same year or carried back to earlier years under general loss relief provisions. However, where a farming business has made losses in five consecutive years, the loss relief is restricted by the hobby farming rules. We monitor the position and advise on how to structure the business to avoid or manage this restriction." },
      { q: "What accounting treatment applies to farming stocks and growing crops?", a: "Farming stocks, growing crops and livestock are valued for accounts purposes using specific agricultural accounting conventions. Harvested crops are valued at the lower of cost and net realisable value. Growing crops are treated differently and their valuation timing affects the profit recognised in each accounting period. We apply the correct treatment consistently." }
    ]
  },
  "/agricultural-and-horticultural-businesses/": {
    process: [
      ["01", "Business and estate overview", "We start with a broad review of the farming or rural business structure — ownership, tenancy, enterprise mix, family members involved and the medium-term objectives including any succession plans being considered."],
      ["02", "Annual compliance and planning", "We prepare the annual accounts and tax returns, review the current-year tax position for planning opportunities and ensure the key reliefs — APR, BPR, capital allowances — are being used correctly and maintained."],
      ["03", "Succession and strategic planning", "Where succession is part of the conversation, we work through the options for passing the farm or rural enterprise to the next generation in a way that is tax-efficient, legally sound and reflects the family's wishes."]
    ],
    clientTypes: [
      ["01", "Multi-generation farming families", "Where the farm has passed through the family and the current generation is beginning to think about how to pass it to the next, managing the tax consequences alongside the family dynamics."],
      ["02", "Diversifying rural estates", "Estates moving beyond traditional farming into holiday accommodation, equestrian businesses, renewable energy and commercial lettings, needing advice on how diversification affects APR, VAT and income tax."],
      ["03", "Agricultural tenants and contract farmers", "Farmers working land under tenancy or contract farming arrangements who need accounts and tax advice that reflects the specific structure of their operation."]
    ],
    testimonial: {
      quote: "The succession plan they put in place has protected the farm from IHT while giving both generations a clear picture of how the transition will work. That level of planning was worth every penny.",
      attribution: "Client review — Farming family, West Sussex"
    },
    faq: [
      { q: "Does diversification affect Agricultural Property Relief?", a: "Yes, it can. Where part of a farm is used for non-agricultural activities — holiday lets, commercial storage, equestrian businesses, renewable energy — the proportion of the property used for those activities may not qualify for APR. In some cases, Business Property Relief may apply as an alternative. We review the position before diversification occurs to understand the impact." },
      { q: "How does contract farming work for tax purposes?", a: "In a contract farming arrangement, the landowner retains ownership of the farm and enters into a contract with a farmer who provides the labour and machinery in exchange for a management charge plus a profit share. Provided the arrangement is structured correctly, the landowner can continue to receive farming income, maintain APR eligibility and retain capital allowances on farm equipment." },
      { q: "What is the difference between APR and BPR?", a: "APR provides IHT relief on the agricultural value of qualifying agricultural property. BPR provides IHT relief on shares in qualifying trading businesses and business assets used in a trading business. The two reliefs can sometimes overlap on the same property — in some cases BPR can cover the value that APR does not, for example the development value of agricultural land. We review which reliefs apply and maximise the combined planning benefit." },
      { q: "Can we bring children into the farming business to help with succession?", a: "Yes, and this is one of the most common succession planning tools. Introducing children as partners or shareholders in a farming company allows value to be built up in their hands over time, potentially at lower inheritance tax rates. The timing, structure and documentation all matter to the effectiveness of the arrangement." }
    ]
  },
  "/charities-independent-examination-and-audit-services/": {
    process: [
      ["01", "Governance and reporting obligations review", "We confirm the charity's income, assets and structure to determine whether an independent examination or a full audit is required under the Charities Act, and review the trustees' report and financial statements format."],
      ["02", "Independent examination or audit", "We conduct the examination or audit in accordance with the Charity Commission's requirements, reviewing the accounts, testing the key transactions and ensuring the reporting reflects the Charities SORP correctly."],
      ["03", "Reporting to trustees and submission", "We present our findings to the trustee board, produce the independent examiner's or auditor's report, and ensure the accounts are submitted to the Charity Commission within the filing deadline."]
    ],
    clientTypes: [
      ["01", "Registered charities with income over £25,000", "Charities with annual income exceeding £25,000 must have their accounts independently examined or audited depending on income level and gross assets, under Charity Commission requirements."],
      ["02", "Grant-funded charities with reporting requirements", "Charities receiving grants from central government, local authorities or lottery funds where the grant conditions require an independent examination or audit certificate as a condition of funding."],
      ["03", "Charities with trading subsidiaries", "Charities that have established trading companies to undertake commercial activities, where both the charity and the subsidiary require separate assurance and consolidated reporting to the Charity Commission."]
    ],
    testimonial: {
      quote: "The independent examiner understood the Charities SORP, asked sensible questions and produced a clear report that our trustees could follow without an accounting background.",
      attribution: "Client review — Charity, Hampshire"
    },
    faq: [
      { q: "When does a charity need an audit rather than an independent examination?", a: "A charity that is not a company requires an audit where annual income exceeds £1 million, or where gross assets exceed £3.26 million and income exceeds £250,000. A charitable company requires an audit where income exceeds £500,000. Below these thresholds, an independent examination is generally sufficient. We confirm the requirement for each charity before the engagement begins." },
      { q: "What is the Charities SORP?", a: "The Charities SORP (Statement of Recommended Practice) sets out the principles and specific disclosures for charity accounts, including the treatment of restricted and unrestricted funds, the trustees' report, and the presentation of income and expenditure. We prepare and review charity accounts to the SORP standard as a matter of course." },
      { q: "What are the Charity Commission filing deadlines?", a: "Registered charities with income above £25,000 must submit their annual report and accounts to the Charity Commission within ten months of the end of their financial year. We manage the examination and reporting timeline to ensure this deadline is met without last-minute pressure." },
      { q: "What should trustees look for in the examiner's report?", a: "A clean report confirms that nothing has come to the examiner's attention indicating that the accounts are not in accordance with the accounting and reporting requirements and that assets have not been applied in accordance with the charity's objects. Any matters of concern are reported to the trustees and, if material, to the Charity Commission. We discuss findings with trustees before the report is finalised." }
    ]
  },
  "/solicitors-accounts-rules-audits/": {
    process: [
      ["01", "Scoping and access", "We confirm the reporting period, review the accounting systems in use, obtain access to client account records and agree the fieldwork timetable with the practice manager or COFA."],
      ["02", "Client money testing and SAR compliance review", "We examine client ledger balances, bank reconciliations, residual balance handling, prompt payment of receipts and any areas where the SRA Solicitors Accounts Rules require specific procedural compliance."],
      ["03", "Accountant's report and recommendations", "We produce the accountant's report for submission to the SRA, provide written recommendations on any procedural improvements identified and discuss the findings with the practice's compliance officer."]
    ],
    clientTypes: [
      ["01", "Law firms above the SRA client account threshold", "Firms that hold client money in a designated client account and are required to deliver an annual accountant's report to the SRA within the required timeframe."],
      ["02", "Firms changing their compliance officer", "Practices where the COFA or compliance officer has changed and a fresh review of client account procedures is a sensible step before the next SRA filing deadline."],
      ["03", "Firms after regulatory contact from the SRA", "Practices that have received regulatory correspondence about client account compliance and want independent assurance that the issues raised have been addressed properly."]
    ],
    testimonial: {
      quote: "Thorough, efficient and clearly presented. The report was submitted six weeks before the deadline with a brief, practical set of recommendations that the compliance team implemented within a month.",
      attribution: "Client review — Law firm, Portsmouth"
    },
    faq: [
      { q: "What are the SRA Solicitors Accounts Rules?", a: "The SRA Solicitors Accounts Rules (SAR) governs how authorised persons must deal with client money — money belonging to clients or third parties. It applies to all SRA-authorised firms that hold client money. The Rules cover how client money is kept, how quickly receipts must be paid into a client account, when money can be transferred to the firm's own account and how residual balances must be handled." },
      { q: "What does the accountant's examination involve?", a: "We review the client account bank reconciliations for the reporting period, test a sample of client ledgers, check the handling of bills raised, money received and transfers between office and client account, and review the procedures for dealing with residual balances. We look for systematic failures as well as individual errors." },
      { q: "What is the COFA?", a: "The COFA — Compliance Officer for Finance and Administration — is the individual within the firm responsible for compliance with the SRA Accounts Rules and other financial and administrative obligations. The COFA is required to report certain matters to the SRA. We work directly with the COFA during the examination and in the post-examination reporting process." },
      { q: "What happens if we change the accounting period?", a: "If the firm's accounting year changes, the accountant's report must cover the old and new periods to avoid a gap in reporting. We manage the examination to ensure continuous coverage and that no period is left without an accountant's report being filed with the SRA." }
    ]
  },
  "/tax/": {
    process: [
      ["01", "Full position review", "We review your personal and business tax positions together, mapping income sources, existing structures, reliefs in use and any transactions planned for the coming year that will have a tax consequence."],
      ["02", "Compliance and planning", "We prepare all required tax filings accurately and on time, while identifying the planning opportunities that reduce the overall exposure across personal and business tax simultaneously."],
      ["03", "Filing, monitoring and year-ahead planning", "We file all returns, manage HMRC correspondence, monitor for changes in legislation that affect your position and brief you on any actions needed before the next year-end."]
    ],
    clientTypes: [
      ["01", "Business owners needing joined-up advice", "Where company tax, director remuneration, dividends and personal tax interact and need coordinated planning rather than separate compliance treatments managed independently."],
      ["02", "Individuals with complex income sources", "Employment, self-employment, property, investments, pensions and international income combined in ways that require careful reporting and proactive planning ahead of each year-end."],
      ["03", "Organisations needing reliable annual compliance", "Companies, partnerships, trusts and LLPs needing accurate annual compliance and the planning conversations that prevent unnecessary tax cost year on year."]
    ],
    testimonial: {
      quote: "Tax across the company and personally had always been handled separately. Bringing it together into one view for the first time showed us exactly where we were over-paying.",
      attribution: "Client review — Business owner, Hampshire"
    },
    faq: [
      { q: "What tax services are covered?", a: "We cover corporation tax, personal income tax, capital gains tax, inheritance tax, VAT, PAYE and National Insurance. We advise on all areas and manage the compliance filings across the full range of taxes relevant to your business and personal positions." },
      { q: "Do you deal with HMRC directly?", a: "Yes. We act as your agent with HMRC, manage correspondence, respond to queries and represent your interests in any compliance or enquiry work. You do not need to contact HMRC directly for routine matters." },
      { q: "How does business tax planning interact with personal tax?", a: "For business owners, the company's tax position, salary, dividends, pension contributions and the personal tax return all interact. Decisions made in one area affect the others. We review the combined position to identify the most efficient overall structure, rather than treating each element separately." },
      { q: "What if I am already using another accountant?", a: "We are happy to take over from an existing adviser. We manage the professional clearance process, obtain the relevant records and take over the relationship smoothly. We will be honest about the current position and identify any gaps or improvements needed from the outset." }
    ]
  }
};

const service = (path, title, subtitle, area, imageUrl = site.images.finance, features = commonServiceFeatures, heading = null, body = null) => ({
  path,
  title,
  subtitle,
  type: "service",
  area,
  image: imageUrl,
  features,
  heading: heading || title,
  body: body || subtitle,
  ...(serviceExtras[path] || { process: defaultProcess, clientTypes: [], faq: [], testimonial: null })
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
