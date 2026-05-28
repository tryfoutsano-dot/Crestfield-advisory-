import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import {
  blogCategories,
  calculatorPages,
  heroSlides,
  nav,
  offices,
  pages,
  resourceCards,
  serviceCards,
  servicePages,
  site,
  teamMembers
} from "../src/site-data.mjs";

const root = process.cwd();

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const normalize = (path) => (path || "/").split("#")[0];
const isActive = (current, path) => normalize(current) === normalize(path);
const heroStyle = (image) => `style="--hero-image:url('${escapeHtml(image || site.images.office)}')"`;

function renderHeader(currentPath) {
  return `
    <div class="topbar">
      <a href="tel:${site.phone.replaceAll(" ", "")}">${site.phone}</a>
      <a href="mailto:${site.email}">${site.email}</a>
      <a class="social" href="#" aria-label="Facebook">F</a>
      <a class="social" href="#" aria-label="X">X</a>
    </div>
    <header class="main-header">
      <a class="logo" href="/" aria-label="${site.brand} home">
        <span class="logo-mark">CA</span>
        <span>
          <span class="logo-word">${site.brand}</span>
          <span class="logo-sub">${site.descriptor}</span>
        </span>
      </a>
      <nav class="site-nav" aria-label="Main navigation">
        <ul class="nav-list">
          ${nav.map((item) => renderNavItem(item, currentPath)).join("")}
        </ul>
      </nav>
      <a class="cloud-badge" href="/xero-cloud-accounting-experts-2/">Cloud<br>Partner</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </header>
  `;
}

function renderNavItem(item, currentPath) {
  if (!item.children) {
    return `<li class="nav-item"><a class="nav-link${isActive(currentPath, item.path) ? " is-active" : ""}" href="${item.path}">${item.label}</a></li>`;
  }

  const submenu = item.mega
    ? `<div class="mega-menu"><div class="mega-grid">${item.children.map(renderMegaColumn).join("")}</div></div>`
    : `<div class="submenu"><ul class="submenu-list">${item.children.map(renderSubmenuEntry).join("")}</ul></div>`;

  const label = item.path
    ? `<a class="nav-link${isActive(currentPath, item.path) ? " is-active" : ""}" href="${item.path}">${item.label}</a><button class="submenu-toggle" type="button" aria-expanded="false" aria-label="Open ${item.label} menu">⌄</button>`
    : `<button class="nav-link submenu-toggle-only" type="button" aria-expanded="false">${item.label}</button>`;
  return `<li class="nav-item has-children">${label}${submenu}</li>`;
}

function renderSubmenuEntry(item) {
  return `<li><a href="${item.path}">${item.label}</a></li>`;
}

function renderMegaColumn(item) {
  if (item.children) {
    const title = item.path ? `<a href="${item.path}">${item.label}</a>` : item.label;
    return `
      <div class="mega-column">
        <p class="mega-column-title">${title}</p>
        <ul>${item.children.map((child) => `<li><a href="${child.path}">${child.label}</a></li>`).join("")}</ul>
      </div>
    `;
  }

  return `
    <div class="mega-column">
      <p class="mega-column-title"><a href="${item.path}">${item.label}</a></p>
    </div>
  `;
}

function renderFooter() {
  const newsLinks = [
    "Planning ahead for payroll benefits",
    "Mileage rates and business travel records",
    "Three checks before your next VAT return"
  ];
  const blogLinks = [
    "What a useful month-end pack includes",
    "Cloud accounting clean-up checklist",
    "When to ask for assurance before funding"
  ];

  return `
    <footer class="footer">
      <div class="footer-main">
        <div>
          <a class="logo" href="/">
            <span class="logo-mark">CA</span>
            <span>
              <span class="logo-word">${site.brand}</span>
              <span class="logo-sub">${site.descriptor}</span>
            </span>
          </a>
          <p style="margin-top:18px;color:rgba(255,255,255,.74)">${site.strapline}. This is a portfolio demonstration site using placeholder contact details.</p>
          <a class="btn btn-copper" href="/contact-us/#contact">Get in touch</a>
        </div>
        <div>
          <h3>News</h3>
          <ul>${newsLinks.map((title) => `<li><a href="/resources-2/news-and-reports/">${title}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h3>Blog</h3>
          <ul>${blogLinks.map((title) => `<li><a href="/blog/">${title}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/privacy/">Privacy Policy</a></li>
            <li><a href="/cookies/">Cookie Policy</a></li>
            <li><a href="/disclaimer/">Disclaimer</a></li>
            <li><a href="/2025-probate-diversity-survey-results/">Diversity Results</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        © ${site.year}. ${site.brand}. Portfolio concept only. Registered office: ${site.address}. No real client data, contact data or regulated advice is provided by this demo.
      </div>
    </footer>
  `;
}

function renderHome() {
  return `
    <section class="hero" aria-label="Featured services">
      ${heroSlides
        .map(
          (slide, index) => `
            <article class="hero-slide${index === 0 ? " is-active" : ""}" ${heroStyle(slide.image)}>
              <div class="hero-content">
                <h1 class="hero-title">${slide.title}</h1>
                <p class="hero-copy">${slide.copy}</p>
                <div class="button-row">
                  <a class="btn btn-light" href="/contact-us/#contact">Book a meeting</a>
                  <a class="btn btn-light" href="tel:${site.phone.replaceAll(" ", "")}">Call us today</a>
                </div>
              </div>
            </article>
          `
        )
        .join("")}
      <button class="hero-arrow prev" data-hero-prev type="button" aria-label="Previous slide">‹</button>
      <button class="hero-arrow next" data-hero-next type="button" aria-label="Next slide">›</button>
      <div class="hero-dots">${heroSlides.map((_, index) => `<button class="hero-dot${index === 0 ? " is-active" : ""}" type="button" aria-label="Show slide ${index + 1}"></button>`).join("")}</div>
    </section>

    <section class="section section-navy">
      <div class="container center">
        <h2>Chartered Accountants, Tax Planning & Business Advisers</h2>
        <p class="lead">Chichester | London | Midhurst | Whiteley</p>
        <p>Please see a sample of how we can help you below:</p>
      </div>
      <div class="container service-grid">
        ${serviceCards
          .map(
            (card, index) => `
              <a class="service-tile" href="${card.path}">
                <span class="service-icon">${String(index + 1).padStart(2, "0")}</span>
                <span>
                  <h3>${card.title}</h3>
                  <p>${card.copy}</p>
                </span>
              </a>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="office-strip">
      <div class="container office-row">
        ${offices
          .map(
            (office) => `
              <a class="office-card" href="${office.path}">
                <h3>Accountants<br>${office.name}</h3>
                <p>${office.phone}</p>
              </a>
            `
          )
          .join("")}
        <a class="btn" href="/contact-us/#contact">Lets Talk</a>
      </div>
    </section>

    <section class="section section-navy">
      <div class="narrow center">
        <h2>Welcome to ${site.brand}</h2>
        <p class="lead">Your expert accountants, tax advisers and business partners for growing organisations.</p>
        <p>We support founders, owner-managed businesses, charities and private clients with joined-up accounting, audit, tax and advisory services. The focus is simple: reliable numbers, thoughtful advice and practical support that helps you move with confidence.</p>
        <p>Every engagement starts with listening. From cloud bookkeeping to complex assurance work, we shape the scope around what you need today and what you are trying to build next.</p>
      </div>
    </section>

    <section class="section section-copper">
      <div class="container center">
        <h2>Why choose ${site.brand}?</h2>
        <div class="why-grid">
          ${[
            ["Digital cloud based software", site.images.cloud, "Modern workflows that make reporting faster and more useful."],
            ["We save you time & money", site.images.finance, "Efficient compliance plus proactive advice before costs grow."],
            ["Management Information", site.images.laptop, "Dashboards and commentary that help you steer the business."]
          ]
            .map(
              ([title, img, copy]) => `
                <article class="why-item">
                  <img src="${img}" alt="">
                  <h3>${title}</h3>
                  <p>${copy}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section-paper" id="contact">
      <div class="container contact-layout">
        <div>
          <p class="eyebrow">Tea, coffee or a quick video call?</p>
          <h2>Book a Meeting</h2>
          <p class="lead">Use the demo form to show how a portfolio client journey could start. The form does not send real messages.</p>
          ${renderOfficeList()}
        </div>
        ${renderContactForm()}
      </div>
    </section>
  `;
}

function renderPageHero(page) {
  return `
    <section class="page-hero" ${heroStyle(page.image)}>
      <div class="container">
        <div class="breadcrumb"><a href="/">Home</a> / ${page.title}</div>
        <h1>${page.title}</h1>
        <p>${page.subtitle || site.strapline}</p>
      </div>
    </section>
  `;
}

function renderServicePage(page) {
  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container split">
        <div>
          <p class="eyebrow">${page.area}</p>
          <h2>Practical advice, clear process and useful outcomes</h2>
          <p class="lead">${page.subtitle}</p>
          <p>We designed this page to preserve the same service-page purpose as the reference site while using original wording. It explains the problem, shows what the firm does differently and gives visitors a clear next step.</p>
          <ul class="check-list">
            ${page.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
          <a class="btn btn-copper" href="/contact-us/#contact">Contact our specialists</a>
        </div>
        <div class="split-media">
          <img src="${page.image}" alt="">
        </div>
      </div>
    </section>
    <section class="section section-paper">
      <div class="container center">
        <p class="eyebrow">What makes us different?</p>
        <h2>Senior input without the slow machinery</h2>
        <div class="feature-grid">
          ${[
            ["Commercial focus", "We look at the numbers in context, so recommendations connect to cash, margin, risk and growth."],
            ["Plain-English communication", "You get clear milestones, clear responsibilities and advice you can actually use."],
            ["Technology friendly", "Cloud systems, clean data and well-designed reporting reduce admin and improve decisions."]
          ]
            .map(([title, copy]) => `<article class="feature-card"><h3>${title}</h3><p>${copy}</p></article>`)
            .join("")}
        </div>
      </div>
    </section>
    <section class="section section-navy">
      <div class="container">
        <div class="cta-band">
          <div>
            <h2>Ready to make the next step?</h2>
            <p>Book a no-pressure introductory meeting using placeholder details for this portfolio build.</p>
          </div>
          <a class="btn btn-light" href="/contact-us/#contact">Book a meeting</a>
        </div>
      </div>
    </section>
  `;
}

function renderAboutPage(page) {
  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container split">
        <div>
          <p class="eyebrow">Our heritage</p>
          <h2>Experienced, modern and deliberately approachable</h2>
          <p>This portfolio practice has been written as an original alternative to the reference site: the same broad accountancy proposition, but with new naming, placeholder contact data and fresh copy.</p>
          <p>Its story is built around a regional firm that grew from compliance work into advisory, cloud accounting, audit and specialist tax support. The goal is to feel established without pretending to be the real company.</p>
        </div>
        <div class="split-media"><img src="${site.images.office}" alt=""></div>
      </div>
    </section>
    <section class="section section-paper">
      <div class="container split reverse">
        <div>
          <p class="eyebrow">How we can help</p>
          <h2>All the core services under one roof</h2>
          <p>From personal tax reviews to cloud bookkeeping and audit assurance, the site presents a joined-up advisory firm for businesses and individuals who want calm, useful financial support.</p>
          <a class="btn btn-copper" href="/contact-us/#contact">Book a free introductory meeting</a>
        </div>
        <div class="split-media"><img src="${site.images.meeting}" alt=""></div>
      </div>
    </section>
    ${renderCtaSection()}
  `;
}

function renderTeamPage(page) {
  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container center">
        <p class="eyebrow">Our accountancy experts</p>
        <h2>People first, numbers always in focus</h2>
        <p class="lead">Click-through cards are represented as a clean team grid for the portfolio version.</p>
      </div>
      <div class="container team-grid" style="margin-top:38px">
        ${teamMembers
          .map(
            (member) => `
              <article class="team-card">
                <img src="${member.image}" alt="${member.name}">
                <div class="team-card-body">
                  <p>${member.role}</p>
                  <h3>${member.name}</h3>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
    ${renderCtaSection()}
  `;
}

function renderCareersPage(page) {
  const values = [
    ["Quality Service", "Reliable work, thoughtful review and high standards."],
    ["Enthusiasm", "A team culture that treats learning as part of the work."],
    ["Smart Working", "Cloud tools, flexible habits and practical processes."],
    ["Teamwork", "Direct support from colleagues who share knowledge openly."]
  ];

  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container split">
        <div>
          <p class="eyebrow">Careers with ${site.brand}</p>
          <h2>Work that develops your judgement</h2>
          <p>We have kept the shape of the careers page: introduction, staff testimonials, values and a call to apply. The copy is rewritten for a portfolio demo.</p>
          <p>Team members get mentoring, varied client work, study support and a culture that values calm communication as much as technical detail.</p>
        </div>
        <div class="split-media"><img src="${site.images.career}" alt=""></div>
      </div>
    </section>
    <section class="section section-paper">
      <div class="container center">
        <h2>Staff Testimonials</h2>
        <div class="feature-grid">
          ${[
            "I wanted a place where I could learn properly and still feel like a person.",
            "The best part is having people around me who explain the why, not just the task.",
            "The work is varied, the standards are high and support is easy to ask for."
          ]
            .map((quote) => `<article class="feature-card"><h3>“${quote}”</h3></article>`)
            .join("")}
        </div>
      </div>
    </section>
    <section class="section section-navy">
      <div class="container center">
        <p class="eyebrow">The Crestfield Quest</p>
        <h2>Why work here?</h2>
        <div class="feature-grid">
          ${values.map(([title, copy]) => `<article class="feature-card"><h3>${title}</h3><p>${copy}</p></article>`).join("")}
        </div>
        <div style="margin-top:34px"><a class="btn btn-light" href="/job-application-form/">View demo application form</a></div>
      </div>
    </section>
  `;
}

function renderReviewsPage(page) {
  const reviews = [
    ["A calm extension of our finance team", "They translated our messy management accounts into a rhythm the directors could actually use."],
    ["Clear, responsive and practical", "The advice was technical when it needed to be, but never wrapped in jargon."],
    ["Helpful during a funding round", "The audit preparation and forecasts gave our lenders confidence at exactly the right moment."]
  ];
  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container center">
        <p class="lead">The trust of clients is not something any advisory firm should take for granted. These are sample review cards for the portfolio version.</p>
        <div class="feature-grid" style="margin-top:34px">
          ${reviews.map(([title, copy]) => `<article class="review-card"><h3>${title}</h3><p>${copy}</p><p><strong>Excellent service</strong></p></article>`).join("")}
        </div>
      </div>
    </section>
    ${renderCtaSection()}
  `;
}

function renderContactPage(page) {
  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container">
        <p class="eyebrow">Contact us today</p>
        <h2>By phone, email or the demo form</h2>
        <p class="lead">All contact details are placeholders for portfolio use. No real enquiry is submitted.</p>
      </div>
    </section>
    <section class="section section-paper" id="contact">
      <div class="container contact-layout">
        <div>
          <h2>Our Offices</h2>
          ${renderOfficeList()}
          <div style="margin-top:24px">
            <h3>Phone</h3>
            <p>${site.phone}</p>
            <h3>Email</h3>
            <p>${site.email}</p>
            <h3>Open</h3>
            <p>Monday to Thursday: 9am - 5:30pm<br>Friday: 9am - 4:30pm</p>
          </div>
        </div>
        ${renderContactForm()}
      </div>
    </section>
  `;
}

function renderResourcesPage(page) {
  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container center">
        <p class="eyebrow">Library & resources</p>
        <h2>Tools, explainers and reference pages</h2>
        <div class="resource-grid" style="margin-top:38px">
          ${resourceCards.map((card) => renderResourceCard(card)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderAboutOverviewPage(page) {
  const cards = [
    { title: "Who are we?", path: "/about-us-accountants-in-hampshire-west-sussex/", copy: "The practice story, approach and values." },
    { title: "Meet the Team", path: "/lewis-brownlee-team-west-sussex-and-accountancy-experts/", copy: "A portfolio team grid with adviser profiles." },
    { title: "Careers", path: "/careers-3/", copy: "Recruitment, team values and a demo application journey." },
    { title: "Corporate and Social Responsibility", path: "/corporate-and-social-responsibility/", copy: "Community, sustainability and responsible-business content." }
  ];

  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container center">
        <p class="eyebrow">About ${site.brand}</p>
        <h2>Everything about the practice in one place</h2>
        <p class="lead">This overview page makes the top-level About Us navigation item clickable while keeping the dropdown for direct access.</p>
        <div class="resource-grid" style="margin-top:38px">
          ${cards.map(renderResourceCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderServicesOverviewPage(page) {
  const grouped = servicePages.reduce((groups, servicePage) => {
    if (servicePage.path === "/xero-cloud-accounting-experts/" || servicePage.path === "/probate/") return groups;
    if (!groups.has(servicePage.area)) groups.set(servicePage.area, []);
    groups.get(servicePage.area).push(servicePage);
    return groups;
  }, new Map());

  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container center">
        <p class="eyebrow">Our services</p>
        <h2>All services, clearly organised</h2>
        <p class="lead">The dropdown remains quick for navigation, and this page gives visitors a full overview of every service area.</p>
      </div>
    </section>
    ${[...grouped.entries()]
      .map(
        ([area, items], index) => `
          <section class="section ${index % 2 ? "section-paper" : "section-navy"}">
            <div class="container">
              <p class="eyebrow">${area}</p>
              <h2>${area}</h2>
              <div class="card-grid" style="margin-top:30px">
                ${items
                  .map(
                    (item) => `
                      <article class="feature-card">
                        <h3>${item.title}</h3>
                        <p>${item.subtitle}</p>
                        <a class="btn ${index % 2 ? "btn-copper" : "btn-light"}" href="${item.path}">View service</a>
                      </article>
                    `
                  )
                  .join("")}
              </div>
            </div>
          </section>
        `
      )
      .join("")}
  `;
}

function renderLoginsOverviewPage(page) {
  const cards = [
    { title: "Client Portal", path: "/client-portal/", copy: "A demo secure portal entry point." },
    { title: "Xero Login", path: "/xero-login/", copy: "A placeholder for cloud accounting access." },
    { title: "Dext Login", path: "/dext-login/", copy: "A placeholder for receipt and document capture." },
    { title: "Quickbooks Online Login", path: "/quickbooks-online-login/", copy: "A placeholder for Quickbooks users." }
  ];

  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container center">
        <p class="eyebrow">Client access</p>
        <h2>Choose your demo login area</h2>
        <p class="lead">These links are intentionally non-functional placeholders for the portfolio version.</p>
        <div class="resource-grid" style="margin-top:38px">
          ${cards.map(renderResourceCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCalculatorsPage(page) {
  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container center">
        <p class="eyebrow">Calculators</p>
        <h2>Quick sample estimates</h2>
        <div class="resource-grid" style="margin-top:38px">
          ${calculatorPages.map((calc) => renderResourceCard({ title: calc.title, path: calc.path, copy: calc.subtitle })).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCalculatorPage(page) {
  const label = page.calc === "gross" ? "Sales or income" : page.calc === "payroll" ? "Monthly gross pay" : "Amount";
  const secondLabel = page.calc === "gross" ? "Direct costs" : page.calc === "fuel" ? "Monthly mileage" : page.calc === "startup" ? "Setup costs" : "Second amount";

  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container split">
        <div>
          <p class="eyebrow">Interactive demo</p>
          <h2>${page.title}</h2>
          <p>This lightweight calculator is included so the resource pages feel complete. It uses sample assumptions and should not be treated as regulated financial or tax advice.</p>
          <a class="btn btn-copper" href="/resources-2/calculators/">Back to calculators</a>
        </div>
        <div class="calc-tool" data-calc="${page.calc}">
          <div class="field">
            <label for="amount">${label}</label>
            <input id="amount" name="amount" type="number" value="25000" min="0" step="100">
          </div>
          <div class="field">
            <label for="rate">Rate %</label>
            <input id="rate" name="rate" type="number" value="${page.calc === "vat" ? 20 : 7}" min="0" step="0.1">
          </div>
          <div class="field">
            <label for="months">Months</label>
            <input id="months" name="months" type="number" value="36" min="1" step="1">
          </div>
          <div class="field">
            <label for="second">${secondLabel}</label>
            <input id="second" name="second" type="number" value="12000" min="0" step="100">
          </div>
          <div class="calc-result" data-calc-output></div>
        </div>
      </div>
    </section>
  `;
}

function renderBlogPage(page) {
  const posts = [
    ["Preparing your numbers before a busy quarter", "A practical checklist for reports, cash flow and upcoming filing dates."],
    ["What does good VAT review work include?", "How advisory firms can spot risk before a return is submitted."],
    ["Using cloud accounts to shorten month end", "A simple workflow for cleaner data and faster decisions."]
  ];
  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container blog-grid">
        ${posts
          .map(
            ([title, copy]) => `
              <article class="blog-card">
                <p class="eyebrow">Insight</p>
                <h3>${title}</h3>
                <p>${copy}</p>
                <a href="/blog/">Read the sample article</a>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderLocationPage(page) {
  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container split">
        <div>
          <p class="eyebrow">${page.name} office</p>
          <h2>${page.title}</h2>
          <p class="lead">${page.subtitle}</p>
          <p><strong>Address:</strong><br>${page.address}</p>
          <p><strong>Phone:</strong><br>${page.phone}</p>
          <a class="btn btn-copper" href="/contact-us/#contact">Book a meeting</a>
        </div>
        <div class="map-placeholder">Map placeholder</div>
      </div>
    </section>
    ${renderCtaSection()}
  `;
}

function renderGenericPage(page) {
  const cards = [
    ["Clear scope", "Visitors can understand what the page is for and where to go next."],
    ["Useful details", "The layout leaves room for forms, downloads, media, dates or policy text."],
    ["Portfolio safe", "All wording is original and contact details are placeholders."]
  ];

  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container split">
        <div>
          <p class="eyebrow">${page.type.replaceAll("-", " ")}</p>
          <h2>${page.title}</h2>
          <p class="lead">${page.subtitle || "A preserved page in the portfolio structure."}</p>
          <p>This page keeps the role of the original URL in the site architecture while replacing the copy with portfolio-safe content. It can be expanded later with real case study material, forms or sector-specific detail.</p>
          <a class="btn btn-copper" href="/contact-us/#contact">Contact us</a>
        </div>
        <div class="split-media"><img src="${page.image || site.images.office}" alt=""></div>
      </div>
    </section>
    <section class="section section-paper">
      <div class="container feature-grid">
        ${cards.map(([title, copy]) => `<article class="feature-card"><h3>${title}</h3><p>${copy}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function renderCalendarPage(page) {
  const dates = [
    ["31 Jan", "Self-assessment filing and balancing payment deadline."],
    ["6 Apr", "Start of the new UK tax year."],
    ["31 Jul", "Second payment on account for self-assessment."],
    ["19 Oct", "PAYE and CIS quarterly postal payment date."],
    ["31 Dec", "Planning checkpoint before year-end reporting begins."]
  ];
  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container">
        <h2>Important dates</h2>
        <div class="timeline">
          ${dates.map(([date, copy]) => `<article class="timeline-item"><strong>${date}</strong><span>${copy}</span></article>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderApplicationPage(page) {
  return `
    ${renderPageHero(page)}
    <section class="section section-paper">
      <div class="container contact-layout">
        <div>
          <h2>${page.title}</h2>
          <p class="lead">${page.subtitle}</p>
          <p>The form mirrors a recruitment or onboarding journey but does not transmit data.</p>
        </div>
        ${renderContactForm("Send demo form")}
      </div>
    </section>
  `;
}

function renderOfficeList() {
  return `
    <div class="office-list">
      ${offices
        .map(
          (office) => `
            <article class="info-card">
              <h3><a href="${office.path}">${office.name} Office</a></h3>
              <p>${office.address}</p>
              <p><strong>${office.phone}</strong></p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderContactForm(buttonText = "Send your message") {
  return `
    <form class="contact-form" data-demo-form>
      <h2>Book a Meeting</h2>
      <div class="form-grid">
        <div class="field">
          <label for="first-name">First name</label>
          <input id="first-name" name="first-name" autocomplete="given-name" required>
        </div>
        <div class="field">
          <label for="last-name">Last name</label>
          <input id="last-name" name="last-name" autocomplete="family-name" required>
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" placeholder="name@example.com" required>
        </div>
        <div class="field">
          <label for="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="020 0000 0000">
        </div>
        <div class="field">
          <label for="purpose">Purpose</label>
          <select id="purpose" name="purpose">
            <option>Enquire about fees</option>
            <option>Arrange a meeting</option>
            <option>General enquiry</option>
            <option>Existing client</option>
          </select>
        </div>
        <div class="field">
          <label for="office">Closest office</label>
          <select id="office" name="office">
            ${offices.map((office) => `<option>${office.name}</option>`).join("")}
          </select>
        </div>
        <div class="field full">
          <label for="services">Services of interest</label>
          <select id="services" name="services">
            <option>Accounts Compliance</option>
            <option>Audit and Assurance</option>
            <option>Business Advisory / Growth</option>
            <option>Cloud Accounting</option>
            <option>Payroll</option>
            <option>Tax Planning</option>
          </select>
        </div>
        <div class="field full">
          <label for="message">Comments or message</label>
          <textarea id="message" name="message" placeholder="Tell us what you would like help with"></textarea>
        </div>
      </div>
      <label><input type="checkbox" required> I consent to this demo site showing a local confirmation message.</label>
      <button class="btn btn-copper" type="submit">${buttonText}</button>
      <p class="form-notice" hidden>Demo form complete. No message was sent.</p>
    </form>
  `;
}

function renderResourceCard(card) {
  return `
    <article class="resource-card">
      <h3>${card.title}</h3>
      <p>${card.copy}</p>
      <a class="btn btn-copper" href="${card.path}">View page</a>
    </article>
  `;
}

function renderCtaSection() {
  return `
    <section class="section section-copper">
      <div class="container cta-band">
        <div>
          <h2>Ready to make the first step?</h2>
          <p>Book a demo introductory meeting with placeholder details.</p>
        </div>
        <a class="btn btn-light" href="/contact-us/#contact">Book a meeting</a>
      </div>
    </section>
  `;
}

function renderPageContent(page) {
  if (page.type === "home") return renderHome();
  if (page.type === "service") return renderServicePage(page);
  if (page.type === "about-overview") return renderAboutOverviewPage(page);
  if (page.type === "services-overview") return renderServicesOverviewPage(page);
  if (page.type === "logins-overview") return renderLoginsOverviewPage(page);
  if (page.type === "about") return renderAboutPage(page);
  if (page.type === "team") return renderTeamPage(page);
  if (page.type === "careers") return renderCareersPage(page);
  if (page.type === "reviews") return renderReviewsPage(page);
  if (page.type === "contact") return renderContactPage(page);
  if (page.type === "resources" || page.type === "resource-list" || page.type === "factsheets" || page.type === "forms" || page.type === "media" || page.type === "newsletter") return renderResourcesPage(page);
  if (page.type === "calculators") return renderCalculatorsPage(page);
  if (page.type === "calculator") return renderCalculatorPage(page);
  if (page.type === "blog") return renderBlogPage(page);
  if (page.type === "location") return renderLocationPage(page);
  if (page.type === "calendar") return renderCalendarPage(page);
  if (page.type === "application" || page.type === "client-form") return renderApplicationPage(page);
  return renderGenericPage(page);
}

function renderHtml(page) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(page.title)} | ${site.brand}</title>
    <meta name="description" content="${escapeHtml(page.subtitle || site.strapline)}">
    <link rel="stylesheet" href="/assets/styles.css">
  </head>
  <body>
    ${renderHeader(page.path)}
    <main>
      ${renderPageContent(page)}
    </main>
    ${renderFooter()}
    <script src="/assets/main.js"></script>
  </body>
</html>
`;
}

async function writePage(page) {
  const cleanPath = normalize(page.path);
  const file = cleanPath === "/" ? join(root, "index.html") : join(root, cleanPath.replace(/^\/|\/$/g, ""), "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, renderHtml(page), "utf8");
}

const byPath = new Map();
for (const page of pages) {
  byPath.set(normalize(page.path), page);
}

await Promise.all([...byPath.values()].map(writePage));

const sitemap = [...byPath.values()]
  .map((page) => `https://portfolio.example${normalize(page.path)}`)
  .join("\n");
await writeFile(join(root, "generated-pages.txt"), sitemap, "utf8");

console.log(`Generated ${byPath.size} pages.`);
