#!/usr/bin/env python3
"""
inject_schema.py
================
Adds JSON-LD structured data (schema.org) to every HTML page in the
Crestfield Advisory site.

Usage (from the root of the site folder):
    python inject_schema.py

What it does:
- Homepage          → LocalBusiness + AccountingService + multiple offices
- Service pages     → Service schema (type mapped by page slug)
- Location pages    → AccountingService + specific address per office
- Blog/article pages→ Article schema
- Calculator pages  → WebApplication schema
- All other pages   → WebPage schema (minimum viable)

It will:
1. Skip pages that already have a JSON-LD <script> tag.
2. Insert the <script type="application/ld+json"> block just before </head>.
3. Print a summary of what was processed.

BEFORE RUNNING:
    Replace every occurrence of "crestfield.example" with your real domain.
    Update the address, telephone, and social profile URLs below.
"""

import json
import os
import re
from pathlib import Path

# ─── CONFIGURATION ────────────────────────────────────────────────────────────
# Update these values before running on a real client site.

DOMAIN = "https://crestfield.example"   # e.g. "https://www.lewisbrownlee.co.uk"
SITE_NAME = "Crestfield Advisory"
LOGO_URL = f"{DOMAIN}/assets/favicon.svg"
CONTACT_EMAIL = "hello@crestfield.example"

OFFICES = [
    {
        "name": f"{SITE_NAME} — Chichester",
        "url": f"{DOMAIN}/chichester-accountants/",
        "telephone": "+441243000000",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Demo Barns, Birdham Road",
            "addressLocality": "Chichester",
            "postalCode": "PO20 0AA",
            "addressCountry": "GB",
        },
    },
    {
        "name": f"{SITE_NAME} — London",
        "url": f"{DOMAIN}/london-accountants/",
        "telephone": "+442000000000",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Demo House, Bell Yard",
            "addressLocality": "London",
            "postalCode": "WC2A 0AA",
            "addressCountry": "GB",
        },
    },
    {
        "name": f"{SITE_NAME} — Midhurst",
        "url": f"{DOMAIN}/midhurst-accountants/",
        "telephone": "+441730000000",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Demo Grange, High Street",
            "addressLocality": "Midhurst",
            "postalCode": "GU29 0AA",
            "addressCountry": "GB",
        },
    },
    {
        "name": f"{SITE_NAME} — Whiteley",
        "url": f"{DOMAIN}/whiteley-office/",
        "telephone": "+441489000000",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Demo Suite 19, Parkway",
            "addressLocality": "Whiteley",
            "postalCode": "PO15 0AA",
            "addressCountry": "GB",
        },
    },
]

# Map slug patterns to service names and descriptions
SERVICE_MAP = {
    "audit":                        ("Audit & Assurance", "Independent, risk-based audit and assurance services."),
    "statutory-audits":             ("Statutory Audits", "Statutory audit services for companies required by law."),
    "accounts":                     ("Annual Accounts", "Year-end accounts prepared and filed accurately and on time."),
    "bookkeeping":                  ("Bookkeeping & Management Accounts", "Cloud bookkeeping and monthly management reporting."),
    "payroll":                      ("Payroll Services", "Accurate, HMRC-compliant payroll for businesses of all sizes."),
    "personal-tax":                 ("Personal Tax", "Self-assessment, capital gains and inheritance tax advice."),
    "business-tax":                 ("Business Tax", "Corporation tax planning and compliance for owner-managed businesses."),
    "capital-gains-tax":            ("Capital Gains Tax Advice", "Expert CGT planning for property, shares and business disposals."),
    "inheritance-tax":              ("Inheritance Tax Planning", "Estate planning to protect wealth for future generations."),
    "vat-advice":                   ("VAT Advice", "VAT registration, returns, and Making Tax Digital compliance."),
    "making-tax-digital":           ("Making Tax Digital", "MTD setup and compliance for income tax and VAT."),
    "taxinvestigation":             ("Tax Investigation Service", "Professional representation during HMRC enquiries."),
    "company-secretarial":          ("Company Secretarial", "Companies House filings and statutory compliance."),
    "corporate-finance":            ("Corporate Finance", "Fundraising, acquisitions, disposals and share restructuring."),
    "virtual-finance-director":     ("Virtual Finance Director", "Board-level finance leadership without a full-time hire."),
    "virtual-financial-controller": ("Virtual Financial Controller", "Month-end discipline, management accounts and financial controls."),
    "business-advisory":            ("Business Advisory", "Commercial advice that links strategy, profit and cash flow."),
    "profit-improvement":           ("Profit Improvement", "Margin analysis, pricing strategy and operational efficiency reviews."),
    "strategic-business-planning":  ("Strategic Business Planning", "Forecasting and planning support for ambitious owner-managed businesses."),
    "probate":                      ("Probate Services", "Estate administration support including valuations and tax returns."),
    "charities":                    ("Charities Independent Examination & Audit", "Specialist audit and independent examination for UK charities."),
    "agricultural":                 ("Agricultural & Horticultural Accounting", "Specialist accounting for farms and horticultural businesses."),
    "solicitors-accounts":          ("Solicitors Accounts Rules Audits", "SRA-compliant audits for solicitors' client accounts."),
    "sra-solicitors":               ("SRA Solicitors Accounts Rules Examinations", "Compliance examinations for legal practices."),
    "tailored-assurance":           ("Tailored Assurance Services", "Bespoke assurance engagements for specific reporting needs."),
    "xero":                         ("Xero Cloud Accounting", "Xero setup, training, add-on consultancy and ongoing support."),
    "quickbooks":                   ("QuickBooks Accounting", "QuickBooks setup, migration and ongoing support."),
}

LOCATION_MAP = {
    "chichester-accountants": 0,
    "london-accountants":     1,
    "midhurst-accountants":   2,
    "whiteley-office":        3,
}

NOINDEX_SLUGS = {
    "mhmm-menu-layout-loader",
    "thank-you",
    "logins",
    "dext-login",
    "xero-login",
    "quickbooks-online-login",
    "client-portal",
    "newsletter-sign-up-completion",
    "job-application-form",
    "new-client-information-request",
}

# ─── SCHEMA BUILDERS ──────────────────────────────────────────────────────────

def build_organisation():
    """Reusable @Organisation block referenced from other schemas."""
    return {
        "@type": ["AccountingService", "LocalBusiness"],
        "@id": f"{DOMAIN}/#organisation",
        "name": SITE_NAME,
        "url": DOMAIN,
        "logo": LOGO_URL,
        "email": CONTACT_EMAIL,
        "sameAs": [
            "https://www.linkedin.com/company/crestfield-advisory",
            "https://x.com/crestfieldadvisory",
        ],
        "address": OFFICES[0]["address"],   # primary (Chichester)
        "telephone": OFFICES[0]["telephone"],
        "areaServed": ["Chichester", "London", "Midhurst", "Whiteley", "Hampshire", "West Sussex"],
    }


def build_homepage_schema():
    departments = []
    for o in OFFICES:
        departments.append({
            "@type": ["AccountingService", "LocalBusiness"],
            "name": o["name"],
            "url": o["url"],
            "telephone": o["telephone"],
            "address": o["address"],
            "parentOrganization": {"@id": f"{DOMAIN}/#organisation"},
        })

    return [
        {
            "@context": "https://schema.org",
            **build_organisation(),
            "department": departments,
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": DOMAIN,
            "name": SITE_NAME,
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": f"{DOMAIN}/?s={{search_term_string}}",
                },
                "query-input": "required name=search_term_string",
            },
        },
    ]


def build_service_schema(page_url, service_name, service_description):
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service_name,
        "description": service_description,
        "url": page_url,
        "provider": {"@id": f"{DOMAIN}/#organisation"},
        "areaServed": "GB",
        "serviceType": "AccountingService",
    }


def build_location_schema(office):
    return {
        "@context": "https://schema.org",
        "@type": ["AccountingService", "LocalBusiness"],
        "name": office["name"],
        "url": office["url"],
        "telephone": office["telephone"],
        "email": CONTACT_EMAIL,
        "address": office["address"],
        "parentOrganization": {"@id": f"{DOMAIN}/#organisation"},
        "logo": LOGO_URL,
        "areaServed": office["address"]["addressLocality"],
    }


def build_webpage_schema(page_url, title, description):
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title,
        "description": description,
        "url": page_url,
        "isPartOf": {"@id": f"{DOMAIN}/#organisation"},
    }


def build_article_schema(page_url, title, description):
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title.replace(f" | {SITE_NAME}", "").strip(),
        "description": description,
        "url": page_url,
        "publisher": {"@id": f"{DOMAIN}/#organisation"},
        "author": {"@id": f"{DOMAIN}/#organisation"},
    }


def build_calculator_schema(page_url, title):
    clean_title = title.replace(f" | {SITE_NAME}", "").strip()
    return {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": clean_title,
        "url": page_url,
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "GBP",
        },
        "provider": {"@id": f"{DOMAIN}/#organisation"},
    }


# ─── HELPERS ──────────────────────────────────────────────────────────────────

def get_canonical(html):
    m = re.search(r'<link rel="canonical" href="([^"]+)"', html)
    return m.group(1) if m else None


def get_title(html):
    m = re.search(r"<title>(.*?)</title>", html, re.DOTALL)
    if not m:
        return ""
    return re.sub(r"&amp;", "&", m.group(1).strip())


def get_description(html):
    m = re.search(r'<meta name="description" content="([^"]*)"', html)
    return m.group(1) if m else ""


def has_existing_jsonld(html):
    return 'application/ld+json' in html


def slug_from_url(url):
    """Extract the first meaningful path segment from a canonical URL."""
    path = url.replace(DOMAIN, "").strip("/")
    return path.split("/")[0] if path else ""


def classify_page(canonical_url, slug):
    if canonical_url == f"{DOMAIN}/" or slug == "":
        return "homepage"
    if slug in LOCATION_MAP:
        return "location"
    if slug in NOINDEX_SLUGS or slug.endswith("-blog-category"):
        return "skip"
    if "calculators" in canonical_url:
        return "calculator"
    if "/blog/" in canonical_url and slug != "blog":
        return "article"
    # Match service pages by slug prefix
    for key in SERVICE_MAP:
        if key in slug:
            return "service"
    return "webpage"


def pick_service(slug):
    for key, val in SERVICE_MAP.items():
        if key in slug:
            return val
    return None


def make_script_tag(schema_obj):
    serialised = json.dumps(schema_obj, ensure_ascii=False, indent=2)
    return f'\n    <script type="application/ld+json">\n{serialised}\n    </script>'


def inject_schema(html, schema_obj):
    """Insert JSON-LD block just before </head>."""
    script_tag = make_script_tag(schema_obj)
    return html.replace("</head>", f"{script_tag}\n  </head>", 1)


def inject_schema_list(html, schema_list):
    """Insert multiple JSON-LD blocks (list) just before </head>."""
    combined = "\n".join(make_script_tag(s) for s in schema_list)
    return html.replace("</head>", f"{combined}\n  </head>", 1)


# ─── MAIN ─────────────────────────────────────────────────────────────────────

def main():
    site_root = Path(__file__).parent
    html_files = list(site_root.rglob("index.html"))

    stats = {"processed": 0, "skipped_noindex": 0, "already_has_schema": 0, "errors": 0}
    type_counts = {}

    for html_path in sorted(html_files):
        try:
            html = html_path.read_text(encoding="utf-8")
        except Exception as e:
            print(f"  ERROR reading {html_path}: {e}")
            stats["errors"] += 1
            continue

        if has_existing_jsonld(html):
            stats["already_has_schema"] += 1
            continue

        canonical = get_canonical(html)
        if not canonical:
            print(f"  SKIP (no canonical): {html_path}")
            continue

        title = get_title(html)
        description = get_description(html)
        slug = slug_from_url(canonical)
        page_type = classify_page(canonical, slug)

        if page_type == "skip":
            stats["skipped_noindex"] += 1
            continue

        # Build the appropriate schema
        if page_type == "homepage":
            new_html = inject_schema_list(html, build_homepage_schema())

        elif page_type == "location":
            office_index = LOCATION_MAP[slug]
            schema = build_location_schema(OFFICES[office_index])
            new_html = inject_schema(html, schema)

        elif page_type == "service":
            service = pick_service(slug)
            if service:
                name, desc = service
            else:
                name = title.replace(f" | {SITE_NAME}", "").strip()
                desc = description
            schema = build_service_schema(canonical, name, desc)
            new_html = inject_schema(html, schema)

        elif page_type == "calculator":
            schema = build_calculator_schema(canonical, title)
            new_html = inject_schema(html, schema)

        elif page_type == "article":
            schema = build_article_schema(canonical, title, description)
            new_html = inject_schema(html, schema)

        else:  # webpage (fallback)
            schema = build_webpage_schema(canonical, title, description)
            new_html = inject_schema(html, schema)

        html_path.write_text(new_html, encoding="utf-8")
        stats["processed"] += 1
        type_counts[page_type] = type_counts.get(page_type, 0) + 1
        print(f"  [{page_type:12s}] {canonical}")

    print("\n" + "=" * 60)
    print("DONE")
    print(f"  Pages updated:       {stats['processed']}")
    print(f"  Already had schema:  {stats['already_has_schema']}")
    print(f"  Skipped (noindex):   {stats['skipped_noindex']}")
    print(f"  Errors:              {stats['errors']}")
    print("\nBreakdown by type:")
    for k, v in sorted(type_counts.items()):
        print(f"  {k:16s}: {v}")
    print("=" * 60)
    print("\nNext steps:")
    print("  1. Replace 'crestfield.example' in this script with the real domain.")
    print("  2. Update OFFICES addresses, phone numbers and email.")
    print("  3. Copy sitemap.xml and robots.txt to the site root.")
    print("  4. Submit sitemap in Google Search Console.")
    print("  5. Validate schema with: https://validator.schema.org/")


if __name__ == "__main__":
    main()
