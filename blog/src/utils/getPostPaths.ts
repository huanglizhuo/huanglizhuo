import { getRelativeLocaleUrl } from "astro:i18n";
import { BLOG_PATH } from "@/content.config";
import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/i18n";
import { slugifyStr } from "./slugify";
import config from "@/config";

function getPostDirSegments(filePath: string | undefined): string[] {
  return (
    filePath
      ?.replace(BLOG_PATH, "")
      .split("/")
      .filter(path => path !== "")
      .filter(path => !path.startsWith("_"))
      .slice(0, -1) ?? []
  );
}

/**
 * Returns the locale of a post based on its directory:
 * `posts/zh/foo.md` → "zh". Posts outside a locale directory
 * (e.g. flat `posts/foo.md`) default to the default locale.
 */
export function getPostLocale(filePath: string | undefined): Locale {
  const firstSegment = getPostDirSegments(filePath)[0];
  return (LOCALES as readonly string[]).includes(firstSegment ?? "")
    ? (firstSegment as Locale)
    : DEFAULT_LOCALE;
}

function getPostPathSegments(filePath: string | undefined): string[] {
  const segments = getPostDirSegments(filePath);
  // A leading locale directory (e.g. `zh/`) is routing info, not part of the
  // URL slug — the locale prefix is applied separately via `getRelativeLocaleUrl`.
  const contentSegments = (LOCALES as readonly string[]).includes(
    segments[0] ?? ""
  )
    ? segments.slice(1)
    : segments;
  return contentSegments.map(segment => slugifyStr(segment));
}

function getIdSlug(id: string): string {
  const postId = id.split("/");
  return postId.length > 0 ? String(postId[postId.length - 1]) : id;
}

function getPostSlugPath(id: string, filePath: string | undefined): string {
  const pathSegments = getPostPathSegments(filePath);
  const slug = getIdSlug(id);
  return pathSegments.length > 0
    ? [...pathSegments, slug].join("/")
    : String(slug);
}

/**
 * Returns the slug-only path for use as a route param in `getStaticPaths`.
 * No base prefix, no locale — Astro handles those at a higher level.
 * e.g. `/examples/my-post`
 */
export function getPostSlug(id: string, filePath: string | undefined): string {
  return `/${getPostSlugPath(id, filePath)}`;
}

/**
 * Returns a fully navigable URL for use in `<a href>` and RSS links.
 * Applies both locale routing and the configured Astro base via
 * `getRelativeLocaleUrl`.
 * e.g. `/posts/my-post` or `/en/posts/my-post`
 */
export function getPostUrl(
  id: string,
  filePath: string | undefined,
  locale: string | undefined = config.site.lang
): string {
  return getRelativeLocaleUrl(locale, `posts/${getPostSlugPath(id, filePath)}`);
}
