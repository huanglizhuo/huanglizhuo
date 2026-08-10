import type { UIStrings } from "./types";

export { tplStr } from "./format";

export const LOCALES = ["en", "zh"] as const;
export const DEFAULT_LOCALE = "en";
export type Locale = (typeof LOCALES)[number];

const modules = import.meta.glob<{ default: UIStrings }>("./lang/*.ts", {
  eager: true,
});

const translations: Record<string, UIStrings> = {};
for (const [path, mod] of Object.entries(modules)) {
  const locale = path.slice("./lang/".length, -".ts".length);
  translations[locale] = mod.default;
}

/** Returns UI strings for the given locale, falling back to English. */
export function useTranslations(locale: string = "en"): UIStrings {
  return translations[locale] ?? translations["en"];
}

/**
 * Static paths for `[...locale]` routes: one entry per locale, with the
 * default locale mapped to `undefined` so its URLs stay unprefixed.
 */
export function getLocaleStaticPaths() {
  return LOCALES.map(locale => ({
    params: { locale: locale === DEFAULT_LOCALE ? undefined : locale },
  }));
}
