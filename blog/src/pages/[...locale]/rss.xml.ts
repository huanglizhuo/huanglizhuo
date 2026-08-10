import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPostUrl, getPostLocale } from "@/utils/getPostPaths";
import { LOCALES, DEFAULT_LOCALE } from "@/i18n";
import config from "@/config";

export function getStaticPaths() {
  return LOCALES.map(locale => ({
    params: { locale: locale === DEFAULT_LOCALE ? undefined : locale },
  }));
}

export async function GET({
  params,
}: {
  params: { locale?: string };
}) {
  const locale = params.locale ?? DEFAULT_LOCALE;
  const posts = await getCollection("posts");
  const sortedPosts = getSortedPosts(
    posts.filter(post => getPostLocale(post.filePath) === locale)
  );

  return rss({
    title: config.site.title,
    description: config.site.description,
    site: new URL(getRelativeLocaleUrl(locale, ""), config.site.url).href,
    items: sortedPosts.map(({ data, id, filePath }) => ({
      link: getPostUrl(id, filePath, locale),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
  });
}
