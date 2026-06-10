import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import {
  blogCategories,
  calculatorPages,
  heroSlides,
  nav,
  newsArticles,
  offices,
  pages,
  resourceCards,
  serviceCards,
  servicePages,
  site,
  teamMembers
} from "../src/site-data.mjs";

const root = process.cwd();

const canonicals = {
  "/xero-cloud-accounting-experts/": "/xero-cloud-accounting-experts-2/",
  "/probate/": "/probate-services/",
  "/whiteley-accountants/": "/whiteley-office/"
};

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const normalize = (path) => (path || "/").split("#")[0];
const isActive = (current, path) => normalize(current) === normalize(path);
const heroStyle = (image) => `style="--hero-image:url('${escapeHtml(image || site.images.office)}')"`;

function removeVisibleDashes(html) {
  let output = "";
  let inTag = false;

  for (const char of html) {
    if (char === "<") inTag = true;

    if (!inTag && (char === "-" || char === "–" || char === "—")) {
      output += " ";
    } else {
      output += char;
    }

    if (char === ">") inTag = false;
  }

  return output
    .replaceAll("&ndash;", " ")
    .replaceAll("&mdash;", " ")
    .replaceAll("&#8211;", " ")
    .replaceAll("&#8212;", " ");
}

function renderHeader(currentPath) {
  return `
    <div class="topbar">
      <a href="tel:${site.phone.replaceAll(" ", "")}">${site.phone}</a>
      <a href="mailto:${site.email}">${site.email}</a>
      <a class="social" href="${site.social.linkedin}" aria-label="LinkedIn" rel="noopener noreferrer">in</a>
      <a class="social" href="${site.social.twitter}" aria-label="X (Twitter)" rel="noopener noreferrer">X</a>
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
    ["Planning ahead for payroll benefits", "/resources-2/news-and-reports/planning-ahead-for-payroll-benefits/"],
    ["Mileage rates and business travel records", "/resources-2/news-and-reports/mileage-rates-and-business-travel-records/"],
    ["Key dates: tax calendar 2026", "/resources-2/news-and-reports/key-dates-tax-calendar-2026/"]
  ];
  const blogLinks = [
    ["Making Tax Digital for Income Tax: Your April 2026 Checklist", "/blog/making-tax-digital-for-income-tax/"],
    ["What a useful month-end pack includes", "/blog/"],
    ["Cloud accounting clean-up checklist", "/blog/"]
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
          <p style="margin-top:18px;color:rgba(255,255,255,.74)">${site.strapline}. Portfolio website using sample contact details.</p>
          <a class="btn btn-copper" href="/contact-us/#contact">Get in touch</a>
        </div>
        <div>
          <h3>News</h3>
          <ul>${newsLinks.map(([title, path]) => `<li><a href="${path}">${title}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h3>Blog</h3>
          <ul>${blogLinks.map(([title, path]) => `<li><a href="${path}">${title}</a></li>`).join("")}</ul>
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
        © ${site.year}. ${site.brand}. Portfolio concept only. Registered office: ${site.address}. No real client data, contact data or regulated advice is provided.
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
        <a class="btn" href="/contact-us/#contact">Let's Talk</a>
      </div>
    </section>

    <section class="section section-navy">
      <div class="narrow center">
        <h2>Welcome to ${site.brand}</h2>
        <p class="lead">Your expert accountants, tax advisers and business partners for growing organisations.</p>
        <p>We support founders, owner-managed businesses, charities and private clients with joined-up accounting, audit, tax and advisory services. The focus is simple: reliable numbers, sound advice and support that helps you move with confidence.</p>
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
                  <img src="${img}" alt="${title}" loading="lazy">
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
          <p class="lead">Use the form to outline what you need. For this portfolio version, it shows a local confirmation message only.</p>
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
  const contactUrl = `/contact-us/?service=${encodeURIComponent(page.area)}#contact`;
  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container split">
        <div>
          <p class="eyebrow">${page.area}</p>
          <h2>${page.heading}</h2>
          <p class="lead">${page.subtitle}</p>
          <p>${page.body}</p>
          <ul class="check-list">
            ${page.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
          <a class="btn btn-copper" href="${contactUrl}">Talk to a specialist</a>
        </div>
        <div class="split-media">
          <img src="${page.image}" alt="${page.title} advisory services" loading="lazy">
        </div>
      </div>
    </section>
    <section class="section section-paper">
      <div class="container center">
        <p class="eyebrow">How we work</p>
        <h2>What to expect when you work with us</h2>
        <div class="feature-grid">
          ${[
            ["Senior-led throughout", "The person who scopes the engagement is the person who does the work. No handoffs to junior staff."],
            ["Straightforward advice", "Recommendations are explained in language that supports decisions and technical compliance."],
            ["Early planning", "We raise planning points and flag issues while there is still time to act."]
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
            <p>Book an introductory meeting using the sample contact details on this portfolio site.</p>
          </div>
          <a class="btn btn-light" href="${contactUrl}">Book a meeting</a>
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
          <p>This portfolio practice presents a regional accountancy firm with a broad advisory, tax and audit proposition. The naming, contact details and copy are original to this build.</p>
          <p>The story is built around a firm that grew from compliance work into advisory, cloud accounting, audit and specialist tax support.</p>
        </div>
        <div class="split-media"><img src="${site.images.office}" alt="Crestfield Advisory office" loading="lazy"></div>
      </div>
    </section>
    <section class="section section-paper">
      <div class="container split reverse">
        <div>
          <p class="eyebrow">How we can help</p>
          <h2>All the core services under one roof</h2>
          <p>From personal tax reviews to cloud bookkeeping and audit assurance, the site presents a joined-up advisory firm for businesses and individuals who want reliable financial support.</p>
          <a class="btn btn-copper" href="/contact-us/#contact">Book a free introductory meeting</a>
        </div>
        <div class="split-media"><img src="${site.images.meeting}" alt="Team meeting at Crestfield Advisory" loading="lazy"></div>
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
                <img src="${member.image}" alt="${member.name}" loading="lazy">
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
    ["Smart Working", "Cloud tools, flexible habits and efficient processes."],
    ["Teamwork", "Direct support from colleagues who share knowledge openly."]
  ];

  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container split">
        <div>
          <p class="eyebrow">Careers with ${site.brand}</p>
          <h2>Work that develops your judgement</h2>
          <p>The careers page introduces the team culture, values and application route in a simple way.</p>
          <p>Team members get mentoring, varied client work, study support and a culture that values good communication as much as technical detail.</p>
        </div>
        <div class="split-media"><img src="${site.images.career}" alt="Working at Crestfield Advisory" loading="lazy"></div>
      </div>
    </section>
    <section class="section section-paper">
      <div class="container center">
        <h2>Staff Testimonials</h2>
        <div class="feature-grid">
          ${[
            "I wanted a place where I could learn properly and still feel like a person.",
            "The best part is having people around me who explain the reason behind the task.",
            "The work is varied, the standards are high and support is easy to ask for."
          ]
            .map((quote) => `<article class="feature-card"><h3>"${quote}"</h3></article>`)
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
        <div style="margin-top:34px"><a class="btn btn-light" href="/job-application-form/">View application form</a></div>
      </div>
    </section>
  `;
}

function renderReviewsPage(page) {
  const reviews = [
    ["A reliable extension of our finance team", "They turned our management accounts into a reporting routine the directors could actually use."],
    ["Responsive and easy to work with", "The advice was technical when it needed to be, but never wrapped in jargon."],
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
        <h2>By phone, email or the contact form</h2>
        <p class="lead">All contact details are sample details for portfolio use. No real enquiry is submitted.</p>
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
        <h2>Choose the resource you need</h2>
        <p class="lead">This is the main resource hub. Calculators, factsheets, forms, news and tax dates each have their own section.</p>
        <div class="resource-grid" style="margin-top:38px">
          ${resourceCards.map((card) => renderResourceCard(card)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderNewsReportsPage(page) {
  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container center">
        <p class="eyebrow">News & reports</p>
        <h2>Updates for business owners and finance teams</h2>
        <p class="lead">Recent notes on tax deadlines, payroll, reporting and business records.</p>
      </div>
      <div class="container blog-grid" style="margin-top:38px">
        ${newsArticles
          .map(
            (article) => `
              <article class="blog-card">
                <p class="eyebrow">${article.content.category}</p>
                <h3>${article.title}</h3>
                <p style="font-weight:800;color:var(--muted)">${article.content.date}</p>
                <p>${article.content.summary}</p>
                <a href="${article.path}">Read article</a>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFactsheetsPage(page) {
  const factsheets = [
    { title: "VAT registration", copy: "When registration may be required, what records to keep and how to prepare for the first return.", path: "/vat-advice/" },
    { title: "Director loan accounts", copy: "How overdrawn loan accounts arise and why they should be reviewed before the company year end.", path: "/business-tax/" },
    { title: "Payroll year-end", copy: "The main payroll checks before P60s, benefits reporting and the first pay run of the new tax year.", path: "/payroll/" },
    { title: "Making Tax Digital", copy: "What digital records, quarterly updates and final declarations mean for sole traders and landlords.", path: "/making-tax-digital/" },
    { title: "Capital allowances", copy: "A guide to plant, equipment, annual investment allowance and timing points for business purchases.", path: "/business-tax/" },
    { title: "Management accounts", copy: "What a useful monthly reporting pack should show and how directors can use it in board meetings.", path: "/bookkeeping/" }
  ];

  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container center">
        <p class="eyebrow">Factsheets</p>
        <h2>Short guides by topic</h2>
        <p class="lead">Use these summaries as a starting point before speaking to an adviser about your exact circumstances.</p>
      </div>
      <div class="container resource-grid" style="margin-top:38px">
        ${factsheets
          .map(
            (item) => `
              <article class="resource-card">
                <h3>${item.title}</h3>
                <p>${item.copy}</p>
                <a class="btn btn-copper" href="${item.path}">Open related guide</a>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFormsPage(page) {
  const forms = [
    { title: "New client information request", path: "/new-client-information-request/", copy: "Basic business, contact and service information for a prospective client." },
    { title: "Job application form", path: "/job-application-form/", copy: "A simple application route for careers enquiries." },
    { title: "Payroll starter checklist", path: "/payroll-starter-checklist/", copy: "Details needed before adding a new employee to payroll." },
    { title: "Bookkeeping handover checklist", path: "/bookkeeping-handover-checklist/", copy: "Records and access details needed before monthly bookkeeping begins." },
    { title: "VAT records checklist", path: "/vat-records-checklist/", copy: "Documents and reports to prepare before a VAT return review." },
    { title: "Probate information request", path: "/probate-information-request/", copy: "Initial estate information needed before probate accounts or tax work can begin." }
  ];

  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container center">
        <p class="eyebrow">Forms</p>
        <h2>Onboarding and planning documents</h2>
        <p class="lead">Forms are grouped by the type of information usually needed at the start of an engagement.</p>
      </div>
      <div class="container resource-grid" style="margin-top:38px">
        ${forms.map(renderResourceCard).join("")}
      </div>
    </section>
  `;
}

function renderMediaPage(page) {
  const items = [
    ["Video", "Understanding your monthly management accounts", "A short walkthrough of the reports directors should review each month."],
    ["Podcast", "Cloud accounting clean-up", "A discussion on bank feeds, coding rules and how to keep bookkeeping reliable."],
    ["Video", "Preparing for a tax planning meeting", "What information to gather before discussing company, personal or property tax."],
    ["Podcast", "Payroll questions employers often ask", "A practical conversation on starters, leavers, benefits and year-end payroll routines."],
    ["Video", "When a business needs audit or assurance", "How to understand audit thresholds, lender requests and other assurance needs."],
    ["Podcast", "Cash flow forecasting for owner-managed businesses", "Why forecasts work best when they are maintained monthly, not just before funding rounds."]
  ];

  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container center">
        <p class="eyebrow">Videos & podcasts</p>
        <h2>Advisory conversations and explainers</h2>
        <p class="lead">Short-form content for common finance, tax and reporting questions.</p>
      </div>
      <div class="container blog-grid" style="margin-top:38px">
        ${items
          .map(
            ([label, title, copy]) => `
              <article class="blog-card">
                <p class="eyebrow">${label}</p>
                <h3>${title}</h3>
                <p>${copy}</p>
                <a href="/contact-us/#contact">Request this topic</a>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderNewsletterPage(page) {
  return `
    ${renderPageHero(page)}
    <section class="section section-paper">
      <div class="container contact-layout">
        <div>
          <p class="eyebrow">Newsletter</p>
          <h2>Monthly finance notes</h2>
          <p class="lead">Sign up for tax reminders, reporting ideas and short planning notes for owner-managed businesses.</p>
          <ul class="check-list">
            <li>Deadline reminders before common filing dates.</li>
            <li>Practical notes on bookkeeping, payroll and tax records.</li>
            <li>Short updates when rules affect small businesses or landlords.</li>
          </ul>
        </div>
        <form class="contact-form" data-local-form>
          <h2>Sign up</h2>
          <div class="field">
            <label for="newsletter-name">Name</label>
            <input id="newsletter-name" name="newsletter-name" autocomplete="name" required>
          </div>
          <div class="field">
            <label for="newsletter-email">Email</label>
            <input id="newsletter-email" name="newsletter-email" type="email" autocomplete="email" required>
          </div>
          <div class="field">
            <label for="newsletter-interest">Main interest</label>
            <select id="newsletter-interest" name="newsletter-interest">
              <option>Business tax</option>
              <option>Payroll</option>
              <option>Cloud accounting</option>
              <option>Personal tax</option>
              <option>Audit and assurance</option>
            </select>
          </div>
          <label><input type="checkbox" required> I understand this portfolio form shows a local confirmation message only.</label>
          <button class="btn btn-copper" type="submit">Sign up</button>
          <p class="form-notice" hidden>Form complete. No message was sent.</p>
        </form>
      </div>
    </section>
  `;
}

function renderRatesPage(page) {
  const sections = [
    {
      title: "Income Tax: England, Wales and Northern Ireland",
      points: [
        "Personal Allowance: £12,570.",
        "Basic rate: 20% from £12,571 to £50,270.",
        "Higher rate: 40% from £50,271 to £125,140.",
        "Additional rate: 45% over £125,140."
      ],
      source: "https://www.gov.uk/income-tax-rates/current-rates-and-allowances"
    },
    {
      title: "Scottish PAYE bands",
      points: [
        "Personal Allowance: £12,570.",
        "Starter rate: 19% from £12,571 to £16,537.",
        "Basic rate: 20% from £16,538 to £29,526.",
        "Intermediate rate: 21% from £29,527 to £43,662.",
        "Higher rate: 42% from £43,663 to £75,000.",
        "Advanced rate: 45% from £75,001 to £125,140.",
        "Top rate: 48% over £125,140."
      ],
      source: "https://www.gov.uk/scottish-income-tax"
    },
    {
      title: "National Insurance: Class 1",
      points: [
        "Primary threshold: £12,570 per year.",
        "Upper earnings limit: £50,270 per year.",
        "Employee category A rate: 8% between the primary threshold and upper earnings limit.",
        "Employee category A rate above the upper earnings limit: 2%."
      ],
      source: "https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027"
    },
    {
      title: "VAT",
      points: [
        "Standard rate: 20%.",
        "Reduced rate: 5%.",
        "Zero rate: 0%.",
        "Some supplies are exempt or outside the scope, so coding should be checked before filing."
      ],
      source: "https://www.gov.uk/vat-rates"
    },
    {
      title: "Dividend Tax",
      points: [
        "Dividend allowance: £500.",
        "Basic rate: 10.75% above the allowance.",
        "Higher rate: 35.75% above the allowance.",
        "Additional rate: 39.35% above the allowance."
      ],
      source: "https://www.gov.uk/tax-on-dividends"
    },
    {
      title: "Corporation Tax",
      points: [
        "Main rate: 25% for profits over £250,000.",
        "Small profits rate: 19% for profits of £50,000 or less.",
        "Marginal relief may apply between £50,000 and £250,000.",
        "Thresholds can be reduced for short accounting periods and associated companies."
      ],
      source: "https://www.gov.uk/corporation-tax-rates"
    }
  ];

  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container center">
        <p class="eyebrow">Tax rates & allowances</p>
        <h2>2026/27 reference rates</h2>
        <p class="lead">A quick reference for common UK tax rates and allowances. Figures should still be checked before filing, planning or advising.</p>
      </div>
      <div class="container resource-grid" style="margin-top:38px">
        ${sections
          .map(
            (section) => `
              <article class="resource-card">
                <h3>${section.title}</h3>
                <ul class="check-list">
                  ${section.points.map((point) => `<li>${point}</li>`).join("")}
                </ul>
                <a class="btn btn-copper" href="${section.source}" target="_blank" rel="noopener noreferrer">View source</a>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderAboutOverviewPage(page) {
  const values = [
    ["Quality Service", "Reliable work, thoughtful review and consistent standards across every engagement, from a first set of accounts to a complex restructure."],
    ["Enthusiasm", "A team culture that treats learning as part of the job. Junior staff get mentoring and varied work; senior staff stay hands-on."],
    ["Smart Working", "Cloud-first workflows through Xero and QuickBooks, flexible client communication and processes built around clear outputs."],
    ["Teamwork", "Direct access to the adviser who knows your file. We share knowledge across the practice and keep handoffs to a minimum."]
  ];

  const subPages = [
    { title: "Who are we?", path: "/who-we-are/", copy: "The practice story, founding approach and the values that shape every client relationship." },
    { title: "Meet the Team", path: "/meet-the-team/", copy: "Partner and director profiles with areas of specialism and direct contact routes." },
    { title: "Careers", path: "/careers/", copy: "Open roles, team culture, study support and a look at the application journey." },
    { title: "Corporate & Social Responsibility", path: "/corporate-and-social-responsibility/", copy: "Community work, sustainability commitments and responsible business practice." }
  ];

  const featured = teamMembers.slice(0, 3);

  return `
    ${renderPageHero(page)}

    <section class="section section-navy">
      <div class="container center">
        <p class="eyebrow">About ${site.brand}</p>
        <h2>Chartered accountants and advisers who stay involved</h2>
        <p class="lead" style="max-width:700px;margin:0 auto 52px">We started in compliance and grew into the advisory work our clients kept asking us to take on. Today the practice covers audit, tax, cloud accounting and business advisory across four offices in the south of England and London.</p>
        <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:2px;max-width:820px;margin:0 auto">
          ${[
            ["4", "offices", "Chichester, London, Midhurst and Whiteley"],
            ["15+", "core services", "Across tax, accounts, audit and advisory"],
            ["4", "service families", "Advisory, Tax, Accounts and Audit & Specialist"]
          ].map(([num, label, sub]) => `
            <div style="padding:32px 20px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14)">
              <p style="margin:0 0 4px;font-size:clamp(44px,5vw,64px);font-weight:900;line-height:1;color:#f1a086">${num}</p>
              <p style="margin:0 0 8px;font-size:12px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.9)">${label}</p>
              <p style="margin:0;font-size:13px;color:rgba(255,255,255,.58)">${sub}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section section-white">
      <div class="container split">
        <div>
          <p class="eyebrow">Our heritage</p>
          <h2>Grown from compliance into full-service advisory</h2>
          <p>${site.brand} was built by accountants who wanted to do more than file returns. The practice grew from a compliance base into advisory, cloud accounting, audit assurance and specialist tax work as clients asked for joined-up support across their financial affairs.</p>
          <p>The name reflects the ambition: advice that stands above the immediate problem and looks at the whole picture. Every engagement starts with listening, whether it is a first set of accounts or a complex share restructure.</p>
          <a class="btn btn-copper" href="/who-we-are/">Read our full story</a>
        </div>
        <div class="split-media">
          <img src="${site.images.office}" alt="${site.brand} practice" loading="lazy">
        </div>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container split reverse">
        <div>
          <p class="eyebrow">How we work</p>
          <h2>Senior-led, clear and early to raise points</h2>
          <p>The person who scopes an engagement is the person who does the work. We do not hand off client relationships to junior staff once the matter is open. That means faster decisions, fewer repeated conversations and advice that builds on what the adviser already knows about your situation.</p>
          <ul class="check-list">
            <li>Senior adviser involvement from scoping through to sign-off</li>
            <li>Recommendations explained in language that supports real decisions</li>
            <li>Planning points raised while there is still time to act</li>
            <li>Cloud-first workflow through Xero and QuickBooks for faster reporting</li>
          </ul>
        </div>
        <div class="split-media">
          <img src="${site.images.meeting}" alt="Client meeting at ${site.brand}" loading="lazy">
        </div>
      </div>
    </section>

    <section class="section section-navy">
      <div class="container center">
        <p class="eyebrow">What drives us</p>
        <h2>Four values, every engagement</h2>
        <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;margin-top:38px;text-align:left">
          ${values.map(([title, copy]) => `
            <article class="feature-card">
              <h3>${title}</h3>
              <p>${copy}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <div class="center" style="margin-bottom:38px">
          <p class="eyebrow">Who you work with</p>
          <h2>Directors and specialists, not account managers</h2>
          <p class="lead">Our practice is structured around specialist directors who stay close to client work from first conversation to final sign-off.</p>
        </div>
        <div class="team-grid">
          ${featured.map((m) => `
            <article class="team-card">
              <img src="${m.image}" alt="${m.name}" loading="lazy">
              <div class="team-card-body">
                <p>${m.role}</p>
                <h3>${m.name}</h3>
              </div>
            </article>
          `).join("")}
        </div>
        <div class="center" style="margin-top:34px">
          <a class="btn btn-copper" href="/meet-the-team/">Meet the whole team</a>
        </div>
      </div>
    </section>

    <section class="section section-copper">
      <div class="narrow center">
        <p class="eyebrow">What clients say</p>
        <p style="font-size:clamp(22px,2.8vw,36px);font-weight:700;line-height:1.28;margin:16px 0 20px">&ldquo;They turned our management accounts into a reporting routine the directors could actually use.&rdquo;</p>
        <p style="font-size:12px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;opacity:.82">Client review &mdash; Virtual Finance Director engagement</p>
        <div style="margin-top:30px">
          <a class="btn btn-light" href="/reviews/">Read more reviews</a>
        </div>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container">
        <div class="center" style="margin-bottom:38px">
          <p class="eyebrow">Four offices, one team</p>
          <h2>Chichester &middot; London &middot; Midhurst &middot; Whiteley</h2>
          <p class="lead">Each office is staffed by the same practice, sharing knowledge and working to the same standards.</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:20px">
          ${offices.map((office) => `
            <a class="feature-card" href="${office.path}" style="display:block;padding:28px;text-decoration:none">
              <p class="eyebrow" style="margin-bottom:10px">Office</p>
              <h3 style="margin-bottom:8px">${office.name}</h3>
              <p style="margin:0 0 6px;font-size:14px;color:var(--muted)">${office.address}</p>
              <p style="margin:0;font-weight:900;color:var(--copper);font-size:14px">${office.phone}</p>
            </a>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section section-white">
      <div class="container center">
        <p class="eyebrow">Go deeper</p>
        <h2>Explore the full picture</h2>
        <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;margin-top:38px;text-align:left">
          ${subPages.map((card) => `
            <article class="resource-card">
              <h3>${card.title}</h3>
              <p>${card.copy}</p>
              <a class="btn btn-copper" href="${card.path}">View page</a>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    ${renderCtaSection()}
  `;
}

function renderServicesOverviewPage(page) {
  const serviceMenu = nav.find((item) => item.label === "Services");
  const serviceByPath = new Map(servicePages.map((servicePage) => [servicePage.path, servicePage]));
  const sectionNotes = {
    "Advisory & Growth": "Planning, forecasting and senior finance support for businesses that want clearer decisions and stronger margins.",
    Tax: "Business and personal tax pages grouped together so visitors can quickly find the right specialist advice.",
    "Accounts & Operations": "Day-to-day finance operations, cloud accounting, annual accounts and payroll support in one section.",
    "Audit & Specialist": "Assurance, probate and sector-specific services for organisations with specialist compliance needs."
  };
  const serviceGroups = serviceMenu.children.map((group) => ({
    ...group,
    note: sectionNotes[group.label] || "Specialist services grouped for easier browsing.",
    items: group.children.map((item) => ({
      ...item,
      service: serviceByPath.get(item.path)
    }))
  }));

  return `
    ${renderPageHero(page)}
    <section class="section section-white services-intro">
      <div class="container center">
        <p class="eyebrow">Our services</p>
        <h2>Four clear service families</h2>
        <p class="lead">Each section below matches the dropdown menu: choose a service family, then open the individual service page you need.</p>
      </div>
    </section>
    ${serviceGroups
      .map(
        (group, index) => `
          <section class="section service-family-section ${index % 2 ? "section-paper" : "section-white"}">
            <div class="container service-family">
              <div class="service-family-heading">
                <span class="service-family-number">${String(index + 1).padStart(2, "0")}</span>
                <p class="eyebrow">Service family</p>
                <h2>${group.label}</h2>
                <p>${group.note}</p>
              </div>
              <div class="service-family-grid">
                ${group.items
                  .map(
                    (item) => `
                      <a class="service-overview-card" href="${item.path}">
                        <span class="service-card-title">${item.label}</span>
                        <span class="service-card-copy">${item.service?.subtitle || "Open this service page for more detail."}</span>
                        <span class="service-card-action">View service</span>
                      </a>
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
    { title: "Client Portal", path: "/client-portal/", copy: "Secure portal access for client documents." },
    { title: "Xero Login", path: "/xero-login/", copy: "Cloud accounting access for Xero users." },
    { title: "Dext Login", path: "/dext-login/", copy: "Receipt and document capture access." },
    { title: "Quickbooks Online Login", path: "/quickbooks-online-login/", copy: "QuickBooks Online access for clients." }
  ];

  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container center">
        <p class="eyebrow">Client access</p>
        <h2>Choose your login area</h2>
        <p class="lead">These links are included for portfolio presentation and are not connected to live client systems.</p>
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
        <h2>Focused calculators for common planning questions</h2>
        <p class="lead">Each calculator now has its own inputs and assumptions, so the result matches the page rather than using a generic estimate.</p>
        <div class="resource-grid" style="margin-top:38px">
          ${calculatorPages.map((calc) => renderResourceCard({ title: calc.title, path: calc.path, copy: calc.subtitle })).join("")}
        </div>
      </div>
    </section>
  `;
}

const calculatorConfigs = {
  vat: {
    intro: "Add VAT to a net amount or extract VAT from a gross amount using UK standard, reduced, zero or custom rates.",
    fields: [
      { name: "amount", label: "Amount", type: "number", value: 1000, min: 0, step: 0.01, hint: "Enter the net amount when adding VAT, or the gross amount when extracting VAT." },
      {
        name: "vatMode",
        label: "Calculation",
        type: "select",
        value: "add",
        options: [
          ["add", "Add VAT to net amount"],
          ["extract", "Extract VAT from gross amount"]
        ]
      },
      {
        name: "vatRate",
        label: "VAT rate",
        type: "select",
        value: "20",
        options: [
          ["20", "Standard rate - 20%"],
          ["5", "Reduced rate - 5%"],
          ["0", "Zero rate - 0%"],
          ["custom", "Custom rate"]
        ]
      },
      { name: "customVatRate", label: "Custom rate %", type: "number", value: 20, min: 0, max: 100, step: 0.1 }
    ],
    notes: ["UK VAT rates used: standard 20%, reduced 5%, zero 0%."]
  },
  payroll: {
    intro: "Estimate employee take-home pay using 2026/27 PAYE bands and Class 1 employee National Insurance thresholds.",
    fields: [
      { name: "annualSalary", label: "Annual gross salary", type: "number", value: 45000, min: 0, step: 100 },
      {
        name: "taxRegion",
        label: "Tax region",
        type: "select",
        value: "england",
        options: [
          ["england", "England, Wales or Northern Ireland"],
          ["scotland", "Scotland"]
        ]
      },
      {
        name: "payPeriods",
        label: "Pay frequency",
        type: "select",
        value: "12",
        options: [
          ["12", "Monthly"],
          ["52", "Weekly"]
        ]
      },
      { name: "pensionRate", label: "Pension before tax %", type: "number", value: 5, min: 0, max: 100, step: 0.1 },
      {
        name: "studentLoanPlan",
        label: "Student loan plan",
        type: "select",
        value: "none",
        options: [
          ["none", "No student loan"],
          ["plan1", "Plan 1"],
          ["plan2", "Plan 2"],
          ["plan4", "Plan 4"],
          ["plan5", "Plan 5"]
        ]
      },
      {
        name: "postgraduateLoan",
        label: "Postgraduate loan",
        type: "select",
        value: "no",
        options: [
          ["no", "No"],
          ["yes", "Yes"]
        ]
      },
      { name: "otherMonthlyDeductions", label: "Other deductions per month", type: "number", value: 0, min: 0, step: 1, hint: "Optional: benefits or any other fixed deductions." }
    ],
    notes: ["Uses the standard personal allowance taper and employee NI category A annual thresholds.", "Student and postgraduate loan thresholds follow 2026/27 employer rates."]
  },
  "fuel-cost": {
    intro: "Estimate fuel spend from mileage, vehicle efficiency and pump price.",
    fields: [
      { name: "distance", label: "Miles per trip", type: "number", value: 120, min: 0, step: 1 },
      { name: "tripsPerMonth", label: "Trips per month", type: "number", value: 8, min: 0, step: 1 },
      { name: "mpg", label: "Vehicle MPG", type: "number", value: 42, min: 1, step: 0.1 },
      { name: "fuelPrice", label: "Fuel price pence/litre", type: "number", value: 148, min: 0, step: 0.1 }
    ],
    notes: ["Uses UK imperial gallons: 1 gallon = 4.54609 litres."]
  },
  cis: {
    intro: "Calculate CIS deductions on the labour element of a contractor payment.",
    fields: [
      { name: "grossPayment", label: "Invoice before VAT", type: "number", value: 5000, min: 0, step: 1 },
      { name: "materials", label: "Materials included", type: "number", value: 1200, min: 0, step: 1 },
      { name: "vatCharged", label: "VAT charged", type: "number", value: 1000, min: 0, step: 1 },
      {
        name: "cisRate",
        label: "CIS status",
        type: "select",
        value: "20",
        options: [
          ["20", "Registered subcontractor - 20%"],
          ["30", "Unmatched subcontractor - 30%"],
          ["0", "Gross payment status - 0%"]
        ]
      }
    ],
    notes: ["CIS is calculated on labour, excluding materials and VAT."]
  },
  startup: {
    intro: "Plan how much cash a new project may need before it becomes self-funding.",
    fields: [
      { name: "setupCosts", label: "One-off setup costs", type: "number", value: 15000, min: 0, step: 100 },
      { name: "monthlyFixedCosts", label: "Monthly fixed costs", type: "number", value: 3500, min: 0, step: 100 },
      { name: "monthlyPayrollCosts", label: "Monthly payroll/direct costs", type: "number", value: 7000, min: 0, step: 100 },
      { name: "monthlyRevenue", label: "Expected monthly revenue", type: "number", value: 9000, min: 0, step: 100 },
      { name: "runwayMonths", label: "Runway months", type: "number", value: 6, min: 1, step: 1 },
      { name: "contingencyRate", label: "Contingency %", type: "number", value: 15, min: 0, step: 0.5 }
    ],
    notes: ["This is a cash planning model, not a tax calculation."]
  },
  savings: {
    intro: "Project savings with monthly deposits and compound interest.",
    fields: [
      { name: "openingBalance", label: "Opening balance", type: "number", value: 10000, min: 0, step: 100 },
      { name: "monthlyContribution", label: "Monthly contribution", type: "number", value: 300, min: 0, step: 10 },
      { name: "annualReturn", label: "Annual return %", type: "number", value: 4.5, min: -99, step: 0.1 },
      { name: "years", label: "Years", type: "number", value: 10, min: 0, step: 0.5 }
    ],
    notes: ["Assumes monthly compounding and contributions at the end of each month."]
  },
  millionaire: {
    intro: "Estimate how long it could take to reach a target savings balance.",
    fields: [
      { name: "openingBalance", label: "Current savings", type: "number", value: 50000, min: 0, step: 100 },
      { name: "monthlyContribution", label: "Monthly contribution", type: "number", value: 1500, min: 0, step: 10 },
      { name: "annualReturn", label: "Annual return %", type: "number", value: 5, min: -99, step: 0.1 },
      { name: "target", label: "Target balance", type: "number", value: 1000000, min: 1, step: 1000 }
    ],
    notes: ["Assumes monthly compounding and contributions at the end of each month."]
  },
  apr: {
    intro: "Estimate an effective APR from the money received, any upfront fee, the repayment amount and term.",
    fields: [
      { name: "cashReceived", label: "Cash received", type: "number", value: 10000, min: 0, step: 100 },
      { name: "upfrontFees", label: "Upfront fees", type: "number", value: 250, min: 0, step: 1 },
      { name: "monthlyRepayment", label: "Monthly repayment", type: "number", value: 315, min: 0, step: 1 },
      { name: "months", label: "Term in months", type: "number", value: 36, min: 1, step: 1 }
    ],
    notes: ["APR is estimated from monthly cash flows and may differ from a lender's regulated APR calculation."]
  },
  loan: {
    intro: "Calculate repayments and total interest for a fixed-rate loan.",
    fields: [
      { name: "loanAmount", label: "Loan amount", type: "number", value: 25000, min: 0, step: 100 },
      { name: "annualRate", label: "Annual interest rate %", type: "number", value: 7, min: 0, step: 0.1 },
      { name: "months", label: "Term in months", type: "number", value: 60, min: 1, step: 1 },
      { name: "arrangementFee", label: "Fee added to loan", type: "number", value: 0, min: 0, step: 1 }
    ],
    notes: ["Assumes a fixed rate and equal monthly repayments."]
  },
  gross: {
    intro: "Work out gross profit, gross margin and mark-up.",
    fields: [
      { name: "salesRevenue", label: "Sales revenue", type: "number", value: 120000, min: 0, step: 100 },
      { name: "directCosts", label: "Direct costs", type: "number", value: 72000, min: 0, step: 100 }
    ],
    notes: ["Gross margin is gross profit divided by sales. Mark-up is gross profit divided by direct costs."]
  },
  dividend: {
    intro: "Estimate UK dividend tax using the 2026/27 dividend allowance and rate bands.",
    fields: [
      { name: "otherIncome", label: "Other taxable income", type: "number", value: 35000, min: 0, step: 100 },
      { name: "dividends", label: "Dividend income", type: "number", value: 15000, min: 0, step: 100 }
    ],
    notes: ["Applies the personal allowance to other income first, then dividends, and uses the £500 dividend allowance."]
  },
  mortgage: {
    intro: "Estimate repayment mortgage costs from property price, deposit, rate and term.",
    fields: [
      { name: "propertyPrice", label: "Property price", type: "number", value: 425000, min: 0, step: 1000 },
      { name: "deposit", label: "Deposit", type: "number", value: 85000, min: 0, step: 1000 },
      { name: "annualRate", label: "Annual interest rate %", type: "number", value: 5.25, min: 0, step: 0.01 },
      { name: "years", label: "Term in years", type: "number", value: 25, min: 1, step: 1 }
    ],
    notes: ["Assumes a repayment mortgage with a fixed interest rate across the whole term."]
  },
  "more-profit": {
    intro: "Model how extra sales or a margin improvement could change annual profit.",
    fields: [
      { name: "annualRevenue", label: "Current annual revenue", type: "number", value: 500000, min: 0, step: 1000 },
      { name: "grossMargin", label: "Current gross margin %", type: "number", value: 38, min: 0, max: 100, step: 0.1 },
      { name: "overheads", label: "Annual overheads", type: "number", value: 140000, min: 0, step: 1000 },
      { name: "revenueUplift", label: "Revenue uplift %", type: "number", value: 8, min: -100, step: 0.1 },
      { name: "marginUplift", label: "Margin improvement points", type: "number", value: 2, min: -100, step: 0.1 }
    ],
    notes: ["This is a commercial planning model and excludes corporation tax."]
  },
  lbtt: {
    intro: "Estimate Scottish residential Land and Buildings Transaction Tax.",
    fields: [
      { name: "propertyPrice", label: "Purchase price", type: "number", value: 350000, min: 0, step: 1000 },
      {
        name: "buyerType",
        label: "Buyer type",
        type: "select",
        value: "standard",
        options: [
          ["standard", "Main residence"],
          ["firstTime", "First-time buyer"],
          ["additional", "Additional dwelling"]
        ]
      }
    ],
    notes: ["Additional Dwelling Supplement is modelled at 8% of the full price where applicable."]
  },
  "company-car": {
    intro: "Estimate taxable company car and private fuel benefit for 2026/27.",
    fields: [
      { name: "listPrice", label: "Car list price", type: "number", value: 42000, min: 0, step: 100 },
      { name: "co2", label: "CO2 emissions g/km", type: "number", value: 48, min: 0, step: 1 },
      {
        name: "electricRange",
        label: "Electric range",
        type: "select",
        value: "70",
        options: [
          ["130", "130 miles or more"],
          ["70", "70 to 129 miles"],
          ["40", "40 to 69 miles"],
          ["30", "30 to 39 miles"],
          ["0", "Less than 30 miles or none"]
        ]
      },
      {
        name: "fuelType",
        label: "Fuel type",
        type: "select",
        value: "petrol",
        options: [
          ["petrol", "Petrol, hybrid or RDE2 diesel"],
          ["diesel", "Diesel not meeting RDE2"]
        ]
      },
      {
        name: "privateFuel",
        label: "Private fuel provided",
        type: "select",
        value: "no",
        options: [
          ["no", "No"],
          ["yes", "Yes"]
        ]
      },
      {
        name: "taxRate",
        label: "Employee tax rate",
        type: "select",
        value: "40",
        options: [
          ["20", "20%"],
          ["40", "40%"],
          ["45", "45%"],
          ["19", "19% Scottish starter"],
          ["42", "42% Scottish higher"],
          ["48", "48% Scottish top"]
        ]
      }
    ],
    notes: ["Fuel benefit uses the 2026/27 multiplier of £29,200.", "The diesel supplement is capped so the benefit percentage never exceeds 37%."]
  },
  sdlt: {
    intro: "Estimate residential Stamp Duty Land Tax in England or Northern Ireland.",
    fields: [
      { name: "propertyPrice", label: "Purchase price", type: "number", value: 425000, min: 0, step: 1000 },
      {
        name: "buyerType",
        label: "Buyer type",
        type: "select",
        value: "standard",
        options: [
          ["standard", "Main residence"],
          ["firstTime", "First-time buyer"],
          ["additional", "Additional dwelling"]
        ]
      },
      {
        name: "nonResident",
        label: "Non-resident surcharge",
        type: "select",
        value: "no",
        options: [
          ["no", "No"],
          ["yes", "Yes - add 2%"]
        ]
      }
    ],
    notes: ["First-time buyer relief is applied only where the purchase price is £500,000 or less.", "Additional dwelling surcharge is modelled at 5% of the full price."]
  }
};

function renderCalculatorField(field, page) {
  const id = `calc-${page.calc}-${field.name}`;
  const hintId = `${id}-hint`;
  const attrs = [
    `id="${id}"`,
    `name="${field.name}"`,
    field.min !== undefined ? `min="${field.min}"` : "",
    field.max !== undefined ? `max="${field.max}"` : "",
    field.step !== undefined ? `step="${field.step}"` : "",
    field.hint ? `aria-describedby="${hintId}"` : ""
  ]
    .filter(Boolean)
    .join(" ");

  const control =
    field.type === "select"
      ? `<select ${attrs}>${field.options
          .map(([value, label]) => `<option value="${escapeHtml(value)}"${String(value) === String(field.value) ? " selected" : ""}>${escapeHtml(label)}</option>`)
          .join("")}</select>`
      : `<input ${attrs} type="${field.type || "number"}" value="${escapeHtml(field.value ?? "")}" inputmode="decimal">`;

  return `
    <div class="field${field.full ? " full" : ""}">
      <label for="${id}">${field.label}</label>
      ${control}
      ${field.hint ? `<span class="field-hint" id="${hintId}">${field.hint}</span>` : ""}
    </div>
  `;
}

function renderCalculatorPage(page) {
  const config = calculatorConfigs[page.calc] || calculatorConfigs.loan;

  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container calculator-layout">
        <div class="calculator-copy">
          <p class="eyebrow">Calculator</p>
          <h2>${page.title}</h2>
          <p>${config.intro}</p>
          <ul class="calc-notes">
            ${config.notes.map((note) => `<li>${note}</li>`).join("")}
            <li>For guidance only: always confirm figures before making financial or tax decisions.</li>
          </ul>
          <a class="btn btn-copper" href="/resources-2/calculators/">Back to calculators</a>
        </div>
        <div class="calc-tool" data-calc="${page.calc}">
          <div class="calc-fields">
            ${config.fields.map((field) => renderCalculatorField(field, page)).join("")}
          </div>
          <div class="calc-result" aria-live="polite">
            <strong data-calc-output></strong>
            <ul data-calc-breakdown></ul>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBlogPage(page) {
  const isNewsPage = normalize(page.path) === "/news/";
  const posts = isNewsPage
    ? [
        ["Firm update", "New cloud accounting review service launched", "A short update on the new review process for Xero and QuickBooks clients.", "/resources-2/news-and-reports/"],
        ["Payroll", "Year-end payroll reminders for employers", "The main records to check before P60s, benefits reporting and new tax year payroll settings.", "/resources-2/news-and-reports/"],
        ["Business", "Management accounts pack now available for growing teams", "A practical reporting pack designed around sales, margin, debtors, creditors and cash.", "/resources-2/news-and-reports/"],
        ["Tax", "Making Tax Digital preparation now underway", "Steps sole traders and landlords can take before digital record keeping becomes mandatory.", "/blog/making-tax-digital-for-income-tax/"],
        ["Audit", "Assurance planning for funding conversations", "What lenders often ask for before a funding round, refinance or acquisition.", "/resources-2/news-and-reports/"],
        ["Community", "Responsible business and community activity", "A short note on local support, staff development and responsible business priorities.", "/corporate-and-social-responsibility/"]
      ]
    : [
        ["MTD", "Making Tax Digital for Income Tax: Your April 2026 Checklist", "Preparation steps for sole traders and landlords before MTD takes effect.", "/blog/making-tax-digital-for-income-tax/"],
        ["VAT", "What does good VAT review work include?", "How advisory firms can spot risk before a return is submitted.", "/vat-advice/"],
        ["Cloud accounting", "Using cloud accounts to shorten month end", "A simple workflow for cleaner data and faster decisions.", "/xero-cloud-accounting-experts-2/"],
        ["Payroll", "What employers should check before payroll year-end", "Records, benefits and employee data points that are easier to fix before the final pay run.", "/payroll/"],
        ["Profit", "Why gross margin should be reviewed monthly", "How regular margin review helps spot pricing issues, supplier changes and operational drift.", "/profit-improvement/"],
        ["Audit", "When assurance work is useful even without a statutory audit", "Situations where lenders, boards or investors may need comfort over specific numbers.", "/audit/"]
      ];
  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container center">
        <p class="eyebrow">${isNewsPage ? "News" : "Blog"}</p>
        <h2>${isNewsPage ? "Firm updates and short announcements" : "Articles for business owners and finance teams"}</h2>
        <p class="lead">${isNewsPage ? "Updates from the practice, payroll reminders and service notes." : "Practical articles on tax, reporting, payroll, cloud accounting and business planning."}</p>
      </div>
      <div class="container blog-grid" style="margin-top:38px">
        ${posts
          .map(
            ([label, title, copy, path]) => `
              <article class="blog-card">
                <p class="eyebrow">${label}</p>
                <h3>${title}</h3>
                <p>${copy}</p>
                <a href="${path}">Read article</a>
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
        <div class="map-placeholder">Map area</div>
      </div>
    </section>
    ${renderCtaSection()}
  `;
}

function renderGenericPage(page) {
  const pageContent = {
    "/corporate-and-social-responsibility/": {
      eyebrow: "Responsibility",
      heading: "Responsible business, people and community",
      body: "This page sets out how the practice approaches responsible work, from client care and staff development to community involvement and sensible use of resources.",
      cards: [
        ["People", "Training, mentoring and a working culture that supports professional development."],
        ["Community", "Time and expertise directed toward local organisations and charitable activity."],
        ["Resources", "Practical steps to reduce waste, use digital records well and manage travel responsibly."]
      ]
    },
    "/50-ways-to-grow-your-business-guide/": {
      eyebrow: "Growth guide",
      heading: "Ideas for improving profit, cash and control",
      body: "This guide is structured around practical areas that often improve a growing business: pricing, reporting, cash flow, tax planning, systems and management habits.",
      cards: [
        ["Profit", "Review pricing, direct costs and margin by product, service or client group."],
        ["Cash", "Improve debtor control, payment terms and short-term cash forecasting."],
        ["Systems", "Use cloud accounting and monthly reporting to make decisions earlier."]
      ]
    },
    "/property-tax-seminars/": {
      eyebrow: "Events",
      heading: "Property tax seminars for landlords and investors",
      body: "The seminars cover common property tax questions, including ownership structure, finance costs, capital gains tax, record keeping and the timing of advice before a transaction.",
      cards: [
        ["Landlords", "Income tax, finance costs, repairs, records and Making Tax Digital preparation."],
        ["Investors", "Capital gains tax, purchase costs and the tax effect of future disposals."],
        ["Companies", "When a company structure may be relevant and what administration comes with it."]
      ]
    },
    "/probating-a-will/": {
      eyebrow: "Probate guide",
      heading: "Probating a will and dealing with estate accounts",
      body: "This guide explains the financial information executors usually need to gather before probate work can progress, including assets, liabilities, income, gifts and tax records.",
      cards: [
        ["Estate records", "Bank accounts, investments, property values, pensions and personal assets."],
        ["Tax position", "Inheritance tax, income tax and capital gains tax points during administration."],
        ["Executor support", "Clear estate accounts and reporting for beneficiaries."]
      ]
    },
    "/probate-valuation/": {
      eyebrow: "Probate valuation",
      heading: "Valuations for probate and estate reporting",
      body: "Probate valuation work brings together financial records, asset values and tax information so executors can report the estate accurately and deal with beneficiaries confidently.",
      cards: [
        ["Assets", "Property, investments, business interests and personal assets reviewed for reporting."],
        ["Liabilities", "Debts, expenses and tax liabilities gathered before estate accounts are prepared."],
        ["Reporting", "Estate figures presented clearly for executors, advisers and beneficiaries."]
      ]
    },
    "/driving-instructions/": {
      eyebrow: "Directions",
      heading: "Planning a visit to the office",
      body: "This page gives visitors a simple place to check office access, parking expectations and who to contact before travelling.",
      cards: [
        ["Before you travel", "Confirm the office, meeting time and documents needed for your appointment."],
        ["Parking", "Allow time for local parking or public transport, especially around peak hours."],
        ["Accessibility", "Contact the team before the visit if you need step-free access or other arrangements."]
      ]
    },
    "/complaints_procedure/": {
      eyebrow: "Complaints procedure",
      heading: "How concerns are handled",
      body: "If a concern is raised, it should be acknowledged promptly, reviewed by an appropriate senior person and answered clearly once the facts have been checked.",
      cards: [
        ["Raise the concern", "Set out what happened, who was involved and what outcome you are seeking."],
        ["Review", "The issue is reviewed against the engagement scope, correspondence and work completed."],
        ["Response", "A written response explains the outcome and any next steps."]
      ]
    },
    "/privacy/": {
      eyebrow: "Privacy",
      heading: "How personal information is handled",
      body: "This privacy page explains the type of information a professional services website may collect and how client information should be handled securely.",
      cards: [
        ["Information collected", "Contact details, enquiry information and records needed to provide services."],
        ["Use of information", "Data used to respond to enquiries, manage engagements and meet legal duties."],
        ["Security", "Information should be stored carefully and accessed only by people who need it."]
      ]
    },
    "/cookies/": {
      eyebrow: "Cookies",
      heading: "How cookies may be used",
      body: "This page explains how a website may use essential cookies, analytics cookies and preference settings to support a better browsing experience.",
      cards: [
        ["Essential cookies", "Used for core site functions such as forms, navigation and security."],
        ["Analytics", "Used to understand which pages are useful and where visitors may need clearer routes."],
        ["Preferences", "Used to remember basic choices where the site requires them."]
      ]
    },
    "/disclaimer/": {
      eyebrow: "Disclaimer",
      heading: "Important information before relying on content",
      body: "Website content can explain common issues, but it cannot replace advice based on a client's full circumstances, records and current legislation.",
      cards: [
        ["General information", "Content is for general understanding and should not be treated as personal advice."],
        ["Professional advice", "Tax and financial decisions should be checked with an adviser before action is taken."],
        ["Current rules", "Rates, thresholds and requirements should be confirmed before relying on them."]
      ]
    },
    "/2025-probate-diversity-survey-results/": {
      eyebrow: "Diversity results",
      heading: "Probate diversity survey summary",
      body: "This page presents a structured summary for probate diversity reporting, with the kind of categories and commentary a regulated practice may publish.",
      cards: [
        ["Participation", "A summary of response levels and the scope of the survey."],
        ["Representation", "High-level diversity categories presented in an anonymised format."],
        ["Review", "How the information can guide recruitment, training and client service improvements."]
      ]
    },
    "/client-portal/": {
      eyebrow: "Client portal",
      heading: "Secure document exchange",
      body: "The client portal page is for secure access to documents, approvals and messages connected to client work.",
      cards: [
        ["Documents", "Upload and receive accounts, tax returns, payroll reports and supporting records."],
        ["Approvals", "Review documents before filing or signature."],
        ["Support", "Contact the team if access needs to be set up or reset."]
      ]
    },
    "/xero-login/": {
      eyebrow: "Xero login",
      heading: "Cloud accounting access for Xero users",
      body: "This page helps Xero users find the correct login route and understand when to contact the team for setup, permissions or bookkeeping support.",
      cards: [
        ["Access", "Use the Xero login route for bookkeeping, bank feeds and reporting."],
        ["Permissions", "Check user roles before inviting staff or advisers."],
        ["Support", "Ask for help with setup, clean-up work or management reports."]
      ]
    },
    "/dext-login/": {
      eyebrow: "Dext login",
      heading: "Receipt and document capture access",
      body: "This page is for clients using Dext to upload receipts, supplier invoices and purchase records for bookkeeping and VAT work.",
      cards: [
        ["Receipts", "Capture receipts promptly so bookkeeping records stay current."],
        ["Supplier invoices", "Upload purchase invoices with enough detail for coding and VAT review."],
        ["Workflow", "Keep document capture consistent so month-end work is quicker."]
      ]
    },
    "/quickbooks-online-login/": {
      eyebrow: "QuickBooks login",
      heading: "QuickBooks Online access",
      body: "This page is for QuickBooks users who need access to bookkeeping, invoices, bank feeds and management reports.",
      cards: [
        ["Bookkeeping", "Use QuickBooks for transactions, reconciliations and basic reports."],
        ["Invoices", "Keep customer and supplier records up to date."],
        ["Advice", "Ask for support with setup, clean-up work or reporting categories."]
      ]
    },
    "/thank-you/": {
      eyebrow: "Thank you",
      heading: "Your enquiry has been received",
      body: "This confirmation page lets visitors know the form process is complete and explains what normally happens next.",
      cards: [
        ["Review", "The enquiry would be reviewed by the relevant team."],
        ["Contact", "A suitable adviser would respond using the contact details provided."],
        ["Preparation", "Any useful documents or background information can be gathered before a meeting."]
      ]
    },
    "/newsletter-sign-up-completion/": {
      eyebrow: "Newsletter",
      heading: "Newsletter sign-up complete",
      body: "This page confirms that a newsletter sign-up has been completed and explains what kind of updates the visitor can expect.",
      cards: [
        ["Tax reminders", "Key filing and payment dates before common deadlines."],
        ["Business notes", "Short updates on reporting, payroll and bookkeeping."],
        ["Planning prompts", "Timely reminders before year-end or major rule changes."]
      ]
    },
    "/mhmm-menu-layout-loader/": {
      eyebrow: "Navigation",
      heading: "Menu support page",
      body: "This preserved route supports the copied site structure and keeps older navigation references from leading to a missing page.",
      cards: [
        ["Routing", "The page exists so legacy menu references continue to resolve."],
        ["Navigation", "Visitors can return to the main resource, service or contact sections."],
        ["Maintenance", "The route can be removed later if it is no longer needed."]
      ]
    }
  };
  const content = pageContent[normalize(page.path)] || {
    eyebrow: page.type.replaceAll("-", " "),
    heading: page.title,
    body: page.subtitle || "This page is part of the portfolio website structure.",
    cards: [
      ["Overview", "A short introduction to the topic and why it matters."],
      ["Next steps", "Where a visitor can go next if they need more information."],
      ["Contact", "A route back to the team for a relevant enquiry."]
    ]
  };

  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container split">
        <div>
          <p class="eyebrow">${content.eyebrow}</p>
          <h2>${content.heading}</h2>
          <p class="lead">${page.subtitle || content.heading}</p>
          <p>${content.body}</p>
          <a class="btn btn-copper" href="/contact-us/#contact">Contact us</a>
        </div>
        <div class="split-media"><img src="${page.image || site.images.office}" alt="${page.title}" loading="lazy"></div>
      </div>
    </section>
    <section class="section section-paper">
      <div class="container feature-grid">
        ${content.cards.map(([title, copy]) => `<article class="feature-card"><h3>${title}</h3><p>${copy}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function renderCalendarPage(page) {
  const dates = [
    ["19 Jan", "PAYE, NIC and CIS postal payment deadline for the quarter ended 5 January."],
    ["22 Jan", "Electronic PAYE, NIC and CIS payment deadline for the quarter ended 5 January."],
    ["31 Jan", "Self Assessment online filing deadline and balancing payment deadline."],
    ["5 Apr", "End of the UK tax year."],
    ["6 Apr", "Start of the new UK tax year. Review payroll settings and tax codes."],
    ["19 Apr", "Final PAYE and CIS postal payment deadline for the tax year just ended."],
    ["31 May", "P60 deadline for employees who were on payroll at 5 April."],
    ["6 Jul", "P11D and P11D(b) deadline where benefits and expenses are reportable."],
    ["31 Jul", "Second payment on account for Self Assessment taxpayers."],
    ["19 Oct", "PAYE and CIS quarterly postal payment deadline for the quarter ended 5 October."],
    ["22 Oct", "Electronic PAYE and CIS payment deadline for the quarter ended 5 October."],
    ["31 Dec", "Planning checkpoint before calendar year-end and January Self Assessment pressure."]
  ];
  return `
    ${renderPageHero(page)}
    <section class="section section-white">
      <div class="container">
        <p class="eyebrow">Tax calendar</p>
        <h2>Important filing and payment dates</h2>
        <p class="lead">Use this calendar as a planning prompt. Exact dates can vary where deadlines fall on weekends or bank holidays.</p>
        <div class="timeline">
          ${dates.map(([date, copy]) => `<article class="timeline-item"><strong>${date}</strong><span>${copy}</span></article>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderResourceFormPage(page) {
  const forms = {
    "/payroll-starter-checklist/": {
      eyebrow: "Payroll form",
      heading: "What we need before a starter is added",
      intro: "This page shows the information normally gathered before setting up a new employee in payroll.",
      checklist: [
        "Employee full name, address, date of birth and National Insurance number.",
        "Start date, job title, pay frequency, salary or hourly rate.",
        "Starter declaration, student loan position and pension status.",
        "Bank details and any agreed benefits, allowances or deductions."
      ]
    },
    "/bookkeeping-handover-checklist/": {
      eyebrow: "Bookkeeping form",
      heading: "Records for a clean bookkeeping handover",
      intro: "This checklist helps a business prepare the documents and access details needed before monthly bookkeeping starts.",
      checklist: [
        "Accounting software access and bank feed status.",
        "Bank, credit card and loan statements for the handover period.",
        "Sales invoices, supplier bills, receipts and expense claims.",
        "VAT scheme details, payroll journals and opening balances."
      ]
    },
    "/vat-records-checklist/": {
      eyebrow: "VAT form",
      heading: "Records to prepare before a VAT return review",
      intro: "This page sets out the reports and evidence normally reviewed before a VAT return is filed.",
      checklist: [
        "VAT return period, scheme and filing deadline.",
        "Sales ledger, purchase ledger and VAT control account reports.",
        "Evidence for reverse charge, imports, exports or unusual transactions.",
        "Notes on exempt income, partial exemption or capital items."
      ]
    },
    "/probate-information-request/": {
      eyebrow: "Probate form",
      heading: "Initial estate information request",
      intro: "This checklist helps organise the first information needed for probate accounts, valuations and tax reporting.",
      checklist: [
        "Personal details for the deceased and the executors.",
        "Date of death, will details and known beneficiaries.",
        "Bank, investment, property, pension and insurance information.",
        "Known liabilities, funeral costs, gifts and lifetime transfers."
      ]
    }
  };
  const config = forms[normalize(page.path)] || {
    eyebrow: "Resource form",
    heading: page.title,
    intro: page.subtitle,
    checklist: ["Basic contact details.", "Relevant dates and reference numbers.", "Supporting documents.", "Any notes that explain the request."]
  };

  return `
    ${renderPageHero(page)}
    <section class="section section-paper">
      <div class="container contact-layout">
        <div>
          <p class="eyebrow">${config.eyebrow}</p>
          <h2>${config.heading}</h2>
          <p class="lead">${config.intro}</p>
          <ul class="check-list">
            ${config.checklist.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <a class="btn btn-outline" href="/resources-2/downloadable-forms/">Back to forms</a>
        </div>
        ${renderContactForm("Send form")}
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
        ${renderContactForm("Send form")}
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
    <form class="contact-form" data-local-form>
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
          <label>Services of interest <span class="field-hint">(select all that apply)</span></label>
          <div class="service-checkboxes" id="serviceCheckboxes">
            <label class="checkbox-label"><input type="checkbox" name="services" value="Business Growth"> Advisory &amp; Business Growth</label>
            <label class="checkbox-label"><input type="checkbox" name="services" value="Tax"> Tax &amp; Planning</label>
            <label class="checkbox-label"><input type="checkbox" name="services" value="Accounts"> Year-End Accounts</label>
            <label class="checkbox-label"><input type="checkbox" name="services" value="Operations"> Bookkeeping, Payroll &amp; Secretarial</label>
            <label class="checkbox-label"><input type="checkbox" name="services" value="Audits &amp; Assurance"> Audit &amp; Assurance</label>
            <label class="checkbox-label"><input type="checkbox" name="services" value="Cloud Accounting"> Cloud Accounting</label>
            <label class="checkbox-label"><input type="checkbox" name="services" value="Specialist Services"> Probate &amp; Estate</label>
            <label class="checkbox-label"><input type="checkbox" name="services" value="Specialist Sectors"> Specialist Sector Advice</label>
          </div>
        </div>
        <div class="field full">
          <label for="message">Comments or message</label>
          <textarea id="message" name="message" placeholder="Tell us what you would like help with"></textarea>
        </div>
      </div>
      <label><input type="checkbox" required> I understand this portfolio form shows a local confirmation message only.</label>
      <button class="btn btn-copper" type="submit">${buttonText}</button>
      <p class="form-notice" hidden>Form complete. No message was sent.</p>
    </form>
  `;
}

function renderResourceCard(card) {
  return `
    <article class="resource-card">
      <h3>${card.title}</h3>
      <p>${card.copy}</p>
      <a class="btn btn-copper" href="${card.path}">${card.button || "View page"}</a>
    </article>
  `;
}

function renderCtaSection(contactUrl = "/contact-us/#contact") {
  return `
    <section class="section section-copper">
      <div class="container cta-band">
        <div>
          <h2>Ready to make the first step?</h2>
          <p>Book an introductory meeting using the sample contact details.</p>
        </div>
        <a class="btn btn-light" href="${contactUrl}">Book a meeting</a>
      </div>
    </section>
  `;
}

function renderBlogArticlePage(page) {
  const { content } = page;
  return `
    <section class="page-hero" ${heroStyle(page.image)}>
      <div class="container">
        <div class="breadcrumb"><a href="/">Home</a> / <a href="/blog/">Blog</a> / ${content.category}</div>
        <p class="eyebrow">${content.category}</p>
        <h1>${page.title}</h1>
        <p>${page.subtitle}</p>
        <p style="margin-top:6px;font-size:13px;opacity:.75">${content.date}${content.readTime ? ` | Estimated read time: ${content.readTime}` : ""}</p>
      </div>
    </section>
    <section class="section section-white">
      <div class="narrow">
        <p class="lead">${content.intro}</p>
        ${content.sections.map((s) => `
          <div style="margin-top:38px">
            <h2>${s.heading}</h2>
            <p>${s.body}</p>
          </div>
        `).join("")}
        <div class="info-card" style="margin-top:52px">
          <h3>Sources</h3>
          <ul style="margin:14px 0 0;padding-left:20px">
            ${content.sources.map((src) => `<li style="margin:8px 0"><a href="${src.url}" target="_blank" rel="noopener noreferrer" style="color:var(--copper);font-weight:700;text-decoration:underline">${src.label}</a></li>`).join("")}
          </ul>
        </div>
      </div>
    </section>
    ${renderCtaSection()}
  `;
}

function renderNewsArticlePage(page) {
  const { content } = page;
  const contactPath = `/contact-us/?topic=${encodeURIComponent(page.title)}#contact`;

  return `
    <section class="page-hero" ${heroStyle(page.image)}>
      <div class="container">
        <div class="breadcrumb"><a href="/">Home</a> / <a href="/resources-2/news-and-reports/">News and Reports</a> / ${content.category}</div>
        <p class="eyebrow">${content.category}</p>
        <h1>${page.title}</h1>
        <p>${page.subtitle}</p>
        <p style="margin-top:6px;font-size:13px;opacity:.75">${content.date}${content.readTime ? ` | Estimated read time: ${content.readTime}` : ""}</p>
      </div>
    </section>
    <section class="section section-white">
      <div class="narrow">
        <p class="lead">${content.intro}</p>
        ${content.html || content.sections.map((section) => `
          <div style="margin-top:38px">
            <h2>${section.heading}</h2>
            <p>${section.body}</p>
          </div>
        `).join("")}
        <div class="info-card" style="margin-top:52px">
          <p class="eyebrow">Related support</p>
          <h3>${content.service.label}</h3>
          <p>${content.service.copy}</p>
          <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:20px">
            <a class="btn btn-copper" href="${content.service.path}">View service</a>
            <a class="btn btn-outline" href="${contactPath}">Book a consultation</a>
          </div>
        </div>
        ${content.faq?.length ? `
          <div style="margin-top:52px">
            <p class="eyebrow">FAQ</p>
            <h2>Frequently asked questions</h2>
            <div class="timeline">
              ${content.faq.map((item) => `<article class="timeline-item"><strong>${item.question}</strong><span>${item.answer}</span></article>`).join("")}
            </div>
          </div>
        ` : ""}
        ${content.sources?.length ? `
          <div class="info-card" style="margin-top:28px">
            <h3>Reference links</h3>
            <ul style="margin:14px 0 0;padding-left:20px">
              ${content.sources.map((src) => `<li style="margin:8px 0"><a href="${src.url}" target="_blank" rel="noopener noreferrer" style="color:var(--copper);font-weight:700;text-decoration:underline">${src.label}</a></li>`).join("")}
            </ul>
          </div>
        ` : ""}
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
  if (page.type === "resources") return renderResourcesPage(page);
  if (page.type === "resource-list") return renderNewsReportsPage(page);
  if (page.type === "factsheets") return renderFactsheetsPage(page);
  if (page.type === "forms") return renderFormsPage(page);
  if (page.type === "media") return renderMediaPage(page);
  if (page.type === "newsletter") return renderNewsletterPage(page);
  if (page.type === "rates") return renderRatesPage(page);
  if (page.type === "calculators") return renderCalculatorsPage(page);
  if (page.type === "calculator") return renderCalculatorPage(page);
  if (page.type === "blog") return renderBlogPage(page);
  if (page.type === "blog-article") return renderBlogArticlePage(page);
  if (page.type === "news-article") return renderNewsArticlePage(page);
  if (page.type === "location") return renderLocationPage(page);
  if (page.type === "calendar") return renderCalendarPage(page);
  if (page.type === "resource-form") return renderResourceFormPage(page);
  if (page.type === "application" || page.type === "client-form") return renderApplicationPage(page);
  return renderGenericPage(page);
}

function renderHtml(page) {
  const canonicalPath = canonicals[page.path] || page.path;
  const canonicalUrl = `${site.siteUrl}${normalize(canonicalPath)}`;
  const ogImage = page.image || site.images.office;
  const titleText = page.metaTitle || `${page.title} | ${site.brand}`;
  const descText = page.metaDescription || page.subtitle || site.strapline;
  const ogTitle = escapeHtml(titleText);
  const ogDesc = escapeHtml(descText);
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${ogTitle}</title>
    <meta name="description" content="${ogDesc}">
    <link rel="canonical" href="${canonicalUrl}">
    <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${escapeHtml(site.brand)}">
    <meta property="og:title" content="${ogTitle}">
    <meta property="og:description" content="${ogDesc}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:image" content="${ogImage}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${ogTitle}">
    <meta name="twitter:description" content="${ogDesc}">
    <meta name="twitter:image" content="${ogImage}">
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
  await writeFile(file, removeVisibleDashes(renderHtml(page)), "utf8");
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
