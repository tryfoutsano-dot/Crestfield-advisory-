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

qsa("form[data-local-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const notice = qs(".form-notice", form);
    if (notice) {
      notice.hidden = false;
    }
  });
});

const serviceParam = new URLSearchParams(window.location.search).get("service");
if (serviceParam) {
  qsa('input[name="services"][type="checkbox"]').forEach((cb) => {
    if (cb.value === serviceParam) {
      cb.checked = true;
      cb.closest(".checkbox-label")?.classList.add("is-preselected");
    }
  });
}

const safeNumber = (value, fallback = 0) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const money = (value, digits = 0) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  }).format(safeNumber(value));

const number = (value, digits = 1) =>
  new Intl.NumberFormat("en-GB", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  }).format(safeNumber(value));

const percent = (value, digits = 1) => `${number(value, digits)}%`;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const personalAllowance = (income) => {
  if (income <= 100000) return 12570;
  return Math.max(0, 12570 - (income - 100000) / 2);
};

const bandedTax = (amount, bands) => {
  let tax = 0;
  let previousLimit = 0;

  bands.forEach(([limit, rate]) => {
    if (amount <= previousLimit) return;
    const slice = Math.max(Math.min(amount, limit) - previousLimit, 0);
    tax += slice * rate;
    previousLimit = limit;
  });

  return tax;
};

const amortisedPayment = (principal, annualRate, months) => {
  const safeMonths = Math.max(Math.round(months), 1);
  const monthlyRate = annualRate / 100 / 12;
  if (!monthlyRate) return principal / safeMonths;
  return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -safeMonths));
};

const formatDuration = (months) => {
  const roundedMonths = Math.ceil(months);
  const years = Math.floor(roundedMonths / 12);
  const extraMonths = roundedMonths % 12;
  const yearLabel = years === 1 ? "year" : "years";
  const monthLabel = extraMonths === 1 ? "month" : "months";
  if (!years) return `${extraMonths} ${monthLabel}`;
  if (!extraMonths) return `${years} ${yearLabel}`;
  return `${years} ${yearLabel} and ${extraMonths} ${monthLabel}`;
};

const sdltBands = (buyerType, price) => {
  if (buyerType === "firstTime" && price <= 500000) {
    return [
      [300000, 0],
      [500000, 0.05],
      [Infinity, 0.05]
    ];
  }

  return [
    [125000, 0],
    [250000, 0.02],
    [925000, 0.05],
    [1500000, 0.1],
    [Infinity, 0.12]
  ];
};

const lbttBands = (buyerType) => {
  if (buyerType === "firstTime") {
    return [
      [175000, 0],
      [250000, 0.02],
      [325000, 0.05],
      [750000, 0.1],
      [Infinity, 0.12]
    ];
  }

  return [
    [145000, 0],
    [250000, 0.02],
    [325000, 0.05],
    [750000, 0.1],
    [Infinity, 0.12]
  ];
};

const companyCarPercentage = (co2, electricRange, fuelType) => {
  let percentage = 37;

  if (co2 <= 0) {
    percentage = 4;
  } else if (co2 <= 50) {
    if (electricRange >= 130) percentage = 4;
    else if (electricRange >= 70) percentage = 7;
    else if (electricRange >= 40) percentage = 10;
    else if (electricRange >= 30) percentage = 14;
    else percentage = 16;
  } else {
    const bands = [
      [54, 17],
      [59, 18],
      [64, 19],
      [69, 20],
      [79, 21],
      [84, 22],
      [89, 23],
      [94, 24],
      [99, 25],
      [104, 26],
      [109, 27],
      [114, 28],
      [119, 29],
      [124, 30],
      [129, 31],
      [134, 32],
      [139, 33],
      [144, 34],
      [149, 35],
      [154, 36],
      [Infinity, 37]
    ];
    percentage = bands.find(([limit]) => co2 <= limit)?.[1] || 37;
  }

  if (fuelType === "diesel" && co2 > 0) {
    percentage += 4;
  }

  return clamp(percentage, 0, 37);
};

const solveMonthlyApr = (netAdvance, monthlyRepayment, months) => {
  const safeMonths = Math.max(Math.round(months), 1);
  if (netAdvance <= 0 || monthlyRepayment <= 0) return null;
  if (monthlyRepayment * safeMonths <= netAdvance) return 0;

  const npv = (rate) => {
    const factor = rate ? (1 - Math.pow(1 + rate, -safeMonths)) / rate : safeMonths;
    return netAdvance - monthlyRepayment * factor;
  };

  let low = 0;
  let high = 1;
  while (npv(high) < 0 && high < 100) high *= 2;

  for (let i = 0; i < 80; i += 1) {
    const mid = (low + high) / 2;
    if (npv(mid) > 0) high = mid;
    else low = mid;
  }

  return (low + high) / 2;
};

qsa("[data-calc]").forEach((tool) => {
  const output = qs("[data-calc-output]", tool);
  const breakdown = qs("[data-calc-breakdown]", tool);
  const inputs = qsa("input, select", tool);
  const type = tool.dataset.calc;

  const readNumber = (name, fallback = 0) => {
    const field = qs(`[name="${name}"]`, tool);
    return safeNumber(field?.value, fallback);
  };

  const readText = (name, fallback = "") => {
    const field = qs(`[name="${name}"]`, tool);
    return field?.value ?? fallback;
  };

  const writeResult = (headline, lines = []) => {
    if (output) output.textContent = headline;
    if (!breakdown) return;
    breakdown.replaceChildren(
      ...lines.map((line) => {
        const item = document.createElement("li");
        item.textContent = line;
        return item;
      })
    );
  };

  const calculate = () => {
    if (type === "vat") {
      const amount = Math.max(readNumber("amount"), 0);
      const rateValue = readText("vatRate") === "custom" ? readNumber("customVatRate", 20) : readNumber("vatRate", 20);
      const rate = Math.max(rateValue, 0) / 100;
      const mode = readText("vatMode", "add");
      const net = mode === "extract" ? amount / (1 + rate) : amount;
      const vat = mode === "extract" ? amount - net : amount * rate;
      const gross = net + vat;
      writeResult(`VAT amount: ${money(vat, 2)}`, [`Net amount: ${money(net, 2)}`, `Gross amount: ${money(gross, 2)}`, `VAT rate used: ${percent(rate * 100)}`]);
      return;
    }

    if (type === "payroll") {
      const gross = Math.max(readNumber("annualSalary"), 0);
      const payPeriods = Math.max(readNumber("payPeriods", 12), 1);
      const pension = gross * clamp(readNumber("pensionRate"), 0, 100) / 100;
      const taxablePay = Math.max(gross - pension, 0);
      const allowance = personalAllowance(taxablePay);
      const taxableAfterAllowance = Math.max(taxablePay - allowance, 0);
      const englandBands = [
        [37700, 0.2],
        [125140, 0.4],
        [Infinity, 0.45]
      ];
      const scotlandBands = [
        [3967, 0.19],
        [16956, 0.2],
        [31092, 0.21],
        [62430, 0.42],
        [125140, 0.45],
        [Infinity, 0.48]
      ];
      const tax = bandedTax(taxableAfterAllowance, readText("taxRegion") === "scotland" ? scotlandBands : englandBands);
      const employeeNi = Math.max(Math.min(gross, 50270) - 12570, 0) * 0.08 + Math.max(gross - 50270, 0) * 0.02;
      const studentLoanThresholds = {
        plan1: 26900,
        plan2: 29385,
        plan4: 33795,
        plan5: 25000
      };
      const studentPlan = readText("studentLoanPlan", "none");
      const studentLoan = studentLoanThresholds[studentPlan] ? Math.max(gross - studentLoanThresholds[studentPlan], 0) * 0.09 : 0;
      const postgraduateLoan = readText("postgraduateLoan") === "yes" ? Math.max(gross - 21000, 0) * 0.06 : 0;
      const otherDeductions = Math.max(readNumber("otherMonthlyDeductions"), 0) * 12;
      const netAnnual = Math.max(gross - tax - employeeNi - pension - studentLoan - postgraduateLoan - otherDeductions, 0);
      const periodLabel = payPeriods === 52 ? "weekly" : "monthly";
      writeResult(`Estimated ${periodLabel} net pay: ${money(netAnnual / payPeriods, 2)}`, [
        `Annual net pay: ${money(netAnnual, 2)}`,
        `Income tax: ${money(tax, 2)}`,
        `Employee National Insurance: ${money(employeeNi, 2)}`,
        `Pension deducted: ${money(pension, 2)}`,
        `Student loan deduction: ${money(studentLoan, 2)}`,
        `Postgraduate loan deduction: ${money(postgraduateLoan, 2)}`,
        `Other deductions: ${money(otherDeductions, 2)}`
      ]);
      return;
    }

    if (type === "fuel-cost") {
      const distance = Math.max(readNumber("distance"), 0);
      const trips = Math.max(readNumber("tripsPerMonth"), 0);
      const mpg = Math.max(readNumber("mpg", 1), 0.1);
      const price = Math.max(readNumber("fuelPrice"), 0);
      const litresPerTrip = (distance / mpg) * 4.54609;
      const tripCost = litresPerTrip * (price / 100);
      const monthlyCost = tripCost * trips;
      writeResult(`Estimated monthly fuel cost: ${money(monthlyCost, 2)}`, [
        `Cost per trip: ${money(tripCost, 2)}`,
        `Litres per trip: ${number(litresPerTrip, 1)} litres`,
        `Estimated annual cost: ${money(monthlyCost * 12, 2)}`
      ]);
      return;
    }

    if (type === "cis") {
      const grossPayment = Math.max(readNumber("grossPayment"), 0);
      const materials = Math.max(readNumber("materials"), 0);
      const vatCharged = Math.max(readNumber("vatCharged"), 0);
      const rate = Math.max(readNumber("cisRate"), 0) / 100;
      const labourElement = Math.max(grossPayment - materials, 0);
      const deduction = labourElement * rate;
      const netPayment = grossPayment + vatCharged - deduction;
      writeResult(`CIS deduction: ${money(deduction, 2)}`, [
        `Labour subject to CIS: ${money(labourElement, 2)}`,
        `VAT paid without CIS deduction: ${money(vatCharged, 2)}`,
        `Net payment to subcontractor: ${money(netPayment, 2)}`
      ]);
      return;
    }

    if (type === "startup") {
      const setupCosts = Math.max(readNumber("setupCosts"), 0);
      const monthlyFixedCosts = Math.max(readNumber("monthlyFixedCosts"), 0);
      const monthlyPayrollCosts = Math.max(readNumber("monthlyPayrollCosts"), 0);
      const monthlyRevenue = Math.max(readNumber("monthlyRevenue"), 0);
      const runwayMonths = Math.max(readNumber("runwayMonths", 1), 1);
      const contingencyRate = Math.max(readNumber("contingencyRate"), 0) / 100;
      const monthlyCosts = monthlyFixedCosts + monthlyPayrollCosts;
      const baseReserve = setupCosts + monthlyCosts * runwayMonths;
      const reserve = baseReserve * (1 + contingencyRate);
      const monthlySurplus = monthlyRevenue - monthlyCosts;
      writeResult(`Suggested launch reserve: ${money(reserve, 2)}`, [
        `Monthly operating cost: ${money(monthlyCosts, 2)}`,
        `Monthly surplus or shortfall: ${money(monthlySurplus, 2)}`,
        `Reserve before contingency: ${money(baseReserve, 2)}`
      ]);
      return;
    }

    if (type === "savings") {
      const openingBalance = Math.max(readNumber("openingBalance"), 0);
      const monthlyContribution = Math.max(readNumber("monthlyContribution"), 0);
      const annualReturn = readNumber("annualReturn") / 100;
      const months = Math.max(Math.round(readNumber("years") * 12), 0);
      const monthlyRate = annualReturn / 12;
      let balance = openingBalance;
      for (let i = 0; i < months; i += 1) {
        balance *= 1 + monthlyRate;
        balance += monthlyContribution;
      }
      const contributed = openingBalance + monthlyContribution * months;
      writeResult(`Projected value: ${money(balance, 2)}`, [
        `Total paid in: ${money(contributed, 2)}`,
        `Estimated growth: ${money(balance - contributed, 2)}`,
        `Projection length: ${formatDuration(months)}`
      ]);
      return;
    }

    if (type === "millionaire") {
      const openingBalance = Math.max(readNumber("openingBalance"), 0);
      const monthlyContribution = Math.max(readNumber("monthlyContribution"), 0);
      const annualReturn = readNumber("annualReturn") / 100;
      const target = Math.max(readNumber("target", 1000000), 1);
      const monthlyRate = annualReturn / 12;
      let balance = openingBalance;
      let months = 0;
      while (balance < target && months < 1200) {
        balance *= 1 + monthlyRate;
        balance += monthlyContribution;
        months += 1;
        if (monthlyContribution <= 0 && monthlyRate <= 0) break;
      }

      if (balance < target) {
        writeResult("Target is not reached with these assumptions.", [`Current projection after 100 years: ${money(balance, 2)}`, "Increase contributions, starting balance or expected return to reach the target."]);
        return;
      }

      const contributed = openingBalance + monthlyContribution * months;
      writeResult(`Time to target: ${formatDuration(months)}`, [
        `Projected balance: ${money(balance, 2)}`,
        `Total paid in: ${money(contributed, 2)}`,
        `Estimated growth: ${money(balance - contributed, 2)}`
      ]);
      return;
    }

    if (type === "apr") {
      const cashReceived = Math.max(readNumber("cashReceived"), 0);
      const upfrontFees = Math.max(readNumber("upfrontFees"), 0);
      const monthlyRepayment = Math.max(readNumber("monthlyRepayment"), 0);
      const months = Math.max(Math.round(readNumber("months", 1)), 1);
      const netAdvance = cashReceived - upfrontFees;
      const monthlyRate = solveMonthlyApr(netAdvance, monthlyRepayment, months);

      if (monthlyRate === null || netAdvance <= 0) {
        writeResult("Enter a positive cash amount after fees.", ["The cash received must be higher than any upfront fees."]);
        return;
      }

      const totalRepaid = monthlyRepayment * months;
      const apr = monthlyRate ? (Math.pow(1 + monthlyRate, 12) - 1) * 100 : 0;
      writeResult(`Estimated APR: ${percent(apr, 2)}`, [
        `Net cash after fees: ${money(netAdvance, 2)}`,
        `Total repaid: ${money(totalRepaid, 2)}`,
        `Total cost of credit: ${money(totalRepaid - netAdvance, 2)}`
      ]);
      return;
    }

    if (type === "loan") {
      const loanAmount = Math.max(readNumber("loanAmount"), 0);
      const fee = Math.max(readNumber("arrangementFee"), 0);
      const principal = loanAmount + fee;
      const annualRate = Math.max(readNumber("annualRate"), 0);
      const months = Math.max(Math.round(readNumber("months", 1)), 1);
      const payment = amortisedPayment(principal, annualRate, months);
      const totalRepaid = payment * months;
      writeResult(`Monthly repayment: ${money(payment, 2)}`, [
        `Amount financed: ${money(principal, 2)}`,
        `Total repaid: ${money(totalRepaid, 2)}`,
        `Total interest and fees: ${money(totalRepaid - loanAmount, 2)}`
      ]);
      return;
    }

    if (type === "gross") {
      const revenue = Math.max(readNumber("salesRevenue"), 0);
      const directCosts = Math.max(readNumber("directCosts"), 0);
      const profit = revenue - directCosts;
      const margin = revenue ? (profit / revenue) * 100 : 0;
      const markup = directCosts ? (profit / directCosts) * 100 : 0;
      writeResult(`Gross profit: ${money(profit, 2)}`, [`Gross margin: ${percent(margin)}`, `Mark-up on direct costs: ${percent(markup)}`]);
      return;
    }

    if (type === "dividend") {
      const otherIncome = Math.max(readNumber("otherIncome"), 0);
      const dividends = Math.max(readNumber("dividends"), 0);
      const allowance = personalAllowance(otherIncome + dividends);
      const otherTaxable = Math.max(otherIncome - allowance, 0);
      const remainingPersonalAllowance = Math.max(allowance - otherIncome, 0);
      const dividendsAfterPersonalAllowance = Math.max(dividends - remainingPersonalAllowance, 0);
      const dividendAllowance = Math.min(500, dividendsAfterPersonalAllowance);
      let taxableDividends = Math.max(dividendsAfterPersonalAllowance - dividendAllowance, 0);
      let bandPosition = otherTaxable + dividendAllowance;

      const basicDividend = Math.min(taxableDividends, Math.max(37700 - bandPosition, 0));
      taxableDividends -= basicDividend;
      bandPosition += basicDividend;
      const higherDividend = Math.min(taxableDividends, Math.max(125140 - bandPosition, 0));
      taxableDividends -= higherDividend;
      const additionalDividend = taxableDividends;

      const tax = basicDividend * 0.1075 + higherDividend * 0.3575 + additionalDividend * 0.3935;
      writeResult(`Estimated dividend tax: ${money(tax, 2)}`, [
        `Dividend allowance used: ${money(dividendAllowance, 2)}`,
        `Basic-rate dividend portion: ${money(basicDividend, 2)}`,
        `Higher-rate dividend portion: ${money(higherDividend, 2)}`,
        `Additional-rate dividend portion: ${money(additionalDividend, 2)}`
      ]);
      return;
    }

    if (type === "mortgage") {
      const propertyPrice = Math.max(readNumber("propertyPrice"), 0);
      const deposit = clamp(readNumber("deposit"), 0, propertyPrice);
      const loan = propertyPrice - deposit;
      const annualRate = Math.max(readNumber("annualRate"), 0);
      const months = Math.max(Math.round(readNumber("years", 25) * 12), 1);
      const payment = amortisedPayment(loan, annualRate, months);
      const totalRepaid = payment * months;
      const ltv = propertyPrice ? (loan / propertyPrice) * 100 : 0;
      writeResult(`Monthly mortgage repayment: ${money(payment, 2)}`, [
        `Mortgage amount: ${money(loan, 2)}`,
        `Loan to value: ${percent(ltv)}`,
        `Total interest over term: ${money(totalRepaid - loan, 2)}`
      ]);
      return;
    }

    if (type === "more-profit") {
      const revenue = Math.max(readNumber("annualRevenue"), 0);
      const currentMargin = clamp(readNumber("grossMargin"), 0, 100) / 100;
      const overheads = Math.max(readNumber("overheads"), 0);
      const revenueUplift = readNumber("revenueUplift") / 100;
      const marginUplift = readNumber("marginUplift") / 100;
      const currentProfit = revenue * currentMargin - overheads;
      const improvedRevenue = Math.max(revenue * (1 + revenueUplift), 0);
      const improvedMargin = clamp((currentMargin + marginUplift) * 100, 0, 100) / 100;
      const improvedProfit = improvedRevenue * improvedMargin - overheads;
      writeResult(`Additional annual profit: ${money(improvedProfit - currentProfit, 2)}`, [
        `Current profit before tax: ${money(currentProfit, 2)}`,
        `Improved profit before tax: ${money(improvedProfit, 2)}`,
        `Improved gross margin: ${percent(improvedMargin * 100)}`
      ]);
      return;
    }

    if (type === "lbtt") {
      const price = Math.max(readNumber("propertyPrice"), 0);
      const buyerType = readText("buyerType", "standard");
      const baseTax = bandedTax(price, lbttBands(buyerType));
      const ads = buyerType === "additional" && price >= 40000 ? price * 0.08 : 0;
      const total = baseTax + ads;
      writeResult(`Estimated LBTT: ${money(total, 2)}`, [
        `Standard LBTT: ${money(baseTax, 2)}`,
        `Additional Dwelling Supplement: ${money(ads, 2)}`,
        `Effective tax rate: ${percent(price ? (total / price) * 100 : 0)}`
      ]);
      return;
    }

    if (type === "company-car") {
      const listPrice = Math.max(readNumber("listPrice"), 0);
      const co2 = Math.max(readNumber("co2"), 0);
      const electricRange = Math.max(readNumber("electricRange"), 0);
      const benefitPercentage = companyCarPercentage(co2, electricRange, readText("fuelType"));
      const carBenefit = listPrice * benefitPercentage / 100;
      const fuelBenefit = readText("privateFuel") === "yes" ? 29200 * benefitPercentage / 100 : 0;
      const taxRate = Math.max(readNumber("taxRate"), 0) / 100;
      const annualTax = (carBenefit + fuelBenefit) * taxRate;
      writeResult(`Estimated annual tax: ${money(annualTax, 2)}`, [
        `Benefit percentage: ${percent(benefitPercentage)}`,
        `Car benefit: ${money(carBenefit, 2)}`,
        `Fuel benefit: ${money(fuelBenefit, 2)}`,
        `Estimated monthly tax: ${money(annualTax / 12, 2)}`
      ]);
      return;
    }

    if (type === "sdlt") {
      const price = Math.max(readNumber("propertyPrice"), 0);
      const buyerType = readText("buyerType", "standard");
      const baseTax = bandedTax(price, sdltBands(buyerType, price));
      const additionalSurcharge = buyerType === "additional" && price >= 40000 ? price * 0.05 : 0;
      const nonResidentSurcharge = readText("nonResident") === "yes" ? price * 0.02 : 0;
      const total = baseTax + additionalSurcharge + nonResidentSurcharge;
      writeResult(`Estimated SDLT: ${money(total, 2)}`, [
        `Main SDLT charge: ${money(baseTax, 2)}`,
        `Additional dwelling surcharge: ${money(additionalSurcharge, 2)}`,
        `Non-resident surcharge: ${money(nonResidentSurcharge, 2)}`,
        `Effective tax rate: ${percent(price ? (total / price) * 100 : 0)}`
      ]);
      return;
    }
  };

  inputs.forEach((input) => {
    input.addEventListener("input", calculate);
    input.addEventListener("change", calculate);
  });
  calculate();
});
