const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

const menuToggle = qs(".menu-toggle");
const nav = qs(".site-nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
}

qsa(".nav-item.has-children > .submenu-toggle, .nav-item.has-children > .submenu-toggle-only").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".nav-item");
    const open = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
  });
});

qsa(".nav-item.has-children").forEach((item) => {
  let closeTimer;
  const desktopMenu = () => window.matchMedia("(min-width: 1121px)").matches;

  item.addEventListener("pointerenter", () => {
    if (!desktopMenu()) return;
    clearTimeout(closeTimer);
    item.classList.add("is-open");
  });

  item.addEventListener("pointerleave", () => {
    if (!desktopMenu()) return;
    closeTimer = setTimeout(() => item.classList.remove("is-open"), 180);
  });
});

const slides = qsa(".hero-slide");
const dots = qsa(".hero-dot");
if (slides.length > 1) {
  let active = 0;
  const show = (index) => {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === active));
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === active));
  };

  qsa("[data-hero-next]").forEach((button) => button.addEventListener("click", () => show(active + 1)));
  qsa("[data-hero-prev]").forEach((button) => button.addEventListener("click", () => show(active - 1)));
  dots.forEach((dot, i) => dot.addEventListener("click", () => show(i)));
  setInterval(() => show(active + 1), 6500);
}

qsa("form[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const notice = qs(".form-notice", form);
    if (notice) {
      notice.hidden = false;
    }
  });
});

const money = (value) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(value || 0);

qsa("[data-calc]").forEach((tool) => {
  const output = qs("[data-calc-output]", tool);
  const inputs = qsa("input, select", tool);
  const type = tool.dataset.calc;

  const read = (name, fallback = 0) => {
    const field = qs(`[name="${name}"]`, tool);
    return Number(field?.value || fallback);
  };

  const calculate = () => {
    const amount = read("amount");
    const rate = read("rate");
    const months = Math.max(read("months", 12), 1);
    const second = read("second");
    let text = "";

    if (type === "vat") {
      text = `${money(amount)} net becomes ${money(amount * (1 + rate / 100))} gross. VAT element: ${money(amount * rate / 100)}.`;
    } else if (type === "gross") {
      const profit = amount - second;
      const margin = amount ? (profit / amount) * 100 : 0;
      text = `Estimated gross profit is ${money(profit)} with a margin of ${margin.toFixed(1)}%.`;
    } else if (type === "payroll") {
      const annual = amount * 12;
      const estimate = amount * 0.78;
      text = `Indicative monthly net pay is ${money(estimate)} from ${money(amount)} gross. Annual gross: ${money(annual)}.`;
    } else if (type === "fuel") {
      text = `Estimated monthly running cost is ${money(amount * second * (1 + rate / 100))}.`;
    } else if (type === "cis") {
      text = `Indicative CIS deduction is ${money(amount * rate / 100)}. Net payment: ${money(amount * (1 - rate / 100))}.`;
    } else if (type === "property") {
      text = `Illustrative property tax reserve: ${money(amount * rate / 100)}. Always confirm with current rules.`;
    } else if (type === "dividend") {
      text = `Illustrative dividend tax reserve: ${money(amount * rate / 100)} after any available allowances.`;
    } else if (type === "startup") {
      text = `Suggested launch reserve: ${money(amount + second + amount * rate / 100)} including contingency.`;
    } else {
      const monthlyRate = rate / 100 / 12;
      const payment = monthlyRate ? (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months)) : amount / months;
      text = `Indicative monthly payment: ${money(payment)} over ${months} months.`;
    }

    if (output) output.textContent = text;
  };

  inputs.forEach((input) => input.addEventListener("input", calculate));
  calculate();
});
