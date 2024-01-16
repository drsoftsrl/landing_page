import React from "react";
import Head from "next/head";
import { BASE_SITE_URL } from "@/utils/constants";
import { SITE_NAME } from "@/projectSettings/website";
import { usePathname } from "next/navigation";

const siteName = ` | ${SITE_NAME}`;

function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }

  let words = str.split(" ");

  while (words.join(" ").length > maxLength) {
    words.pop();
  }

  return words.join(" ");
}

const Seo = ({ seo }) => {
  if (seo.title && seo.title.length <= 60 - siteName.length) {
    seo.title += siteName;
  } else if (seo.title.length > 60) {
    seo.title = truncateString(seo.title, 60);
  }

  if (seo.description && seo.description.length <= 158 - siteName.length) {
    seo.description += siteName;
  } else if (seo.description.length > 158) {
    seo.description = truncateString(seo.description, 158);
  }

  const fullSeo = {
    ...seo,
    metaTitle: seo.title || "",
    metaDescription: seo.description || "",
    metaKeywords: seo.keywords || "",
    canonical: BASE_SITE_URL + usePathname()
  };

  return (
    <Head>
      <title>{fullSeo.metaTitle}</title>
      <meta property="og:title" content={fullSeo.metaTitle} />
      <meta name="twitter:title" content={fullSeo.metaTitle} />

      <link rel="canonical" href={fullSeo.canonical} />

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={fullSeo.metaKeywords} />

      <meta name="description" content={fullSeo.metaDescription} />
      <meta property="og:description" content={fullSeo.metaDescription} />
      <meta name="twitter:description" content={fullSeo.metaDescription} />

      <meta name="og:url" content={fullSeo.canonical} />
    </Head>
  );
};

export default Seo;
