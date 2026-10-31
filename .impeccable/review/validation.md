# Validation

- Production build: passed, 29 routes; Astro check: zero errors/warnings, one pre-existing unused-variable hint in project detail route.
- Changed-file ESLint: passed.
- Whole-project ESLint: existing no-console error in blog/scripts/make-og.mjs:10 (untouched).
- Impeccable detector: [] (no findings).
- Browser: 1440 desktop EN light and 390 mobile ZH dark rendered; mobile menu opens/closes, theme changes, reduced-motion set, all five images loaded, no horizontal overflow. 768 and 1280 measured during first pass; navigation breakpoint moved to 1024 to protect intermediate widths.
- Final 768px project-detail page: open navigation checked, no horizontal overflow.
- Changed-file Prettier: passed.
- Home internal links: 15 checked, HTTP 200. Pagefind search EchoPod: one matching result.
- Text contrast light: body 13.48, accent 6.30, secondary 5.44. Dark: body 15.69, accent 9.20, secondary 9.36.
- Existing shader bundle warning over 500kB remains; home/projects no longer create shaders (zero data-shader nodes).
- No new or modified raster assets. All five screenshot images are existing repository assets, imported by ProjectStage. Source provenance: blog/src/assets/projects/{echopod,octocounts,fusebar,ketsuin,qwenasr}.png, pre-existing project screenshots. This redesign changes their layout only.
