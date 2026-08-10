---
title: OctoCounts
tagline: A free SLOC counter for public GitHub repositories, as a web app and a browser extension.
url: https://octocounts.com/
domain: octocounts.com
order: 1
facts:
  - label: Type
    value: Web app + browser extension (Chrome / Edge / Firefox)
  - label: Price
    value: Free
  - label: Backend
    value: Rust (Axum + Tokio)
  - label: Counting engine
    value: tokei, across 200+ languages
  - label: Caching
    value: Reports cached by commit SHA — repeat queries are instant
  - label: Export
    value: JSON / plain text / PNG badge
faq:
  - question: Why not just use the language bar on GitHub?
    answer: GitHub shows language percentage bars but not actual line counts. OctoCounts fills that gap with real SLOC numbers per language.
  - question: Do I have to re-run the count for every visit?
    answer: No. Reports are cached by commit SHA, so repeat queries for the same commit return instantly.
---

GitHub shows language bars but not actual line counts — OctoCounts fills that gap.

## How it works

1. Paste a public GitHub repository URL.
2. The Rust backend (Axum + Tokio) downloads the archive tarball.
3. It runs tokei across 200+ languages to count lines of code.
4. The report is cached by commit SHA, so repeat queries are instant.

## Browser extension

The Chrome / Edge / Firefox extension adds a SLOC card directly to GitHub repository sidebars, with JSON, plain-text, and PNG-badge export.
