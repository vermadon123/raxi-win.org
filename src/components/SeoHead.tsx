import { Helmet } from "react-helmet-async";

const SITE = "https://raxi-win.org";
const OG_IMAGE = `${SITE}/assets/raxi-win-share-v2.png`;

type SeoHeadProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  noindex?: boolean;
};

/** Per-route canonical + OG so Google does not treat every URL as homepage. */
export function SeoHead({ title, description, path, keywords, noindex }: SeoHeadProps) {
  const canonical = path === "/" ? `${SITE}/` : `${SITE}${path.startsWith("/") ? path : `/${path}`}`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content="Raxi Win" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
}
